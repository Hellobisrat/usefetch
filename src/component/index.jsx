import { useEffect, useState } from "react";

export default function useFetch(url,options){
  const [data, setData] =useState(null)
  const [pending, setPending]= useState(true);
  const [error,setError]= useState(null);
  
  
  useEffect(()=>{
    async function fetchData() {
      setPending(true)
      try {
        const response = await fetch(url,options)
        if (!response.ok) throw new Error(response.statusText)
        const result = await response.json()
        setData(result)
        setPending(false)
        setError(null)
        
      } catch(e) {
        setError(`${e} Some Error Occurred`)
        setPending(false)
        
      }
    }
    
    fetchData()
  },[url,options])

  return [data,error,pending]
}
