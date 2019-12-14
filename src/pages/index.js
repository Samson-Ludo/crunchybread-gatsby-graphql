import React from "react"
import { Link } from "gatsby"


const IndexPage = () => {
  return (
    <>
    <div className="pt-24">

	<div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
	  {/*<!--Left Col-->*/}
		<div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
			<p className="uppercase tracking-loose w-full">Are you hungry and out of time? Crunchy Bread's got you
                  covered</p>
			<h1 className="my-4 text-5xl font-bold leading-tight">Order any luscious crunchy delicacy from the comfort
                  of your home and have it delivered to you in no time.</h1>
		
			

			
            <Link to="/products">
                  <button className="bg-transparent hover:bg-purple-900 text-gray-900 hover:text-white rounded shadow hover:shadow-lg mt-3 py-2 px-4 border border-gray-900 hover:border-transparent">
                    Let's Get Crunchy!
                  </button>
                </Link>
			
		</div>
	  {/*<!--Right Col-->*/}
		<div className="w-full md:w-3/5 py-6 text-center">
			<img
                    src="https://res.cloudinary.com/samson-ludo/image/upload/v1576090197/crunchy-bread/undraw_Hamburger_8ge6_l8b7wg.svg"
                    alt="Cruchy Bread"
                    className="fill-current text-yellow-900 w-3/5 mx-auto"
                  />
		</div>
		
	</div>

</div>

    </>
  )
}

export default IndexPage
