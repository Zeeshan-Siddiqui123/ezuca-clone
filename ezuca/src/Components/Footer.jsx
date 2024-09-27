import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";

const Footer = () => {
  return (
    <div >
      <div className='flex items-center justify-evenly bg-[#f7f7f7] w-full h-[150px] mt-24 flex-wrap'>
        <img src="https://themewagon.github.io/ezuca/images/logo-1.png" alt="" className='img-w'/>
        <img src="https://themewagon.github.io/ezuca/images/logo-2.png" alt="" className='img-w'/>
        <img src="https://themewagon.github.io/ezuca/images/logo-3.png" alt="" className='img-w'/>
        <img src="https://themewagon.github.io/ezuca/images/logo-4.png" alt="" className='img-w'/>
        <img src="https://themewagon.github.io/ezuca/images/logo-5.png" alt="" className='img-w'/>
      </div>
      <div className=" flex flex-row justify-around items-center flex-wrap w-full">
        <div className='flex flex-col gap-3'>
          <div><h1 className='text-black font-bold'>Ezu<span className='text-[#19c880]'>ca</span></h1></div>
          <div><p className='text-[#757686] font-size'>Excepteur sint occaecat cupidatat <br /> non proident, sunt in culpa qui <br /> officia dese mollit anim id est <br /> laborum.</p></div>
          <div><p className='text-[#C0C1Cd] font-size'>Copyright ©2024 All rights reserved <br />| This template is made with by <br /> <span className='text-black'>Colorlib</span></p></div>
        </div>
        <div className='flex flex-col gap-3'>
          <h2 className='text-black text-xl abc'>Contact Us</h2>
          <p className='text-[#757686] font-size'>Email: <br />info.deertcreative@gmail.com</p>
          <p className='text-[#757686] font-size'>Phone: (+88) 111 555 666</p>
          <p className='text-[#757686] font-size'>Address: 40 Baria Sreet 133/2 <br /> NewYork City, US</p>
        </div>
        <div className='flex flex-col gap-3'>
          <h2 className='text-black text-xl q-l'>Quick Links</h2>
          <pre className='text-[#757686] font-sizee'>About            Documentation</pre>
          <pre className='text-[#757686] font-sizee'>Terms Of Use     Forums</pre>
          <pre className='text-[#757686] font-sizee'>Privacy Policy   Lnguage Paks</pre>
          <pre className='text-[#757686] font-sizee'>Contact Us       Release Status</pre>
        </div>
        <div className='flex flex-col gap-3 -mt-20 follow'>
          <h2 className='text-black text-xl us'>Follow Us</h2>
          <div className='flex flex-row gap-2 items-center justify-center uss'>
            <div className='bg-[#4b6cd0] border border-[#4b6cd0] rounded-full w-[40px] h-[40px] flex items-center justify-center us'><FaFacebookF color='white' />
            </div>
            <div className='bg-[#f03b3b] border border-[#f03b3b] rounded-full w-[40px] h-[40px] flex items-center justify-center us'><IoLogoGoogleplus color='white' /></div>
            <div className='bg-[#bb8950] border border-[#bb8950] rounded-full w-[40px] h-[40px] flex items-center justify-center us'><FaInstagram color='white' /></div>
            <div className='bg-[#49a7f3] border border-[#49a7f3] rounded-full w-[40px] h-[40px] flex items-center justify-center us'><FaTwitter color='white' /></div>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-between mt-10 flex-wrap foot'>
        <div className='flex flex-row gap-2 ml-12 f1'>
          <img src="https://themewagon.github.io/ezuca/images/app-store.png" alt="" />
          <img src="https://themewagon.github.io/ezuca/images/play-store.png" alt="" />
        </div>
        <div className='flex flex-row gap-3 mr-12 f2'>
          <p>DPA</p>
          <p> Terms Of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
