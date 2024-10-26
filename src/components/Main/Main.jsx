import React from 'react';
import './Main.css';
import { assets } from '../../assets/assets';

export const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Dev.</span></p>
          <p>How can i help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see in Halifax?</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this contetnt: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstrom team bonding activities for our work retraet</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readbility of the following codes</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

        {/* Search box */}

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder='Enter a promp here'/>
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">Alerts Gemini may display incorrect info, use it as your own risk, i am not resposible Haha</p>
        </div>
      </div>
    </div>
  )
}
export default Main;