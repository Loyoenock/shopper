import React, { useState } from 'react';
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

function Product() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    'https://images.pexels.com/photos/21610110/pexels-photo-21610110/free-photo-of-smiling-woman-sitting-in-shirt-and-overalls.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/6758026/pexels-photo-6758026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className='product'>
      <div className='left'>
        <div className='image-container'>
          <img src={images[0]} alt='' onClick={() => handleImageClick(0)} />
          <img src={images[1]} alt='' onClick={() => handleImageClick(1)} />
        </div>
        <div className='mainImg'>
          <img src={images[selectedImage]} alt='' />
        </div>
      </div>
      <div className='right'>
        <h1>Title</h1>
        <span className='price'>$19.99</span>
        <p>Explore Girllie's handpicked selection of the season's most coveted pieces. From elegant dresses to chic accessories, our featured collection is curated to inspire and elevate your style.</p>
        <div className='quantity'>
          <button onClick={()=>setQuantity(prev => (prev === 1 ? 1: prev-1))}>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev => prev+1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon />
            Add to Cart
        </button>
        <div className='links'>
          <div className='item'>
            <FavoriteBorderIcon />
            Add to Wishlist
          </div>
          <div className='item'>
            <BalanceIcon />
            Add to Compare
          </div>        
        </div>        
        <div className='info'>
          <span>Vendor: Polo </span>
          <span>Product Type: T-shirt</span>
          <span> Tag: Women, Top</span>
        </div>
        <hr />
        <div className='info'>
          <span>Description</span>
          <hr />
          <span>Additional information</span>
          <hr />
          <span>FAQs</span>
        </div>      
      </div>
    </div>
  );
}

export default Product;
