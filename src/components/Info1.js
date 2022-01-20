import React, { useState } from 'react'
import "./info1.css"
import Accordion from "./Accordion"

const Info1 = () => {

    const mainImgUrl = "https://womanonblockchain.com/wp-content/uploads/2021/11/amtpv0f8pcqao6sddpsk-300x300.jpg"
    const gridImg1 = "https://womanonblockchain.com/wp-content/uploads/2021/11/amtpv0f8pcqao6sddpsk-300x300.jpg"
    const gridImg2 = "https://luxurylaunches.com/wp-content/uploads/2021/10/dolce-gabbana-nft-9.jpg"
    const gridImg3 = "https://womanonblockchain.com/wp-content/uploads/2021/11/dyuyim8hpzwgyszwk36f-1-768x768.jpg"
    const gridImg4 = "https://womanonblockchain.com/wp-content/uploads/2021/11/b2gxbulitgwgu3cavcru.jpg"
    const gridImg5 = "https://womanonblockchain.com/wp-content/uploads/2021/11/amtpv0f8pcqao6sddpsk-300x300.jpg"
    const gridImg6 = "https://luxurylaunches.com/wp-content/uploads/2021/10/dolce-gabbana-nft-9.jpg"
 
    const [mainImg , setMainImg] = useState(mainImgUrl)

    return (
        <>
            <div id='main-container'>
                <h1 id='title4'>Info</h1>
                <div id='img-info'>
                    <div id='container11'>
                        <div id='main-img'>
                            <img id='main-img1' src ={mainImg} alt='' />
                        </div>
                        <div className='grid' >
                            <img className='grid-img' id='grid-img-1' onClick={() => setMainImg(gridImg1)} src={gridImg1} alt="" />
                            <img className='grid-img' id='grid-img-2' onClick={() => setMainImg(gridImg2)} src={gridImg2} alt="" />
                            <img className='grid-img' id='grid-img-3' onClick={() => setMainImg(gridImg3)} src={gridImg3} alt="" />
                            <img className='grid-img' id='grid-img-4' onClick={() => setMainImg(gridImg4)} src={gridImg4} alt="" />
                            <img className='grid-img' id='grid-img-5' onClick={() => setMainImg(gridImg5)} src={gridImg5} alt="" />
                            <img className='grid-img' id='grid-img-6' onClick={() => setMainImg(gridImg6)} src={gridImg6} alt="" />
                        </div>
                    </div>
                    <div id='container22'>
                        <h1 style={{fontFamily: "Gothia Serif", fontSize : "1.5rem", marginBottom : "10px"}}>The Mosaic Impossible Jacket</h1>
                        <p style={{color : "white", padding :"10px 0px 20px 0px" }}>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eveniet vel incidunt praesentium impedit ea cum obcaecati, autem possimus accusantium ex optio ut minima doloremque voluptates sed nihil harum quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eum ab impedit suscipit, voluptate error vero nam mollitia ex nihil aut autem perspiciatis earum? Sunt molestias aliquid perspiciatis consectetur ducimus.</p>
                        <Accordion />
                    </div>
                </div>
                <br /><br /><br />
                <hr />
                <div id='story'>
                    <h1 style={{padding : '4%', fontFamily: "Gothia Serif",}}>story</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vitae nobis labore odit aspernatur! Dolor reiciendis quo dolores magnam, quae odio nobis dolore ipsa maiores repudiandae asperiores praesentium error saepe, officiis necessitatibus. Vero nemo praesentium quisquam non libero. Quidem magni nostrum doloribus at voluptates sapiente quas rerum recusandae sed temporibus. Voluptates iure asperiores sequi exercitationem et, commodi quae distinctio error incidunt ipsum nobis ut quidem, earum animi eos. Fuga, earum. Id, aliquid minus libero ab delectus accusamus itaque corporis dignissimos ratione nesciunt, animi iste ad dolor officia! Ipsa reiciendis nesciunt qui eveniet perspiciatis, veniam nam, assumenda cumque odit molestias accusamus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae fuga tenetur placeat eum quod fugiat eius accusamus ipsam possimus delectus nulla aspernatur velit earum, libero quibusdam cumque dolorem consectetur harum sit quas doloribus corrupti ab cupiditate? Inventore, atque repellat! Expedita facilis nobis quo laudantium cum pariatur fuga repellendus dolor ex fugit eveniet ipsa aliquam nam veniam quibusdam, inventore adipisci ad maiores corporis magnam exercitationem et possimus. Quae repudiandae ex soluta adipisci laborum explicabo quia iure magnam qui aut assumenda voluptas, nam molestiae quis eius laudantium sapiente sed, non quos cum aliquam delectus nisi ducimus! Illo porro ut vero dolorem laborum.</div>
            </div>
        </>
    )
}

export default Info1
