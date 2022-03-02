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
    "https://react-api-test-8bcb9-default-rtdb.europe-west1.firebasedatabase.app/quotes/" + props.id + ".json",
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(props),
    }
  );
}
async function postCommentsToDB(props) {
  const responseGet = await fetch(
    "https://react-api-test-8bcb9-default-rtdb.europe-west1.firebasedatabase.app/quotes/" + props.path + ".json",
    {
      method: "GET",
    }
  );
  let data = await responseGet.json();
  if (data.comments) {
    data.comments = [...data.comments, props.comment]
  } else{
    data.comments = [props.comment]
  }
  const responsePost = await fetch(
    "https://react-api-test-8bcb9-default-rtdb.europe-west1.firebasedatabase.app/quotes/" + props.path + ".json",
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
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
    sortByCharAsc(state){
      function compare( a, b ) {
        if ( a.author< b.author){
          return -1;
        }
        if ( a.author > b.author ){
          return 1;
        }
        return 0;
      }
      
     
      state.quotes = state.quotes.sort(compare);
    },
    sortByCharDesc(state){
      function compare( a, b ) {
        if ( a.author< b.author){
          return -1;
        }
        if ( a.author > b.author ){
          return 1;
        }
        return 0;
      }
      var state2 = state.quotes.sort(compare).reverse()
        state.quotes = state2
      
    }
  },
});

export default quoteSlice.reducer;
export const quoteActions = quoteSlice.actions;
export const loadDBData = (param) => (dispatch) => {
  var nullState = [{ id: 1, author: "Try fetch again", text: "Fetch failed" }];
  var fetched = loadDataFromDB();
  fetched.then((result) => {
   if (result !== null) {
     var values = Object.values(result)
     
        dispatch(quoteSlice.actions.set(values));
   } else{
    dispatch(quoteSlice.actions.set(nullState));
   }
   
  });
};
export const postDB = (params) => async (dispatch) => {
  const fetchedData = await loadDataFromDB()
  if (fetchedData !== null  || undefined) {
    var values = await Object.values(fetchedData)
    var arrayLength = values.length
  } else{
    var arrayLength = 0
  }
  console.log(fetchedData);
  console.log(values);
      params.id = arrayLength + randomString.generate(12)
      postDataToDB(params).then(()=> {
          dispatch(loadDBData())
  })
  
    
  
    
}
export const postCommentDB = (params) => (dispatch) => {
  console.log(params);
  postCommentsToDB(params).then(()=> {
      dispatch(loadDBData())
  })
  
}