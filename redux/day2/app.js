
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Create(){

    const dispatch = useDispatch();

    const {loading , error , data} = useSelector((state) => state.slice1);

    useEffect(() => {
        dispatch(FetchData())
    },[])
    
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    if (data) {
        return <h1>{data}</h1>
    }

}