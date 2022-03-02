import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export default function Error404(){
    const history = useHistory()
    const [i, setI] = useState(5)
    var seconds = 5
setTimeout(() => {
  history.push('/')
  
}, 5000)

useEffect(()=> {
    return setInterval(() => {
        setI((i)=> {return i-1})
    }, 1000);
}, [])

    
    


      return(
          <>
          <h1>Error 404</h1>
          <p>You will be redirected in {i} seconds</p>
          </>
      )
}