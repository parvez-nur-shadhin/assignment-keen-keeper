import Image from "next/image";
import Banner from "./Components/Banner";
import CountCard from "./Components/CountCard";
import Friends from "./Components/Friends";

export default function Home() {
  return (
    <div>
      <main>
        <Banner />
        <CountCard />
        <Friends />
      </main>
    </div>
  );
}
