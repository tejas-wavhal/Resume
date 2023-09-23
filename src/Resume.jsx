import React from 'react'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot, FaMobileScreen } from 'react-icons/fa6'
import { FaBirthdayCake, FaReact } from 'react-icons/fa'
import { BsBagCheck, BsGit } from 'react-icons/bs'
import { TbBrandNextjs } from 'react-icons/tb'
import { LuBrain, LuGamepad2 } from 'react-icons/lu'
import { AiFillGithub, AiFillHtml5, AiFillLinkedin } from 'react-icons/ai'
import { RiGraduationCapFill } from 'react-icons/ri'
import { IoLogoCss3 } from 'react-icons/io'
import { GiBiceps } from 'react-icons/gi'
import { FcGoogle, FcLinux } from 'react-icons/fc'
import { SiExpress, SiNestjs, SiTailwindcss } from 'react-icons/si'
import { BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoTypescript } from 'react-icons/bi'


const Resume = () => {
  return (
    <section className='flex flex-col lg:w-[50rem] text-sm mx-auto'>
      <div className='w-full bg-main2 text-center text-2xl p-2 text-white font-semibold'>
        RESUME BUILD USING HTML, CSS, REACT JS
      </div>
      <header className='bg-main text-white flex gap-x-5 p-5 relative'>


        <div className='flex flex-col w-[45%] gap-y-1'>
          <h1 className='text-2xl font-medium'>Tejas Wavhal</h1>
          <p className='text-main2 text-lg font-medium'>Full Stack Web Developer</p>
          <a className='text-main2 mb-0.5 underline underline-offset-4' href="https://www.tejaswavhal.com/">www.tejaswavhal.com</a>
          <p className='text-sm text-justify'>Seeking for new opportunities and challenges as
            a Full Stack Developer to prove my skills and
            ability. I am ambitious, passionate, quick learner,
            curious person who always looking to learn new
            things.</p>
        </div>

        <img className='h-32 w-32 rounded-full border-4 border-white relative top-32' src="https://tejaswavhal.com/_next/image?url=%2FProfile.jpg&w=384&q=75" alt="profile" />

        <div className='flex flex-col items-end justify-start gap-y-3 text-xs'>
          <div className='flex items-center gap-x-2'>
            <h1>tejas.wavhal01@gmail.com</h1>
            <MdEmail className="text-main2 text-xl" />
          </div>
          <div className='flex items-center gap-x-2'>
            <h1>+919595354338</h1>
            <FaMobileScreen className="text-main2 text-xl" />
          </div>
          <div className='flex items-center gap-x-2'>
            <h1>Wagholi, Pune, Maharashtra</h1>
            <FaLocationDot className="text-main2 text-xl" />
          </div>
          <div className='flex items-center gap-x-2'>
            <h1>September 16, 2000</h1>
            <FaBirthdayCake className="text-main2 text-xl" />
          </div>
          <div className='flex items-center gap-x-2'>
            <h1><a href="https://www.linkedin.com/in/tejas-wavhal-a69872198/">Open LinkedIn</a></h1>
            <AiFillLinkedin className="text-main2 text-xl" />
          </div>
          <div className='flex items-center gap-x-2'>
            <h1><a href="https://github.com/tejas-wavhal">Open GitHub</a></h1>
            <AiFillGithub className="text-main2 text-xl" />
          </div>
        </div>
      </header>
      <div className='flex'>
        <div className='bg-main -z-10 h-10 w-[60%] rotate-3 relative -top-6'></div>
        <div className='bg-main -z-10 h-10 w-[40%] -rotate-6 relative -top-6'></div>
      </div>




      <main className='flex relative -z-50'>
        <section className='bg-gray-200 w-[65%] min-h-screen p-6 relative -top-16 pt-20'>

          <div>
            <div className='flex items-center gap-x-2'>
              <div className='bg-main p-2 w-fit rounded-lg'>
                <BsBagCheck className='text-white text-xl' />
              </div>
              <h1 className='text-main font-bold'>WORK EXPERIENCE</h1>
            </div>
            <div>
              <div className='space-y-1 mt-4'>
                <h1 className='font-bold'>WowVenues (Internship)</h1>
                <h2 className='text-xs'><b>Location:</b> Bangalore (Remote)</h2>
                <h3 className='text-xs'>July 06 2023 - September 16 2023 <span className='font-bold'>(2 Months)</span></h3>
              </div>

              <div className='text-[0.650rem] leading-tight my-2'>
                <h1 className='text-sm font-semibold mb-1'>Achievements</h1>
                <ul className='list-disc space-y-1.5 text-justify'>
                  <li>Worked as a Full Stack Developer intern at WowVenues<a className='text-blue-700 font-bold' href="https://wowvenues.in/">(wowvenues.in)</a>, a leading platform for event venue booking, contributing to the development of its web application.</li>
                  <li>Collaborated with a dynamic team of developers to create an efficient and user-friendly platform for venue booking, enhancing the overall user experience.</li>
                  <li>Utilized a diverse set of technologies, including React, HTML, CSS, Node.js, Nest.js, and PostgreSQL, to build and maintain various features of the application.</li>
                  <li>Played a pivotal role in implementing and troubleshooting features such as Venues Searching, Adding Venues to Wishlist, Filter Venues, Adding reviews to Venues.</li>
                  <li>Worked closely with senior developers to learn best practices in software development, ensuring code quality and maintainability.</li>
                </ul>
              </div>
            </div>

            <div>
              <div className='space-y-1 mt-7'>
                <h1 className='font-bold'>Freelance Web Developer</h1>
                <h3 className='text-xs'>June 01 2023 - July 03 2023 <span className='font-bold'>(1 Months)</span></h3>
              </div>

              <div className='text-[0.650rem] leading-tight my-2'>
                <ul className='list-disc space-y-1.5 text-justify'>
                  <li>Successfully freelanced for 1 month, independently creating the "Its Street Coffee" official website <a className='text-blue-700 font-bold' href="https://itsstreetcoffee.com/">(itsstreetcoffee.com)</a>.</li>
                  <li>Designed and developed the website with a focus on a captivating UI/UX design and achieved a strong SEO score.</li>
                  <li>Utilized Next.js, React.js, Node.js, Mongo DB, and Tailwind CSS to build a high-performance, responsive web application.</li>
                  <li>Applied SEO best practices, resulting in increased online visibility, particularly on the Franchise page, and a surge in user engagement.</li>
                  <li>Deployed <a className='text-blue-700 font-bold' href="https://itsstreetcoffee.com/">itsstreetcoffee.com</a> on the DigitalOcean platform, ensuring reliable hosting and performance.</li>
                </ul>
              </div>
            </div>
          </div>


          <div>
            <div className='flex items-center gap-x-2 mt-10'>
              <div className='bg-main p-2 w-fit rounded-lg'>
                <RiGraduationCapFill className='text-white text-xl' />
              </div>
              <h1 className='text-main font-bold'>EDUCATION</h1>
            </div>
            <div>
              <div className='space-y-0.5 mt-3.5'>
                <h1 className='font-medium'>Swami Vivekanada Institute of Technology</h1>
                <h1 className='font-semibold text-main2'>BE Computer Engineering (2023) <span className='text-black/80'>- 82.75%</span></h1>
              </div>
            </div>
            <div>
              <div className='space-y-0.5 mt-3.5'>
                <h1 className='font-medium'>Bhartiya Jain Santha (BJS) College </h1>
                <h1 className='font-semibold text-main2'>HSC <span className='text-black/80'>- 56%</span></h1>
              </div>
            </div>
            <div>
              <div className='space-y-0.5 mt-3.5'>
                <h1 className='font-medium'>Holy Angels Convent High School  </h1>
                <h1 className='font-semibold text-main2'>SSC<span className='text-black/80'>- 63%</span></h1>
              </div>
            </div>
          </div>


        </section>




        <section className='bg-gray-100 w-[35%] min-h-screen p-6 relative -top-16 pt-20'>

          <div>
            <div className='flex items-center gap-x-2 mb-4'>
              <div className='bg-main p-2 w-fit rounded-lg'>
                <LuBrain className='text-white text-xl' />
              </div>
              <h1 className='text-main font-bold'>SKILLS</h1>
            </div>

            <div className='space-y-1.5'>

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-1 px-3 rounded-full'>
                <AiFillHtml5 className='text-xl text-red-600' />
                <h1>HTML 5</h1>
              </div>

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-1 px-3 rounded-full'>
                <IoLogoCss3 className='text-xl text-blue-600' />
                <h1>CSS 3</h1>
              </div>

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-1 px-3 rounded-full'>
                <SiTailwindcss className='text-xl text-sky-500' />
                <h1>Tailwind CSS</h1>
              </div>

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-1 px-3 rounded-full'>
                <BiLogoJavascript className='text-xl text-yellow-500' />
                <h1>JavaScript</h1>
              </div>

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-1 px-3 rounded-full'>
                <BiLogoTypescript className='text-xl text-blue-600' />
                <h1>Typescript</h1>
              </div>

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-1 px-3 rounded-full'>
                <FaReact className='text-xl text-sky-600' />
                <h1>React Js</h1>
              </div>

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-1 px-3 rounded-full'>
                <TbBrandNextjs className='text-xl' />
                <h1>Next Js 13</h1>
              </div>

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-1 px-3 rounded-full'>
                <BiLogoNodejs className='text-xl text-lime-600' />
                <h1>Node Js</h1>
              </div>

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-1 px-3 rounded-full'>
                <SiExpress className='text-xl' />
                <h1>Express Js</h1>
              </div>

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-1 px-3 rounded-full'>
                <BiLogoMongodb className='text-xl text-lime-600' />
                <h1>MongoDB</h1>
              </div>

              {/* <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-1 px-3 rounded-full'>
                <SiNestjs className='text-xl text-red-600' />
                <h1>Nest Js</h1>
              </div> */}

              {/* <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-1 px-3 rounded-full'>
                <FcLinux className='text-xl' />
                <h1>Linux Commands</h1>
              </div> */}

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-1 px-3 rounded-full'>
                <BsGit className='text-xl text-orange-600' />
                <h1>Git</h1>
              </div>

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-1 px-3 rounded-full'>
                <FcGoogle className='text-xl text-lime-600' />
                <h1>SEO</h1>
              </div>

            </div>

          </div>


          <div>
            <div className='flex items-center gap-x-2 mt-7 mb-2'>
              <div className='bg-main p-2 w-fit rounded-lg'>
                <LuGamepad2 className='text-white text-xl' />
              </div>
              <h1 className='text-main font-bold'>INTERESTS</h1>
            </div>
            <span className='text-xs'> Chess, Artificial Intelligence, Traveling, Video Games, Reading Books.</span>
          </div>


          <div>
            <div className='flex items-center gap-x-2 mt-7 mb-2'>
              <div className='bg-main p-2 w-fit rounded-lg'>
                <GiBiceps className='text-white text-xl' />
              </div>
              <h1 className='text-main font-bold'>STRENGTHS</h1>
            </div>
            <span className='text-xs'> Problem Solving, Eager to learn new Skills, Fast Learner, Collaborative, Team Work.</span>
          </div>


        </section>
      </main>

    </section>
  )
}

export default Resume