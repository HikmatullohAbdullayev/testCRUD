import React from "react";
import { request } from "../config/requset";

export const About  = () =>{
    const [ data, setData] = React.useState([])

    const getData = async () =>{
        try {
            request.get('/posts').then((res) => setData(res.data))

        } catch (error) {
            
        }
    }
    console.log(data);

    React.useEffect(() => {

        getData()
        
    },[])


    return(

        <>
        <h2>about</h2>
        </>
    )
} 