import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative h-screen flex flex-col justify-between items-start pt-4 pl-10 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/space.png)' }}
    >
      {/* Top-left content */}
      <div className="absolute top-0 left-10 pt- animate-fade-right">
        {/* Heading "I'M LEARNING WITH" */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-violet-900">
          I'M LEARNING WITH
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-violet-500">
          NEXT GEN LEARN
        </h1>
      </div>

      {/* Planet Image - Center on Mobile */}
      <div className="block sm:hidden absolute inset-0 flex justify-center items-center">
        <img src="/images/planet.png" alt="Planet" className="w-1/2 h-auto animate-float" />
      </div>

      {/* Quote of the Day - Bottom Left */}
      <div className="hidden sm:block absolute bottom-32 left-10 text-left text-violet-600 font-bold animate-fade-right">
        <p className="text-4xl underline">Quote of the Day</p>
        <p className="mt-2 text-xl italic">Don't rush the process,</p>
        <p className="mt-1 text-xl italic">good things take time.</p>
      </div>

      {/* Start Studying Button - Bottom Left */}
      <Link href="/lesson">
        <button className="px-6 py-3 bg-indigo-950 text-white font-semibold text-lg rounded-full fixed bottom-16 left-1/2 transform -translate-x-1/2 sm:left-1/2 md:left-1/4 lg:left-1/3 hover:bg-blue-600 transition duration-300 z-50 ">
          Start Studying
        </button>
      </Link>
    </div>
  );
}
