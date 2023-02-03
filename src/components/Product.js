import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from "../slices/basketSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const MAX_RATING = 5;
const MIN_RATING = 1;



function Product({id,title,price,description,category,image}) {



    const dispatch = useDispatch();
   
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
        );

    const [hasPrime] = useState(Math.random() < 0.5)    

    const addItemToBasket = () => {
       const product = {
        id,
        title,
        price,
        rating,
        description,
        category,
        image,
        hasPrime,
       };
       
       // Sending the product as an action to the REDUX store //
       dispatch(addToBasket(product))

    };

    // pop up notification when you press the "Add to basket" button with a duration of 3 sec //
    
  const [showNotification, setShowNotification] = useState(false);

  const handleButtonClick = () => {
    toast('Added to basket', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

    const handleClicks = [addItemToBasket, handleButtonClick];

   

  return (

    
     
    <div className='relative flex flex-col m-5 bg-white rounded-lg z-30 p-10'>
    
 
      <p key={id} className='absolute top-2 right-2 text-xs italic text-gray-400'>{category.toUpperCase()}</p>

       <Image key={id} src={image} height={200} width={200} className='mx-auto' alt='product images' />

      <h4 className='pt-16'>{title}</h4>

      <div className="flex">      
        {Array(rating).fill().map((_, i) => (
           <StarIcon className='h-5 text-gray-500'/>
        ))}      
      </div>

        <p key={id} className='text-xs my-2 line-clamp-2'>{description}</p>

          <div className='mb-5'>
            <p key={id}>{price} EUR</p>
          </div>
          
        {hasPrime && (
            <div className='flex items-center space-x-2 mt-5 mb-5'>
                 <img width='100' src="https://i.ibb.co/cQzjFmk/Untitled-2.png" alt="" />
                <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
            </div>
        )}

        <button onClick={() => handleClicks.forEach(fn => fn())} className='mt-auto button'>Add to Basket</button>
        <ToastContainer toastStyle = {{ backgroundColor: "rgb(241 245 249)", color: "rgb(23 23 23)", borderLeft: "8px solid #0092ff"}}/>
        

    </div>
  )
}

export default Product