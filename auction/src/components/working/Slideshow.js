import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from "react-slideshow-image";
import image1 from "./images/slide_1.jpeg";
import image2 from "./images/slide_2.jpg";
import image3 from "./images/slide_3.jpeg";
import image4 from "./images/slide_4.jpg";
import image5 from "./images/slide_5.jpg";


const images = [image1, image2, image3, image4, image5];

const zoomOutProperties = {
  duration: 1000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

export default function Slideshow() {
  return (
    <div>
            <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img key={index} style={{ width: "100%" }} src={each} class="rounded-5"/>
        ))}
         </Zoom>
    </div>
  )
}
