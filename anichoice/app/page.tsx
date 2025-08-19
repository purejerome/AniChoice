import TestCheck from "@/components/checkboxes/TestCheck";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      hello
      {/* <TestImage /> */}
      <Link href="/play">Go to Play Page</Link>
      <TestCheck />
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
