import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 import { quoteActions } from '../../store/quote';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
console.log(quoteActions);
const QuoteList = (props) => {
  const dispatch = useDispatch()
  let quotes = useSelector(state => {return state.quote.quotes})
  console.log(quotes);
  return (
    <Fragment>
      <ul className={classes.list}>
        {quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
            path={props.path}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
