import HeroBanner from "@/components/HeroBanner";
import UiButton from "@/components/UiButton";
import Image from "next/image";
import ele1 from "../../public/ele1.png";

export default function Home() {
  return (
    <main className="w-screen h-screen relative overflow-hidden">
      <HeroBanner />
      <UiButton value={"Donate"} linkTo={"/donationOption"} />
    </main>
  );
}
