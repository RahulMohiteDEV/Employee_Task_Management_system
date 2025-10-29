import React from 'react'

const Header = ({ changeUser, data }) => {
    const username = data ? data.firstName : 'Admin'

    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '')
        changeUser('')
    }

    return (
        <div className='text-white flex items-center justify-between p-4 bg-gray-800 rounded-lg'>
            <div>
                <h1 className='text-lg text-gray-300'>Welcome back,</h1>
                <span className='text-2xl font-semibold text-white'>{username}</span>
            </div>
            <button 
                onClick={logOutUser} 
                className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors'
            >
                Log Out
            </button>
        </div>
    )
}

export default Header