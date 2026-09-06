import Skills from "./Skills";
import Reveal from "./Reveal";
import aboutMe from "../assets/IMG_2886.JPG";
const About = () => {
  return (
    <main
      className='relative min-h-screen overflow-hidden bg-zinc-900 px-4 py-7 sm:px-6 md:px-10 md:py-10 lg:px-16 xl:px-20'
      id='about-us'>
      <Reveal>
        <h1 className='mx-auto w-fit border-b-4 border-blue-400/40 pb-2.5 text-2xl font-bold text-gray-400 sm:text-3xl md:text-4xl lg:text-5xl '>
          About-Me
        </h1>
      </Reveal>
      <Reveal>
        <div className='flex w-full items-center justify-center py-10 '>
          <Skills />
        </div>
      </Reveal>
      <Reveal>
        <div className='flex justify-between items-center pt-5 gap-7 flex-col lg:flex-row-reverse  '>
          <div className=' w-full lg:w-1/2'>
            <img src={aboutMe} className='w-full rounded-4xl' />
          </div>
          <div className='text-center bg-linear-to-b from-white/5 to-zinc-900 rounded-4xl border-t  w-full  p-5 lg:p-15 border-blue-400 lg:text-left lg:w-1/2 '>
            <p className='pt-2.5 text-center text-base text-white sm:text-xl md:'>
              I am a fourth-year Pharmacy student at Beni-Suef University with a
              growing passion for learning and development. I have developed a
              strong interest in learning design and facilitation. My journey
              with EPSF, especially within the Training Department, allowed me
              to work on designing training kits, creating learning activities,
              and facilitating sessions. These experiences helped me build
              practical skills in learner engagement, content development, and
              delivering meaningful learning experiences.
            </p>
          </div>
        </div>
      </Reveal>
    </main>
  );
};

export default About;
