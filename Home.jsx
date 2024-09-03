import React from 'react'

function Home() {
  return (
    <div className='mt-10'>
      <header className='flex justify-between items-center'>
        <div className='flex  items-center'>
            <img src="" className='mr-5 w-14 h-14 rounded-full bg-black ' alt="" />
            <h1 className='text-4xl  text-blue-800 font-medium popins'>S.R.S Travels</h1>
        </div>
        <div className='flex justify-between items-center' >
            <ul className='flex items-center text-lg '>
                <li className='mr-10 '>Bus Tickets</li>
                <li className='mr-10 '>Group Booking</li>
                <li className='mr-10 ' >
                    <button className='flex items-center bg-[#ffde9e] rounded-3xl border-black border-2'>
                        <img src=""  className='w-10 h-10 rounded-full bg-black ' alt="" />
                        <p className='px-5'>Call To Book</p>
                    </button>
                </li>
                <li className='mr-10 '>
                    <button className='bg-[#f8ae1b] px-4 py-2 rounded-3xl'>SIGN IN</button>
                </li>
            </ul>
        </div>
      </header>
    </div>
  )
}

export default Home
