import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axiosConfig from '../../axiosConfig/axiosConfig';
import Navbar from '../Navbar/Navbar';
import { IoIosArrowDown } from "react-icons/io";
import Footer from '../Footer/Footer';

function Search() {
    const { departmentID } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axiosConfig.get(`/product/dept/${departmentID}`)
            .then((res) => {
                setProducts(res.data.products);
            }).catch((err) => { console.log(err) })
    }, [departmentID])

    return (
        <>
            <Navbar />
            <div className='mt-16'>
                <div className="flex flex-auto justify-center gap-6 mb-8">
                    <div>
                        <div className="max-w-xlg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                            <div className='flex'>
                                {/* Right / Brand */}
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Capture every moment
                                        </h5>
                                    </a>
                                    <p className="mb-8 font-normal text-gray-500 dark:text-gray-400">
                                        Sponsored by Olay
                                    </p>
                                    <a
                                        href="#"
                                        className="h-8 w-44 px-4 py-1.5 text-sm font-bold rounded-full border border-black hover:border-2"
                                    >
                                        Shop Now
                                    </a>
                                </div>

                                {/* Left / Products */}
                                {/* Product 1 */}
                                <div className='container flex'>
                                    {products.map((product) => (
                                        <div className="relative max-w-sm w-60 bg-white rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                                            <div className="overflow-x-hidden rounded-2xl relative">
                                                <img
                                                    className="h-40 rounded-2xl"
                                                    src={product.photos[0]}
                                                />
                                            </div>
                                            <div className="mt-4 pl-2 mb-2 flex justify-between ">
                                                <div>
                                                    <p className="text-lg font-semibold text-gray-900 mb-0">
                                                        ${product.priceAfter}
                                                    </p>
                                                    <p className="text-md text-gray-800 mt-0">
                                                        {product.name.en}
                                                    </p>
                                                    <div className="flex items-center">
                                                        <svg
                                                            aria-hidden="true"
                                                            className="w-5 h-5 text-black-400"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <title>First star</title>
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                        </svg>
                                                        <svg
                                                            aria-hidden="true"
                                                            className="w-5 h-5 text-black-400"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <title>Second star</title>
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                        </svg>
                                                        <svg
                                                            aria-hidden="true"
                                                            className="w-5 h-5 text-black-400"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <title>Third star</title>
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                        </svg>
                                                        <svg
                                                            aria-hidden="true"
                                                            className="w-5 h-5 text-black-400"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <title>Fourth star</title>
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                        </svg>
                                                        <svg
                                                            aria-hidden="true"
                                                            className="w-5 h-5 text-gray-300 dark:text-gray-500"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <title>Fifth star</title>
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            {/* SortBy */}
            <div className='flex justify-between'>
                <div className='ml-8 my-6'>
                    <span className="mr-2 inline-flex items-center px-5 py-1 rounded-full text-lg font-medium bg-slate-200 text-black-800">
                        In-store
                    </span>
                    <span className="mr-2  inline-flex items-center px-5 py-1 rounded-full text-lg font-medium bg-slate-200 text-black-800">
                        Price
                    </span>
                    <span className="mr-2 inline-flex items-center px-5 py-1 rounded-full text-lg font-medium bg-slate-200 text-black-800">
                        Brand
                    </span>
                    <span className="inline-flex items-center px-5 py-1 rounded-full text-lg font-medium bg-slate-200 text-black-800">
                        Speed
                    </span>
                </div>
                <div className='mr-14 my-6'>
                    <p> <span className='font-bold'>Sort By</span> | Best Match</p>
                </div>
            </div>
            <hr />
            {/* Categories */}
            <div className='flex'>
                 <a className="my-5 mr-5 h-8 w-32 px-4 py-1.5 text-center text-sm border border-slate-500 hover:border-slate-400 border-2">
                    Shop Now
                </a>
                {products.map((product) => (
                    <a className="m-5 h-8 w-32 px-4 py-1.5 text-center text-sm border border-slate-500 hover:border-slate-400 border-2">
                        {product.brand.en}
                    </a>
                ))}
            </div>
            <hr />

            {/* sidebar (categories) and products */}
            <div className="grid grid-cols-5">
                <div className="col-span-1">
                    {/* SideBar */}
                    <div>
                        <div className="flex justify-between items-center py-3 ml-5">
                            <h5 className="w-full font-bold text-base">Departments</h5>
                            <span className='mr-5'><IoIosArrowDown /></span>
                        </div>
                        <hr />

                        <div className="flex justify-between items-center">
                            <h5 className="font-bold text-base py-3 ml-5">Price</h5>
                            <span className='mr-5'><IoIosArrowDown /></span>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center">
                            <h5 className="font-bold text-base py-3 ml-5">Brand</h5>
                            <span className='mr-5'><IoIosArrowDown /></span>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center">
                            <h5 className="font-bold text-base py-3 ml-5">Speed</h5>
                            <span className='mr-5'><IoIosArrowDown /></span>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center">
                            <h5 className="font-bold text-base py-3 ml-5">Availablity</h5>
                            <span className='mr-5'><IoIosArrowDown /></span>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center">
                            <h5 className="font-bold text-base py-3 ml-5">Special offers</h5>
                            <span className='mr-5'><IoIosArrowDown /></span>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center">
                            <h5 className="font-bold text-base py-3 ml-5">Customer rating</h5>
                            <span className='mr-5'><IoIosArrowDown /></span>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center">
                            <h5 className="font-bold text-base py-3 ml-5">Gifitng</h5>
                            <span className='mr-5'><IoIosArrowDown /></span>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center">
                            <h5 className="font-bold text-base py-3 ml-5">Form</h5>
                            <span className='mr-5'><IoIosArrowDown /></span>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center">
                            <h5 className="font-bold text-base py-3 ml-5">Retailer</h5>
                            <span className='mr-5'><IoIosArrowDown /></span>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center">
                            <h5 className="font-bold text-base py-3 ml-5">Rewards eligible</h5>
                            <span className='mr-5'><IoIosArrowDown /></span>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center">
                            <h5 className="font-bold text-base py-3 ml-5">Shop my store</h5>
                            <span className='mr-5'><IoIosArrowDown /></span>
                        </div>
                    </div>
                </div>
                <div className='col-span-4 border-l'>
                    {/* Dynamic Products */}
                    <div className='flex w-full'>
                        {products.map((product) => (
                            <div className="relative max-w-sm w-60 bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                                <div className="overflow-x-hidden rounded-2xl relative">
                                <Link to={`/details/${product._id}`}>
                                    <img
                                        className="h-40 rounded-2xl"
                                        src={product.photos[0]}
                                    />
                                </Link>
                                    <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 group-hover:opacity-70"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="gray"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            />
                                        </svg>
                                    </p>
                                </div>
                                <div className="mt-4 pl-2 mb-2 flex justify-between ">
                                    <div>
                                        <p className="text-lg font-semibold text-gray-900 mb-0">
                                            ${product.priceAfter}
                                        </p>
                                        <p className="text-md text-gray-800 mt-0">
                                            {product.name.en}
                                        </p>
                                        <div className="flex items-center">
                                            <svg
                                                aria-hidden="true"
                                                className="w-5 h-5 text-black-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>First star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                            <svg
                                                aria-hidden="true"
                                                className="w-5 h-5 text-black-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>Second star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                            <svg
                                                aria-hidden="true"
                                                className="w-5 h-5 text-black-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>Third star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                            <svg
                                                aria-hidden="true"
                                                className="w-5 h-5 text-black-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>Fourth star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                            <svg
                                                aria-hidden="true"
                                                className="w-5 h-5 text-gray-300 dark:text-gray-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title>Fifth star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </div>
                                        <p className="bg-sky-200 text-blue-600 text-sm max-w-fit mt-1">
                                            3+ day shipping
                                        </p>
                                    </div>
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

export default Search;
