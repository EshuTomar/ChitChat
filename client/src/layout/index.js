import React from 'react';
import logo from '../assets/logo1.png';

const AuthLayout = ({children}) => {
  return (
    <>
    <header className='flex justify-center items-center py-3 h-20 shadow-md bg-green-200'>
      <img src={logo} alt='logo' width={180} height={60}/>
        
    </header>

    {children}

    
    </>
  )
}

export default AuthLayout
