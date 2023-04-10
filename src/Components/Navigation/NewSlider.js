import React from 'react'
import "./ProductX.css"
const NewSlider = () => {
  return (
    <div>
         <section>
        <div class="image-container">
            <div class="image-list">
                <div class="image-item">
                    <img src="https://m.media-amazon.com/images/I/71qlKqpJnlL._SX3000_.jpg" />
                </div>
                <div class="image-item">
                    <img src="https://m.media-amazon.com/images/I/71cQMXCLSvL._SX3000_.jpg" />
                </div>
                <div class="image-item">
                    <img src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg" />
                </div>
                <div class="image-item">
                    <img src="https://m.media-amazon.com/images/I/61O72XhcEkL._SX3000_.jpg" />
                </div>
                <div class="image-item">
                    <img src="https://m.media-amazon.com/images/I/61VuJdpjvaL._SX3000_.jpg" />
                </div>
                <div class="image-item">
                    <img src="https://m.media-amazon.com/images/I/61UrRx+3LLL._SX3000_.jpg" />
                </div>
            </div>

            <div class="image-btn-container">

                <button class="slider-btn" id="slide-btn-left"><i class="fa-solid fa-chevron-left"></i></button>
                <button class="slider-btn" id="slide-btn-right"><i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    </section>
      
    </div>
  )
}

export default NewSlider
