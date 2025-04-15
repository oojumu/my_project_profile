import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="about-area page-section scroll-to-page" id="about">
        <div className="custom-container">
            <div className="about-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="lar la-user"></i> About
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>Every great design begins with<br/>
                        an even <span>better story</span></h1>
                </div>
                <p className="scroll-animation" data-aos='fade-up'>Senior software developer with 10+ years 
                    of experience in .NET Core, C#, Azure, React and microservices Architecture, 
                    implementing enterprise systems across sectors; led the development of an
                    account opening solution that boosted customer acquisition by 20% while generating
                    £1,000,000 in additional monthly revenue. With expertise in cloud technologies 
                    and continuous integration practices enhancing project delivery efficiency and team 
                    collaboration. I have a proven track record of delivering high-quality software solutions
                    that drive business growth and customer satisfaction.</p>
            </div>
        </div>
    </section>
  )
}
