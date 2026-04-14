import Image from "next/image";
import Banner from "./Components/Banner";
import CountCard from "./Components/CountCard";

export default function Home() {
  return (
    <div>
      <main>
        <Banner />
        <CountCard />
      </main>
    </div>
  );
}
