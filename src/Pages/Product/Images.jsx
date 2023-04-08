import React from "react";
import ProductDetials from "./ProductDetials";
import Specifications from "./Specifications";
import { useState } from "react";
import "./Product.css";
export default function Images() {
  const [zoomStyle, setZoomStyle] = useState({});

  const [imageList, setImageList] = useState([
    {
      src: "https://i5.walmartimages.com/asr/ce0f57f7-ad6f-4e0b-a7ae-f751068597c2_1.b7e1f1bab1fd7f98cb9aef1ae9b783fb.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      width: 80,
      height: 80,
    },
    {
      src: "https://i5.walmartimages.com/asr/eb39f5cf-d1ed-44e5-ae5b-31c40b66a47d_1.b49350e436ea1fa00f6560c82d466779.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      width: 80,
      height: 80,
    },
    {
      src: "https://i5.walmartimages.com/asr/c5c08b24-18b0-49ca-9152-65eec03c78f7_2.75a8c2c6a46910c889ee9572d90a0393.jpeg",
      width: 80,
      height: 80,
    },
    {
      src: "https://i5.walmartimages.com/asr/61054013-89c1-43f7-93df-db1c9ab5a3cc_2.488571df38a46a30889db418f446d855.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      width: 80,
      height: 80,
    },
    {
      src: "https://i5.walmartimages.com/asr/91e05da4-69dd-45ab-b2af-37236ce5ebaf_3.ae964e19305c2e8a1ab4a8a1a0ed4e25.jpeg",
      width: 80,
      height: 80,
    },
    {
      src: "https://i5.walmartimages.com/asr/5d8e7111-3396-471b-8732-2f7258fe753b_2.ff06c1a1904834e7d52f5a38c42c34da.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      width: 80,
      height: 80,
    },
    {
      src: "https://i5.walmartimages.com/asr/645aa856-60f9-4c00-bf2c-56cc75a24ceb_1.c44ea0268e5a1e89eae5e40111b8ca06.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      width: 80,
      height: 80,
    },
    {
      src: "https://i5.walmartimages.com/asr/91b12219-1951-4333-a98f-3ede08fd376c_2.8baf3fa16c3b14aa621075876c62e974.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      width: 80,
      height: 80,
    },
  ]);
  const [displayedImgSrc, setDisplayedImgSrc] = useState("");
  const [hoveredImgSrc, setHoveredImgSrc] = useState("");

  function handleMouseMove(event) {
    const container = event.currentTarget;
    const containerRect = container.getBoundingClientRect();
    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;
    const zoomLevel = 1.6;
    const zoomX = (mouseX / containerRect.width) * 100;
    const zoomY = (mouseY / containerRect.height) * 100;
    const transformValue = `translate(-${zoomX}%, -${zoomY}%) scale(${zoomLevel})`;
    setZoomStyle({ transform: transformValue });
  }

  function handleMouseLeave() {
    setZoomStyle({ transform: "translate(0, 0) scale(1)" });
  }
  // Event handler for when an image is hovered over
  const handleImageHover = (src) => {
    setDisplayedImgSrc(src);
    setHoveredImgSrc(src);
  };

  const handleImageLeave = () => {
    setHoveredImgSrc("");
  };
  return (
    <>
      <div className="col-8 ">
        <div className="row flex gap-x-6">
          <div id="image-list" className="col-2 py-2">
            {imageList.map((image) => (
              <img
                className="Pimage"
                key={image.src}
                src={image.src}
                width={image.width}
                height={image.height}
                onMouseOver={() => handleImageHover(image.src)}
                onMouseLeave={handleImageLeave}
                alt=""
                style={{
                  borderBottom: `5px solid ${
                    hoveredImgSrc === image.src ? "#0071ce" : "transparent"
                  }`,
                }}
              />
            ))}
          </div>
          <div
            className="col-10 prevent_flow"
            id="displayed-img"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={displayedImgSrc}
              width={612}
              height={612}
              alt=""
              style={zoomStyle}
            />
          </div>
        </div>
        <ProductDetials />
        <Specifications />
      </div>
    </>
  );
}
