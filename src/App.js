import React from "react";
import { Suspense, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import {loadDBData} from "./store/quote"
//Elements
import LoadingSpinner from "./components/UI/LoadingSpinner";
import NavBar from "./components/Navbar";
// Lazy
const HomePage = React.lazy(() =>  import("./pages/homepage"))
const Compose = React.lazy(() =>  import("./pages/compose"))
const Detail = React.lazy(()=> import("./pages/detail"))
const Error404 = React.lazy(()=> import("./pages/error404"))
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

      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>

    </div>
  );
  
}


export default App;
