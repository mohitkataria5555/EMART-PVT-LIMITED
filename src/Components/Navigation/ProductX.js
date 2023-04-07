import React from 'react'
import './ProductX.css'

import { Link } from 'react-router-dom'
import LoginNav from './LoginNav'

const ProductX = () => {
    
  return (
    <div>
 <main class="main">
        <div class="card-product-container container">
            <div class="card-product">
                <h2>Get Best Deals On Electronics</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="" />
                        <p>clothing</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-Emart.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg" />
                        <p>Footwear</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-Emart.com/images/G/31/img22/BAU/Oct/186X116_3._SY116_CB606110532_.jpg" />
                        <p>Watches</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-Emart.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg" />
                        <p>Bags & language</p>
                    </div>
                </div> <Link class="card-product-btn" to="/" >see more</Link>
            </div>
            <div class="card-product">
                <h2>Make Your Home with Emart</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-Emart.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_03_low._SY116_CB605507312_.jpg" />
                        <p>Sofa cum beds</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-Emart.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_04_low._SY116_CB605507312_.jpg" />
                        <p>Office chairs & study</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-Emart.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_01_low._SY116_CB605507312_.jpg" />
                        <p>Bean bags</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-Emart.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_02_low._SY116_CB605507312_.jpg" />
                        <p>Explore all</p>
                    </div>
                </div>
                <Link class="card-product-btn" to="/" >see more</Link>
            </div>
            <div class="card-product">
                <h2> Get top Fashion Deals on Emart</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-Emart.com/images/G/31/img22/BAU/Oct/186X116_1._SY116_CB606110532_.jpg" />
                        <p>Home Products</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-Emart.com/images/G/31/img22/BAU/Oct/186X116_5._SY116_CB606110532_.jpg" />
                        <p>Furniture</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-Emart.com/images/G/31/img22/BAU/Oct/186X116_3._SY116_CB606110532_.jpg" />
                        <p>Daily essentials</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-Emart.com/images/G/31/img22/BAU/Oct/186X116_8._SY116_CB606110532_.jpg" />
                        <p>Fashion</p>
                    </div>
                </div>
                <Link class="card-product-btn" to="/" >see more</Link>
            </div>
           
        </div>

        <div class="card-product-container container productBackgraound">
         
            
           
        </div>

    
    {/* <section class="today_deals_container">
        <div class="today_deals_heading">
            <h1>Products</h1>
            <p><a href="#">See all deals</a></p>
        </div>

        <div class="today_deals_product_container">
            <div class="today_deals_btn_container">
                <button  class="today_deal_btn" id="today_deal_btn_prev">
                    <i class="fa-solid fa-angle-left"></i>
                </button>
                <button class="today_deal_btn" id="today_deal_btn_next">
                    <i class="fa-solid fa-angle-right"></i>
                </button>
            </div>

            <div class="today_deals_product_list">
               
         
               
            </div>
        </div>
    </section> */}

    </main>
    </div>
        
        
        
  )
}

export default ProductX
