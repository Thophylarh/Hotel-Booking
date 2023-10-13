import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="text-2xl text-red-600">
      <div>Hello world</div>
    </main>
  );
}
