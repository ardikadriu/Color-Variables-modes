import Image from "next/image";
import Firstcontainer from "./components/Firstcontainer";
import Secondcontainer from "./components/Secondcontainer";

export default function Home() {
  return (
    <main className="flex items-center gap-x-[77px]">
      <Firstcontainer />
      <Secondcontainer />
    </main>
  );
}
