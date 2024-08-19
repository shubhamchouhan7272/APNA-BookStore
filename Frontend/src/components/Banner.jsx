import React from 'react'
import banner from "/Banner.png"

function Banner() {
  return (
    <>
    <div className="sticky px-4-">
    <img
      src="\images\cover.jpg"
      className="w-full mt-20" />
    <div className="carousel w-full py-1">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="\images\31_inr.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="\images\79_inr.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="\images\80_inr.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="\images\85_inr.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  {/* ------------------------------ */}
</div>
    </div>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
            <div className='md:w-1/2 w-full mt-18 order-2 md:order-1 md:mt-28'>
            <div className='space-y-12'>
                <h1 className='text-4xl font-bold'>
                    Hello, welcomes here to learn something{" "} 
                    <span className='text-pink-500'>new everyday!!!</span>
                </h1>
                <p className='text-xl container text-justify'>
                Explore a world of books at your fingertips. APNA BookStore is your one-stop shop for all your reading needs, offering a vast collection of books across various genres. 
                Whether you're a fan of fiction, non-fiction, or academic literature, we've got something for everyone.
                </p>
                <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
            </div>
            <button className="btn btn-active btn-secondary mt-6">Submit</button>
            </div>
            <div className=' order-1 md:w-1/2 w-full'>
            <img src={banner} className='w-92 h-92' alt="banner" />
            </div>
        </div>
    </>
  )
}

export default Banner