import { useDispatch } from "react-redux"
import QuoteForm from "../components/quotes/QuoteForm"
import { quoteActions, postDB, loadDBData } from "../store/quote"
export default function Compose(){
    const dispatch = useDispatch()
    function onSubmit(props){
        dispatch(postDB(props))
    }
    return (<QuoteForm onAddQuote={onSubmit}/>)
}