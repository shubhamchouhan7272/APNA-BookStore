import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from "axios"
import { Link } from 'react-router-dom'
import { getBook } from '../../../Backend/controller/book.controller.js'


function Course() {
  const [book,setBook] = useState([])
  useEffect(() => {
    const getBook = async() => {
      try {
      const res  =  await axios.get("http://localhost:4001/book");
      console.log(res.data)
      setBook(res.data)
      } catch (error) {
        
      }
    }
    getBook();
  },[])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you{" "}
            <span className='text-pink-500'>here! :)</span>
          </h1>
          <p className='mt-12 container text-justify'>
          Welcome to APNA BookStore, your one-stop destination for all your book needs! Whether you're looking for the latest bestsellers, timeless classics, or educational materials, we've got you covered. Our easy-to-navigate platform allows you to browse, purchase, and manage your book collection with ease. 
          Dive into a world of knowledge and adventure with APNA BookStore, where every book finds its home.
          </p>
          <Link to="/">
          <button className='m-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
            Back
          </button>
          </Link>
        </div>
        <div className='mt-4 grid grid-cols-1 md:grid-cols-4'>
          {book.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Course