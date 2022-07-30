import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-20 bg-black p4 text-white ">
        <div className='flex justify-center items-center py-5'>
            <p className='text-2xl'>Copyright <sup>&copy;</sup> 2022</p>
             <p className='px-3 text-2xl'>Made with love ❤️ by <span className=' text-red-400'>Ashutosh vishwakarma</span></p>
        </div>
    </div>
  )
}

export default Footer