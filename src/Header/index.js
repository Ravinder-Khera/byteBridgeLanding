import React, { useState } from "react";
import brand from "../assets/logo.svg fill.png";
import { HeaderPopUp } from "../popUp";
import { CopyIcon, DropDownIcon, DummyTokenIcon, LogoutIcon } from "../assets/svg";
import ByteX from "../assets/Ellipse 493.png"
import DummyNft from "../assets/Rectangle 37.png"

function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const togglePopup = () => {
    if(!isConnected){
      setIsConnected(true)
      return
    }else{
      setIsPopupOpen(!isPopupOpen);
    }
  };

  const toggleLogOut = () => {
      setIsConnected(false)
      setIsPopupOpen(!isPopupOpen);
  };

  const dummyNftsArray = Array(3).fill(null);
  return (
    <>
      <div>
        <nav className="navbar navbar-light navbar-expand-lg ">
          <div className="container maxContain justify-content-between">
            <a className="navbar-brand" href="/">
              <img src={brand} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <button
                onClick={togglePopup}
                className="btnCommon btnConnect"
                type="submit"
              >
                {isConnected ? <>
                  My Wallet <DropDownIcon /> </>
                :
                'Connect Wallet'
                }
              </button>
            </div>
          </div>
        </nav>
      </div>
      <HeaderPopUp isOpen={isPopupOpen} onClose={togglePopup}>
        <div className="walletAddressDiv">
          <span>0x12F1.....2345678</span>
          <CopyIcon />
        </div>
        <h4 className="walletBalance">200 Matic</h4>
        <ul className="nav walletTabs nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="Token-tab"
              data-bs-toggle="tab"
              data-bs-target="#Token"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Token
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="NFTs-tab"
              data-bs-toggle="tab"
              data-bs-target="#NFTs"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              NFTs
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="Token"
            role="tabpanel"
            aria-labelledby="Token-tab"
          >
            <div className="tokenBox">
              <div className="tokenSide">
                <img src={ByteX} alt="ByteX"/>
                <h5 className="tokenName">ByteX</h5>
              </div>
              <div className="amountSide">
                200 ByteX
              </div>
            </div>
            <button className="freeTokenBtn">
              <a  href="https://byte-faucet.blockchainaustralia.link/">Get Free Token</a>
            </button>
          </div>
          <div
            className="tab-pane fade"
            id="NFTs"
            role="tabpanel"
            aria-labelledby="NFTs-tab"
          >
            <div className="tokenBox nftSide">
              <div className="tokenBox">
                <div className="tokenSide">
                  <h5 className="tokenName">Collection Name</h5>
                </div>
                <div className="collectionCopy">
                  <span>0x12.....5678</span>
                  <CopyIcon />
                </div>
              </div>
              {dummyNftsArray.map((_, index) => (
                <div key={index} className="tokenBox">
                  <div className="tokenSide">
                    <img className="dummyNft" src={DummyNft} alt="" />
                    <h5 className="collectionName">Heritage Art</h5>
                  </div>
                  <div className="collectionToken">
                    <DummyTokenIcon />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="logOutBtn" onClick={toggleLogOut}>
          <LogoutIcon />
          <span>Logout</span>
        </button>
      </HeaderPopUp>
    </>
  );
}

export default Header;
