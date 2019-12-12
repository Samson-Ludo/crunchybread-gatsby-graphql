import React from "react"
import Header from "./header"
import Footer from "./footer"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          company
          companyWebsite
          favicon
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link rel="icon" href={data.site.siteMetadata.favicon} />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="flex-grow mx-auto w-auto md:px-8 p-8">{children}</main>
        <Footer metaData={data.site.siteMetadata} />
      </div>
    </>
  )
}
