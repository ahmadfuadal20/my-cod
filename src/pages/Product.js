import Navbar from '../components/Navbar'
import Footer from '../components/Footers'

import Axios from "axios"
import React, { useState, useEffect } from "react"

// const products = [
//     {
//       id: 1,
//       name: 'Carhartt® Hooded Wip script Sweat',
//       href: 'OpenProduct1',
//       imageSrc: 'https://drive.google.com/uc?export=view&id=1gzD9mX_xDJi9DVCNA8eI7zNP5omPBmBP',
//       imageAlt: "Front of men's Basic Tee in black.",
//       price: 'Rp.250',
//       color: 'Black',
//     },
//     {
//         id: 2,
//         name: 'Carhartt® Hooded Wip script Sweat',
//         href: 'OpenProduct2',
//         imageSrc: 'https://drive.google.com/uc?export=view&id=1h7hUfFKsnst4wuJmE20Z7VttyZAQg6SQ',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: 'Rp.300',
//         color: 'Cream',
//     }, 
//     {
//         id: 3,
//         name: 'Vans® Hooded Sweat Milky',
//         href: 'OpenProduct3',
//         imageSrc: 'https://drive.google.com/uc?export=view&id=1hGRFJSH0wUq1P7ujDTRe_y173KLOGiFy',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: 'Rp.215',
//         color: 'Cream',
//       },
//       {
//         id: 4,
//         name: 'Nike® Black',
//         href: 'OpenProduct4',
//         imageSrc: 'https://drive.google.com/uc?export=view&id=1hbphSnW4-3_erFmm_OfTZUNP6XAxT7UE',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: 'Rp.300',
//         color: 'Black',
//       },
//       {
//         id: 5,
//         name: 'All Star® Hoodie',
//         href: 'OpenProduct5',
//         imageSrc: 'https://drive.google.com/uc?export=view&id=1iRpJlKuw-XzeaTBa8Rc0zXWThITODVcu',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: 'Rp.355',
//         color: 'Black',
//       },
//       {
//         id: 6,
//         name: 'Patagonia Hoodie',
//         href: 'OpenProduct6',
//         imageSrc: 'https://drive.google.com/uc?export=view&id=1j1NGUsp_FE5__o_8Lp0RsydmAuRJ7T8n',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: 'Rp.300',
//         color: 'Black',
//       },
//       {
//         id: 7,
//         name: 'Adidas 3 Foil Big Logo Zipper hoodie Black',
//         href: 'OpenProduct7',
//         imageSrc: 'https://drive.google.com/uc?export=view&id=1jChtnN_6n-mrNlsFdegx9iX45gNM8-YJ',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: 'RP.400',
//         color: 'Black',
//       },
//       {
//         id: 8,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//       },

    
//     // More products...
//   ]
  
  //export default function Example() {
    export default function Example() {
      const [product, setProduct] = useState([]);
    
      useEffect(() => {
        getProduct();
      }, []);
    
      const getProduct = () => {
        Axios.get(`https://raw.githubusercontent.com/ahmadfuadal20/FUAD/main/FUAD`)
          .then((res) => {
            const data = res.data;
            setProduct(data.product);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      };
    return (
      <>
      <Navbar />
      <div className="bg-gray-400">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {product.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.url}
                   // alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.productname}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      </>
    )
  }
  