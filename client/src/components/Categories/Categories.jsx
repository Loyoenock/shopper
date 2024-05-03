import React from 'react'
import "./Categories.scss"
import {Link} from "react-router-dom"

const Categories = () => {
  return (
    <div className='categories'>
    <div className='col'>
        <div className='row'>
            <img src='https://images.pexels.com/photos/19843907/pexels-photo-19843907/free-photo-of-studio-shoot-of-a-brunette-wearing-a-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
            <button>
            <Link className='link' to="/products/1">Ladies</Link>
            </button>
        </div>
        <div className='row'>
             <img src='https://images.pexels.com/photos/19843907/pexels-photo-19843907/free-photo-of-studio-shoot-of-a-brunette-wearing-a-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
            <button>
            <Link className='link' to="/products/1">Ladies</Link>
            </button>
        </div>
    </div>
    <div className='col'>
        <div className='row'><img src='https://images.pexels.com/photos/19843907/pexels-photo-19843907/free-photo-of-studio-shoot-of-a-brunette-wearing-a-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
            <button>
            <Link className='link' to="/products/1">Ladies</Link>
            </button></div>
    </div>
    <div className='col col-l'>
        <div className='row'>
        <div className='col'>
            <div className='row'>
            <img src='https://images.pexels.com/photos/19843907/pexels-photo-19843907/free-photo-of-studio-shoot-of-a-brunette-wearing-a-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
            <button>
            <Link className='link' to="/products/1">Ladies</Link>
            </button>
            </div>
        </div>
        <div className='col'>
            <div className='row'>
            <img src='https://images.pexels.com/photos/19843907/pexels-photo-19843907/free-photo-of-studio-shoot-of-a-brunette-wearing-a-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
            <button>
            <Link className='link' to="/products/1">Ladies</Link>
            </button>
            </div>
        </div>
        </div>
        <div className='row'>
            <img src='https://images.pexels.com/photos/19843907/pexels-photo-19843907/free-photo-of-studio-shoot-of-a-brunette-wearing-a-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
            <button>
            <Link className='link' to="/products/1">Ladies</Link>
            </button>
        </div>
    </div>
    </div>
  )
}

export default Categories
