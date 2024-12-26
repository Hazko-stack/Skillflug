import Link from "next/link";

export default function Home() {
  return (
    <div 
      className="relative h-screen flex flex-col justify-center items-start pl-10 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/wave.jpg)' }}
    >
      {/* Floating Book Image: Use order on mobile and absolute positioning on desktop */}
      <img
        src="/images/Book.png"
        alt="Book"
        className="w-48 sm:w-64 md:w-80 lg:w-[35%] xl:w-[40%] transition-transform transform hover:scale-110 animate-float sm:order-1 sm:mb-4 sm:relative lg:absolute lg:bottom-4 lg:right-0"
      />

      {/* Heading "I'M LEARNING WITH" at the top, left-aligned */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-yellow-500 mb-2">
        I'M LEARNING WITH
      </h1>

      {/* Heading "NEW GEN LEARN" at the bottom, left-aligned */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-6">
        NEW GEN LEARN
      </h1>

      {/* Start Studying Button */}
      <Link href="/lesson">
        <button className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg hover:bg-blue-600 transition duration-300">
          Start Studying
        </button>
      </Link>
    </div>
  );
}
