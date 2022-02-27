import { createSlice } from "@reduxjs/toolkit";
var randomString = require("randomstring")
async function loadDataFromDB(props) {
  const response = await fetch(
    "https://react-api-test-8bcb9-default-rtdb.europe-west1.firebasedatabase.app/quotes.json"
  );

  const data = await response.json();
  if (data != null ||undefined ) {
    let dataArray = Object.values(data);
    return dataArray;
  } else{
      return null
  }
  
}
async function postDataToDB(props) {
  const response = await fetch(
    "https://react-api-test-8bcb9-default-rtdb.europe-west1.firebasedatabase.app/quotes.json",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(props),
    }
  );
}
const initialState = {
  quotes: [{ id: 1, author: "Ondřej Zaplatílek", text: "Ahoj" }],
  count: 1,
};
const quoteSlice = createSlice({
  name: "sliceForQuote",
  initialState: initialState,
  reducers: {
    add(state, action) {
      return state;
    },
    delete(state) {
      return state;
    },
    set(state, action) {
      state.quotes = action.payload;
    },
  },
});

export default quoteSlice.reducer;
export const quoteActions = quoteSlice.actions;
export const loadDBData = (param) => (dispatch) => {
  var nullState = [{ id: 1, author: "Try fetch again", text: "Fetch failed" }];
  var fetched = loadDataFromDB();
  fetched.then((result) => {
   if (result !== null) {
        dispatch(quoteSlice.actions.set(result));
   } else{
    dispatch(quoteSlice.actions.set(nullState));
   }
   
  });
};
export const postDB = (params) => (dispatch) => {
    console.log(params);
    params.id = randomString.generate(12)
    postDataToDB(params).then(()=> {
        dispatch(loadDBData())
    })
    
}
