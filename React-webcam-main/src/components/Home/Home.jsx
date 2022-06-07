import React, { useState } from 'react'
import './homeStyles.css'
import {OCRForm} from '../Webcam/Webcam'


const Home = () => {
    return (
        <div className="home-container">
            <div className="container">
                <div className="text">
                    <h1> Arabic Optical Character Recognition!</h1>
                    <form className="form">
                        <OCRForm />
                    </form>
                </div>
            </div>
        
        </div>
    )
}
export default Home
