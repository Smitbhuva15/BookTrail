import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; 
import { yupResolver } from "@hookform/resolvers/yup"; 
import * as yup from "yup"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email format") 
    .required("Email is required"), 
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters") 
    .required("Password is required"), 
});

const Login = () => {
  const navigate = useNavigate(); 
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema), 
  });

  const closeModal = (e) => {
    e.preventDefault();
    navigate("/"); 
  };

  

  const onSubmit = async (data) => {
   
    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      
      if (response.ok) {
        const res_data = await response.json();
     
  
        
        localStorage.setItem("token", res_data.token);
  
         toast.success(res_data.message);
  
       
        setTimeout(() => {
          navigate("/"); 
        }, 2000); 
      } else {
       
        const errorData = await response.json();
        console.error(errorData);
        toast.error(errorData.message);
       
      }
    } catch (error) {
      console.log("Login error", error);
      ;
    }
  };
  

  
    useEffect(() => {
    if (errors.email) {
      toast.error(errors.email.message);
    }
    if (errors.password) {
      toast.error(errors.password.message);
    }
  }, [errors]);

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <dialog open id="my_modal_3" className="modal dark:bg-slate-900 dark:text-white">
        <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "
              onClick={closeModal}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="sm:w-80 px-3 py-1 border rounded-md outline-none dark:text-black"
                id="email"
                {...register("email")} 
              />

              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="sm:w-80 px-3 py-1 border rounded-md outline-none  dark:text-black"
                  id="password"
                  {...register("password")} 
                />
              </div>

              <div>
                <p className="mt-4">
                  Not registered?{" "}
                  <Link
                    to="/signup"
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Signup
                  </Link>
                </p>
              </div>

              <div>
                <button
                  type="submit" 
                  className="bg-indigo-600 text-white rounded-md px-3 py-1 mt-1 hover:bg-indigo-700 duration-200"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
      <ToastContainer />
    </div>
  );
};

export default Login;
