import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="p-5 flex-flex-col space-y-5">
      <div className="text-3xl font-bold">
        Monitoring harga komoditas indonesia
      </div>
      <Link
        href={"/komoditas/"}
        className="px-4 py-2 mt-5 bg-green-600 rounded-lg font-bold text-white"
      >
        Explore
      </Link>
    </div>
  );
}
