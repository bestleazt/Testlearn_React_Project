import React from 'react';
import Isotope from './isotope';
function Project(){
    return(
        <React.Fragment>
                {/*================Projects Area =================*/}
      <section className="projects_area p_120">
        <div className="container">
          <div className="main_title">
            <h2>Our Recent Completed Projects</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
          </div>

          <Isotope></Isotope>
          
          
        </div>
      </section>
      {/*================End Projects Area =================*/} 
        </React.Fragment>
    );
}
export default Project;