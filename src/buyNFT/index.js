import React, { useState } from "react";
import buyImage from "../assets/Group 22.png";
import backImage2 from "../assets/Group 37.png";
import "./style.scss";
import { NftPopUp } from "../popUp";
import DummyNft from "../assets/Rectangle 37.png"

function BuyNFT() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <>
      <div className="buyNFT">
        <div class="container buyContainer">
          <img
            src={backImage2}
            class="img-fluid backImg backImgbuy"
            alt="..."
          />
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 col-sm-12">
              <img src={buyImage} class="img-fluid buyImage" alt="..." />
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 text-start buyColumn2">
              <div className="d-flex heading2 align-items-center">
                <h1 className="joyHeading">Joy Unbound</h1>
                <span className="nftInfo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36px"
                    height="36px"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M108 84a16 16 0 1 1 16 16a16 16 0 0 1-16-16m128 44A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84m-72 36.68V132a20 20 0 0 0-20-20a12 12 0 0 0-4 23.32V168a20 20 0 0 0 20 20a12 12 0 0 0 4-23.32"
                    />
                  </svg>
                  <div className="toolTipDiv">
                    A burst of vibrant colors leaps across the canvas, embodying
                    the pure exhilaration of freedom and unrestrained joy.
                  </div>
                </span>
              </div>
              <div className="progressValue d-flex justify-content-between">
                <p>50%</p>
                <p>250/500</p>
              </div>
              <progress
                id="file"
                value="50"
                max="100"
                className="w-100 progressBar"
              >
                {" "}
                32%{" "}
              </progress>
              <div className="progressPrice d-flex justify-content-between">
                <p>Price</p>
                <p>50 ByteX</p>
              </div>
              <div className=" progressPrice progressPrice1 d-flex justify-content-between">
                <p>Quantity</p>
                <div className="d-flex valueButton align-items-center">
                  <button type="button" className="border-0 IncButton">
                    -
                  </button>
                  <h1>1</h1>
                  <button type="button" className="border-0 IncButton">
                    +
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={togglePopup}
                className="border-0 w-100 buyButton"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
      <NftPopUp isOpen={isPopupOpen} onClose={togglePopup}>
        <h3 className="eventHeading">Mint Event</h3>
        <div className="evenntInfo">
          <img src={DummyNft} alt="event" className="eventImg" />
          <div className="eventMeta">
            <div className="eventName">Event</div>
            <div className="eventQuantity">
              Quantity
              <button type="button" disabled className="border-0 IncButton">-</button>
              <p>1</p>
              <button type="button" className="border-0 IncButton">+</button>
            </div>
          </div>
        </div>
        <div className="evenntInfo">
          <div className="w-100">
            <h3 className="eventHeading" style={{fontSize:'24px'}}>Payment method</h3>
            <div className="btnFlex">
              <button type="button" className="payBtn active">Crypto</button>
              <button type="button" className="payBtn">Card</button>
            </div>
          </div>
        </div>
        <div className="d-flex w-100 justify-content-between" style={{padding:'28px 0 22px 0'}}>
          <h3 className="eventHeading" style={{fontSize:'24px'}}>Total</h3>
          <h3 className="totalAmt">50 ByteX</h3>
        </div>
        <button className="eventBuyBtn">Buy</button>
      </NftPopUp>
    </>
  );
}

export default BuyNFT;
