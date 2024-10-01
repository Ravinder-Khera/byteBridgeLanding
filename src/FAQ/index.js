import React from "react";
import faqImage1 from "../assets/Group 38.png";
import faqImage2 from "../assets/Ellipse 10.png";
import faqImage3 from "../assets/Rectangle 38.png";
function FAQ() {
  return (
    <div className="mainFAQ">
      <img src={faqImage1} className="img-fluid faqImg1" alt="..."></img>
      <img src={faqImage2} className="img-fluid faqImg2" alt="..."></img>
      <img src={faqImage3} className="img-fluid faqImg3" alt="..."></img>
      <div className="container FAQ maxContain ">
        <div className="row  text-start">
          <div className="col-lg-6 col-sm-12 col-md-12">
            <h1 className="FAQHead">
              Frequently <br></br>Asked Questions
            </h1>
            <p className="FAQpara">
              Here are brief answers to common questions about Samael Jakhoris'
              art and the inspiration behind his work.
            </p>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-12 FAQcolumn2">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item border-0">
                <h2
                  className="accordion-header accordionHeader1"
                  id="headingOne"
                >
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <h1 className="faqHeading">
                      What inspired this collection of paintings?
                    </h1>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="faqPara">
                      The collection is inspired by the raw emotions of joy,
                      anger, envy, and reflection, exploring the depths of human
                      feelings through abstract forms and vibrant colors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <h1 className="faqHeading">
                      What techniques does the artist use in these paintings?
                    </h1>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="faqPara">
                      Jakhoris uses watercolor dripping and jagged strokes,
                      blending vibrant and muted tones to create emotional depth
                      and movement in each piece.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <h1 className="faqHeading">
                      How can I interpret the meaning of each painting?
                    </h1>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="faqPara">
                      Each painting is abstract, allowing personal
                      interpretation. The expressive colors and forms invite
                      viewers to connect with their own emotions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
