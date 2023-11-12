import React from 'react';
import LineGradient from "../../assets/Line 98.png"
import Ellipse from "../../assets/Ellipse 77.png"
import LineArrowleft from "../../assets/Line 99.png"
import LineArrowright from "../../assets/Line 100.png"
import leftroundedgra from "../../assets/Vector 33.svg"
import rightroundedgra from "../../assets/Vector 34.svg"
import vectordivbg from "../../assets/Rectangle 9373.png"



const RoadMap = () => {
  return (<>

    <p className="mt-10 gap-5 text-3xl font-semibold text-center flex flex-col text-white w-96 m-auto">Road map 2022
      <span className="font-normal text-base">
        The largest and unique Super rare NFT marketplace
        For crypto-collectibles
      </span>
    </p>


    <div className='w-full  flex mt-16 '>
      <div className='w-[45%] h-full  flex flex-col gap-32 items-end pr-4'>
        <div className='relative w-[510px] h-[224px] flex flex-col gap-5 '>
          <img className='w-[510px] h-[224px] absolute ' src={vectordivbg} alt="" />
          <img className='absolute -right-4 -top-4' src={leftroundedgra} alt="" />
          <p className='font-medium text-xl text-white text-center mt-5'>
            January
          </p>
          <p className='font-semibold text-3xl text-white ml-5'>
            Brief
          </p>
          <span className='font-medium text-base text-[#B4C5CB] mx-5'>
            Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget.
          </span>
        </div>

        <div className='relative w-[510px] h-[224px] flex flex-col gap-5 '>
          <img className='w-[510px] h-[224px] absolute ' src={vectordivbg} alt="" />
          <img className='absolute -right-4 -top-4' src={leftroundedgra} alt="" />
          <p className='font-medium text-xl text-white text-center mt-5'>
            January
          </p>
          <p className='font-semibold text-3xl text-white ml-5'>
            Brief
          </p>
          <span className='font-medium text-base text-[#B4C5CB] mx-5'>
            Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget.
          </span>
        </div>

        <div className='relative w-[510px] h-[224px] flex flex-col gap-5 '>
          <img className='w-[510px] h-[224px] absolute ' src={vectordivbg} alt="" />
          <img className='absolute -right-4 -top-4' src={leftroundedgra} alt="" />
          <p className='font-medium text-xl text-white text-center mt-5'>
            January
          </p>
          <p className='font-semibold text-3xl text-white ml-5'>
            Brief
          </p>
          <span className='font-medium text-base text-[#B4C5CB] mx-5'>
            Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget.
          </span>
        </div>


      </div>
      <div className='w-[10%] h-full  flex justify-center relative mt-24 '>
        <img className='absolute ' src={Ellipse} alt="" />
        <img className='absolute left-0 top-2' src={LineArrowleft} alt="" />
        <img className='absolute top-32' src={Ellipse} alt="" />
        <img className='absolute top-[136px] right-0' src={LineArrowright} alt="" />
        <img className='absolute top-[356px]' src={Ellipse} alt="" />
        <img className='absolute left-0 top-[364px]' src={LineArrowleft} alt="" />
        <img className='absolute top-[484px]' src={Ellipse} alt="" />
        <img className='absolute top-[492px] right-0' src={LineArrowright} alt="" />
        {/* <img className='absolute top-20' src={Ellipse} alt="" /> */}
        <img className='absolute bottom-36' src={Ellipse} alt="" />
        <img className='absolute left-0 bottom-[152px]' src={LineArrowleft} alt="" />
        <img className='absolute bottom-0' src={Ellipse} alt="" />
        <img className='absolute bottom-2 right-0' src={LineArrowright} alt="" />

        <img src={LineGradient} alt="" />

      </div>
      <div className='w-[45%] h-full flex flex-col gap-32 pl-4 '>

      <div className='relative w-[510px] h-[224px] flex flex-col gap-5 mt-32'>
          <img className='w-[510px] h-[224px] absolute ' src={vectordivbg} alt="" />
          <img className='absolute -left-4 -top-4' src={rightroundedgra} alt="" />
          <p className='font-medium text-xl text-white text-center mt-5'>
            January
          </p>
          <p className='font-semibold text-3xl text-white ml-5'>
            Brief
          </p>
          <span className='font-medium text-base text-[#B4C5CB] mx-5'>
            Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget.
          </span>
        </div>

        <div className='relative w-[510px] h-[224px] flex flex-col gap-5'>
          <img className='w-[510px] h-[224px] absolute ' src={vectordivbg} alt="" />
          <img className='absolute -left-4 -top-4' src={rightroundedgra} alt="" />
          <p className='font-medium text-xl text-white text-center mt-5'>
            January
          </p>
          <p className='font-semibold text-3xl text-white ml-5'>
            Brief
          </p>
          <span className='font-medium text-base text-[#B4C5CB] mx-5'>
            Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget.
          </span>
        </div>

        <div className='relative w-[510px] h-[224px] flex flex-col gap-5 mt-6'>
          <img className='w-[510px] h-[224px] absolute ' src={vectordivbg} alt="" />
          <img className='absolute -left-4 -top-4' src={rightroundedgra} alt="" />
          <p className='font-medium text-xl text-white text-center mt-5'>
            January
          </p>
          <p className='font-semibold text-3xl text-white ml-5'>
            Brief
          </p>
          <span className='font-medium text-base text-[#B4C5CB] mx-5'>
            Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget.
          </span>
        </div>



      </div>
    </div>
  </>);
}

export default RoadMap;