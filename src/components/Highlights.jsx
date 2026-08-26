import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { carosulImages } from "./data/CarosulImages.js";
import { div } from "framer-motion/client";
import Reveal from "./Reveal";

const Highlights = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  return (
    <main
      className='relative min-h-screen overflow-hidden bg-black px-4 py-7 sm:px-6 md:px-10 md:py-10 lg:px-16 xl:px-20'
      id='high-light'>
      <Reveal>
        <h1 className='mx-auto w-fit border-b-4 border-blue-400/40 pb-2.5 text-2xl font-bold text-gray-400 sm:text-3xl md:text-4xl lg:text-5xl'>
          Training in action
        </h1>
      </Reveal>
      <Reveal>
        {" "}
        <div className='relative  w-full'>
          <img
            src={carosulImages[currentIndex]}
            className='mx-auto  w-3/4  py-7 '
          />
          <button
            className='text-gray-400 hover:text-blue-400 -translate-y-1/2 left-2 text-4xl md:text-5xl absolute top-1/2 rounded-full '
            onClick={() =>
              setcurrentIndex((prev) => (prev + 1) % carosulImages.length)
            }>
            <FaAngleLeft />
          </button>
          <button
            className='text-gray-400 hover:text-blue-400 -translate-y-1/2 right-2 text-4xl md:text-5xl absolute top-1/2 rounded-full '
            onClick={() =>
              setcurrentIndex((prev) => (prev + 1) % carosulImages.length)
            }>
            <FaAngleRight />
          </button>
          <div className='flex justify-center items-center gap-2 '>
            {carosulImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setcurrentIndex(index)}
                className={` rounded-full transition-all duration-300  hover:bg-blue-400 ${index === currentIndex ? "h-3 w-3 bg-blue-400" : "h-2.5 w-2.5 bg-gray-400"}`}></button>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal>
        {" "}
        <div>
          <p className='pt-2.5 text-center text-base text-white sm:text-xl'>
            Highlights from sessions I facilitated and supported, combining
            structured learning content with interactive experiences to support
            participant engagement and learning outcomes.{" "}
          </p>
        </div>
      </Reveal>
    </main>
  );
};

export default Highlights;
