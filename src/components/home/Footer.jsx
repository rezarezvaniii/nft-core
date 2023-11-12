import React from 'react';
import logoNft from '../../assets/Frame 1261152725.png'
import twitter from '../../assets/twitter (1) 1.svg'
import linkedin from '../../assets/linkedin (1) 1.svg'
import facebook from '../../assets/facebook (4) 1.svg'
import copyright from '../../assets/copyright 1.svg'



const Footer = () => {
  return (<>
    <div className='mt-32 w-full flex justify-evenly relative'>

      <div className='w-4/12 h-full flex flex-col gap-5'>
        <img src={logoNft} className='w-64' alt="" />
        <p className='text-base font-normal text-white w-3/4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna ultrices amet tellus ornare. Faucibus id posuere massa
        </p>
        <div className='flex gap-4'>
          <img src={facebook} alt="" />
          <img src={linkedin} alt="" />
          <img src={twitter} alt="" />
        </div>
        

      </div>
      <div className='w-2/12 h-full flex pl-20 gap-5 flex-col'>
        <p className='text-white font-medium text-xl'>Site Map</p>
        <p className='text-white font-normal text-base'>Home</p>
        <p className='text-white font-normal text-base'>About</p>
        <p className='text-white font-normal text-base'>NFT</p>
        <p className='text-white font-normal text-base'>Road map</p>
        <p className='text-white font-normal text-base'>Blog</p>
        <p className='text-white font-normal text-base'>Contact</p>
      </div>
      <div className='w-2/12 h-full  flex pl-20 gap-5 flex-col'>
        <p className='text-white font-medium text-xl'>Company</p>
        <p className='text-white font-normal text-base'>Help & Support</p>
        <p className='text-white font-normal text-base'>Terms & Conditions</p>
        <p className='text-white font-normal text-base'>Privacy Policy</p>
      </div>
      <div className='text-white w-2/12 h-full  flex pl-20 gap-5 flex-col'>
        <p className='text-white font-medium text-xl'>Resource</p>
        <p className='text-white font-normal text-base'>Partner</p>
        <p className='text-white font-normal text-base'>Blog</p>
        <p className='text-white font-normal text-base'>Newsletter</p>
      </div>


    </div>
    <p className='font-normal text-base text-white flex gap-2 pl-12'>
        Copyright
        <img src={copyright} alt="" />
        NFT core 2022 All right reserved
        </p>
  </>);
}

export default Footer;