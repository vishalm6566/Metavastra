import React, { useEffect } from 'react'
import "./style2.css"


const Opensea = () => {

    useEffect(() => {
        window.location.href = "https://opensea.io/metavastra";
    }, []);


    return (
        <>
            {/* <div className='common-container'>
                <h1 id='title2'>Opensea</h1>
            </div> */}
        </>
    )
}

export default Opensea
