import React from 'react'
import heroImg from './assets/hero.svg'


const profileDesc = () => {
  return (
            <section className='hero'>
                <div className='hero-center'>
                    <div className='hero-title'>
                        <h2>Seun Ojumu</h2>

                        <p> A renowned Software Developer</p>
                    </div>


                </div>

                <div className='img-container'>
                        <img src={heroImg} />
                </div>
            </section>
  )
}

export default profileDesc