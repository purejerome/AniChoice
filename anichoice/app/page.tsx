import Image from "next/image";
import TestImage from "@/components/TestImage";

export default function Home() {
  return (
    <main>
      hello
      <TestImage />
      {/* <Image
        src="https://picsum.photos/200/300"
        alt="Test image"
        unoptimized
        fill
        objectFit="contain"
      /> */}
    </main>
  );
}
