import React from 'react';
import img from '../../assests/img1.jpeg';
function Hero() {
  return (
    <div className=' mx-12 mb-24 flex items-center flex-col text-center'>
        <div className=' h-80 overflow-hidden rounded-full my-8'>
            <img src={img} className='' alt="..." />
        </div>
        <h2 className=' mb-1 font-black text-3xl text-green-700'>ASADULLAH</h2>
        <div className='headingline'></div>
        <p className=' font-black text-md my-6 max-w-lg'>I am a professional Webdeveloper.
            Ready to make prolific and dynamic websites for you. 
            Just like the one you have been dreaming about.
        </p>
    </div>
  )
}

export default Hero