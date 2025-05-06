import Image from "next/image";
import routinesData from "../data/routines.json";
import Link from "next/link";

export default function Routines() {
  return (
    <main className="h-full w-full flex items-center justify-center">
      <div className="w-[600px] h-[600px] p-8 bg-[#90EE90] rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-[#2E4F2E] mt-8">Routines</h1>
        <div className="flex justify-center items-center mt-8">
          <Image
            src="/images/flexabl-logo.svg"
            alt="Flexabl Logo"
            width={100}
            height={100}
            className="text-[#2E4F2E]"
          />
        </div>
        <div className="mt-8 flex flex-col gap-4">
          {routinesData.routines.map((routine) => (
            <Link 
              key={routine.id} 
              href={`/routines/${routine.id}`}
              className="block"
            >
              <button className="w-full px-8 py-3 bg-[#2E4F2E] text-white rounded-lg hover:bg-[#1a2f1a] transition-colors">
                {routine.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 