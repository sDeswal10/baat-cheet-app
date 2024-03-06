import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../Hooks/useLogin';

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const {loading, login} = useLogin();

    const handleLoginSubmit = async (e)=>{
        e.preventDefault();
        await login(userName, password)
    }

  return (
    <div className='flex flex-col items-center justify-center w-80 md:min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h2 className='text-gray-300 font-semibold text-center text-3xl'>
                Login 
                <span className='text-blue-400'> Baat Cheet</span>
            </h2>
            <form onSubmit={handleLoginSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='Enter your username' className='w-full input input-bordered h-10'
                        value={userName}
                        onChange={(e)=>setUserName(e.target.value)}
                    />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='password' placeholder='Enter your password' className='w-full input input-bordered h-10'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <Link to='/signup' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an account?</Link>
                <div>
                    <button className='btn btn-block btn-sm mt-2 border-slate-700'
                        disabled={loading}
                    >
                        {loading ? (<span className='loading loading-spinner'></span>) : ("Login")}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login