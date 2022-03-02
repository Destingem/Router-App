import { useRef, useState } from 'react';
import Router ,{ Route, Switch, Redirect, Prompt } from "react-router-dom";
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false) 
  const [typing, setTyping] = useState(false)
  function submitFormHandler(event) {
    event.preventDefault();
    setTyping(false)

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
    setIsSubmitted(true)
  }
  function typingHandler(){
    if (authorInputRef.current.value === "" && textInputRef.current.value === "") {
      setTyping(false)
    } else{
      if (typing === false) {
        setTyping(true)
      }
    }
  }
  return (
   
    <Card>
     {isSubmitted  && <Redirect to="/"/>}
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}
        <Prompt when={typing} message="Are you sure?" />
        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} onChange={typingHandler}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef} onChange={typingHandler}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
