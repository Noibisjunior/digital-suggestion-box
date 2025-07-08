import React from 'react'

import logo from '@/assets/logo.svg';
import logoBright from '@/assets/logo-bright.svg';
import logoDark from '@/assets/logo-dark.svg';

const Logo = ({ isTopOfPage }) => {
  return (
    <div className=' flex justify-center items-center gap-x-1 '>
        <div className="p-3 rounded-md// rounded-bl-full  
                      bg-gradient-to-br from-purple-400 to-purple-900 
        " ></div>
        <span className='text-slate-800 font-bold font-montserrat text-3xl coolTitle  '>DSB</span>
        <div className="p-3 rounded-md// rounded-tr-full 
                      bg-gradient-to-br from-purple-400 to-purple-900 
                        
        " ></div>

        {/* <img  alt="logo" 
              src={logo} 
              className='w-[7rem] min-w-[7rem] h-full
        '/> */}
    </div>
  )
}

export default Logo