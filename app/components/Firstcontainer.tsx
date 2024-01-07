import Image from "next/image";
import Icon from "@/public/Icon.png";
import { FaPlay } from "react-icons/fa";

const Firstcontainer = () => {
  return (
    <div>
      <Image src={Icon} width={114} height={97} alt="icon" />
      <h1 className="font-Firasans text-[80px] max-w-[578px] leading-[77px] font-normal ">
        <span className="font-semibold">color variables</span> & modes{" "}
      </h1>
      <p className="max-w-[590px]  text-[28px] font-medium text-[#202023] font-Firasans">
        A simple step-by-step guide on how to use the power of color variables &
        modes to auto-magically change the color of a logo.
      </p>
      <button className="flex items-center bg-[#1E1E1E] text-[#D0D6F7] py-[12px] px-[16px] my-[48px] text-[28px]">
        See it in Acction <FaPlay className="ml-[5px]" />
      </button>
    </div>
  );
};

export default Firstcontainer;
