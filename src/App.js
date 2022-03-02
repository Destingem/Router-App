import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import NavBar from "./components/Navbar";
import HomePage from "./pages/homepage";
import { useDispatch } from "react-redux";
import {loadDBData} from "./store/quote"
import Compose from "./pages/compose";
import Detail from "./pages/detail";
import Error404 from "./pages/error404";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);
  function fetchDB(){
    dispatch(loadDBData())
  }
  useEffect(() => {
    setLoading(false);
    fetchDB()
  }, [])
  
  return (
    <div>
      {loading ? <LoadingSpinner /> : <NavBar />}


      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/compose">
          <Compose />
        </Route>
        <Route exact path="/quote/:quoteId">
        <Detail />
        </Route>
        <Route exact path="/*">
        <Error404 />
        </Route>
      </Switch>
      

    </div>
  );
  
}


export default App;
