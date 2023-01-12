import Product from "./Product";

function ProductFeed({products}) {
    console.log(products)
    return (

        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
            

          {products.slice(0, 4).map(({id,title,price,description,category,image}) =>
          
           <Product
           key={id}
           title={title}
           price={price}
           description={description}
           category={category}
           image={image}
           />
            )}


            {/* Advert */}
         <div className="md:col-span-full mx-auto gap-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center bg-white">
           <img width={300} height={300} src="https://i.pinimg.com/736x/63/93/d0/6393d0af790ea5ecdee4daf7f24e11dc.jpg"  alt="Advert1" />
            <img width={300} height={300} src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/113532550/original/14c00b7e48fae47f75af029c36bcbba7da0a54f8/design-professional-web-banners-and-ads.jpg"  alt="Advert2" />
           <img width={300} height={300} src="https://i.pinimg.com/736x/6b/a5/a1/6ba5a1d4273446452d0e7ad1600fe3b8.jpg"  alt="Advert3" />
         </div>

       <div className='md:col-span-2'>

         {products.slice(4, 5).map(({id,title,price,description,category,image}) =>    
           <Product
           key={id}
           title={title}
           price={price}
           description={description}
           category={category}
           image={image}
           />
           )}
           
        </div>  


        {products.slice(5, products.length).map(({id,title,price,description,category,image}) =>
           
           <Product
           key={id}
           title={title}
           price={price}
           description={description}
           category={category}
           image={image}
           />
   
             )}   

        </div>
    )
    
}

export default ProductFeed;