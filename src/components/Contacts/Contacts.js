import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import{AiFillInstagram,AiFillFacebook,AiFillLinkedin} from 'react-icons/ai';

function Contacts() {
    return (
        <div className=' bg-green-700 text-white grid grid-cols-2 gap-1 gap-white' id='contacts'>
            <div className='ml-6'>
                <h1 className='text-3xl mt-6 font-black'>Contacts</h1>
                <div className=' flex flex-row mx-4 my-4'><span className='mx-4'><BsTelephoneFill color='white' size={30} /></span><p>+92 0309-1960473</p></div>
                <div className=' flex flex-row mx-4'><span className='mx-4'><MdEmail color='white' size={30} /></span><p className=' break-all'>asadullah.dev.044@gmail.com</p></div>
            </div>
            <div className=''>
                <h1 className='text-3xl mt-6 font-black'>SocialMedia</h1>
                <div className=' flex flex-row mx-4 my-4'><span className='mx-4'><AiFillInstagram color='white' size={30} /></span><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwisge2ozab8AhUURuUKHR7RBWgQFnoECAsQAQ&url=https%3A%2F%2Fwww.instagram.com/asadullahbaig4">asadullahbaig4</a></div>
                <div className=' flex flex-row mx-4 my-4'><span className='mx-4'><AiFillFacebook color='white' size={30} /></span><a href="https://www.facebook.com/profile.php?id=100078156455766">AsadUllah</a></div>
                <div className=' flex flex-row mx-4 my-4'><span className='mx-4'><AiFillLinkedin color='white' size={30} /></span><a href="">AsadUllah</a></div>
            </div>
        </div>

    )
}

export default Contacts