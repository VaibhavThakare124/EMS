import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()

        handleLogin(email,password)
        // console.log("email is",email)
        // console.log("password is",password)

        setEmail("")
        setPassword("")
    }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form
            onSubmit={(e)=>{
              submitHandler(e)
            }} 
            className='flex flex-col items-center justify-center'>

              <input 
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              required 
              className='text-xl  outline-none bg-transparent border-2 border-emerald-600 px-5 py-3 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your Email' 
              />

              <input 
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              required 
              className='text-xl  outline-none bg-transparent border-2 border-emerald-600 px-5 py-3 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter Password' 
              />

              <button className='text-xl w-full text-white outline-none border-none bg-emerald-600 px-5 py-3 rounded-full mt-5 placeholder:text-white'>Log In</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login