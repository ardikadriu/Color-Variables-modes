import Image from "next/image";
import icons from "@/public/Image.png";
const Secondcontainer = () => {
  return (
    <div>
      <Image src={icons} width={710} height={808} alt="icons" />
    </div>
  );
};

export default Secondcontainer;
