import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style.scss";
import sliderImage1 from "../assets/SliderRectangle 26.png";
import sliderImage2 from "../assets/Slierimage.png";
import sliderImage3 from "../assets/image (1).png";
import sliderImage4 from "../assets/Rectangle 26 (1).png";
import sliderImage5 from "../assets/image (2).png";
import sliderImage6 from "../assets/image (3).png";
import mainImage from "../assets/Group 37.png";
import mainImage1 from "../assets/Rectangle 35.png";
const SlidingCard = [
  {
    imageSrc: sliderImage1,
    title: "Samael Jakhoris",
    heading: "Green Shadows",
    para: "Sharp lines and muted tones reveal the weight of envy, with each brushstroke carrying a sense of hidden desire.",
  },
  {
    imageSrc: sliderImage2,
    title: "Samael Jakhoris",
    heading: "Silent Embrace",
    para: "A gentle melding of colors, where serenity meets vulnerability, offering comfort in the stillness of reflection.",
  },
  {
    imageSrc: sliderImage3,
    title: "Samael Jakhoris",
    heading: "Boundless Release",
    para: "The colors surge and flow, capturing the moment of surrender—an exhale into freedom and untamed energy.",
  },
  {
    imageSrc: sliderImage4,
    title: "By: Samael Jakhoris",
    heading: "Inner Peace",
    para: "Soft, flowing hues cradle the figure in a moment of quiet reflection, where stillness and clarity find balance.",
  },
  {
    imageSrc: sliderImage5,
    title: "By: Samael Jakhoris",
    heading: "Joy Unbound",
    para: "A burst of vibrant colors leaps across the canvas, embodying the pure exhilaration of freedom and unrestrained joy.",
  },
  {
    imageSrc: sliderImage6,
    title: "By: Samael Jakhoris",
    heading: "Raw Rage",
    para: "Bold, jagged strokes lash across the canvas, embodying the intense force of anger and emotional release.",
  },
];
export default function SliderSection() {
  const [sliderRef, setSliderRef] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;
  const progressPercentage = (currentSlide / totalSlides) * 100;
  const sliderSetting = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log(SlidingCard);

  return (
    <div className="Sliding">
      <img src={mainImage} class="img-fluid mainImg" alt="..."></img>
      <img src={mainImage1} class="img-fluid mainImg2" alt="..."></img>
      <div className="container maxContain Slidings">
        <div className="row align-items-center">
          <div className="col-9 ">
            <h1 className="text-start">Our Exclusive NFTs</h1>
          </div>
          <div className="sliderMainbtn col-3 ">
            <button
              onClick={sliderRef?.slickPrev}
              className="btn sliderButton"
              type="button"
            >
              <svg
                height="31px"
                width="31px"
                xmlns="http://www.w3.org/2000/svg"
                className="svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#3A87FA"
                  d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6z"
                />
              </svg>
            </button>
            <button
              onClick={sliderRef?.slickNext}
              className="btn  sliderButton"
              type="button"
            >
              <svg
                height="31px"
                width="31px"                
                xmlns="http://www.w3.org/2000/svg"
                className="svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#3A87FA"
                  d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <div className=""> */}
      <div className="container maxContain">
        <Slider ref={setSliderRef} {...sliderSetting}>
          {SlidingCard.map((card, i) => {
            return (
              <div key={i} className="slideStart">
                <div className="sliderImage">
                  <img src={card.imageSrc} alt="..." />
                </div>
                <div className="d-flex flex-column justify-content-sm-center justify-content-md-center justify-content-lg-start align-items-start text-start textContainer">
                  <h1 className="title"><span className="titleSpan">By:</span>{card.title}</h1>
                  <h2 className="heading">{card.heading}</h2>
                  <p className="para">{card.para}</p>
                </div>
              </div>
            );
          })}
        </Slider>
        <div style={{ padding: "0 10px" }}>
          <div
            className="progress-bar-wrapper"
            style={{ marginTop: "67px", backgroundColor: "#1862d033" }}
          >
            <div
              className="progress-bar"
              style={{
                width: `${progressPercentage}%`,
                transition: "width 0.5s ease",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}