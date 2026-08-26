import { presentationGroups } from "../components/data/presentations";
import {
  FiEye,
  FiBookOpen,
  FiCheckCircle,
  FiClipboard,
  FiRefreshCw,
  FiFileText,
  FiUsers,
} from "react-icons/fi";
import Reveal from "./Reveal";

const iconMap = {
  reflection: FiEye,
  content: FiBookOpen,
  implementation: FiCheckCircle,
  planning: FiClipboard,
  adaptability: FiRefreshCw,
  lessonPlan: FiFileText,
  participant: FiUsers,
};

const Presentations = () => {
  return (
    <main
      className='relative min-h-screen overflow-hidden bg-zinc-900 px-4 py-7 sm:px-6 md:px-10 md:py-10 lg:px-16 xl:px-20'
      id='project'>
      <Reveal>
        {" "}
        <h1 className='mx-auto w-fit border-b-4 border-blue-400/40 pb-2.5 text-2xl font-bold text-gray-400 sm:text-3xl md:text-4xl lg:text-5xl'>
          Project Showcase
        </h1>
        <p className='py-5 mx-auto text-center text-base text-white sm:text-xl'>
          A collection of projects I worked on throughout my L&D journey
        </p>
      </Reveal>
      <Reveal>
        {" "}
        <div className='flex flex-col pt-10 gap-12'>
          {presentationGroups.map((group) => (
            <div key={group.id}>
              <h2 className='mb-5 mx-auto text-2xl font-bold text-white'>
                {group.groupTitle}
              </h2>

              <div className='grid  grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                {group.items.map((item) => {
                  const IconComponent = iconMap[item.icon];

                  return (
                    <a
                      key={item.id}
                      href={`/files/${item.fileName}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex  h-48 w-full flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition-colors duration-300 hover:border-blue-400/40'>
                      <IconComponent className='text-4xl text-blue-400' />
                      <h3 className='text-lg font-bold text-white'>
                        {item.title}
                      </h3>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </main>
  );
};

export default Presentations;