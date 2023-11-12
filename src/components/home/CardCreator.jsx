import React from 'react';
import Subtract2 from "../../assets/Subtract2.png"
import ethereumImg from "../../assets/ethereum (1) 1.png"

const CardCreator = () => {
    return ( <>

        <div className='w-[26%] h-[95px] relative flex '>
        <img className='absolute -z-30 ' src={Subtract2} alt="" />


        <div className='w-3/12 flex justify-center items-center h-full'>
          <div className='bg-[#D9D9D9] w-14 h-14 rounded-full'></div>
        </div>
        <div className='w-5/12 h-full flex items-center'>
          <p className='font-medium text-xl text-white flex flex-col gap-2'>
          Emerson Philips
            <span className='flex gap-2 text-base font-medium'>
            <img src={ethereumImg} alt="" />
            3.2 ETH
            </span>
          </p>
        </div>
        <div className='w-3/12 h-full flex items-center '>
          <p className='text-[#15BFFD] font-medium text-xl border-b-2 border-[#15BFFD] cursor-pointer'>Follow</p>
        </div>
      </div>
    
    </> );
}
 
export default CardCreator;