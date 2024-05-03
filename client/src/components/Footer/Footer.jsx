import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>Catgories</h1>
          <span>Women</span>
          <span>Children</span>
          <span>Home & Decor</span>
          <span>New Arrival</span>
          <span>Accessores</span>
        </div>
        <div className='item'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Shipping</span>
          <span>Return</span>
          <span>Privacy Policy</span>
        </div>
        <div className='item'>
          <h1>About</h1>
          <span>Welcome to Girllie Boutique, where style meets simplicity. Our curated collection offers chic dresses and charming accessories crafted with precision. Explore now and elevate your wardrobe effortlessly with Girllie's timeless allure.</span>
        </div>
        <div className='item'>
          <h1>Contact</h1>
          <span>Reach out to Girllie Boutique for inquiries, feedback, or assistance. Our dedicated team is here to ensure your shopping experience is seamless and enjoyable.</span>
        </div>
      </div>
      <div className='bottom'>
        <div className='left'>
          <span className='logo'>Girllie</span>
          <span className='copyright'>© 2021 Girllie Boutique. All Rights Reserved.</span>
        </div>
        <div className='right'>
          <img src="/img/payment.png" alt="" /
          >
        </div>
      </div>
    </div>
  );
};

export default Footer
