import React from 'react';
import Subtract2 from "../../assets/Subtract2.png"
import ethereumImg from "../../assets/ethereum (1) 1.png"
import CardCreator from './CardCreator';

const Creator = () => {
  return (<>
    <p className="mt-20 gap-5 text-3xl font-semibold text-center flex flex-col text-white w-96 m-auto">Our creator
      <span className="font-normal text-base">
        The largest and unique Super rare NFT marketplace
        For crypto-collectibles
      </span>
    </p>


    <div className='flex flex-wrap justify-evenly mt-10 gap-6'>
      <CardCreator />
      <CardCreator />
      <CardCreator />
      <CardCreator />
      <CardCreator />
      <CardCreator />
      <CardCreator />
      <CardCreator />
      <CardCreator />
      <div className='flex w-full justify-center py-8'>
        <button className='text-base font-medium text-[#15BFFD] rounded-3xl p-2 border-[1px] border-[#15BFFD] '>
          Emerson Philips
        </button>

      </div>
    </div>




  </>);
}

export default Creator;