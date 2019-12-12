import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

export default function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <header>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <nav className="bg-lavender text-purple">
        <div className="flex flex-wrap container justify-between mx-auto p-2">
          <Link to="/" className="flex items-center no-underline">
            <span>
              <img
                src="https://img.icons8.com/dusk/64/000000/bread.png"
                alt="Cruchy Bread"
                width="48px"
                height="48px"
              />
            </span>
            <h1 className="font-bold ml-4">Crunchy Bread</h1>
          </Link>
          <button
            className="block md:hidden border border-white flex items-center px-3 py-2"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <img
              src="https://img.icons8.com/nolan/64/000000/menu.png"
              width="45px"
              height="45px"
              alt="menu"
            />
          </button>
          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } md:block md:flex md:items-center w-full md:w-auto ml-auto`}
          >
            <div className="text-lg font-bold mt-3 md:m-0">
              <Link
                to="/"
                activeClassName="text-purple-600 underline"
                className="block p-1 md:px-4 md:inline-block"
              >
                Home
              </Link>
              <Link
                to="/products"
                partiallyActive
                activeClassName="text-purple-600 underline"
                className="block p-1 md:px-4 md:inline-block"
              >
                <button className="bg-purple hover:bg-purple-900 text-white-900 hover:text-purple rounded shadow hover:shadow-lg py-2 px-4 border border-white-900 hover:border-transparent">
                  Let's Get Crunchy!
                </button>
              </Link>
              <button className="snipcart-checkout inline-block align-middle">
                <span className="shopping-cart inline-block align-middle">
                  <svg
                    className="w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="purple"
                      d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"
                    />
                  </svg>
                </span>
                <span className="snipcart-items-count inline-block align-middle p-1"></span>
                <span className="snipcart-total-price inline-block align-middle p-1"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
