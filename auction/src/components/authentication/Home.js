import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
        <div class="row mt-4" >
            <div class="col ">
              <h2>Featured Products</h2>
            </div>
          
        </div>
        <div class="row mt-4">
              <div class="col">
              <div class="card" >
              <Link to="/detail"><img src="https://img.edilportale.com/product-thumbs/b_BOB-Shoe-cabinet-sixay-furniture-399418-reldb45a565.jpg" class="card-img-top" height="200" alt="..." /></Link>
              <div class="card-body">
                <h5 class="card-title">Shoe Cabinet</h5>
                <h6 class="card-title">Start:Nu. 10,000</h6>
                <Link to='/detail' class="btn btn-secondary">Place Bid</Link>
              </div>
              </div>
              </div>
              <div class="col">
              <div class="card" >
              <Link to="/detail"><img src="https://ymimg1.b8cdn.com/resized/car_model/8200/logo/mobile_listing_main_2023_Hyundai_Creta_Exterior_01.jpg" class="card-img-top" height="200" alt="..." /></Link>
              <div class="card-body">
                <h5 class="card-title">Creta</h5>
                <h6 class="card-title">Start:Nu. 10,000</h6>
                <Link to='/detail' class="btn btn-secondary">Place Bid</Link>
              </div>
              </div>
              </div>
              <div class="col">
              <div class="card" >
              <Link to="/detail"><img src="https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studio3-wireless/pdp/refresh2022/studio3-pdp-p02.png.large.2x.png" class="card-img-top" height="200" alt="..." /></Link>
              <div class="card-body">
                <h5 class="card-title">Beats headphone</h5>
                <h6 class="card-title">Start:Nu. 10,000</h6>
                <Link to='/detail' class="btn btn-secondary">Place Bid</Link>
              </div>
              </div>
              </div>
        
        </div>



        <div class="row mt-4">
              
              <div class="col">
              <div class="card" >
              <Link to="/detail"><img src="http://cdn.shopify.com/s/files/1/0608/4988/1306/products/1_9b8014ad-124e-4742-a628-9a4c4affe617.jpg?v=1648711109" class="card-img-top" height="200" alt="..." /></Link>
              <div class="card-body">
                <h5 class="card-title">LED TV</h5>
                <h6 class="card-title">Start:Nu. 50,000</h6>
                <Link to='/detail' class="btn btn-secondary">Place Bid</Link>
              </div>
              </div>
              </div>
              <div class="col">
              <div class="card" >
              <Link to="/detail"><img src="https://cdn.shopify.com/s/files/1/0496/4325/8009/products/baskets-air-jordan-1-mid-diamond-shorts-air-jordan-kikikickz-663663.jpg?v=1644151019" class="card-img-top" height="200" alt="..." /></Link>
              <div class="card-body">
                <h5 class="card-title">Jordan</h5>
                <h6 class="card-title">Start:Nu. 8,000</h6>
                <Link to='/detail' class="btn btn-secondary">Place Bid</Link>
              </div>
              </div>
              </div>
              <div class="col">
              <div class="card" >
              <Link to="/detail"><img src="http://cdn.shopify.com/s/files/1/0608/4988/1306/products/1_9b8014ad-124e-4742-a628-9a4c4affe617.jpg?v=1648711109" class="card-img-top" height="200" alt="..." /></Link>
              <div class="card-body">
                <h5 class="card-title">LED TV</h5>
                <h6 class="card-title">Start:Nu. 50,000</h6>
                <Link to='/detail' class="btn btn-secondary">Place Bid</Link>
              </div>
              </div>
              </div>
        
        </div>
   
    
    </>
      
            
  
  )
}
