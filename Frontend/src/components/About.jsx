import React from "react";

function About() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">About{" "}
            <span className="text-pink-500">APNA BookStore</span>
          </h1>
          <div className="px-3 py-2 m-4 container text-justify">
            <h3>
              Welcome to APNA BookStore, your gateway to a world of
              imagination, knowledge, and adventure. At our bookstore, we
              believe that books are more than just words on a page—they are
              journeys that take you to new places, ideas that spark
              inspiration, and companions that comfort you at any moment.
            </h3>
          </div>

          <div className="text-justify px-2 py-8 m-5">
            <h2 className="text-gray-300 font-semibold ">Our Story</h2>
            <br />
            <h3>
              Founded in 2024, APNA BookStore started with a simple
              mission: to create a haven for book lovers of all ages and
              backgrounds. Whether you're searching for the latest bestsellers,
              timeless classics, or hidden gems, our carefully curated selection
              has something for every reader. What began as a small, passionate
              project has grown into a thriving community of readers and
              storytellers.
            </h3>
            <br />
            <br />
            <h2 className="text-gray-300 text-left font-semibold">What We Offer</h2>
            <br />
            <li>
              <b>Wide Selection of Books :{" "}</b> 
              From fiction to non-fiction,
              young adult to children’s books, we offer a diverse range of
              genres to satisfy every taste. Our shelves are stocked with the
              latest releases, beloved classics, and unique finds from around
              the world.
            </li>
            <br />
            <li>
              <b>Community Events :{" "}</b> 
              We regularly host book readings,
              signings, and discussions with authors to bring the literary world
              closer to our customers. These events are designed to foster a
              love of reading and create a space where ideas can be shared.
            </li>
            <br />
            <li>
              <b>Personalized Recommendations :{" "}</b> 
              Our knowledgeable staff is
              always here to help you find your next great read. Whether you’re
              looking for a specific title or need guidance on what to explore
              next, we’re here to make your experience enjoyable and enriching.
            </li>
            <br />
            <li>
              <b>Online Store :{" "}</b> 
              Can’t make it to our physical location? No
              problem! Our online store offers the same great selection of
              books, along with convenient shipping options to get your favorite
              reads delivered right to your doorstep.
            </li>
            <br />
            <br />
            <h2 className="text-gray-300 text-left font-semibold ">Our Vision</h2>
            <br />
            <p>
              At APNA BookStore, we strive to be more than just a
              bookstore. We aim to be a cultural hub where literature thrives,
              creativity flourishes, and readers connect. Our vision is to build
              a community of lifelong learners and storytellers who are inspired
              by the power of books.
            </p>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}

export default About;
