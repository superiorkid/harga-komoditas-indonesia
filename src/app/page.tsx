import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Monitoring harga komoditas indonesia
      </h1>
      <button className="p-2 bg-green-600">Explore</button>
    </div>
  );
}
