import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; 
import { yupResolver } from "@hookform/resolvers/yup"; 
import * as yup from "yup"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object({

  name: yup
  .string()
  .required("Name is required"), 
  email: yup
    .string()
    .email("Invalid email format") 
    .required("Email is required"), 
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters") 
    .required("Password is required"), 
});


const SignUp = () => {

  const [data, setData] = useState({});
    const navigate = useNavigate();
    
     const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema), 
      });
      const closeModal = () => {
       
        navigate("/"); 
      };


      
      const onSubmit = async(data) => {
         setData(data) 
         try {
          const response= await fetch("http://localhost:5000/user/signup",{
            method:"POST",
            headers :{
              "Content-type":"application/json"
            },
            body : JSON.stringify(data)

          })
          if(response.ok){
            const res_data=await response.json();
            // console.log(res_data);
            // localStorage.setItem("token",res_data.token);
          }
          
         } catch (error) {
          console("singup data error" ,error )
         }  


        navigate("/login"); 
      };
  

      const closeModalsignup = () => {
        e.preventDefault();
        navigate("/login"); 
      };

       React.useEffect(() => {
          if (errors.email) {
            toast.error(errors.email.message);
          }
          if (errors.password) {
            toast.error(errors.password.message);
          }
          if (errors.name) {
            toast.error(errors.name.message);
          }
        }, [errors]);

      

      
  return (
      <div className="dark:bg-slate-900 dark:text-white ">
          
    
          <dialog open id="my_modal_3 " className="modal dark:bg-slate-900 dark:text-white ">
            <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
              <form method="dialog" onSubmit={handleSubmit(onSubmit)} className="">
                <button
                  type="button"
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "
                  onClick={closeModal}
                >
                  ✕
                </button>

    
                <h3 className="font-bold text-lg dark:text-white">Signup</h3>
                
              <div className="mt-4 space-y-2">
                
                
              </div>

                <div className="mt-4 space-y-2 dark:text-white">

                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:text-black"
                  name="name"
                  id="name"
                  {...register("name")} 
                />
             <br />
                  <span >Email</span>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="sm:w-80 px-3 py-1 border rounded-md outline-none dark:text-black"
                    name="email"
                    id="email"
                    {...register("email")} 

                  />
    
                  <div className="mt-4 space-y-2">
                    <span>Password</span>
                    <br />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="sm:w-80 px-3 py-1 border rounded-md outline-none dark:text-black"
                      id="password"
                      name="password"
                      {...register("password")} 

                    />
                  </div>
    
             <div >
                            <p className="mt-4">
                              Have Account?{" "}
                              <Link
                                to="/login"
                                className="underline text-blue-500 cursor-pointer"
                              >
                                Login
                              </Link>
                            </p>
                          </div>
    
                  <div>
                    <button
                      className="bg-indigo-600 text-white rounded-md px-3 py-1 mt-1 hover:bg-indigo-700 duration-200"
                      onClick={closeModalsignup}
                    >
                      Sing up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </dialog>
          <ToastContainer />
        </div>
  )
}

export default SignUp