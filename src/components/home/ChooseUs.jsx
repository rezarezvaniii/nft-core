import React from "react";
import starSvg from "../../assets/Star 7.svg"
import blurbg from "../../assets/Group 1261152705.png"
import leftShine from "../../assets/Ellipse 71.png"
import rightShine from "../../assets/Ellipse 72.png"




const ChooseUs = () => {
  return (
    <>
      <div className="w-full  h-[528px] flex ">





        <div className="w-full h-full -z-50 relative blur-sm">
          <img className="absolute w-1/4 top-16 left-48" src={blurbg} alt="" />
          {/* <img className="absolute right-0 top-0 w-64" src={rightShine} alt="" /> */}
          <img className="absolute w-[500px] left-0 -bottom-64" src={leftShine} alt="" />
          <img className="absolute w-[500px] right-0 -bottom-0" src={rightShine} alt="" />

          {/* <p className="text-white z-30">fkahsdlf</p> */}

        </div>
        <div className="w-1/2 h-full absolute right-0 ">
          <div className="flex flex-col gap-8">
            <h1 className="font-semibold text-5xl text-white mt-32">
              Why choose us?
            </h1>
            <p className="font-normal text-xl w-4/6 text-white">
              Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. Eros suspendisse varius enim ultrices  isque et quis ctumst. Feugiat amet velit faucibus amet
            </p>
            <p className="font-normal text-xl w-4/6 text-white">
              Eu feugiat adipiscing viverrfeugiat. Mollis tellus malesuada massa amet lacinia aliquamid ultrices vitae.
            </p>
            <button className='text-base w-fit font-medium text-white bg-[#15BFFD] rounded-3xl p-2 border-[1px] border-[#15BFFD] '>
            Connect Wallet
          </button>

          </div>
        </div>


      </div>


    </>
  );
}

export default ChooseUs;