import React from 'react'
import './style.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const audio = new Audio();
    audio.src = "click1.wav";

    return (
        <>
            <div className='navbar1'>     
                <span id='title1'>Metavastra</span>           
                <NavLink className = "nav-items" onClick={audio.play()} to='/'>Home</NavLink>
                <NavLink className = "nav-items" onClick={audio.play()} to='/nft'>NFT</NavLink>
                <NavLink className = "nav-items" onClick={audio.play()} to='/roadmap'>RoadMap</NavLink>
                <NavLink className = "nav-items" onClick={audio.play()} to='/opensea'>Opensea</NavLink>
                <NavLink className = "nav-items" onClick={audio.play()} to='/about'>About</NavLink>
                <NavLink className = "nav-items" onClick={audio.play()} to='/faq'>Faq</NavLink>
                <NavLink className = "nav-items" onClick={audio.play()} to='/contact'>Contact</NavLink>   
            </div>
        </>
    )
}

export default Navbar
