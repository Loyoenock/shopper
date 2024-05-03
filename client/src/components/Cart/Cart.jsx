import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.scss'

const Cart = () => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/458649/pexels-photo-458649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Hat",
            desc: "Hat with a wide brim",
            isNew: true,
            oldPrice: 14,
            price: 12
          },
          {
            id: 2,
            img: "https://images.pexels.com/photos/1917611/pexels-photo-1917611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/",
            isNew: false,
            title: "T-shirt",
            desc: "T-shirt with a round neck and short sleeves",
            oldPrice: 19,
            price: 16
          },
    ]
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map(item =>(
            <div className='item' key={item.id}>
                <img src={item.img} alt='' />
                <div className='details'>
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0, 100)}</p>
                    <div className='price'>1 x ${item.price}</div>
                </div>
                <DeleteIcon className='delete' />
            </div>
        ))}
        <div className='total'>
            <span>Subtotal</span>
            <span>$28</span>
        </div>
        <button>Proceed to checkout</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart