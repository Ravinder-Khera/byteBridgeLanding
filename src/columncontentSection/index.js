import React from "react";
import flowerImage from "../assets/image.png";
function ColumncontentSection() {
  return (
    <div>
      <div class="container columnSection maxContain">
        <div class="row align-items-center text-start">
          <div class="col-lg-6 col-sm-12 col-md-12 columnSection1">
            <h1 className="About">About the Art</h1>
            <p className="collection">
              This collection by Samael Jakhoris captures the raw, unfiltered
              emotions that define the human experience. Each piece, created
              with a blend of fluid watercolor and jagged lines, speaks to the
              complexity of feelings like joy, anger, envy, and reflection.u
            </p>
            <p className="collection">
              The vibrant hues and dripping textures are carefully chosen to
              evoke the inner turmoil or serenity of the moment, inviting the
              viewer to explore their own emotional landscape. The absence of
              defined forms allows the art to transcend the literal, embracing
              the abstract nature of our feelings.
            </p>
            <p className="collection">Through this collection, Jakhoris connects with his audience on a deeply personal level, allowing each viewer to interpret and feel the art in their own way.</p>
          </div>
          <div class="col-lg-6 col-sm-12 col-md-12 ">
            <img src={flowerImage} class="img-fluid flowerimage" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColumncontentSection;
