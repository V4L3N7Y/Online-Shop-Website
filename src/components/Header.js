import React from 'react';
import Image from 'next/image';
import {MenuIcon, 
        SearchIcon,
        ShoppingCartIcon} from '@heroicons/react/outline';
import {signIn, signOut, useSession} from "next-auth/client";

function Header() {
  return (
    <header>
        {/*Top nav */}
      <div className='flex items-center bg-shop_blue p-1 flex-grow py-2'>
        <div className='mt-2 p-2 flex items-center flex-grow sm:flex-grow-0'>
            <Image
              src='https://i.ibb.co/Pzq83XQ/Untitled-1.png'
              height={40}
              width={150}
              objectFit='contain'
              className='cursor-pointer'
            />
        </div>

        {/* Search */}
        <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-white hover:bg-gray-100'>
          <input type="text" className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md'/>
           <SearchIcon className='h-12 p-4'/>
        </div>
           

       {/* Right */}

        <div className='text-white text-center flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div onClick={signIn} className='cursor-pointer link'>
            <p>Hello Nastase Valentin</p>
             <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>

          <div className='cursor-pointer link'>
             <p>Returns</p>
              <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>

          <div className='cursor-pointer relative link flex items-center'>
            
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-gray-100 text-center rounded-full text-black bolt'>0</span>

             <ShoppingCartIcon className="h-10" />
              <p className='hidden md:inline font-extrabold md:text-sm mt-4'>Basket</p>

          </div>
        </div>

      </div>
      {/*Bottom nav*/}
      <div className='flex items-center space-x-3 p-2 pl-6 bg-shop_blue-light text-white text-sm'>
        <p className='link flex items-center'>
          <MenuIcon className='h-6 mr-1' /> 
            All
        </p>
        <p className='link'>Supreme Videos</p>
        <p className='link'>oNLINEsHOP Business</p>
        <p className='link'>Today's Deals</p>
        <p className='link hidden lg:inline-flex'> Electronics</p>
        <p className='link hidden lg:inline-flex'> Food & Grocery</p>
        <p className='link hidden lg:inline-flex'> Supreme</p>
        <p className='link hidden lg:inline-flex'> Buy Again</p>
        <p className='link hidden lg:inline-flex'> Shopper Toolkit</p>
        <p className='link hidden lg:inline-flex'> Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header
