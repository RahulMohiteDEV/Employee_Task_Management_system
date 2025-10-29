import React from 'react'

const AcceptTask = ({data}) => {
    console.log(data);
  return (
   <div className='flex-shrink-0 p-5 h-full w-[300px] bg-yellow-500 rounded-xl text-white '>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-orange-500 text-md px-3 py-1 rounded '>{data.category}</h3>
                    <h4 className='text-sm'>{data.taskDate} </h4>
                </div>
                <h2 className='font-semibold text-2xl mt-5'>{data.taskTitle}</h2>
                <p className='text-sm mt-3'>
                    {data.taskDescription}
                </p>
                <div className='flex justify-between mt-4'>
                    <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
                    <button className='bg-green-500 py-1 px-2 text-sm' >Mark as Failed</button>
                </div>
            </div>
  )
}

export default AcceptTask
