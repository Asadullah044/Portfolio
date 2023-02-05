import React from 'react'

function Header() {
    return (
        <div className=' flex w-screen justify-between py-5 text-green-700 shadow-xl mb-4' >
            <h1 className=' ml-4 font-black text-2xl'>Portfolio</h1>
            <span>
                <a href="#about" className=' px-5 font-bold'>About</a>
                <a href="#contacts" className=' px-5 font-bold '>Contacts</a>
            </span>
        </div>
    )
}

export default Header