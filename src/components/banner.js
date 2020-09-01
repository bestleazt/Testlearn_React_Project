import React from 'react';

function Banner(){
    return(
        <React.Fragment>
                      {/*================Home Banner Area =================*/}
      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="home_left_img">
                  <img src="img/banner/home-left-1.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner_content">
                  <h5>This is me</h5>
                  <h2>Travor James</h2>
                  <p>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)</p>
                  <a className="banner_btn" href="#">Discover Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Home Banner Area =================*/}
        </React.Fragment>
    );
}

export default Banner;