import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-500 p4 text-white ">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                <p className='py-6'>Submit the Form Below to get in touch with </p>
            </div>


            <div className='flex justify-center items-center '>
                <form action="https://getform.io/f/eeb8210c-2c8a-4d1e-a50c-36969aafa6cd" 
                method="POST"
                className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name'
                    className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"    
                    />
                    <input type="email" name='email' placeholder='Enter your email'
                    className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"    
                    />

                    <textarea name="message" 
                    placeholder='Enter your message'
                    className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    rows="10"></textarea>

                    <button className="text-white bg-gradient-to-b from-cyan-500 to to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-500">
                         Let's talk
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact