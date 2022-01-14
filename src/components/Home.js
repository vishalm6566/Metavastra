import React from 'react'
import Video from './scifiStudio0001-0300.mp4'

const Home = () => {
    return (
        <>
            <div className='container1'>
                <video id='video1' autoPlay loop muted src={Video} type="v alt=''ideo/mp4"></video>
            </div>
            <div class="container2">
                <div class="item" onClick={() => window.open("http://discord.com")}>
                    <h4>Join our Discord</h4>
                    <img src="discord1.png" alt=''/>
                </div>
                <div class="item" onClick={() => window.open("http://twitter.com")}>
                    <h4>Connect on Twitter</h4>
                    <img src="twitter1.png" alt=''/>
                </div>
                <div class="item" onClick={() => window.open("http://instagram.com")}>
                    <h4>Follow on Instagram</h4>
                    <img src="instagram1.png" alt=''/>

                </div>

            </div>

        </>
    )
}

export default Home
