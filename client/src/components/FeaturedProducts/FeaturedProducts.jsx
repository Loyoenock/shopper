import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card'

const FeaturedProducts = ({ type }) => {

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/458649/pexels-photo-458649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Hat",
      isNew: true,
      oldPrice: 14,
      price: 12
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1917611/pexels-photo-1917611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/",
      img2: "https://images.pexels.com/photos/2033975/pexels-photo-2033975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isNew: false,
      title: "T-shirt",
      oldPrice: 19,
      price: 16
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isNew: true,
      title: "Coat",
      oldPrice: 20,
      price: 18
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/3765976/pexels-photo-3765976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/19843960/pexels-photo-19843960/free-photo-of-studio-shoot-of-a-brunette-wearing-a-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isNew: true,
      title: "Shirt",
      oldPrice: 34,
      price: 30
    },

  ]

  return (
    <div className='featuredproducts'>
      <div className='top'>
        <h1>{type}products</h1>
        <p>Explore Girllie's handpicked selection of the season's most coveted pieces. From elegant dresses to chic accessories, our featured collection is curated to inspire and elevate your style.</p>
      </div>
      <div className='bottom'>
        {data.map(item=>(
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
