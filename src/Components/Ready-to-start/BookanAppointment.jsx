import React from 'react'
import   './BookanAppointment.css'
import Googleplay from '../Assets/google-play-badge.svg'
import Googleplay_scan from '../Assets/NiuliQRCode-google_play.png'
import download_gp from '../Assets/dwnldnew_gp.svg'
import download_gp_scan from '../Assets/NiuliQRCode-appstore.png'


const BookanAppointment = () => {
  return (
    <div>
      <div className="container Book_an_appointment">
        <div className="row ready-to-start-conatiner ">
            <div className="col-lg-6 scan-based-image-continer">
               <img src="https://niuli-images.s3.ap-south-1.amazonaws.com/neappdownloadimage.png" alt="" /> 
            </div>
            <div className="col-lg-6 ready-to-scan-container">
               <h1>Ready to start?</h1>
               <p>Book an appointment now and bring your
              <span className='d-flex align-items-start'>vision to reality!</span>
               </p>
               <div className='scan-container'>
                <div className='google-play-container'>
                <img src={download_gp} alt="" />
                <img src={Googleplay_scan} alt="" />
                </div>
                <div className='download-container'>
                <img src={Googleplay} alt="" />
                <img src={download_gp_scan} alt="" />
                </div>
                
               <div/>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BookanAppointment
