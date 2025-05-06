import Image from "next/image";
import routinesData from "../../data/routines.json";
import Link from "next/link";

export default function RoutinePage({ params }: { params: { id: string } }) {
  const routine = routinesData.routines.find((r) => r.id === params.id);

  if (!routine) {
    return (
      <main className="h-full w-full flex items-center justify-center">
        <div className="w-[600px] h-[600px] p-8 bg-[#90EE90] rounded-2xl shadow-lg text-center">
          <h1 className="text-3xl font-bold text-[#2E4F2E] mt-8">Routine Not Found</h1>
          <Link href="/routines">
            <button className="mt-8 px-8 py-3 bg-[#2E4F2E] text-white rounded-lg hover:bg-[#1a2f1a] transition-colors">
              Back to Routines
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="h-full w-full flex items-center justify-center">
      <div className="w-[600px] h-[600px] p-8 bg-[#90EE90] rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-[#2E4F2E] mt-8">{routine.name}</h2>
        <div className="flex justify-center items-center mt-8">
          <Image
            src="/images/flexabl-logo.svg"
            alt="Flexabl Logo"
            width={100}
            height={100}
            className="text-[#2E4F2E]"
          />
        </div>
        <div className="mt-8 text-left">
          <p className="text-[#2E4F2E] mb-4">{routine.description}</p>
          <p className="text-[#2E4F2E] mb-4">Duration: {routine.duration}</p>
          <p className="text-[#2E4F2E] mb-4">Difficulty: {routine.difficulty}</p>
          <p className="text-[#2E4F2E] mb-4">Focus areas: {routine.focus.join(", ")}</p>
        </div>
        <Link href="/routines">
          <button className="mt-8 px-8 py-3 bg-[#2E4F2E] text-white rounded-lg hover:bg-[#1a2f1a] transition-colors">
            Back to Routines
          </button>
        </Link>
      </div>
    </main>
  );
} 