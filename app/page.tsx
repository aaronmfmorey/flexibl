import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full w-full flex items-center justify-center">
      <div className="w-[600px] h-[600px] p-8 bg-[#90EE90] rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-[#2E4F2E] mt-8">Flexabl</h1>
        <div className="flex justify-center items-center mt-16">
          <Image
            src="/images/flexabl-logo.svg"
            alt="Flexabl Logo"
            width={200}
            height={200}
            className="text-[#2E4F2E]"
          />
        </div>
        <Link href="/routines">
          <button className="mt-12 px-8 py-3 bg-[#2E4F2E] text-white rounded-lg hover:bg-[#1a2f1a] transition-colors">
            Choose a routine
          </button>
        </Link>
      </div>
    </main>
  );
}
