import CheckBoxSection from "@/components/checkboxes/CheckBoxSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen">
        {/* <Image
          src="/gifs/anime_running_t_1.gif"
          alt="Description of the image"
          width={500}
          height={500}
        /> */}
        <h1 className="text-4xl text-[#ffb0f4] font-bold">Welcome to AniChoice</h1>
        <Link href="/play">Go to Play Page</Link>
      </div>
      <CheckBoxSection />
    </main>
  );
}
