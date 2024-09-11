import React from 'react'

function Booking_body() {
    return (
        <div className='mx-20 bg-blue-800 text-white m-20 p-10 rounded-xl'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <div className='bg-[#f8ae1b] p-2 rounded-md mr-2'>
                        <input className='bg-transparent' type="text" />
                    </div>
                    <button className='w-8 h-8 rounded-full bg-gray-700 mr-2'>bt</button>
                    <div className='bg-[#f8ae1b] p-2 rounded-md mr-2'>
                        <input className='bg-transparent' type="text" />
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src="" alt="" />
                    <p>14 Aug,wed </p>
                    <div>
                        <p>15</p>
                        <p>Aug</p>
                    </div>
                    <div>
                        <p>15</p>
                        <p>Aug</p>
                    </div>
                    <div>
                        <p>15</p>
                        <p>Aug</p>
                    </div>
                </div>
                <div>
                    <button>search</button>
                </div>
            </div>
        </div>
    )
}

export default Booking_body
