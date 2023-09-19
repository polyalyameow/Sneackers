import React, {useState} from 'react';
import "./ProductElemenent.css"

import img1 from "../../images/image-product-1.jpg";
import img2 from "../../images/image-product-2.jpg";
import img3 from "../../images/image-product-3.jpg";
import img4 from "../../images/image-product-4.jpg";


const Product = () => {

  const images = [
    {id: 0, value: img1},
    {id: 1, value: img2},
    {id: 2, value: img3},
    {id: 3, value: img4},
  ]
  
  const [collection, setCollection]=useState(images[0])
  const [val,setVal] = useState(0)
 

  const handleClick=(index)=>{
    console.log(index)
    setVal(index)
    const slider=images[index];
    setCollection(slider)
    
  }


  return (
    <div className="container">
    
    <img className='container__image' src={collection.value} /> 
    
    <div className='container__thumbnail'>
      {images.map((data,i)=>
      <div className="thumbnail" key={i} >
       <img className={collection.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)}/>
       </div>
      )}
    </div>
  </div>
  )
}

export default Product