import Header from '../components/Header'
import CheckoutProduct from '../components/CheckoutProduct'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'
import { useSession } from "next-auth/react";
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios'



const stripePromise = loadStripe(`${process.env.stripe_public_key}`);
function Checkout() {

   const { data: session } = useSession();
   const total = useSelector(selectTotal);
   const items = useSelector(selectItems);

   const createCheckoutSession = async () => {
       const stripe = await stripePromise;

    /// Call backend to create a checkout session
    const checkoutSession = await axios.post('/api/create-checkout-session', 
    {
      items:items,
      email:session.user.email
    });

    /// Redirect user to Stripe Checkout
    const result =await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id
    });

    if (result.error) {
      alert(result.error.message);
    }
     
   }
    
  return (

  <div style={{backgroundColor:"rgba(243, 244, 246)"}} className='bg-gray-100'>
        <Header />        
    <main className='lg:flex max-w-screen-2xl mx-auto'>

       <div className='flex-grow m-5 shadow-sm'>
            <Image 
              src="https://i.ibb.co/hs5MC6z/Untitled-1.jpg"
              width={1020}
              height={250}
              alt="checkout baner"
              />

            <div style={{backgroundColor:"white"}} className='flex flex-col p-5 space-y-10'>
              <h1 style={{fontSize:"30px"}} className='border-b pb-5'>
                {items.length === 0 ? 
                   "Your oNLINEsHOP basket is empty" : 
                    "Shopping Basket"
                 }
              </h1>   
                {items.map((item, i) => (
                   <CheckoutProduct
                       key={i}
                       id={item.id}
                       title={item.title}
                       rating={item.rating}
                       price={item.price}
                       description={item.description}
                       category={item.category}
                       image={item.image}
                       hasPrime={item.hasPrime}
                    />
                ))}
            </div>
        </div>

        {/* Right */}

        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
            <h2>Subtotal ({items.length} items):
           {/*  Rounded the total number using tha Math.round() fn */}
            <span className='font-bold'>
              <p>{Math.round(total)} EUR</p>
            </span>
            </h2>

            <button 
              role='link'
              onClick={createCheckoutSession}
              disabled={!session}
              className={`button mt-2 ${!session && "from-gray-100 to-gray-100 text-red-500 cursor-not-allowed"}`}>
              {!session ? "Sign in to checkout" : "Proceed to checkout"}
            </button>
            </>
          )}
        </div>

    </main>
    </div>

  )
}

export default Checkout;