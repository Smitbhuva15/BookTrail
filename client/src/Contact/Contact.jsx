import React from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; 
import { yupResolver } from "@hookform/resolvers/yup"; 
import * as yup from "yup"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context_store/Authcontext';

const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email format") 
    .required("Email is required"), 
    country: yup
    .string()
    .required("Country is required"), 
    name: yup
    .string()
    .required("name is required"), 
    contactNo: yup
    .string()
    .min(10, "Contact No. must be at least 10 characters")
    .required("Contact NO. is required"), 
    message: yup
    .string()
    .required("Message is required"), 
});



const Contact = () => {
  const {userData}=useContext(AuthContext)
  
  const navigate=useNavigate();

   
      const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema), 
      });
     
     const onSubmit =async (data) => {
       console.log(data); 
       toast.success("Send Detail Successfully! ");
       try {
        const response= await fetch("https://booktrail-zid0.onrender.com/contact",{
          method :"POST",
          headers :{
            "Content-Type":"application/json",
          },
          body :JSON.stringify(data)
        })
        if(response.ok){
          const res= await response.JSON();
          console.log(res);
        }
        
       } catch (error) {
        console.log("POST CONTACT DATA ERROR",error)
       }

       setTimeout(() => {
        navigate('/');
       }, 2000);
     
       
     };
      useEffect(() => {
         if (errors.email) {
           toast.error(errors.email.message);
         }
         if (errors.country) {
           toast.error(errors.country.message);
         }
         if (errors.message) {
            toast.error(errors.message.message);
          }
          if (errors.contactNo) {
            toast.error(errors.contactNo.message);
          }
          if (errors.name) {
            toast.error(errors.name.message);
          }
          

       }, [errors]);


  return (
    <div className='dark:bg-slate-900  dark:text-white'>
      < div 
                    className="space-y-8 p-8 dark:bg-slate-900 dark:text-white bg-white shadow-xl rounded-md">
                        <h3 className="text-2xl font-bold mb-4 text-black dark:bg-slate-900 dark:text-white md:mt-20 mt-16 md:w-8/12 mx-auto">Contact us</h3>
                        <form action="space-y-8" onSubmit={handleSubmit(onSubmit)} className='md:w-8/12 mx-auto' >
                            <div className="flex flex-col gap-4 sm:flex-row mb-4">
                                <input 
                                type="text"
                                 placeholder="Name" 
                               
                                 className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow text-black"
                                 {...register("name")}  
                                 />
                                <input 
                                type="email" 
                                placeholder="Email" 
                              
                                className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow text-black" 
                                {...register("email")}
                                />
                            </div>
                            <div className="flex flex-col gap-4 mb-4 sm:flex-row">
                                <input 
                                type="tel" 
                                placeholder="Contact No."
                                 className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow text-black"
                                 {...register("contactNo")}
                                 />
                                <input 
                                type="text"
                                 placeholder="Country" 
                                 className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow text-black"  
                                 {...register("country")}
                                  />
                            </div>

                            <textarea 
                            placeholder="write your message "
                                className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow resize-none mb-4 text-black" 
                                rows="5"
                                {...register("message")}
                                >  
                                </textarea>

                            <button 
                            type="submit"
                                className="w-full p-3 bg-indigo-600 text-white  rounded-md hover:bg-indigo-600/90 mb-20"
                            >Send Message</button>
                        </form>
                    </div>
                     <ToastContainer />
    </div>
    
  )
}

export default Contact
