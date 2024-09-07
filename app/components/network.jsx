"use client";
import Lady from "@/public/lady.svg";
import Image from "next/image";
import Man from "@/public/man.svg";

const Network = () => {
  return (
    <div className="flex justify-between w-[100vw] px-[4em] py-[2em] items-center bg-gray-100">
      {/* Left Side (Text and Button) */}
      <div className="flex flex-col gap-[2em] w-[50%]">
        <h1 className="font-cocon font-bold text-[50px] leading-[48.64px]">
          Go for Community and Networking
        </h1>
        <p className="font-manrope font-normal text-[16px] text-[#00000099]">
          Join a vibrant community of like-minded students and gain access to
          valuable networking opportunities.
        </p>
        <button className="bg-green-800 text-white w-[12em] p-5 rounded-full font-manrope font-normal text-[16px]">
          Network Now
        </button>
      </div>

      {/* Right Side (Images) */}
      <div className="w-[50%] flex flex-col relative">
        {/* Male Image */}
        <div className="z-10 ml-[2em] flex">
          <div>
            <Image src={Lady} alt="Man image" />
          </div>
          <div className="flex bg-white rounded-full h-[3.25em] py-3 pl-1 pr-5 gap-3 items-center justify-center -ml-[7em] mt-[3em] w-[10.5em]">
            <span className="bg-green-900 text-white rounded-full py-2 px-4 flex items-center">
              J
            </span>
            <span className="text-center justify-center items-center flex ">
              James Ade
            </span>
          </div>
        </div>

        {/* Lady Image (moved up with negative margin) */}
        <div className="flex  items-end -mt-[3em] ml-[5em] relative z-0">
          <div className="flex bg-black rounded-full h-[3.25em] py-3 pl-2 -mr-[7em] pr-5 gap-3  z-10 items-center justify-center  mb-[5em]">
            <span className="bg-orange-700 text-white rounded-full py-2 px-4 flex items-center">
              G
            </span>
            <span className="text-center text-white justify-center items-center flex ">
              Gale Hillman
            </span>
          </div>
          <div className="flex flex-col">
            <Image src={Man} alt="Lady image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;