import {useState,useEffect} from 'react'

function useFetch(url) {
    const [data,setData] = useState(null);
    const  [ isPending,setIsPending ] = useState(true);
    const [error,setError] = useState(null);



    useEffect(() => {


    const abortCont = new AbortController();

    setTimeout(() => {
        fetch(url,{signal: abortCont.signal})
    .then(res => { 
        if(!res.ok){
            throw Error("Could not find any data for this resource")
        }
       return res.json()
    })
    .then(data => {
        // console.log(data)
        setData(data)
        setIsPending(false);
        setError(null)
    }).catch(err => {
        if (err.name === "AbortError") {
            console.log("fetch Aborted")
        } else {
            setError(err.message);
            setIsPending(false); 
        }

    })
    }, 1000);

    return () => {
        // console.log("Clean Up")
        abortCont.abort();
    }
},[url]);
    return {data,isPending,error}
}

export default useFetch;
