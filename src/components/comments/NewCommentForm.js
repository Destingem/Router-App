import { current } from '@reduxjs/toolkit';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { postCommentDB } from '../../store/quote';

import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const dispatch = useDispatch()
  const submitFormHandler = (event) => {
    event.preventDefault();
    let value = commentTextRef.current.value
    console.log(props.key);
    if (value.length !== 0 || undefined || null) {
      dispatch(postCommentDB({comment: value, path: props.id}))
    }
    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
