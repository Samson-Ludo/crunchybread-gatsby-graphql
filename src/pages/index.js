import React from "react"
import { Link } from "gatsby"


const IndexPage = () => {
  return (
    <>
      
      <div className="container bg-lavender overflow-hidden mx-auto flex flex-col md:flex-row items-center my-auto md:my-auto" >
        {/* <!--Left Col--> */}
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-auto pb3 px-6">
          <p className="uppercase tracking-loose">
            Your number 1 online store for luscious crunchy delicacies
          </p>
          <h1 className="font-bold text-3xl my-4">Crunchy Bread</h1>
          <p className="leading-normal ">
            Are you hungry and out of time? Are you in search of the quickest way to get food without moving through the 
    hassle of the traffic in your city? Not to worry. Crunchy Bread's got you covered!
    Order any luscious crunchy delicacy from the comfort of your home and have it delivered to you in no time. 
    So what are you waiting for?
          </p>
          <Link to="/products">
            <button className="bg-transparent hover:bg-purple-900 text-gray-900 hover:text-white rounded shadow hover:shadow-lg py-auto px-4 border border-gray-900 hover:border-transparent">
              Let's Get Crunchy!
            </button>
          </Link>
        </div>
        {/* <!--Right Col--> */}
        <div className="w-full lg:w-1/2 lg:py-1 text-center">
          {/* <!--Add your product image here--> */}
          {/* <svg
            className="fill-current text-gray-900 w-3/5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg> */}
          <img
            src="https://res.cloudinary.com/samson-ludo/image/upload/v1576090197/crunchy-bread/undraw_Hamburger_8ge6_l8b7wg.svg"
            alt="Cruchy Bread"
            className="fill-current text-yellow-900 w-3/5 mx-auto"
          />
        </div>
      </div>
    </>
  )
}

export default IndexPage
