import React from "react";
import bannerImage from "../assets/Group 31.png";
import backImage1 from "../assets/Ellipse 8.png";
import backImage2 from "../assets/Group 37.png";
import backImage3 from "../assets/Rectangle 34.png";
function Banner() {
  return (
    <div className="Banner" style={{background:"#3a87fa08"}}>
          <img src={backImage1} class="img-fluid backImg backImg1" alt="..."/>
        <img src={backImage2} class="img-fluid backImg backImg2" alt="..."/>
        <img src={backImage3} class="img-fluid backImg backImg3" alt="..."/>
      <div className="container maxContain bannerContain ">
        <div className="row align-items-center text-start  ">
          <div className="col-lg-6 col-md-12 col-sm-12 bannerColumn1 ">
            <div className="d-flex heading1">
              <div className="logoImage">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="24"
                  height="14"
                  viewBox="0 0 24 14"
                  fill="none"
                >
                  <path d="M0 0H24V14H0V0Z" fill="url(#pattern0_4476_2625)" />
                  <defs>
                    <pattern
                      id="pattern0_4476_2625"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_4476_2625"
                        transform="scale(0.0416667 0.0714286)"
                      />
                    </pattern>
                    <image
                      id="image0_4476_2625"
                      width="24"
                      height="14"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAOCAYAAAA1+Nx+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEeSURBVHgBtZTBbYMwFIbfcy7pjUtVessIsEGZoOoEBbpAM0HSCTpBK2+QEcgGhg04IvXCrafw14YEOWmCiUSehATWe9+H/WwzTRR+muPcuKAbx3SCBgmBtrcTzASI6ekqgR+rxUNafHqx8gbz3opXAuT+s9SPdAoMnARnTHi/Y84uSfy0WB3BG0QgFNSJSh6C69fFYYxB+S8Q1TKsj+CEtQ2vZFjaLOGEc9c4MAX2TMbA/wlO4Xp5ltVXEGnQx0EyF6wedV/GwDvGPu5jFcwEb/o/JyTVdyh7earWOn11Uj8I7wUGLtqGkncOfkHihLeCsXBbwszP2OHFBW8FfpJn5oDoi6Tmpi3auopMo+3dNCgwyXPmzQ5Y/sgwp4njD79Kl37RKj5yAAAAAElFTkSuQmCC"
                    />
                  </defs>
                </svg>
              </div>
              <p className="emotion">Emotions on Canvas</p>
            </div>
            <h1 className="heading">Your Inner World</h1>
            <p className="para">
              Explore a captivating collection of handcrafted watercolor
              paintings, each capturing human emotions—joy, anger, reflection,
              and freedom.
            </p>
            <button type="button" className="btnCommon btnView text-center">
              View NFTs
            </button>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 bannerColumn2">
            <img src={bannerImage} class="img-fluid" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
