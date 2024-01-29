import React from 'react'
import './AboutNuili.css'

const AboutNuili = ({homepagedata}) => {
  return (
    <div className='main-container-AboutNuili'>
        <div className="container">
            <h1 className='about-niuli'>About Niuli</h1>
            <div className='vd-clip-abt-niuli'>
            <iframe src="https://player.vimeo.com/video/892208048/?autoplay=1&muted=1" width={600} height={400} frameborder="15"></iframe>
            </div>
        </div>
      
    </div>
  )
}

export default AboutNuili

