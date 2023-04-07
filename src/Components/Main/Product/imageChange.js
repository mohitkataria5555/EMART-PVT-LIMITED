import React, { useEffect, useState } from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const fadeImages=[
   { url: "https://m.media-amazon.com/images/I/51ovs76vmtL._SX3000_.jpg",
  
},
    {
        url:"https://assets.ajio.com/cms/AJIO/WEB/06042023-UHP-D-Main-P2-GAP-750on2500.jpg",
        
    },

   
    {
        url:"https://www.businessinsider.in/photo/94360328/furniture-best-deal-in-amazon-festival-sale.jpg?imgsize=87736",
        
    },
    {
        url:"https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/beez-sixteen_nine.jpg?size=948:533",
        
    }
  ]
  let count=0;
export default function ImageChange() {
    
  return (
  <>
      <div  style={{width:"auto",height:600,color:"black",marginTop:100}}>
            
      <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container ade-in-image" >
              <img className="img1" width="100%" height="600px"   src={fadeImage.url} />
            </div>
          
          </div>
        ))}
      </Fade>
    </div>
            </div>
  </>
  )
}
