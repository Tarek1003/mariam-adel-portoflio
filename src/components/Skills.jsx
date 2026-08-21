import { skills } from "./data/skills";

const Skills = () => {
  return (
    <div className='skills-wrapper w-full overflow-hidden sm:overflow-visible'>
      <div className='skills-track flex w-full gap-4 sm:w-full sm:flex-wrap sm:justify-center sm:gap-5'>
        {skills.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className='flex h-48 w-full shrink-0 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 transition-colors duration-300 hover:border-blue-400/40 sm:w-[320px] sm:px-0 md:w-[320px] lg:w-[350px]'>
              <div className='mb-4 flex items-center justify-center gap-3'>
                <Icon className='text-3xl text-blue-400' />
                <h3 className='text-xl font-bold text-white'>{card.title}</h3>
              </div>

              <ul className='space-y-2 text-sm text-gray-300'>
                {card.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>• {skill}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
