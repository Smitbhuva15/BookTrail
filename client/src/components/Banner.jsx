import React, { useContext } from 'react'
import { AuthContext } from '../context_store/Authcontext'

const Banner = () => {

const{userData}= useContext(AuthContext);
const username=userData.name||"";

   
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>

        {/* left section */}
        <div className='w-full md:w-1/2 md:mt-32 mt-12 order-2 md:order-1'>
          <div className='space-y-8'>
            
          <h1 className="text-2xl md:text-4xl font-bold">
              {`Hello ${username}, welcomes here to learn something `}
              <span className="text-indigo-600 ">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
            Fictional books have the power to transport readers to faraway lands, ancient civilizations, or even entirely new dimensions. Novels, short stories, and epics let readers lose themselves in exciting, heart-wrenching, or whimsical tales.
            </p>
            <label className="input input-bordered flex items-center gap-2 dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow dark:text-black" placeholder="Email"  />
            </label>
            
          </div>
          <button className="btn mt-6 bg-indigo-600 hover:bg-indigo-700 text-black">Get Started</button>
        </div>
        



        {/* right section */}
       <div className='w-full md:w-1/2 order-1'>
          <img src="banner.png" alt="" className="md:w-[460px] md:h-[550px] md:ml-20"  />
       
        </div>
    </div>
  )
}

export default Banner