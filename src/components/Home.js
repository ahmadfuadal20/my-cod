/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

import Navbar from './Navbar'
import Footers from './Footers'




export default function Example() {
  return (
    <>
    <Navbar />

    <div class="bg-white dark:bg-gray-400 flex relative z-20 items-center overflow-hidden">
        <div class="container mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                </span>
                <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                    X0S
                    <span class="text-5xl sm:text-7xl">
                        .CO
                    </span>
                </h1>
                <p class="text-sm sm:text-base text-gray-600 ">
                 XoS menawarkan Hoodie dan Jaket dengan harga terbaik dan cara yang berkelanjutan. Sejak didirikan pada 2022,
                  XoS telah menjadi salah satu. Seluruh isi dan informasi dari situs ini dilindungi hak cipta.
                </p>
                <div class="flex mt-8">
                    <a href="Product" class="uppercase py-2 px-4 rounded-lg bg-gray-800 border-2 border-transparent text-white text-md mr-4 hover:bg-gray-900">
                        Get started
                    </a>
                    <a href="#" class="uppercase py-2 px-4 rounded-lg  bg-gray-800 text-pink-500 dark:text-white hover:bg-gray-900 hover:text-white text-md">
                        Read more
                    </a>
                </div>
            </div>
            <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src="https://drive.google.com/uc?export=view&id=1B-WyShrm30pR1OMt_2xNz7Te2vZGzst1" class="max-75-15 md:max-75-sm m-auto"/>
                
            </div>
        </div>
    </div>
    <Footers />
    </>
  )
}
