import React from 'react'
import bid from '../../assets/bid.png';
import { Link } from "react-router-dom";

const NavComp = () => {
  return (
   
      <nav class="container-sm-2 rounded-2  navbar stick-top navbar-light">
           
        <div class="container-fluid">
          <div class="navbar-brand">
            <div class="row">
              <div class="col-3" id="imgandhome">
                <Link to=""> <img src={bid} alt="logo" height="55" width='75'/> </Link>

                <Link to='' class="btn btn-light" id="homelink">
                  Home
                  </Link>
              </div>
              
              <div class="col-7">
                  <form class="d-flex">
                        <input type='text' class="form-control rounded-2 mt-2" placeholder="Search for Products..." size="40"/>
                        <Link to="/search"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="black" class="bi bi-search-heart-fill mt-3 p-0" viewBox="0 0 16 16">
                    <path d="M6.5 13a6.474 6.474 0 0 0 3.845-1.258h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.008 1.008 0 0 0-.115-.1A6.471 6.471 0 0 0 13 6.5 6.502 6.502 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13Zm0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
                    </svg></Link>
                  </form> 
              </div>
             
              
            </div>
           
           
            
        </div>
        <div class="d-flex">
          <div class="col p-2">
        

            <Link to='/auction' class="btn btn-light">
              Auction
            </Link>
           
          
        </div>
          
          <div class="col p-2">
        

              <Link to='/login' class="btn btn-light">
                Login
              </Link>
             
            
          </div>
          <div class="col p-2">
        
            <Link to='/signup' class="btn btn-light">
            Register
            </Link>
          
        </div>
        </div>
        </div>
        
      </nav>
     
  )
}

export default NavComp;
