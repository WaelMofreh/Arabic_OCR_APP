import React, { useState } from 'react';
import ocr_image from './ocr.png';


export const OCRForm = () => {

    return (
        <div className="webcam-container">
            <div className="webcam-img">
                 <img src={ocr_image } alt="Logo" width="250" height="250"/> 
            </div >
           
            <div className="webcam-img" >      
                <button onClick={() => {
                        window.open("https://36a2-35-236-250-247.ngrok.io/", "_blank");
                    }}
                        className="webcam-btn">Continue with OCR </button>
            </div>      
        </div>

   );
};
