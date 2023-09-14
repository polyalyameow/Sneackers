import styled from 'styled-components';
import Pic1 from "../../images/image-product-1.jpg";
import Pic1Thumbnail from "../../images/image-product-1-thumbnail.jpg";
// import pic2 from "../../images/image-product-2.jpg";
import Pic2Thumbnail from "../../images/image-product-2-thumbnail.jpg";
// import pic3 from "../../images/image-product-3.jpg";
import Pic3Thumbnail from "../../images/image-product-3-thumbnail.jpg";
// import pic4 from "../../images/image-product-4.jpg";
import Pic4Thumbnail from "../../images/image-product-4-thumbnail.jpg";


export const ProductContainer = styled.div`
    /* border: 2px solid red;  */
    display: grid;
    grid-template-areas: 
    "pic1 pic1 pic1 pic1"
    "pic1Thumbnail pic2Thumbnail pic3Thumbnail pic4Thumbnail";
    grid-template-rows: 10fr 1fr;
    grid-template-columns: 1fr;
    width: 445px;
    height: 565px;
    margin-left: 40px;
`

export const ImageOne = styled.img.attrs({
    src: `${Pic1}`
  })`
  grid-area: pic1;
  width: 445px;
  height: 445px;
  border-radius: 15px;
  margin-bottom: 32px;
`

// export const imageTwo = styled.img.attrs({
//     src: `${pic2}`
//   })`
//     width: 445px;
//     height: 445px;
// `

// export const imageThree = styled.img.attrs({
//     src: `${pic3}`
//   })`
//     width: 445px;
//     height: 445px;
// `

// export const imageFour = styled.img.attrs({
//     src: `${pic4}`
//   })`
// `

export const ImageThumbOne = styled.img.attrs({
    src: `${Pic1Thumbnail}`
  })`
  grid-area: pic1Thumbnail;
  width: 88px;
  height: 88px;
  border-radius: 15px;

`

export const ChangedThumb = styled.img.attrs({
  src: `${Pic1Thumbnail}`
})`
  border: 2px solid red;

`

export const ImageThumbTwo = styled.img.attrs({
    src: `${Pic2Thumbnail}`
  })`
  grid-area: pic2Thumbnail;
  width: 88px;
  height: 88px;
  border-radius: 15px;
`

export const ImageThumbThree = styled.img.attrs({
    src: `${Pic3Thumbnail}`
  })`
  grid-area: pic3Thumbnail;
  width: 88px;
  height: 88px;
  border-radius: 15px;
`

export const ImageThumbFour = styled.img.attrs({
    src: `${Pic4Thumbnail}`
  })`
  grid-area: pic4Thumbnail;
  width: 88px;
  height: 88px;
  border-radius: 15px;
`

export const Thumbnails = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`