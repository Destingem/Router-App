import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import classes from "./QuoteItem.module.css";
const QuoteItem = (props) => {
  const [item, setItem] = useState(props);
  const [redirect, setRedirect] = useState(false);
  function handleClick() {
    setRedirect(true);
  }
useEffect(()=> {
  setItem(props)
}, [props])
  console.log(item);
  return (
    <li className={classes.item}>
      {redirect && <Redirect to={"quote/" + props.id} />}
      <figure>
        <blockquote>
          <p>{item.text}</p>
        </blockquote>
        <figcaption>{item.author}</figcaption>
      </figure>
      {item.path ? null : (
        <a className="btn" onClick={handleClick}>
          View Fullscreen
        </a>
      )}
    </li>
  );
};

export default QuoteItem;
