import React from 'react';
import heartImg from "../../assets/Vector31.png"
import arrowright from "../../assets/Group.svg"
import vectorGradient from "../../assets/Vector 29.png"
import leftEllipse from "../../assets/Ellipse 60.png"
import rightEllipse from "../../assets/Ellipse 59.png"
import starSvg from "../../assets/Star 7.svg"
import starwhite from "../../assets/Star 5.svg"
import startlogogroup from "../../assets/Group 1.png"
import App from './Caroselbar';



const SlideHead = () => {
  return (<>
    <div className=' w-full relative flex justify-end'>
      <img className='absolute right-9 w-8' src={starSvg} alt="" />
      <img className='absolute left-3/4 w-4' src={starSvg} alt="" />
      <img className='absolute left-2/4 -top-4 w-4 ' src={starSvg} alt="" />
      <img className='absolute left-14 bottom-60' src={starwhite} alt="" />
      <img className='absolute left-1/4 top-5 w-4 h-4' src={starSvg} alt="" />
      <img className='absolute right-1/4 bottom-10 w-4 h-4' src={starSvg} alt="" />
      <img className='absolute left-2/4 bottom-40 w-4 h-4' src={starSvg} alt="" />
      <img className='absolute left-0 -z-50 -top-36' src={leftEllipse} alt="" />
      <img className='absolute right-0 -z-50 -top-36' src={rightEllipse} alt="" />
      <img className='absolute right-36 z-20' src={startlogogroup} alt="" />



      <div className=' h-full w-5/12 '>
        <p className='text-white font-semibold text-[80px] flex flex-col'>
          Super NFT
          <span className='font-normal'>

            Marketplace
          </span>
        </p>
        <img src={heartImg} alt="" />
        <p className='font-normal text-base text-white w-7/12 mt-8'>
          The largest and unique Super rare NFT marketplace
          For crypto-collectibles
        </p>
        <div className='mt-8 flex gap-10'>
          <button className='text-base font-medium text-white bg-[#15BFFD] rounded-3xl p-2 border-[1px] border-[#15BFFD] '>
            Connect Wallet
          </button>
          <p className='font-medium text-base text-[#15BFFD] flex items-center gap-3'>Create NFTs
            <img className='w-8' h-8 src={arrowright} alt="" />
          </p>
        </div>
        <p className='font-semibold text-2xl text-white mt-8'>
          Last 7 days popular search
        </p>

        <div className='flex gap-3 mt-8'>
          <button className='text-base font-medium text-white bg-[#15BFFD] rounded-3xl w-12 h-8 border-[1px] border-[#15BFFD] '>
            All
          </button>
          <button className='text-base font-medium text-white  rounded-3xl px-2 py-1 border-[1px] border-white '>
            Music
          </button>
          <button className='text-base font-medium text-white  rounded-3xl px-2 py-1 border-[1px] border-white '>
            3D Abstract
          </button>
          <button className='text-base font-medium text-white  rounded-3xl px-2 py-1 border-[1px] border-white '>
            Game
          </button>
        </div>


        <div className='flex gap-3 mt-8'>
          <button className='text-base font-medium text-white  rounded-3xl px-2 py-1 border-[1px] border-white'>
            Sprots
          </button>
          <button className='text-base font-medium text-white  rounded-3xl px-2 py-1 border-[1px] border-white '>
            Cartoon
          </button>
          <button className='text-base font-medium text-white  rounded-3xl px-2 py-1 border-[1px] border-white '>
            Virtual World
          </button>
          <button className='text-base font-medium text-white  rounded-3xl px-2 py-1 border-[1px] border-white '>
            Classic
          </button>
        </div>






      </div>
      <div className='h-full relative w-6/12 flex justify-center items-center'>
        <img className='absolute right-0 top-20 ' src={vectorGradient} alt="" />
        <div className='mt-28'>

        <App/>
        </div>



      </div>


    </div>
  </>);
}

export default SlideHead;