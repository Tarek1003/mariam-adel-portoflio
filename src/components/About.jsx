import Skills from "./Skills";

const About = () => {
  return (
    <main
      className='relative min-h-screen overflow-hidden bg-zinc-900 px-4 py-7 sm:px-6 md:px-10 md:py-10 lg:px-16 xl:px-20'
      id='about-us'>
      <h1 className='mx-auto w-fit border-b-4 border-blue-400/40 pb-2.5 text-2xl font-bold text-gray-400 sm:text-3xl md:text-4xl lg:text-5xl'>
        About-Me
      </h1>

      <div className='flex w-full items-center justify-center py-10'>
        <Skills />
      </div>

      <div className='text-center lg:text-left'>
        <p className='pt-2.5 text-center text-base text-white sm:text-xl'>
          I am a fourth-year Pharmacy student at Beni-Suef University with a
          growing passion for learning and development. I have developed a
          strong interest in learning design and facilitation. My journey with
          EPSF, especially within the Training Department, allowed me to work on
          designing training kits, creating learning activities, and
          facilitating sessions. These experiences helped me build practical
          skills in learner engagement, content development, and delivering
          meaningful learning experiences.
        </p>
      </div>
    </main>
  );
};

export default About;
