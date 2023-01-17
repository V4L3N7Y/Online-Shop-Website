import { getSession, useSession } from 'next-auth/react';
import db from '../.././firebase' 
import Order from '../components/Order';
import moment from 'moment';
import Header from '../components/Header'

function Orders( {orders} ) {
    const { data: session } = useSession() 

    console.log(orders)

  return (
    <div>
      <Header/>
        <main className='max-w-screen-lg mx-auto p-10'>
            <h1 className='text-3xl border-b mb-2 pb-1 border-gray-200'>
                YOUR ORDERS
            </h1>
            {session ? (
                <h2>{orders.length} Orders</h2>
            ) : (
                <h2>Please sing in to see your orders.</h2>
            )}

            <div className='mt-5 space-y-4'>
                 {orders?.map(
                    ({id, amount, amountShipping, items, timestamp, images}
                        ) => (
                          <Order key={id} 
                                 id={id}
                                 amount={amount}
                                 amountShipping={amountShipping}
                                 items={items}
                                 timestamp={timestamp}
                                 images={images}   
                            />
                        )
                    )}  
            </div>
        </main>
    </div>
  )
}

export default Orders

export async function getServerSideProps(context) {
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

    // Get the users logged in credentials...
    const session = await getSession(context);

    //if not logged then it dosent show the items from db
    if (!session) {
        return {
            props: {},
        };
    }

//     ///used the same principle as in the webhook.js file but 
//     const serviceAccount = require("../../permission.json");

//     const app = !admin.apps.length
//   ? admin.initializeApp({
//       credential: admin.credential.cert(serviceAccount),
//     })
//   : admin.app();


    ///firebase db
    const stripeOrders = await db
      .collection("users")
      .doc(session.user.email)
      .collection("orders")
      .orderBy("timestamp", "desc")
      .get();
    

    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100,
                })
            ).data,
        }))
    );

    return {
        props: {
            orders
        },
    };
}