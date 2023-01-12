import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function CheckoutProduct({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime
}) {

  const dispatch = useDispatch()

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime
    };

    // Push
    dispatch(addToBasket(product));

  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({id}));
  }

  return  <div className="bg-gray-100 grid grid-cols-5">
        <Image src={image} width={200} height={200} />

        {/* Middle */}
        <div className='col-span-3 mx-5'>
          <p>{title}</p>
          <div className='flex'>
        {Array(rating).fill().map((_, i) => (
           <StarIcon key={i} className='h-5 text-gray-500'/>
        ))} 
        </div>
        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <p>{price}EUR</p>

        {hasPrime && (
        <div className='flex items-center space-x-2'>
           <img loading='lazy' width='100' src="https://i.ibb.co/cQzjFmk/Untitled-2.png" alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
        )}
      </div>
      <button onClick={addItemToBasket} className='button'>Add to Basket</button>
      <button onClick={removeItemFromBasket} className='button'>Remove from Basket</button>

    </div>
  
}

export default CheckoutProduct