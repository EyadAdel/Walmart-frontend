import React, { useState,useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp ,IoMdClose} from "react-icons/io";
import { TbTruck } from 'react-icons/tb';
import { AiOutlinePlus , AiOutlineMinus } from 'react-icons/ai'
import { Accordion } from "flowbite-react";

import "./Order.css"
import Navbar from "../../Components/Navbar/Navbar";
import { addMoreThanProduct, minusProduct, removeItems } from "../../Services/Services";
import { useDispatch, useSelector } from "react-redux";
import cartItems from "../../store/actions/card";
import { useNavigate } from "react-router-dom";


function Order() {
    const navigate = useNavigate()
    const [elementsVisible,setElementsVisible] = useState(true)
    let cartItemsArray = useSelector((state)=>state.cartItems)
    
    console.log(cartItemsArray);
    let dispatch = useDispatch();
    function handleCloseClick(){
        setElementsVisible(false);
    }
  useEffect(() => {
    if(cartItemsArray==null){
        navigate("/");
    }
    console.log(cartItemsArray);
  });
  return <>
        <Navbar/>
        <h1 className="font-bold text-xl mx-10 py-4">Cart ({cartItemsArray?.length} item)</h1>
        <div className="cart_head mx-10 flex gap-4">
            
            <div className="w-2/3">
                
                
              <Accordion alwaysOpen={true}>
                  <Accordion.Panel>
                      <Accordion.Title>
                          <div className="flex ">
                              <img src="https://i5.walmartimages.com/dfwrs/76316474-2775/k2-_3691ba8c-cbca-4439-9112-adb25c1b1803.v1.svg" alt="" />
                              <h5 className="font-bold text-2xl px-2">Pickup and delivery options</h5>

                          </div>
                      </Accordion.Title>
                      <Accordion.Content>
                          <div className="flex justify-between gap-4 ">
                              <div className="w-1/3 py-3 cursor-pointer border-2 rounded-lg flex flex-col justify-center items-center">
                                  <img src="https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-shipping.svg" alt="" />
                                  <div className="text-sm">Shipping</div>
                                  <p className="text-xs">Available</p>
                              </div>
                              <div className="w-1/3 py-3 cursor-pointer border-2 rounded-lg flex flex-col justify-center items-center">
                                  <img src="https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-pickup.svg" alt="" />
                                  <div className="text-sm">Shipping</div>
                                  <p className="text-xs">Available</p>
                              </div>
                              <div className="w-1/3 py-3 cursor-pointer border-2 rounded-lg flex flex-col justify-center items-center">
                                  <img src="https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-delivery.svg" alt="" />
                                  <div className="text-sm">Shipping</div>
                                  <p className="text-xs">Available</p>
                              </div>
                          </div>
                      </Accordion.Content>
                  </Accordion.Panel>
              </Accordion>
                <div className="max-w-xlg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-3">
                    <div className="bg-sky-100 p-3">
                        <div className="flex justify-between mb-3">
                            <h5 className="font-bold text-2xl px-2">Pickup or delivery from store, as soon as Tomorrow</h5>
                            <p className="underline">Reverse a time</p>
                        </div><hr/>
                        <div className="flex justify-between mt-3">
                            <h5 className="">Order updated to pickup.</h5>
                            <div className="flex gap-2 items-center">
                                <TbTruck className=""/>
                                <p className="underline">Back to shipping</p>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4 mx-3"/>
                    {
                    cartItemsArray==null?"":
                    cartItemsArray.map((item)=><div className="p-3 ">
                        <span className="font-bold text-blue-600 text-sm pr-2">In 200+ people's carts</span>
                        <span className="text-sm border-1 border-blue-600 text-blue-600 p-1">{item.badges}</span>
                        <div className="flex justify-between gap-5">
                            <div className="flex gap-3 items-center p-2 w-1/2">
                                <img src={item.mainPhoto} width="80rem" height="80rem" alt=""/>
                                <div className="flex flex-col">
                                    <span>{item.name.en}</span>
                                    <p className="my-2">${item.priceAfter}</p>
                                    <div className="flex gap-2">
                                        <p>Free 90-day returns</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between w-1/2">
                                <div className="text-end font-bold">
                                    ${item.priceAfter}
                                </div>    
                                <div className="flex justify-between">
                                    <p className="underline cursor-pointer"
                                    onClick={()=>{removeItems(item._id)
                                        dispatch(cartItems())
                                    }}
                                    >Remove</p>
                                    <p className="underline">save for later</p>
                                    <div className="flex items-center border rounded-full gap-x-5 px-3 py-1">
                                        <AiOutlineMinus className="cursor-pointer hover:bg-gray-300 rounded-lg "
                                        onClick={()=>{minusProduct(item)
                                            dispatch(cartItems())
                                        }}/>
                                        <p>{item.quantity}</p>
                                        <AiOutlinePlus className="cursor-pointer hover:bg-gray-300 rounded-lg"
                                        onClick={()=>{addMoreThanProduct(item)
                                            dispatch(cartItems())
                                        }}/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>)}
                    
                </div>    
                <div className="max-w-xlg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-14 p-3">
                    <p className="font-bold text-lg my-2">Recommended with your order</p>
                    <div className="flex gap-2 items-end">
                        <div className="w-1/5">
                            <div className="flex flex-col relative mb-4 ">
                                <span className="text-sm border-1 border-blue-600 text-blue-600 p-1 w-fit ml-6">Best seller</span>
                                <img src="https://i5.walmartimages.com/asr/bc045c13-1e35-4b99-961a-c6f74af3dcb7.5488b4ad122f6854312c63c021c74662.jpeg?odnHeight=80&odnWidth=80&odnBg=FFFFFF" width="120px" height="96px"/> 
                                <div className="flex items-center text-white bg-blue-600 w-fit absolute bottom-0 left-0 rounded-full p-1 text-lg ">
                                    <AiOutlinePlus className="text-2xl"/>
                                    <p>Add</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold text-xl">$34.97</p>
                                <p >current price $34.97
                                H&R Block 2022 Deluxe State Tax Software PC</p>
                                <div class="flex items-center">
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-900"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>First star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>Second star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>Third star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>Fourth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>Fourth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                                </div>
                                <p className="bg-sky-200 text-blue-600 text-xs w-fit mt-1 inline">
                                    3+ day shipping
                                </p>
                            </div>
                        </div>
                        <div className="w-1/5">
                            <div className="flex flex-col relative mb-4 ">
                                <img src="https://i5.walmartimages.com/asr/489e5133-814f-4b45-ac5f-8f8de7d7e978.85330cf2aaa673ef0ffe40b0e5a04f23.webp?odnHeight=80&odnWidth=80&odnBg=FFFFFF" width="120px" height="96px"/> 
                                <div className="flex items-center text-white bg-blue-600 w-fit absolute bottom-0 left-0 rounded-full p-1 text-lg ">
                                    <AiOutlinePlus className="text-2xl"/>
                                    <p>Add</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold text-xl">$34.97</p>
                                <p >current price $34.97
                                H&R Block 2022 Deluxe State Tax Software PC</p>
                                <div class="flex items-center">
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-900"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>First star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>Second star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>Third star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>Fourth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>Fourth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                                </div>
                                <p className="bg-sky-200 text-blue-600 text-xs w-fit mt-1 inline">
                                    3+ day shipping
                                </p>
                            </div>
                        </div>
                        <div className="w-1/5">
                            <div className="flex flex-col relative mb-4 ">
                                <img src="https://i5.walmartimages.com/asr/8c2b520a-3183-45bc-8a0d-86c526b9e544.b2f62af2234545141f46f0991ba30b65.jpeg?odnHeight=80&odnWidth=80&odnBg=FFFFFF" width="120px" height="96px"/> 
                                <div className="flex items-center text-white bg-blue-600 w-fit absolute bottom-0 left-0 rounded-full p-1 text-lg ">
                                    <AiOutlinePlus className="text-2xl"/>
                                    <p>Add</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold text-xl">$34.97</p>
                                <p >current price $34.97
                                H&R Block 2022 Deluxe State Tax Software PC</p>
                                <div class="flex items-center">
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-900"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>First star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>Second star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>Third star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>Fourth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>Fourth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                                </div>
                                <p className="bg-sky-200 text-blue-600 text-xs w-fit mt-1 inline">
                                    3+ day shipping
                                </p>
                            </div>
                        </div>
                        <div className="w-1/5">
                            <div className="flex flex-col relative mb-4 ">
                                <img src="https://i5.walmartimages.com/asr/2853c26e-7b7b-4bf6-90d5-25934d107bc0.e881910126e82e941e4510a6c17adea4.jpeg?odnHeight=80&odnWidth=80&odnBg=FFFFFF" width="120px" height="96px"/> 
                                <div className="flex items-center text-white bg-blue-600 w-fit absolute bottom-0 left-0 rounded-full p-1 text-lg ">
                                    <AiOutlinePlus className="text-2xl"/>
                                    <p>Add</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold text-xl">$34.97</p>
                                <p >current price $34.97
                                H&R Block 2022 Deluxe State Tax Software PC</p>
                                <div class="flex items-center">
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-900"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>First star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>Second star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>Third star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>Fourth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>Fourth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                                </div>
                                <p className="bg-sky-200 text-blue-600 text-xs w-fit mt-1 inline">
                                    3+ day shipping
                                </p>
                            </div>
                        </div>
                        <div className="w-1/5">
                            <div className="flex flex-col relative mb-4 ">
                                <img src="https://i5.walmartimages.com/asr/7cc7ebe6-5cc8-4b1b-864d-2e10f2eaa8b0.32b98049426938d6aa78caaa366749ae.jpeg?odnHeight=80&odnWidth=80&odnBg=FFFFFF" width="120px" height="96px"/> 
                                <div className="flex items-center text-white bg-blue-600 w-fit absolute bottom-0 left-0 rounded-full p-1 text-lg ">
                                    <AiOutlinePlus className="text-2xl"/>
                                    <p>Add</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold text-xl">$34.97</p>
                                <p >current price $34.97
                                H&R Block 2022 Deluxe State Tax Software PC</p>
                                <div class="flex items-center">
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-900"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>First star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>Second star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>Third star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>Fourth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-black-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <title>Fourth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                                </div>
                                <p className="bg-sky-200 text-blue-600 text-xs w-fit mt-1 inline">
                                    3+ day shipping
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right_side w-1/3">
                <div className="max-w-xlg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-3">
                    <button className="cursor-pointer text-white rounded-full bg-blue-500 font-bold block w-full mb-3 py-2 ">Continue to checkout</button>
                    <hr/>
                    <div className="flex justify-between mt-3 px-3">
                        <p className="font-bold">Subtotal(1 item)</p>
                        <span>$13.98</span>
                    </div>
                    <div className="flex justify-between px-3">
                        <p>Below order minimum (less than $35)</p>
                        <span>$6.99</span>
                    </div>
                    <div className="flex justify-between px-3">
                        <p>Select delivery or pickup to view fees</p>
                        <span className="underline">Select</span>
                    </div>
                    <div className="flex justify-between p-3">
                        <p className="font-bold">Taxes</p>
                        <span >Calculated at checkout</span>
                    </div><hr/>
                    <div className="flex font-semibold justify-between p-3">
                        <p>Estimated total</p>
                        <span>$20.97</span>
                    </div>
                </div>
                <div className="max-w-xlg walmart bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-3 my-3">
                    <div className="flex">
                        <img src="https://i5.walmartimages.com/dfw/63fd9f59-3e1b/a3d2466d-fa02-4f2d-a401-aca52a4aac17/v1/walmartPlus-logo-blue.svg" alt=""/>
                        <p className="text-blue-700">Want to save on grocery delivery, gas & more?</p>
                        <IoMdClose className="text-xl"/>
                    </div>
                    <div className="flex gap-2">
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <p>Try W+ free for 30 days!</p>
                    </div>
                </div>
                {elementsVisible && (<div className=" max-w-xlg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-3 my-2">
                    <div className="flex justify-center items-center gap-3">
                        <img src="https://i5.walmartimages.com/dfw/63fd9f59-7b6d/d53b5a7a-3eca-4b49-a950-838cb87068b9/v1/wallet-capitalone-cawrc@1.png" width="65px" height="41px" alt=""/>
                        <p className="text-sm"><div className="font-bold inline">Earn 5% cash back </div>on Walmart.com
                        See if you’re pre-approved with no credit risk. 
                        <span className="underline">Learn how</span></p>
                        <IoMdClose onClick={()=>{handleCloseClick()}} className="text-6xl"/>
                    </div>
                </div>)}
            </div>
            
        </div>  
        <hr className="my-5 mx-10"/>
        <div className="footer w-full flex mb-3 justify-around">
            <p>&copy; 2023 Walmart. All Rights Reserved.</p>
            <p>Give feedback</p>
            <p>CA Privacy Rights</p>
            <div className="flex gap-1">
                <img src="https://i5.walmartimages.com/dfwrs/76316474-d730/k2-_3c5ba298-4f19-46be-9fc3-ac49225d19bd.v1.png" width="29" height="14px"/>
                <p>Your Privacy Choices</p>
            </div>
            <p>California Supply Chains Act</p>

        </div>
    </>
}

export default Order;
