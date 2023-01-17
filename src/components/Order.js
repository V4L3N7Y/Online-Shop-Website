import moment from 'moment';
import React from 'react'

function Order({id, amount, amountShipping, items, timestamp, images}) {
  return (
    <div className='relative border rounded-md'>
        <div className='flex items-center space-x-10 p-5 text-gray-600 bg-gray-100 text-sm'>
           <div>
             <p className='font-bolt text-xs'>ORDER PLACE</p>
               <p>{moment.unix(timestamp).format("DD MM YYYY")}</p>
           </div>

           <div>
              <p className='text-xs font-bolt'>TOTAL</p>
              <p>
                {amount} EUR
                 {" "}- Next Day Delivery:{" "}
                6.99 EUR
              </p>
           </div>
           <p className='text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-400'>
            {items.length} items
           </p>
            
           <p className='absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap'>
            ORDER # {id}
            </p>
        </div>  
        <div className="p-5 sm:p-10">
            <div className='flex space-x-6 overflow-x-auto'>
              {images.map(image => (
                <img className='h-20 object-contain sm:h-32' src={image} alt="img"/>
              ))}
           </div>  
        </div>  
    </div>
  )
}

export default Order;
