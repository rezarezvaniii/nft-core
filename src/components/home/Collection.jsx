import React from 'react';
import notextsvg from "../../assets/Frame 1261152803.svg"



const Collection = () => {
  return (<>
    <p className="mt-10 gap-5 text-3xl font-semibold text-center flex flex-col text-white w-96 m-auto">Top Collection
      <span className="font-normal text-base">
        The largest and unique Super rare NFT marketplace
        For crypto-collectibles
      </span>
    </p>

    <div className='w-full flex justify-evenly mt-8'>
      <div className='w-[25%] h-[455px] relative '>
        <img className='absolute -z-30 ' src={notextsvg} alt="" />

        <div className='w-full justify-between flex flex-col h-full p-5'>
          <p className='w-full flex flex-col text-base font-normal text-[#B4C7CE] gap-3'>
            Created by
            <span className='flex gap-3 text-base font-semibold text-[#15BFFD]'>
              <div className='bg-[#D9D9D9] w-6 h-6 rounded-full'>
              </div>
              James Watson
            </span>
          </p>


          <p className='flex flex-col gap-3 text-2xl font-semibold text-white pb-3'>
            Punk Art Collection
            <p className='flex text-base font-normal text-[#ACACAC] '>
              Created by
              <span className='font-semibold text-base text-[#15BFFD] pl-1'>
                James Watson
              </span>
            </p>

          </p>




        </div>

      </div>

      <div className='w-[25%] h-[455px] relative '>
        <img className='absolute -z-30 ' src={notextsvg} alt="" />

        <div className='w-full justify-between flex flex-col h-full p-5'>
          <p className='w-full flex flex-col text-base font-normal text-[#B4C7CE] gap-3'>
            Created by
            <span className='flex gap-3 text-base font-semibold text-[#15BFFD]'>
              <div className='bg-[#D9D9D9] w-6 h-6 rounded-full'>
              </div>
              James Watson
            </span>
          </p>


          <p className='flex flex-col gap-3 text-2xl font-semibold text-white pb-3'>
            Punk Art Collection
            <p className='flex text-base font-normal text-[#ACACAC] '>
              Created by
              <span className='font-semibold text-base text-[#15BFFD] pl-1'>
                James Watson
              </span>
            </p>

          </p>




        </div>

      </div>
      <div className='w-[25%] h-[455px] relative '>
        <img className='absolute -z-30 ' src={notextsvg} alt="" />

        <div className='w-full justify-between flex flex-col h-full p-5'>
          <p className='w-full flex flex-col text-base font-normal text-[#B4C7CE] gap-3'>
            Created by
            <span className='flex gap-3 text-base font-semibold text-[#15BFFD]'>
              <div className='bg-[#D9D9D9] w-6 h-6 rounded-full'>
              </div>
              James Watson
            </span>
          </p>


          <p className='flex flex-col gap-3 text-2xl font-semibold text-white pb-3'>
            Punk Art Collection
            <p className='flex text-base font-normal text-[#ACACAC] '>
              Created by
              <span className='font-semibold text-base text-[#15BFFD] pl-1'>
                James Watson
              </span>
            </p>

          </p>




        </div>

      </div>


    </div>
    <div className='flex w-full justify-center py-8'>
      <button className='text-base font-medium text-[#15BFFD] rounded-3xl p-2 border-[1px] border-[#15BFFD] '>
      Emerson Philips
      </button>

    </div>







  </>);
}

export default Collection;