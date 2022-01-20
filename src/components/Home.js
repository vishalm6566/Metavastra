import React from 'react'
import Video from './scifiStudio0001-0300.mp4'
import Sound from './hover-engine-6391.mp3'
// import Silence from './silence.mp3'
import "./style.css"

const Home = () => {

    // var audio = new Audio(Sound);
    // audio.play();

    // window.onload = () => {
    //     document.getElementById('audio1').play();
    // }



    return (
        <>
            <div className='container1'>
                <video id='video1' autoPlay loop muted src={Video} ></video>
                {/* <iframe src={Silence} allow="autoplay" id="audio" style={{display: "none"}}></iframe> */}
                <audio id="audio2" src={Sound} autoPlay loop ></audio>
                
                {/* <audio src="hover-engine-6391.mp3" loop="loop" autoplay="autoplay"></audio> */}
            </div>
            <div class="container2">
                <div class="item" onClick={() => window.open("http://discord.com")}>
                    <h4 className="item-element">Join our Discord</h4>
                    <img src="discord1.png" alt='' />
                </div>
                <div class="item" onClick={() => window.open("http://twitter.com")}>
                    <h4 className="item-element">Connect on Twitter</h4>
                    <img src="twitter1.png" alt='' />
                </div>
                <div class="item" onClick={() => window.open("http://instagram.com")}>
                    <h4 className="item-element">Follow on Instagram</h4>
                    <img src="instagram1.png" alt='' />
                </div>

            </div>

        </>
    )
}

export default Home
