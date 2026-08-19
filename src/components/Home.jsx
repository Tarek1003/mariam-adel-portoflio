
import { BackgroundBeams } from "./ui/background-beams"
import profile from "../assets/mariam.png"
const Home = () => {
  return (
    <main className='relative min-h-screen overflow-hidden bg-black px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20'>
      <BackgroundBeams />

      <div className='relative z-10 flex flex-col-reverse max-sm:flex-col-reverse lg:flex-row  min-h-screen items-center justify-center gap-5 lg:gap-70'>
        <div className="text-center lg:text-left">
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400'>Mariam Adel</h1>
          <p className='text-sm sm:text-base md:text-xl lg:text-xl  text-gray-400'>Instructional designer</p>
          <p className='pt-2.5  text-white text-xs sm:text-sm md:text-base'>
            passionate about creating engaging and impactful learning
            experiences.
          </p>
        </div>

        <div className='relative  w-80 h-80  overflow-hidden  lg:h-150 lg:w-100 '>
          <div className=' inset-0 z-0 bg-gradient-to-r from-gray-300  to-transparent overflow-hidden rounded-full  flex justify-center items-center backdrop-blur-md  '>
            <img src={profile} className='px-10' />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home
