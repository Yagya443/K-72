import React from 'react'
import Video from '../Home/Video'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger.js'

const Blog = () => {

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=>{
      gsap.to(".contact-video",{
        scaleX:5.1,
        scaleY:4,
        ease:'power2.out',
        transformOrigin:"bottom left",
        scrollTrigger:{
          trigger:".contact-video",
          scrub:2,
          markers:true,
          start:'center center+=275',
          end:'center center',
          pin:true
        }
      })
    })


  return (
    <div className='min-h-[300vh] width-[100%] px-8 py-4'>
      
        <div className='contact-video h-40 w-80 absolute top-[75%]'>
          <Video/>
        </div>
    </div>
  )
}

export default Blog
