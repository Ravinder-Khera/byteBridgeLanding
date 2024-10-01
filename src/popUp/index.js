import React, { useEffect, useRef } from "react";
import "./popUp.scss"; // Assuming styles are in the same place

export const HeaderPopUp = ({ children, isOpen, onClose }) => {
  const popupRef = useRef(null);

  // Close the popup if clicked outside of the popup content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose(); // Call the onClose function if clicked outside
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null; // Don't render anything if the popup is not open
  }

  return (
    <div className="popup-overlay headerPopUp">
      <div className="popup-content" ref={popupRef}>
        {children}
      </div>
    </div>
  );
};

export const NftPopUp = ({ children, isOpen, onClose }) => {
  const popupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null; // Don't render anything if the popup is not open
  }

  return (
    <div className="popup-overlay nftPopUp">
      <div className="popup-content" ref={popupRef}>
        <button onClick={onClose} className="close-popup-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M10.6047 1.8125L1.39539 11.0218M1.39539 1.8125L10.6047 11.0218"
              stroke="black"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};
