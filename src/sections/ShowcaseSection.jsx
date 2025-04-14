import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1= useRef(null);
    const project2= useRef(null);
    const project3= useRef(null);



    useGSAP(() => {
        const projects =[project1.current,project2.current,project3.current];
        projects.forEach((card,index) => {
            gsap.fromTo(
                card,
                {
                  y:50,opacity:0
                },
                {
                    y:0,opacity:1,duration:1,delay:0.3 *(index+1),
                    ScrollTrigger:{
                        trigger:card,
                        start:"top bottom-=100"
                    }
                }
            )
        })
      gsap.fromTo(sectionRef.current,{opacity: 0},{opacity: 1, duration: 1.5})
    }, []);
  return (
    <section id="work" ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          <div className='first-project-wrapper' ref={project1}>
            {/* Add group class here */}
            <div className='image-wrapper group overflow-hidden rounded-lg'>
              <a href="https://remarkable-hamster-62ce0a.netlify.app" target="_blank" rel="noopener noreferrer">
                <img 
                  className="transition-all duration-300 ease-in-out group-hover:brightness-75 group-hover:scale-105"
                  src='/images/Karate.png' 
                  alt="Ryde" 
                />
              </a>
            </div>
            <div className='text-content'>
              <h2>
                Tournament management made simple with a Powerful, User-Friendly app called Clash helping users create and sign up for karate tournaments. (in progress)
              </h2>
              <p className='text-white-50 md:text-xl'>
                An app built with React js, Express, Bootstrap and MySQL for a faster and user friendlier experience
              </p>
            </div>
          </div>
          <div className='project-list-wrapper overflow-hidden'>
            <div className='project' ref={project2}>
             <div className='image-wrapper bg-[#ffefdb]'>
             <a href="#" target="_blank" rel="noopener noreferrer">
                <img 
                  className="transition-all duration-300 ease-in-out group-hover:brightness-75 group-hover:scale-105"
                  src='/images/Netflax.png' 
                  alt="Netflix" 
                />
              </a>
             </div>
             <h2>Netflix Clone</h2>
            </div>
            <div className='project' ref={project3}>
             <div className='image-wrapper bg-[#ffe7eb]'>
             <a href="#" target="_blank" rel="noopener noreferrer">
                <img 
                  className="transition-all duration-300 ease-in-out group-hover:brightness-75 group-hover:scale-105"
                  src='/images/project3.png' 
                  alt="YC Directory" 
                />
              </a>
             </div>
             <h2>YC Directory</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
