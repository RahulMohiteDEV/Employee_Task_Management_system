import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    // Auto-login for demo
    const demoLogin = (role) => {
        if (role === 'admin') {
            handleLogin('Rahul@gmail.com', '1234')
        } else {
            handleLogin('Employee1@gmail.com', '123')
        }
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800'>
            <div className='bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 w-96'>
                <div className='text-center mb-6'>
                    <h1 className='text-2xl font-bold text-white mb-2'>TaskFlow</h1>
                    <p className='text-gray-400 text-sm'>Task Management System</p>
                </div>
                
               

                <div className='relative mb-4'>
                    <div className='absolute inset-0 flex items-center'>
                        <div className='w-full border-t border-gray-600'></div>
                    </div>
                    <div className='relative flex justify-center text-sm'>
                        <span className='px-2 bg-gray-800 text-gray-400'>Or sign in manually</span>
                    </div>
                </div>
                
                <form onSubmit={submitHandler} className='space-y-4'>
                    <div>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg outline-none text-white placeholder-gray-400 focus:border-emerald-500 transition-colors'
                            type='email' 
                            placeholder='Email address'
                        />
                    </div>
                    
                    <div>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                            className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg outline-none text-white placeholder-gray-400 focus:border-emerald-500 transition-colors'
                            type='password' 
                            placeholder='Password'
                        />
                    </div>
                    
                    <button 
                        type='submit'
                        className='w-full bg-emerald-600 hover:bg-emerald-700 py-3 rounded-lg text-white font-medium transition-colors'
                    >
                        Sign In
                    </button>
                </form>

                {/* Demo Credentials Info */}
                <div className='mt-6 p-3 bg-gray-700 rounded-lg'>
                    <p className='text-xs text-gray-300 text-center'>
                        <strong>Demo Credentials:</strong><br/>
                        Admin: Rahul@me.com / 1234<br/>
                        Employee: Employee1@gmail.com / 123
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login