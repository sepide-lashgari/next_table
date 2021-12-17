import { useState,useEffect } from "react";
import axios from "axios";

const usefetch=(url)=>{
    const [data,setdata]= useState([]);
    const [loading,setloading]= useState(false);
    const [error,setError]=useState(null);

    useEffect(()=>{

        setloading(true);
        
        axios
        .get(url)
        .then((res)=>setdata(res.data))
        .catch((e)=>{
            setError(e);
            colnsole.log(e)
        
        })
        .finally(()=>{
            setloading(false);
        });
    },[]);
    return {data,loading,error}
};
export default usefetch;
