/** @type {import('next').NextConfig} */

module.exports = {

    images: {
        domains: [ 'i.ibb.co', 'fakestoreapi.com']
     },experimental: {
        appDir: true,
     },

     env: {
      stripe_public_key: process.env.STRIPE_PUBLIC_KEY
     }


};