import React from 'react'
import './style.css'
import AOS from 'aos';



const Roadmap = () => {

    AOS.init(
        {
            offset: 100,
            duration: 1000,
        }
    );

    return (
        <>

            <div id='grad1'>
                <h1 className="title1" align="center">ROAD MAP<hr /></h1>

                <div className="vertical"></div>
                <div className="div1" align="right" data-aos="fade-left">
                    <h1 className="object1">MILESTONE1</h1>
                    <h2 className="object1">Series X</h2>
                    <p className="object1">Initial release of 8,888 unique, handmade Reactors, each one containing a Series X Crystal shard. As no Shard is alike, the Reactors had to be specially constructed to contain their power.</p>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div className="div2" align="left" data-aos="fade-right" >
                    <h1 className="object2">MILESTONE2</h1>
                    <h2 className="object2">Iron McLaren Unlocked</h2>
                    <p className="object2">Reactor Motor NFT owners find out who is unlocking Santa’s Iron McLaren in real life this Holiday Season!</p>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div className="div1" align="right" data-aos="fade-left">
                    <h1 className="object1" >MILESTONE3</h1>
                    <h2 className="object1">Series X Car Reveal</h2>
                    <p className="object1">Once the Crystal has fully charged the Reactor, each owner will be able to go inside their Reactor to discover their custom Car, eligible for racing and upgrading in the Reactor Raceway.</p>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div className="div2" align="left" data-aos="fade-right" >
                    <h1 className="object2">MILESTONE4</h1>
                    <h2 className="object2">Reactor Raceway</h2>
                    <p className="object2">Play to Earn on the new Reactor Motors Raceway and earn Reactons that can be used for customization and car improvements!
                        <br />
                        All Reactor Car owners will receive early bird access to the Reactor Motors Raceway, coming Q1 2022. Reactor Car owners will be able to race against each other in exclusive tournaments, global challenges, and even unlock secret courses and boosts!</p>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div className="div1" align="right" data-aos="fade-left">
                    <h1 className="object1" >MILESTONE5</h1>
                    <h2 className="object1">Reactor Raceway World Cup</h2>
                    <p className="object1">Reactor Car owners will have the opportunity to earn an invite to the Reactor Raceway World Cup! The global reactor challenge includes team events for owners with multiple reactors and special edition handmade IRL reactors that will be available to Series X owners.</p>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div className="div2" align="left" data-aos="fade-right" >
                    <h1 className="object2">MILESTONE6</h1>
                    <h2 className="object2">Series Y</h2>
                    <p className="object2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique voluptate fugit cupiditate
                        optio dolores quibusdam distinctio ea sint! Unde porro quis natus corporis animi nemo ratione voluptates</p>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div className="div1" align="right" data-aos="fade-left">
                    <h1 className="object1" >MILESTONE7</h1>
                    <h2 className="object1">Reactor Raceway Series X vs Series Y Challenge</h2>
                    <p className="object1">Global Reactor Raceway challenge series between Series X and Series Y racers, the winning teams are eligible to unlock the next Reactor supercar…</p>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div className="div2" align="left" data-aos="fade-right" >
                    <h1 className="object2">MILESTONE8</h1>
                    <h2 className="object2">Unlockable Supercar #2, Series Z Drop and much more!</h2>
                    <p className="object2">IRL Meet Ups and Experiences for Reactor Owners, Team Leaderboards and Merchandise giveaways, New Reacton Opportunities with exclusive giveaways, and the next edition of the Reactor Raceway World Cup!</p>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div>
            </div>
        </>
    )
}

export default Roadmap
