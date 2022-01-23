import React from 'react'
import Video from './scifiStudio0001-0300.mp4'
import Sound from './hover-engine-6391.mp3'
import "./style.css"

const Home = () => {



    const audioMute = () => {
        const audio2 = document.getElementById("audio2");
        const muteButton = document.getElementById("mute-btn");
        
        if (audio2.paused) {
            audio2.play();
            muteButton.innerHTML = '<i class="fa fa-play-circle-o" aria-hidden="true"></i>';
        }
        else {
            audio2.pause();
            muteButton.innerHTML = '<i class="fa fa-pause-circle-o" aria-hidden="true"></i>';
        }
    }


    return (
        <>
            <div className='container1'>
                <button id='mute-btn' onClick={audioMute} ><i class="fa fa-play-circle-o" aria-hidden="true"></i></button>
                <video id='video1' autoPlay loop muted src={Video} ></video>
                <audio id="audio2" src={Sound} autoPlay loop ></audio>
            </div>
            <div className="container2">
                <div className="item" onClick={() => window.open("http://discord.com")}>
                    <h4 className="item-element">Join our Discord</h4>
                    <img src="discord1.png" alt='' />
                </div>
                <div className="item" onClick={() => window.open("https://twitter.com/metavastra")}>
                    <h4 className="item-element">Connect on Twitter</h4>
                    <img src="twitter1.png" alt='' />
                </div>
                <div className="item" onClick={() => window.open("https://www.instagram.com/metavastra/")}>
                    <h4 className="item-element">Follow on Instagram</h4>
                    <img src="instagram1.png" alt='' />
                </div>
            </div>
            <div className='container3'>
                <div className='sub-container3' style={{background : "black" ,padding : "10%" , backgroundImage: "linear-gradient(to top, #090909 0%, #1e4459 100%)"}}>
                <h1 style={{ padding: "2%" }}>Never miss an update</h1>
                <p style={{ padding: "1% 0 2% 0", color: "white" }}>Subscribe our newsletter for the latest news, drops and collectibles</p>
                <input type="email" placeholder='Enter your email' style={{ padding: "0.5%", width : "26%"}} />
                <button id='btn-subscribe'>Subscribe</button>
                </div>
            </div>

        </>
    )
}

export default Home
