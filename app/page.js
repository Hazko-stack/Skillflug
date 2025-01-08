"use client"; 

import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative h-screen flex flex-col justify-between items-start pt-4 pl-10 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/space.png)' }}
    >
      <div className="absolute top-20 left-10 pt- animate-fade-right">
        <h1 className="text-4xl sm:text-5xl md:text-4xl font-montserrat font-extrabold text-violet-500">
          I AM LEARNING WITH
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bilya font-semibold text-violet-900">
          SKILLFLUG
        </h1>
      </div>

      <div className="block sm:hidden absolute inset-0 flex justify-center items-center">
        <img
          src="/images/planet.png"
          alt="Planet"
          className="w-1/2 h-auto motion-scale-in-[0.5] motion-translate-x-in-[-120%] motion-translate-y-in-[-60%] motion-opacity-in-[33%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-delay-[0.38s]/scale motion-duration-[0.38s]/opacity motion-duration-[1.20s]/rotate motion-duration-[0.15s]/blur motion-delay-[0.60s]/blur motion-ease-spring-bouncier "
        />
      </div>

      <div className="hidden sm:block absolute bottom-20 left-10 text-left text-violet-600 font-bold -motion-translate-x-in-100 motion-translate-y-in-75">
        <p className="text-4xl underline font-montserrat font-semibold italic">Quote of the Day</p>
        <p className="mt-2 text-xl italic font-montserrat font-semibold">Don't rush the process,</p>
        <p className="mt-1 text-xl italic font-montserrat font-semibold">good things take time.</p>
      </div>

      <Link href="/lesson">
        <button
          className="px-6 py-3 bg-indigo-950 text-white font-semibold text-lg rounded-full fixed left-1/2 transform -translate-x-1/2 hover:bg-blue-600 transition duration-300 z-50 bottom-16 sm:bottom-0 md:bottom-16 lg:bottom-6 lg:left-1/3"
        >
          Start Studying
        </button>
      </Link>
    </div>
  );
}
