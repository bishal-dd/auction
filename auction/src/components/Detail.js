import React from "react";
import { useState, useEffect, useRef } from "react";
import Countdow from "./working/Countdow";

import Slideshow from "./working/Slideshow";

export default function Detail() {
  const bidRef = useRef();

  function handelBid() {
    document.getElementById("price").innerHTML = bidRef.current.value;
  }
  return (
    <>
      <div class="container">
        <div class="row gx-5">
          <div class="col-sm-6 mt-5">
            <Slideshow />
          </div>
          <div class="col-sm-6 mt-5" id="box4">
            <p>Creta</p>
            <p>
              Price: Nu. <span id="price"></span>/-
            </p>
            <p>Description</p>
            <div class="col-sm-5 mt-5 border-5 border-light rounded-3">
              <Countdow />
            </div>
            <div class="col-sm-6 mt-5">
              <div class="row">
                <div class="col md-5">
                  <from>
                    <input
                      type="number"
                      Placeholder="Bid"
                      class="rounded-5 border border-2 border-dark"
                      id="bidtext"
                      ref={bidRef}
                    />
                  </from>
                </div>

                <div class="col">
                  <a href="#" class="btn btn-light" onClick={handelBid}>
                    Place Bid
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
