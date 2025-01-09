import { useEffect } from 'react';
import {  useState } from 'react';
import { createContext } from 'react';

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const[token,setToken]=useState(localStorage.getItem("token"));
   const [userData, setUserData] = useState({});

  let isLogIn=!!token;

    const Logoutuser=()=>{
        setToken(""); 
        localStorage.removeItem("token");
        window.location.reload(true);
    }

    const authorizeUserData=async ()=>{
        try {
            const response=await fetch("https://booktrail-zid0.onrender.com/Api/user",{
                method:"GET",
                headers:{
                    "Authorization":`Bearer ${token}`,
                }
            })
            if(response.ok){
                const data=await response.json();
                setUserData(data.userdata);
            }
           
        } catch (error) {
            console.log("error is found in user data");
        }

    }

    useEffect(() => {
        
            authorizeUserData();
    }, []);


    return(
        <AuthContext.Provider value={{isLogIn,Logoutuser,authorizeUserData,userData}}>
            {children}
        </AuthContext.Provider>
    )

 }