import React from 'react'
import './style.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const audio = new Audio();
    audio.src = "stingers-jugaadsoundeffect.mp3";

    return (
        <>
            <div className='navbar1'>
                <span id='title1'>Metavastra</span>
                <NavLink className="nav-items" muted='muted' autoPlay onClick={audio.play()} to='/home'>Home</NavLink>
                <NavLink className="nav-items" muted='muted' autoPlay onClick={audio.play()} to='/nft'>NFT</NavLink>
                <NavLink className="nav-items" muted='muted' autoPlay onClick={audio.play()} to='/'>RoadMap</NavLink>
                <NavLink className="nav-items" muted='muted' autoPlay onClick={audio.play()} to='/opensea' >Opensea</NavLink>
                <NavLink className="nav-items" muted='muted' autoPlay onClick={audio.play()} to='/about'>About</NavLink>
                <NavLink className="nav-items" muted='muted' autoPlay onClick={audio.play()} to='/faq'>Faq</NavLink>
                <NavLink className="nav-items" muted='muted' autoPlay onClick={audio.play()} to='/contact'>Contact</NavLink>
            </div>
        </>
    )
}

export default Navbar
