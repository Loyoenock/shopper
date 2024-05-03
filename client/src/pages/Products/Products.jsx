import React, { useState } from 'react'
import    './Products.scss'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'

function Products() {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [Sort, setSort] = useState('null')

  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Produt Categories</h2>
          <div className='inputItem'>
            <input type='checkbox'id='1' value={1} />
            <label htmlFor='1'>Shoes</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox'id='2' value={2} />
            <label htmlFor='1'>Shirt</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox'id='3' value={3} />
            <label htmlFor='1'>T-shirt</label>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Filter by price</h2>
          <div className='inputItem'>
            <span>0</span>
            <input type='range' min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Sort By</h2>
          <div className='iputItem'>
            <input type='radio' id='asc' value='asc' name='price' onChange={e=>setSort("asc")} />
            <label htmlFor='asc'>Price (Lowest first)</label>
          </div>
          <div className='iputItem'>
            <input type='radio' id='desc' value='desc' name='price' onChange={e=>setSort("desc")} />
            <label htmlFor='desc'>Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img src='https://images.pexels.com/photos/783243/pexels-photo-783243.jpeg?auto=compress&cs=tinysrgb&w=600' className='catImg' alt='' />
        <List catId={catId} maxPrice={maxPrice} Sort={Sort} />
      </div>
    </div>
  )
}

export default Products
