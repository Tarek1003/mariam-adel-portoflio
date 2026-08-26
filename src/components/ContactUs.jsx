import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
const ContactUs = () => {
  return (
    <main
      className=' h-fit overflow-hidden text-white bg-black px-4 py-7 sm:px-6 md:px-10 md:py-10 lg:px-16 xl:px-20'
      id='high-light'>
      <h1 className=' w-fit border-b-4 border-blue-400/40 pb-2.5 text-xl font-bold text-white sm:text-3xl md:text-xl lg:text-2xl'>
        Let's get in touch
      </h1>

      <div className='flex   justify-around md:gap-5 sm:gap-5 max-sm:gap-5 md:flex-col lg:flex-row sm:flex-col max-sm:flex-col'>
        <div className='pt-5 w-1/3'>
          I’m always open to new opportunities, meaningful collaborations, and
          conversations around learning and development. Let’s connect and
          create learning experiences that truly make an impact.{" "}
        </div>
        <div className='pt-5'>
          <p>Contacts</p>

          <ul className='max-sm:text-xl'>
            <li className='mb-4'>
              <FaPhoneAlt className='inline text-blue-400 mr-3.5' />
              +20 01017689924
            </li>
            <li className='mb-4'>
              <MdEmail className='inline text-blue-400 mr-3.5' />
              mariam.ade.sultan@gmail.com
            </li>
            <li>
              <a href='https://www.linkedin.com/in/mariam-adel-25b811243?utm_source=share_via&utm_content=profile&utm_medium=member_ios'>
                <FaLinkedin className='inline text-blue-400 mr-3.5' />
                www.linkedin.com/in/mariam-adel-25b811243
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
