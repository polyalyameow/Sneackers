import React, { useState } from "react";
import "./ProductElemenent.css";

import img1 from "../../images/image-product-1.jpg";
import img2 from "../../images/image-product-2.jpg";
import img3 from "../../images/image-product-3.jpg";
import img4 from "../../images/image-product-4.jpg";

import previous from "../../images/icon-previous.svg";
import next from "../../images/icon-next.svg";


import { useBetween } from "use-between";


const images = [
  { id: 0, value: img1 },
  { id: 1, value: img2 },
  { id: 2, value: img3 },
  { id: 3, value: img4 },
];

export const useShareableStateCollection = () => {
  const [collection, setCollection] = useState(images[0]);
  return {
    collection,
    setCollection,
  };
};

const Product = () => {
  // const images = [
  //   {id: 0, value: img1},
  //   {id: 1, value: img2},
  //   {id: 2, value: img3},
  //   {id: 3, value: img4},
  // ]

  // const [collection, setCollection]=useState(images[0])
  const { collection, setCollection } = useBetween(useShareableStateCollection);
  const [val, setVal] = useState(0);



  const handleClick = (i) => {
    console.log(i);
    setVal(i);
    const slider = images[i];
    setCollection(slider);
    console.log(collection);
  };

  const handlePrevious = () => {
    let index = val <= images.length - 1 && val > 0 ? val - 1 : val;
    setVal(index);
    const slider = images[index];
    setCollection(slider);
  };

  const handleNext = () => {
    let index = val < images.length - 1 ? val + 1 : val;
    setVal(index);
    const slider = images[index];
    setCollection(slider);
  };



  return (
      <div className="container">
        <div className="container__main">
                   <button className="btn-click" onClick={handlePrevious}>
                <img src={previous} className="click" />
              </button>
      <img
        className="container__image"
        src={collection.value}/>
                    <button className="btn-click" onClick={handleNext}>
                <img src={next} className="click" />
              </button>
              </div>
      <div className="container__thumbnail">
        {images.map((data, i) => (
          <div className="thumbnail" key={i}>
            <img
              className={collection.id === i ? "clicked" : ""}
              src={data.value}
              onClick={() => handleClick(i)}
            />
          </div>
        ))}
         
         </div>
        
      </div>
      
      
   
  );
};

export default Product;
