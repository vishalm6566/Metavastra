import React from 'react'
import "./style3.css"
import { Link, Outlet } from "react-router-dom";
// import Info1 from './Info1';


const Allitems = () => {
    return (
        <>
            <div className="row">
                <h1 id='title3'>Our exclusive collection</h1>
                <div className="column">
                    <Link to="info1"><img src="https://womanonblockchain.com/wp-content/uploads/2021/11/amtpv0f8pcqao6sddpsk-300x300.jpg" alt='' /></Link>
                    <h3>Card 1</h3>
                    <p>The Lion Crown</p>
                    <p>Some text</p>
                </div>

                <div className="column">
                    <Link to="info1"><img src="https://luxurylaunches.com/wp-content/uploads/2021/10/dolce-gabbana-nft-9.jpg" alt='' /></Link>
                    <h3>Card 2</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                </div>

                <div className="column">
                    <Link to="info1"><img src="https://womanonblockchain.com/wp-content/uploads/2021/11/dyuyim8hpzwgyszwk36f-1-768x768.jpg" alt='' /></Link>
                    <h3>Card 3</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                </div>

                <div className="column">
                    <Link to="info1"><img src="https://womanonblockchain.com/wp-content/uploads/2021/11/v3ft7fcdozzm99jjquwl.jpg" alt='' /></Link>
                    <h3>Card 4</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                </div>
                <div className="column">
                    <Link to="info1"><img src="https://womanonblockchain.com/wp-content/uploads/2021/11/b2gxbulitgwgu3cavcru.jpg" alt='' /></Link>
                    <h3>Card 5</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                </div>
                <div className="column">
                    <Link to="info1"><img src="https://static01.nyt.com/images/2021/10/04/fashion/04dolce-nft2/merlin_195647307_a7b08f5c-f120-4af7-802d-38c62502c779-superJumbo.jpg?quality=75&auto=webp" alt='' /></Link>
                    <h3>Card 6</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                </div>
                <div className="column">
                    <Link to="info1"><img src="https://womanonblockchain.com/wp-content/uploads/2021/11/amtpv0f8pcqao6sddpsk-300x300.jpg" alt='' /></Link>
                    <h3>Card 7</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                </div>
                <div className="column">
                    <Link to="info1"><img src="https://womanonblockchain.com/wp-content/uploads/2021/11/dyuyim8hpzwgyszwk36f-1-768x768.jpg" alt='' /></Link>
                    <h3>Card 8</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                </div>
                <div className="column">
                    <Link to="info1"><img src="https://luxurylaunches.com/wp-content/uploads/2021/10/dolce-gabbana-nft-9.jpg" alt='' /></Link>
                    <h3>Card 9</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                </div>
            </div>
            <Outlet />
            {/* <Routes>
                < Route exact path=":info1" element={<Info1 />} />
            </Routes> */}
        </>
    )
}

export default Allitems
