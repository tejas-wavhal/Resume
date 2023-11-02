import React from 'react'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot, FaMobileScreen } from 'react-icons/fa6'
import { FaBirthdayCake, FaReact } from 'react-icons/fa'
import { BsBagCheck, BsGit } from 'react-icons/bs'
import { TbBrandNextjs } from 'react-icons/tb'
import { LuBrain, LuGamepad2 } from 'react-icons/lu'
import { AiFillGithub, AiFillHtml5, AiFillLinkedin, AiOutlineArrowRight } from 'react-icons/ai'
import { RiGraduationCapFill } from 'react-icons/ri'
import { IoLogoCss3 } from 'react-icons/io'
import { CgTemplate } from 'react-icons/cg'
import { GiBiceps } from 'react-icons/gi'
import { FcGoogle, FcLinux } from 'react-icons/fc'
import { SiExpress, SiNestjs, SiTailwindcss } from 'react-icons/si'
import { BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoTypescript } from 'react-icons/bi'


const Resume = () => {
  return (
    <main className='flex flex-col lg:w-[50rem] text-sm mx-auto'>
      <div className='w-full bg-main2 text-center text-xl p-2 text-white font-semibold'>
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




      <section className='flex relative -z-50'>
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
                <h1 className='font-semibold'><b className='font-bold'>TreeVed </b> - (Full Time)</h1>
                <h2 className='text-xs'><span className='font-semibold'>Location:</span> Jaipur (Remote)</h2>
                <h3 className='text-xs'>Joined at September 16 2023 <span className='font-bold'>(Currently Working)</span></h3>
              </div>

              <div className='text-[0.650rem] leading-tight my-2'>
                <ul className='list-disc space-y-1.5 text-justify'>
                  <li>At TreeVed, a dynamic social network platform, I played a vital role as a frontend developer. My focus was on developing the browser extension using Next.js, contributing to the platform's innovation and user experience.</li>

                  <li>As a frontend developer at TreeVed, I specialized in Next.js to enhance the platform's user interaction. This role allowed me to contribute to the platform's continuous improvement and user satisfaction.</li>
                </ul>
              </div>
            </div>
            <div>

              <div className='space-y-1 mt-4'>
                <h1 className='font-semibold'><b className='font-bold'>WowVenues</b> - (Full Time Intern)</h1>
                <h2 className='text-xs'><b>Location:</b> Bangalore (Remote)</h2>
                <h3 className='text-xs'>July 06 2023 - September 16 2023 <span className='font-bold'>(3 Months)</span></h3>
              </div>

              <div className='text-[0.650rem] leading-tight my-2'>
                <ul className='list-disc space-y-1.5 text-justify'>
                  <li>At WowVenues <a className='text-blue-700 font-bold' href="https://wowvenues.in/">(wowvenues.in)</a>, I was the first developer, participating in full-stack development, including building, programming, and optimizing with React.js, Tailwind CSS, Node.js, and PostgreSQL.</li>
                  <li>Senior developers have guided me, ensuring code quality and best practices while maintaining and upgrading the platform.</li>
                  <li>My role at WowVenues involved standardizing and streamlining tech solutions, addressing issues, and problem-solving to improve overall performance.</li>
                </ul>
              </div>
            </div>

            <div>
              <div className='space-y-1 mt-7'>
                <h1 className='font-semibold'><b className='font-bold'>Freelance Web Developer </b> - (Part Time)</h1>
                <h3 className='text-xs'>April 01 2022 - July 03 2023 <span className='font-bold'>(1 Year)</span></h3>
              </div>

              <div className='text-[0.650rem] leading-tight my-2'>
                <ul className='list-disc space-y-1.5 text-justify'>
                  <li>In my freelancing experience, I've created web applications from scratch to deployment, including the official web app for <a className='text-blue-700 font-bold' href="https://itsstreetcoffee.com/">itsstreetcoffee.com</a>.</li>
                  <li>Applied SEO best practices, resulting in 30% increase of franchise sales by online visibility, on the Franchise page, and a surge in user engagement.</li>
                  <li>I've designed and built various landing pages and applications and deployed, such as the one for <a className='text-blue-700 font-bold' href="https://varadgreenenviro.com/">varadgreenenviro.com</a>.</li>
                  <li>My work involves optimization, problem-solving, and standardization, ensuring the best outcomes for web projects and achieving a good SEO score.</li>
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
                <h1 className='font-semibold text-main2'>HSC {/*<span className='text-black/80'>- 56%</span>*/}</h1>
              </div>
            </div>
            <div>
              <div className='space-y-0.5 mt-3.5'>
                <h1 className='font-medium'>Holy Angels Convent High School  </h1>
                <h1 className='font-semibold text-main2'>SSC{/*<span className='text-black/80'>- 63%</span>*/}</h1>
              </div>
            </div>
          </div>

          <div className='w-[70%]'>
            <div className='flex items-center gap-x-2 mt-7 mb-2'>
              <div className='bg-main p-2 w-fit rounded-lg'>
                <LuGamepad2 className='text-white text-xl' />
              </div>
              <h1 className='text-main font-bold'>INTERESTS</h1>
            </div>
            <span className='text-xs'> Artificial Intelligence Tools, Creating Mordern Designs, Chess , Reading Books, Traveling, Video Games.</span>
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

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-0.5 px-3 rounded-full'>
                <AiFillHtml5 className='text-lg text-red-600' />
                <h1 className="text-[0.800rem]" >HTML 5</h1>
              </div>

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-0.5 px-3 rounded-full'>
                <IoLogoCss3 className='text-lg text-blue-600' />
                <h1 className="text-[0.800rem]" >CSS 3</h1>
              </div>

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-0.5 px-3 rounded-full'>
                <SiTailwindcss className='text-lg text-sky-500' />
                <h1 className="text-[0.800rem]" >Tailwind CSS</h1>
              </div>

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-0.5 px-3 rounded-full'>
                <BiLogoJavascript className='text-lg text-yellow-500' />
                <h1 className="text-[0.800rem]" >JavaScript</h1>
              </div>

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-0.5 px-3 rounded-full'>
                <BiLogoTypescript className='text-lg text-blue-600' />
                <h1 className="text-[0.800rem]" >Typescript</h1>
              </div>

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-0.5 px-3 rounded-full'>
                <FaReact className='text-lg text-sky-600' />
                <h1 className="text-[0.800rem]" >React Js</h1>
              </div>

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-0.5 px-3 rounded-full'>
                <TbBrandNextjs className='text-lg' />
                <h1 className="text-[0.800rem]" >Next Js 13</h1>
              </div>

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-0.5 px-3 rounded-full'>
                <BiLogoNodejs className='text-lg text-lime-600' />
                <h1 className="text-[0.800rem]" >Node Js</h1>
              </div>

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-0.5 px-3 rounded-full'>
                <SiExpress className='text-lg' />
                <h1 className="text-[0.800rem]" >Express Js</h1>
              </div>

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-0.5 px-3 rounded-full'>
                <BiLogoMongodb className='text-lg text-lime-600' />
                <h1 className="text-[0.800rem]" >MongoDB</h1>
              </div>

              {/* <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-0.5 px-3 rounded-full'>
                <SiNestjs className='text-lg text-red-600' />
                <h1 className="text-[0.800rem]" >Nest Js</h1>
              </div> */}

              {/* <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-0.5 px-3 rounded-full'>
                <FcLinux className='text-lg' />
                <h1 className="text-[0.800rem]" >Linux Commands</h1>
              </div> */}

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-0.5 px-3 rounded-full'>
                <BsGit className='text-lg text-orange-600' />
                <h1 className="text-[0.800rem]" >Git</h1>
              </div>

              <div className='flex items-center gap-x-2 border-gray-400 border w-fit py-0.5 px-3 rounded-full'>
                <FcGoogle className='text-lg text-lime-600' />
                <h1 className="text-[0.800rem]" >SEO</h1>
              </div>

            </div>

          </div>


          <div className='space-y-2.5 text-justify relative z-50'>
            <div className='flex items-center gap-x-2 mt-7 mb-2'>
              <div className='bg-main p-2 w-fit rounded-lg'>
                <CgTemplate className='text-white text-xl' />
              </div>
              <h1 className='text-main font-bold'>PROJECTS</h1>
            </div>
            <div className='text-xs' >
              <h1 className='font-bold'>itsstreetcoffee.com</h1>
              <p className='text-main/90' >Full Stack Next JS 13 application form scratch to Production on Digital Ocean Droplet using Tailwind CSS and Mongo DB with beautiful UI/UX.</p>
              <div className='flex items-center mt-0.5'>
                <a href='https://itsstreetcoffee.com/' className='text-main border border-main flex items-center bg-main2/30 font-medium py-0.5 px-2 rounded-xl mr-5'>
                  Visit App
                  <AiOutlineArrowRight className='mx-0.5' />
                </a>
                {/* <a href='' className='text-main border border-main flex items-center bg-main2/30 font-medium py-0.5 px-2 rounded-xl mr-5'>
                  View Code
                  <AiFillGithub className='mx-0.5' />
                </a> */}
              </div>
            </div>
            <div className='text-xs' >
              <h1 className='font-bold'>COURSEFINITE</h1>
              <p className='text-main/90' >Full Stack Startup ready Course Streaming Web App. Where user can see the courses by buying Subscription. Razorpay payment gateway for UPI Payment. Admin has access to Dashboard.</p>
              <div className='flex items-center mt-0.5'>
                <a href='https://coursefinite.vercel.app/' className='text-main border border-main flex items-center bg-main2/30 font-medium py-0.5 px-2 rounded-xl mr-5'>
                  Visit App
                  <AiOutlineArrowRight className='mx-0.5' />
                </a>
                {/* <a href='' className='text-main border border-main flex items-center bg-main2/30 font-medium py-0.5 px-2 rounded-xl mr-5'>
                  View Code
                  <AiFillGithub className='mx-0.5' />
                </a> */}
              </div>
            </div>
            <div className='text-xs' >
              <h1 className='font-bold'>SHOPIE</h1>
              <p className='text-main/90' >Full stack Startup Ready Ecommerce Web App from scratch using MERN Stack, Stripe Payment Gateway and Admin Dashboard.</p>
              <div className='flex items-center mt-0.5'>
                <a href='https://shopie-k64e.onrender.com/' className='text-main border border-main flex items-center bg-main2/30 font-medium py-0.5 px-2 rounded-xl mr-5'>
                  Visit App
                  <AiOutlineArrowRight className='mx-0.5' />
                </a>
                {/* <a href='' className='text-main border border-main flex items-center bg-main2/30 font-medium py-0.5 px-2 rounded-xl mr-5'>
                  View Code
                  <AiFillGithub className='mx-0.5' />
                </a> */}
              </div>
            </div>
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
      </section>

    </main>
  )
}

export default Resume