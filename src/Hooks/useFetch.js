import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (api) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchUserData();

        
    }, [])

    const fetchUserData = async() => {
        const response = await axios(api)
        setData(response.data)
        
    }
    
    return data

}