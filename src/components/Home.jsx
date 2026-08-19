
import { BackgroundBeams } from "./ui/background-beams"
import profile from "../assets/mariam.png"
const Home = () => {
  return (
    <main className='relative min-h-screen overflow-hidden bg-black px-24'>
      <BackgroundBeams />

      <div className='relative z-10 flex sm:flex-col-reverse md:flex-row  min-h-screen items-center justify-center gap-20'>
        <div>
          <h1 className='text-5xl font-bold text-blue-400'>Mariam Adel</h1>
          <p className='text-2xl text-gray-400'>Instructional designer</p>
          <p className='pt-2.5 text-2xl text-white'>
            passionate about creating engaging and impactful learning
            experiences.
          </p>
        </div>

        <div className='relative w-fit overflow-hidden h-150 '>
          <div className=' inset-0 z-0 bg-linear-to-br from-gray-300  to-transparent overflow-hidden rounded-full  flex justify-center items-center backdrop-blur-md  '>
            <img src={profile} className='px-10' />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home
