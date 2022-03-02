import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { loadDBData, quoteActions } from "../../store/quote"
export default function SortButton(props){
    let history = useHistory()
    const dispatch = useDispatch()
    function ascendingHandler(params){
        if (props.type) {
            history.push("?sort=" + props.type)
           if (props.type == "asc") {
               dispatch(quoteActions.sortByCharAsc())
           } else if (props.type == "desc"){
            dispatch(quoteActions.sortByCharDesc())
           } else{
               dispatch(loadDBData())
           }
        } else{
            history.push("")
            dispatch(loadDBData)
        }
        
    }
    return(
        <>
        <button onClick={ascendingHandler}>{props.name}</button>
        </>
    )
}