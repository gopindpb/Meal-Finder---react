import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (api) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        
        fetchUserData();

        
    }, [api])
    
    const fetchUserData = async() => {

        try{
            const response = await axios(api)
        setData(response.data)

        }catch(error){
            console.log(error);
            
        }

        
        
    }
    
    return data

}