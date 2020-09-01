import React from 'react';
import OwlCarousel from 'react-owl-carousel2';

function Terminal(){

  const options = {
    items:3,
    nav: false,
    rewind:true,
    autoplay:true,
    margin:20,
    loop:true
  };

    return (
        <React.Fragment>
                {/*================Testimonials Area =================*/}
      <section className="testimonials_area p_120">
        <div className="container">
          <div className="main_title">
            <h2>Testimonials</h2>
            <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
          </div>
          <div className="testi_inner">

            <OwlCarousel options={options}>
            
                <div className="testi_item">
                  <p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face</p>
                  <h4>Fanny Spencer</h4>
                  <a href="#"><i className="fa fa-star" /></a>
                  <a href="#"><i className="fa fa-star" /></a>
                  <a href="#"><i className="fa fa-star" /></a>
                  <a href="#"><i className="fa fa-star" /></a>
                  <a href="#"><i className="fa fa-star-half-o" /></a>
                </div>
                <div className="testi_item">
                  <p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face</p>
                  <h4>Fanny Spencer</h4>
                  <a href="#"><i className="fa fa-star" /></a>
                  <a href="#"><i className="fa fa-star" /></a>
                  <a href="#"><i className="fa fa-star" /></a>
                  <a href="#"><i className="fa fa-star" /></a>
                  <a href="#"><i className="fa fa-star-half-o" /></a>
                </div>
                <div className="testi_item">
                  <p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face</p>
                  <h4>Fanny Spencer</h4>
                  <a href="#"><i className="fa fa-star" /></a>
                  <a href="#"><i className="fa fa-star" /></a>
                  <a href="#"><i className="fa fa-star" /></a>
                  <a href="#"><i className="fa fa-star" /></a>
                  <a href="#"><i className="fa fa-star-half-o" /></a>
                </div>
                <div className="testi_item">
                  <p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face</p>
                  <h4>Fanny Spencer</h4>
                  <a href="#"><i className="fa fa-star" /></a>
                  <a href="#"><i className="fa fa-star" /></a>
                  <a href="#"><i className="fa fa-star" /></a>
                  <a href="#"><i className="fa fa-star" /></a>
                  <a href="#"><i className="fa fa-star-half-o" /></a>
                </div>

              

            </OwlCarousel>

            
            
              
              
            </div>
          </div>
       
      </section>
      {/*================End Testimonials Area =================*/}
        </React.Fragment>       
    );
}
export default Terminal;