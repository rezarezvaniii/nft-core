import React from 'react';
import logoImg from "../../assets/Frame 1261152725.png"
import searchBar from "../../assets/search.png"
import uploaded from "../../assets/upload.svg"



const Header = () => {
  return (<>
    <div className=' w-full h-20 flex'>
      <div className='w-7/12 h-full  flex items-center gap-10 justify-evenly'>
        <img className='w-32' src={logoImg} alt="" />

        <div className='flex gap-10'>
          <p className='font-normal text-base text-white cursor-pointer '>Discover</p>
          <p className='font-normal text-base text-white cursor-pointer flex gap-1'>Marketplace
            <span className='bg-[#15BFFD] rounded-sm font-normal text-xs p-1'>pro</span>
          </p>
          <p className='font-normal text-base text-white cursor-pointer '>How it Work</p>

        </div>
      </div>



      <div className='w-5/12 h-full flex items-center justify-center'>
        <div className='w-1/2 flex items-center h-1/2 justify-evenly'>
          <img className='w-5 h-5 cursor-pointer' src={searchBar} alt="" />
          <button className='text-base font-medium text-[#15BFFD] rounded-3xl p-2 border-[1px] border-[#15BFFD] '>
            Connect Wallet
          </button>
          <button className='bg-[#15BFFD] p-2 rounded-full '>
            <img src={uploaded} alt="" />
          </button>
        </div>
      </div>
    </div>

  </>);
}

export default Header;