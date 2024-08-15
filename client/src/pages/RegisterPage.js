import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';


const RegisterPage = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    profile_pic: ""
  })

  const [uploadPhoto, setUploadPhoto] = useState("")

  const handleUpload= (e)=>{
    const file = e.target.files[0];

    setUploadPhoto(file)
  }


  const handleChange= (e)=>{
    const {name, value} = e.target

    setData((prev)=>{
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleDeletePhoto = (e) =>{
    setUploadPhoto(null)
    e.preventDefault();
    e.stopPropagation();
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    e.stopPropagation();

  }

  return (
    <div className='bg-hero-pattern bg-cover bg-center min-h-screen p-5  '>
      <div className='w-full max-w-sm mx-2 overflow-hidden p-4 text-white border border-green-300 rounded-md border-2 shadow-md shadow-green-500 mx-auto'>

      <h1 className=" text-center text-green-300">Welcome to ChitChat!</h1>

      <form className='grid gap-4 mt-3 ' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-1'>
          <label htmlFor='name'> Name : </label>
          <input type='text' id='name' name='name' placeholder='Your name' className='text-gray-700 bg-slate-100 px-2 py-1 focus:outline-green-800 ' value={data.name} onChange={handleChange} required/>
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor='email'> Email : </label>
          <input type='email' id='email' name='email' placeholder='Your email' className='text-gray-700 bg-slate-100 px-2 py-1 focus:outline-green-800' value={data.email} onChange={handleChange} required/>
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor='password'> Password : </label>
          <input type='password' id='password' name='password' placeholder='Your password' className='text-gray-700 bg-slate-100 px-2 py-1 focus:outline-green-800' value={data.password} onChange={handleChange} required/>
        </div>

        <div className='flex flex-col gap-1 '>
          <label htmlFor='profile_pic'> Profile Picture : 
            <div className='h-14 bg-slate-200 flex justify-center items-center border rounded hover:border-green-800 border-2 cursor-pointer'>
              <p className='text-gray-700 text-sm max-w-[300px] text-ellipsis line-clamp-1'>
                {
                  uploadPhoto?.name ? uploadPhoto.name  : "Upload Your Profile Picture "
                }
                
                </p>
                {
                  uploadPhoto?.name && (
                    <button className='text-black text-lg ml-4 hover:text-red-600' onClick={handleDeletePhoto}>
                <MdDelete/>
                </button>
                  )
                }
                
            </div>
          </label>
          <input type='file' id='profile_pic' name='profile_pic'  className='bg-slate-100 px-2 py-1 focus:outline-green-800 text-black hidden' onChange={handleUpload} />
        </div>

        <button className='bg-green-100 px-4 py-2 text-green-800 hover:bg-green-300 rounded mt-2 font-bold tracking-wide'> 
          Register
        </button>

      </form>

          <p className='my-2 text-center'>Already have account ? <Link to={"/email"} className='hover:text-green-400 font-semibold cursor-pointer'>Login</Link></p>
        
      </div>
    </div>
  )
}

export default RegisterPage

