import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Resume() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
        <div className="custom-container">
            <div className="resume-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-briefcase"></i> Resume
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>Education & <span>Experience</span></h1>
                </div>

                <div className="resume-timeline">
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date">2022 - Present</span>
                        <h2>Full Stack Developer</h2>
                        <p>Graun Limited</p>                      
                    </div>


                    <div className="item scroll-animation" data-aos='fade-left'>
                        <span className="date">2018 - 2022</span>
                        <h2>Full Stack Developer</h2>
                        <p>Dangote</p>
                    </div>

                    <div className="item scroll-animation" data-aos='fade-left'>
                        <span className="date">2015 - 2018</span>
                        <h2>Full Stack Developer</h2>
                        <p>GTBank</p>
                    </div>

                    <div className="item scroll-animation" data-aos='fade-right'>
                        {/* <span className="date">2010 - 2013</span> */}
                        <h2>Masters Degree of Computer Science</h2>
                        <p>University of Wolverhampton</p>

                        <h2>Bachelor Degree of Computer Science</h2>
                        <p>University of Lagos</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
