import CheckBoxSection from "@/components/checkboxes/CheckBoxSection";
import Link from "next/link";

export default function Home() {
  
  return (
    <main>
      hello
      {/* <TestImage /> */}
      <Link href="/play">Go to Play Page</Link>
      <CheckBoxSection />
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
