import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <div className='bg-blue-600 p-5'>
        <div className='container flex flex-col md:flex-row gap-10 justify-center items-center'>
            <p className='text-white text-center text-3xl'>Made by <span className='text-2xl text-sky-400'>Mohamed Salah</span> Copyright &copy; 2024</p>
            <div >
                <a href="http://wa.me/+201155953141" target='_blank' ><WhatsAppIcon className='text-green-600 hover:scale-125 transition-all duration-300 text-3xl '/></a>
                <a href="mailto:m48162698@gmail.com" target='_blank'><EmailIcon className='mx-1 text-red-600 hover:scale-125 transition-all duration-300 text-3xl'/></a>
                <a href="https://www.linkedin.com/in/mohamed-salah-aa91a8255/" target='_blank'><LinkedInIcon className='text-blue-900 hover:scale-125 transition-all duration-300 text-3xl'/></a>
            </div>
            
        </div>
    </div>
  )
}
