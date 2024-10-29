import React from 'react';

const User = () => {
  return (
    <div className='flex flex-col'>
      <input 
        type="text"
        placeholder='First Name' 
        className='w-full p-1 mb-2 focus:outline-none focus:border-lime-500 focus:border-2 placeholder:text-sm'
      />
      <input 
        type="text"
        placeholder='First Name' 
        className='w-full p-1 mb-2 focus:outline-none focus:border-lime-500 focus:border-2 placeholder:text-sm'
      />
      <div className='flex gap-20 py-5'>
        <div className='flex flex-col'>
          <div className='flex font-light'>First Name</div>
          <div className='flex'>

          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex font-light'>Last Name</div>
          <div className='flex'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default User;