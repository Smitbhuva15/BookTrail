import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { useContext } from 'react';
import { AuthContext } from '../context_store/Authcontext';
// import list from '../../public/list.json';

const Course = () => {
 const[list,setList] =useState([]);
  
useEffect(() => {
  const fetchingdata=async()=>{
    try {
      const response = await fetch("http://localhost:5000/book", {
        method: "GET",
      });
     const data=await response.json()
      setList(data);
      
    } catch (error) {
      console.log("Error:", error);
    }

  }
  
 fetchingdata();
}, []);

 const navigate=useNavigate();
  const{isLogIn}=  useContext(AuthContext);
  
  if(!isLogIn){
    navigate('/login');
  }
  if(!isLogIn){
    return null;   //remove the background untill login by user
  }
  
  
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white mb-12'>
    <div className=" items-center justify-center text-center">
      <h1 className="text-2xl md:text-4xl pt-28">
        We're delighted to have you{" "}
        <span className="text-indigo-600"> Here! :)</span>
      </h1>
      <p className="mt-12">
        Discover a vast collection of books that span various genres, from inspiring self-help and leadership guides to exciting adventures and mysteries. Whether you're looking for free reads or premium titles, our selection has something for everyone. Expand your knowledge, ignite your imagination, and enjoy stories that captivate and enlighten. With every page, find new insights and immerse yourself in worlds waiting to be explored.
      </p>
      <Link to="/">
        <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 duration-300">
          Back
        </button>
      </Link>
    
      
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {list.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </div>
    
   
  );
};


export default Course;
