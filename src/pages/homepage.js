import QuoteList from "../components/quotes/QuoteList"
import SortButton from "../components/quotes/SortButton";

export default function HomePage (){
    
    
    
    return(
        <>
        <SortButton name="default"/>
        <SortButton type="asc" name="ascending"/>
        <SortButton type="desc" name="descending"/>
        <QuoteList />
        </>
    )
}