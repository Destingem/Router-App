import QuoteItem from "../components/quotes/QuoteItem";
import Routes, { Route, useLocation, useLocations } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import NewCommentForm from "../components/comments/NewCommentForm"
import CommentItem from "../components/comments/CommentItem"
import CommentsList from "../components/comments/CommentsList"
export default function Detail() {
  const [quote, setQuote] = useState({
    key: "fufu",
    id: "fake",
    author: "",
    text: "",
    comments: ["a"]
  });
  const route = useLocation();
  const state = useSelector((state) => {
    return state.quote;
  });
  useEffect(() => {
    if (state) {
      var i = state.quotes.filter((item) => {
        if ("/quote/" + item.id == route.pathname) {
          setQuote(item);
          console.log(item);
          i = 1;
          return item;
        } else {
        }
      });
      if (i.length == 0) {
        setQuote(()=> {return {
          key: "fufu",
          id: "fake",
          author: "It may be deleted or you have invalid link",
          text: "Quote not found!",
        }});
      }
      
    }
  }, [state, route]);
  return (
    <>
      <p>{route.pathname}</p>
      <QuoteItem
        key={quote.id}
        id={quote.id}
        author={quote.author}
        text={quote.text}
        hideBtn = {true}
      />
      {quote.comments ?<CommentsList comments={quote.comments}/>: null}
      <NewCommentForm id={quote.id} route={route.pathname}/>
    </>
  );
}
/* key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
            path={props.path}  const state = useSelector((state) => {
    return state.quote;
  });

  if (props.path && item.path) {
    var result = state.quotes.map((quote) => {
      if (props.path === quote.id) {
        setItem(()=> {return quote});
        return quote;
      }

      setItem(result)
    });
  }*/
