import Link from "next/link";
import React from "react";

export const HeroSection = () => {
  return (
    <section>
      <div className="flex flex-col md:items-start gap-8 py-16 w-4/5 max-w-5xl  mx-auto text-center md:text-left">
        <div className="relative">
          <span className="absolute left-1/2 -bottom-2  -translate-x-1/2 rotate-45  bg-black w-6 h-6" />
          <span className="font-bold text-white bg-black py-2 px-4 rounded-lg relative">
            WOW
          </span>
        </div>
        <h2 className="font-black text-6xl leading-[1.2] break-keep">
          Hello World!
        </h2>
        <p className="font-light font-xl text-gray-400 break-keep md:max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eligendi
          autem praesentium dolor, quae eveniet neque unde officiis. Cumque,
          aliquam? Impedit distinctio aliquid recusandae odio rem nulla libero
          cupiditate tempora?
        </p>
        <div>
          <Link href={"/about"}>
            <button className="px-4 py-2 border border-black rounded-3xl font-semibold hover:bg-black hover:text-white">
              About Me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
