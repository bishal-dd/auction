import React from "react";
import "./checkout.css";

export default function Checkout() {
  return (
    <>
      <div class="p-3">
        <p class="h1 text-center">Checkout</p>
      </div>
      <form>
        <div
          class="container-sm border border-3 border-dark rounded-5"
          id="box2"
        >
          <div class="row">
            <div class="col-md-10 mb-3 ">
              <label for="cc-name">Name on card</label>
              <input
                type="text"
                class="form-control rounded-0 border-2 border-dark"
                id="cc-name"
                placeholder="Name"
                required
              />
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback"> Name on card is required </div>
            </div>
            <div class="row">
              <div class="col-md-10 mb-3">
                <label for="cc-number">Credit card number</label>
                <input
                  type="text"
                  class="form-control rounded-0 border-2 border-dark"
                  id="cc-number"
                  placeholder="0000 0000 0000 0000"
                  required
                />
                <div class="invalid-feedback">
                  {" "}
                  Credit card number is required{" "}
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="cc-expiration">Expiration</label>
              <input
                type="text"
                class="form-control rounded-0 border-2 border-dark"
                id="cc-expiration"
                placeholder="MM/YY"
                required=""
              />
              <div class="invalid-feedback"> Expiration date required </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="cc-cvv">CVV</label>
              <input
                type="text"
                class="form-control rounded-0 border-2 border-dark"
                id="cc-cvv"
                placeholder="CVC"
                required=""
              />
              <div class="invalid-feedback"> Security code required </div>
            </div>
          </div>
          <hr class="mb-3" />
          <div class="p-3">
            <button class="btn btn-primary btn-lg btn-block" type="submit">
              Continue to checkout
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
