import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#f7f7f7] py-10 px-4 md:px-8">
      {/* Logo Section */}
      <div className="flex items-center justify-evenly w-full h-[150px] flex-wrap gap-4">
        <img src="https://themewagon.github.io/ezuca/images/logo-1.png" alt="Logo 1" className='w-24 md:w-28' />
        <img src="https://themewagon.github.io/ezuca/images/logo-2.png" alt="Logo 2" className='w-24 md:w-28' />
        <img src="https://themewagon.github.io/ezuca/images/logo-3.png" alt="Logo 3" className='w-24 md:w-28' />
        <img src="https://themewagon.github.io/ezuca/images/logo-4.png" alt="Logo 4" className='w-24 md:w-28' />
        <img src="https://themewagon.github.io/ezuca/images/logo-5.png" alt="Logo 5" className='w-24 md:w-28' />
      </div>

      {/* Footer Content Section */}
      <div className="flex flex-col md:flex-row justify-around items-start mt-10 gap-10 text-center md:text-left">
        {/* Company Info */}
        <div className='flex flex-col gap-3 max-w-xs'>
          <h1 className='text-black font-bold text-2xl'>Ezu<span className='text-[#19c880]'>ca</span></h1>
          <p className='text-[#757686] text-sm'>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className='text-[#C0C1Cd] text-xs'>
            ©2024 All rights reserved | Made with ❤️ by <span className='text-black'>Colorlib</span>
          </p>
        </div>

        {/* Contact Info */}
        <div className='flex flex-col gap-3 max-w-xs'>
          <h2 className='text-black text-xl'>Contact Us</h2>
          <p className='text-[#757686] text-sm'>Email: <br />info.deertcreative@gmail.com</p>
          <p className='text-[#757686] text-sm'>Phone: (+88) 111 555 666</p>
          <p className='text-[#757686] text-sm'>Address: 40 Baria Street 133/2, New York City, US</p>
        </div>

        {/* Quick Links */}
        <div className='flex flex-col gap-3 max-w-xs'>
          <h2 className='text-black text-xl'>Quick Links</h2>
          <p className='text-[#757686] text-sm'>About | Documentation</p>
          <p className='text-[#757686] text-sm'>Terms Of Use | Forums</p>
          <p className='text-[#757686] text-sm'>Privacy Policy | Language Packs</p>
          <p className='text-[#757686] text-sm'>Contact Us | Release Status</p>
        </div>

        {/* Social Media Links */}
        <div className='flex flex-col gap-3 items-center md:items-start'>
          <h2 className='text-black text-xl'>Follow Us</h2>
          <div className='flex gap-2'>
            <div className='bg-[#4b6cd0] rounded-full w-10 h-10 flex items-center justify-center'>
              <FaFacebookF color='white' />
            </div>
            <div className='bg-[#f03b3b] rounded-full w-10 h-10 flex items-center justify-center'>
              <IoLogoGoogleplus color='white' />
            </div>
            <div className='bg-[#bb8950] rounded-full w-10 h-10 flex items-center justify-center'>
              <FaInstagram color='white' />
            </div>
            <div className='bg-[#49a7f3] rounded-full w-10 h-10 flex items-center justify-center'>
              <FaTwitter color='white' />
            </div>
          </div>
        </div>
      </div>

      {/* App Store and Terms Section */}
      <div className='flex flex-col md:flex-row items-center justify-between mt-10 gap-4'>
        <div className='flex gap-4'>
          <img src="https://themewagon.github.io/ezuca/images/app-store.png" alt="App Store" className='w-24' />
          <img src="https://themewagon.github.io/ezuca/images/play-store.png" alt="Play Store" className='w-24' />
        </div>
        <div className='flex gap-4 text-[#757686] text-sm'>
          <p>DPA</p>
          <p>Terms Of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
