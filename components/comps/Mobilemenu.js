import React from 'react'
import Menu from './Menu';
import Image from "next/image/";

function Mobilemenu() {
    return (
        <div>
                      <div className="classic-header">
          <div className="header-top section-fluid   ">
            <div className="container">
              <div className="row row-cols-lg-2 align-items-center">
                <div className="col-12 text-center text-lg-left">
                  <div className="header-top-massege">
                    <p>Free Delivery over £40 to most of UK*</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
            

            <div className="container-fluid mobile-narbar mt-4" style={{paddingLeft:"15px",borderBottom:"1px solid #7c7c7c",position:"relative",bottom:"6px"}}>
                <div className="row">
<div className="col-4 logo-style">
<Image src="/assets/images/logo/logo.png" alt="bedsdivans" width={80} height={80} className="mobile-logo"/>
 </div>
                   
<div className="col-6 cart-style">
<div class="buttons d-flex cart-btn">
<div className="phone-link"><a href="#"><Image src="/assets/images/banner/call.svg" alt="bedsdivans" width={35} height={35} />
Call Us</a></div>
<div class="cart"><a href="#"><Image src="/assets/images/banner/Cart-New.svg" alt="bedsdivans" width={40} height={40} />
Cart </a></div>
</div>
</div>
                    

                   
<div className="col-2 menu-style" style={{float:"right",padding:"0px"}}>
<div className="mobile-menu">
<Menu  />  
Menu
</div>
 </div>

                </div>

            </div>
            



        </div>
    )
}

export default Mobilemenu
