import React from 'react';
import IsotopeJs from 'isotope-layout';

class Isotope extends React.Component{

    onfilterChange = (newFilter)=>{
           if(this.iso === undefined){
               this.iso = new IsotopeJs('.projects_inner',{
                    layoutMode: "fitRows"
               }); 
           }
           if(newFilter === '*'){
               this.iso.arrange({filter: `*`});
           } else{
               this.iso.arrange({filter:`.${newFilter}`});
           }
    }

    render(){
        return(
            <React.Fragment>
            <div className="projects_fillter">
            <ul className="filter list">
              <li className="active" data-filter="*" onClick={()=>{this.onfilterChange("*")}} ><a href="javascript:void(0)">All Categories</a></li>
              <li data-filter=".brand" onClick={()=>{this.onfilterChange("brand")}}><a href="javascript:void(0)">Branding</a></li>
              <li data-filter=".work" onClick={()=>{this.onfilterChange("work")}}><a href="javascript:void(0)">Creative Work </a></li>
              <li data-filter=".web" onClick={()=>{this.onfilterChange("web")}} ><a href="javascript:void(0)">Web Design</a></li>
            </ul>
          </div>

            <div className="projects_inner row">
            <div className="col-lg-4 col-sm-6 brand web">
              <div className="projects_item">
                <img className="img-fluid" src="img/projects/projects-1.jpg" alt="" />
                <div className="projects_text">
                  <a href="portfolio-details.html"><h4>3D Helmet Design</h4></a>
                  <p>Client Project</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 brand work">
              <div className="projects_item">
                <img className="img-fluid" src="img/projects/projects-2.jpg" alt="" />
                <div className="projects_text">
                  <a href="portfolio-details.html"><h4>3D Helmet Design</h4></a>
                  <p>Client Project</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 work">
              <div className="projects_item">
                <img className="img-fluid" src="img/projects/projects-3.jpg" alt="" />
                <div className="projects_text">
                  <a href="portfolio-details.html"><h4>3D Helmet Design</h4></a>
                  <p>Client Project</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 brand web">
              <div className="projects_item">
                <img className="img-fluid" src="img/projects/projects-4.jpg" alt="" />
                <div className="projects_text">
                  <a href="portfolio-details.html"><h4>3D Helmet Design</h4></a>
                  <p>Client Project</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 brand work">
              <div className="projects_item">
                <img className="img-fluid" src="img/projects/projects-5.jpg" alt="" />
                <div className="projects_text">
                  <a href="portfolio-details.html"><h4>3D Helmet Design</h4></a>
                  <p>Client Project</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 brand work web">
              <div className="projects_item">
                <img className="img-fluid" src="img/projects/projects-6.jpg" alt="" />
                <div className="projects_text">
                  <a href="portfolio-details.html"><h4>3D Helmet Design</h4></a>
                  <p>Client Project</p>
                </div>
              </div>
            </div>
          </div>    

            </React.Fragment>
        );
    }

}
export default Isotope;