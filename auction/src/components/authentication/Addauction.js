import React from 'react'

export default function Addauction() {
  return (
    <div>
      <form>
      <div class="p-3">
          <p class="h1 text-center">

       Auction
         </p>

        </div>
        <div class="container justify-content-center  rounded-5" id="box1">
                <div class="row" id='dechen'>
                      <div class="col" >
                              
                              <p class='h2'>Enter Product</p>
                      </div>
                      <div class="col">
                              
                              <input type="text" class="rounded-1"/>
                      </div>
                </div>
                <div class="row" id='dechen1'>
                      <div class="col">
                              
                              <p class='h2'>Insert Image</p>
                      </div>
                      <div class="col">
                              
                              <input type="file" class="rounded-1"/>
                      </div>
                </div>
                <div class="row" id='dechen2'>
                      <div class="col">
                              
                              <p class='h2'>Enter Price</p>
                      </div>
                      <div class="col">
                              
                              <input type="text" class="rounded-1"/>
                      </div>
                </div>
                <div class="row" id='dechen3'>
                      <div class="col">
                              
                              <p class='h2'>Days Available</p>
                      </div>
                      <div class="col">
                              
                              <input type="text" class="rounded-1"/>
                      </div>
                </div>
        </div>

        <div class="p-3 text-center">
    <a href="" class="btn btn-light" id="loglink">
                ADD
              </a>
                
    </div>
        

      </form>
  </div>

  )
}
