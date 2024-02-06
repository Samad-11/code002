import HeroBanner from "@/components/HeroBanner";
import UiButton from "@/components/UiButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen ">
      <HeroBanner />
      <UiButton value={"Donate"} linkTo={"/donationOption"} />
    </main>
  );
}
