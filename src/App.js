import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Roadmap from './components/Roadmap';
import Opensea from './components/Opensea';
import About from './components/About';
import NFT from './components/NFT';
import Faq from './components/Faq';
import Contact from './components/Contact';




function App() {
  return (
   <>
   <BrowserRouter>
    <Navbar/>
    <Routes>
    < Route exact path="/" element={<Home/>} />
    < Route exact path="/roadmap" element={<Roadmap/>} />
    < Route exact path="/opensea" element={<Opensea/>} />
    < Route exact path="/about" element={<About/>} />
    < Route exact path="/nft" element={<NFT/>} />
    < Route exact path="/faq" element={<Faq/>} />
    < Route exact path="/contact" element={<Contact/>} />

    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
