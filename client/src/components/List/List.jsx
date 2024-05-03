import React from 'react'
import Card from '../Card/Card'
import './List.scss'

const List = () => {
    
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/458649/pexels-photo-458649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Hat",
      isNew: true,
      oldPrice: 14,
      price: 12
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1917611/pexels-photo-1917611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/",
      isNew: false,
      title: "T-shirt",
      oldPrice: 19,
      price: 16
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isNew: true,
      title: "Coat",
      oldPrice: 20,
      price: 18
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/3765976/pexels-photo-3765976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isNew: true,
      title: "Shirt",
      oldPrice: 34,
      price: 30
    },

  ]

  return (
    <div className='list'>
        {data?.map(item => (
            <Card item={item} key={item.id} />
        ))}
    </div>
  )
}

export default List