import React from 'react';
import {CgScreen} from 'react-icons/cg';
import {FaDatabase} from 'react-icons/fa';
import {AiFillBook} from 'react-icons/ai';
function Experties() {
  return (
    <div id='about' className=' mx-12 flex flex-col items-center'>
      <h2 className=' mb-1 font-black text-3xl text-green-700'>Experties</h2>
      <div className='headingline'></div>
      <div className='mt-6 mb-32  lg:flex lg:flex-row '>
        <div className='lg:mx-4 my-4 py-4 px-8 flex flex-col border-emerald-700 rounded-lg shadow-emerald-900 shadow-md border-2'>
          <div className='flex flex-row mb-2'><CgScreen size={35} style={{color:"rgba(21 128 61)",}} /><p className='ml-4 font-bold text-xl mb-2'>FrontEnd </p></div>       
            <ul className='flex lg:flex-col'>
              <li className='px-3'>HTML and CSS</li>
              <li className='px-3'> Javascript</li>
              <li className='px-3'>React</li>
              <li className='px-3'>Tailwind</li>
            </ul>
        </div>
        <div className='lg:mx-4 my-4 py-4 px-8 flex flex-col border-emerald-700 rounded-lg shadow-emerald-900 shadow-md border-2'>
        <div className='flex flex-row mb-2'><FaDatabase style={{color:"rgba(21 128 61)",}} size={35} /><p className='ml-4 font-bold text-xl mb-2'>BackEnd</p></div>
            <ul className='flex lg:flex-col'>
              <li className='px-3'>PHP</li>
              <li className='px-3'>My SQL</li>
            </ul>
        </div>
        <div className='lg:mx-4 my-4 py-4 px-8 flex flex-col  border-emerald-700 rounded-lg shadow-emerald-900 shadow-md border-2'>
        <div className='flex flex-row mb-2'><AiFillBook size={35} style={{color:"rgba(21 128 61)",}}/><p className='ml-4 font-bold text-xl mb-2'>Knowledge about</p></div>
            <ul className='flex lg:flex-col'>
              <li className='px-3'>Figma</li>
              <li className='px-3'>Crypto currencies</li>
              <li className='px-3'>Solidity</li>            </ul>
        </div>
      </div>
    </div>
  )
}

export default Experties