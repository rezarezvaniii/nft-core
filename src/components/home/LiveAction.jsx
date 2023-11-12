import React from 'react';
import Subtract from '../../assets/Subtract (1).png'
import EthreumeImg from "../../assets/ethereum (1) 1.png"

const LiveAction = () => {
  return (
    <>
      <p className="mt-10 gap-5 text-3xl font-semibold text-center flex flex-col text-white w-96 m-auto">Live Action
        <span className="font-normal text-base">
          The largest and unique Super rare NFT marketplace
          For crypto-collectibles
        </span>
      </p>


      <div className="w-full flex justify-evenly mt-16">

        <div className='w-[25%] h-[455px] relative'>
          <img className='absolute -z-30 ' src={Subtract} alt="" />
          <div className='flex flex-col justify-between h-full'>
            <div className='w-full flex justify-between px-3 mt-5 '>
              <p className='font-medium text-sm text-white'>
                Current bid
                <span className='font-medium text-sm text-[#15BFFD] flex gap-1'>
                  <img src={EthreumeImg} alt="" />
                  32 Eth
                </span>
              </p>
              <button className='text-base w-fit font-semibold text-white bg-[#15BFFD] rounded-3xl p-2 border-[1px] border-[#15BFFD] '>
                Place bid
              </button>
            </div>



            <div className='flex justify-between mx-3 mb-3'>
              <p className='font-medium text-base text-white flex flex-col gap-2 w-7/12'>Golden Houre
                <span className='text-sm font-medium text-[#789EAC] flex gap-2'>
                  <div className='bg-[#D9D9D9] w-6 h-6 rounded-full'>
                  </div>
                  John Doe
                </span>
              </p>

              <div className='w-5/12 flex relative items-center'>
                <div className='bg-[#D9D9D9] w-8 h-8 rounded-full absolute left-0 shadow-md'></div>
                <div className='bg-[#D9D9D9] w-8 h-8 rounded-full absolute left-3 shadow-md'></div>
                <div className='bg-[#D9D9D9] w-8 h-8 rounded-full absolute left-6 shadow-md'></div>
                <div className='bg-[#D9D9D9] w-8 h-8 rounded-full absolute left-9 shadow-md'></div>
              </div>



            </div>

          </div>
        </div>
        <div className='w-[25%] h-[455px] relative'>
          <img className='absolute -z-30 ' src={Subtract} alt="" />
          <div className='flex flex-col justify-between h-full'>
            <div className='w-full flex justify-between px-3 mt-5 '>
              <p className='font-medium text-sm text-white'>
                Current bid
                <span className='font-medium text-sm text-[#15BFFD] flex gap-1'>
                  <img src={EthreumeImg} alt="" />
                  32 Eth
                </span>
              </p>
              <button className='text-base w-fit font-semibold text-white bg-[#15BFFD] rounded-3xl p-2 border-[1px] border-[#15BFFD] '>
                Place bid
              </button>
            </div>



            <div className='flex justify-between mx-3 mb-3'>
              <p className='font-medium text-base text-white flex flex-col gap-2 w-7/12'>Golden Houre
                <span className='text-sm font-medium text-[#789EAC] flex gap-2'>
                  <div className='bg-[#D9D9D9] w-6 h-6 rounded-full'>
                  </div>
                  John Doe
                </span>
              </p>

              <div className='w-5/12 flex relative items-center'>
                <div className='bg-[#D9D9D9] w-8 h-8 rounded-full absolute left-0 shadow-md'></div>
                <div className='bg-[#D9D9D9] w-8 h-8 rounded-full absolute left-3 shadow-md'></div>
                <div className='bg-[#D9D9D9] w-8 h-8 rounded-full absolute left-6 shadow-md'></div>
                <div className='bg-[#D9D9D9] w-8 h-8 rounded-full absolute left-9 shadow-md'></div>
              </div>



            </div>

          </div>
        </div>
        <div className='w-[25%] h-[455px] relative'>
          <img className='absolute -z-30 ' src={Subtract} alt="" />
          <div className='flex flex-col justify-between h-full'>
            <div className='w-full flex justify-between px-3 mt-5 '>
              <p className='font-medium text-sm text-white'>
                Current bid
                <span className='font-medium text-sm text-[#15BFFD] flex gap-1'>
                  <img src={EthreumeImg} alt="" />
                  32 Eth
                </span>
              </p>
              <button className='text-base w-fit font-semibold text-white bg-[#15BFFD] rounded-3xl p-2 border-[1px] border-[#15BFFD] '>
                Place bid
              </button>
            </div>



            <div className='flex justify-between mx-3 mb-3'>
              <p className='font-medium text-base text-white flex flex-col gap-2 w-7/12'>Golden Houre
                <span className='text-sm font-medium text-[#789EAC] flex gap-2'>
                  <div className='bg-[#D9D9D9] w-6 h-6 rounded-full'>
                  </div>
                  John Doe
                </span>
              </p>

              <div className='w-5/12 flex relative items-center'>
                <div className='bg-[#D9D9D9] w-8 h-8 rounded-full absolute left-0 shadow-md'></div>
                <div className='bg-[#D9D9D9] w-8 h-8 rounded-full absolute left-3 shadow-md'></div>
                <div className='bg-[#D9D9D9] w-8 h-8 rounded-full absolute left-6 shadow-md'></div>
                <div className='bg-[#D9D9D9] w-8 h-8 rounded-full absolute left-9 shadow-md'></div>
              </div>



            </div>

          </div>
        </div>



        

        {/* <div className='bg-red-500 w-fit'>
          <img src={Subtract} alt="" />
        </div>
        <div className='bg-red-500 w-fit'>
          <img src={Subtract} alt="" />
        </div> */}

      </div>




    </>
  );
}

export default LiveAction;