import React, { useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Cart from '../Cart/Cart';


function Navbar() {

  const [open, setOpen] = useState(false);
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <div className='item'>
            <img src="/img/en.png" alt="" />  
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <span>USD</span> 
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
           <Link className='link' to="products/1">Women</Link>
          </div>
          <div className='item'>
           <Link className='link' to="products/2">Children</Link>
          </div>
          <div className='item'>
           <Link className='link' to="products/3">Home & Decor</Link>
          </div>

        </div>
        <div className='center'>
          <Link className='link' to="/">Girllie</Link>
        </div>
        <div className='right'>
        <div className='item'>
          <Link className='link' to="/">Home</Link>
        </div>
        <div className='item'>
          <Link className='link' to="/">About</Link>
        </div>
        <div className='item'>
          <Link className='link' to="/">Contact</Link>
        </div>
        <div className='item'>
          <Link className='link' to="/">Store</Link>
        </div>
        <div className='icons'>
          <SearchIcon />
          <PersonOutlineIcon />
          <FavoriteBorderIcon />
          <div className='cartIcon' onClick={()=> setOpen(!open)}>
            <ShoppingCartIcon />
            <span>0</span>
          </div>
          </div>
        </div>
      </div>
      {open && <Cart />}      
    </div>
  )
}

export default Navbar
