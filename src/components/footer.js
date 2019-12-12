import React from "react"

export default function Footer({ metaData }) {
  return (
    <footer className="flex p-2 bg-black text-white text-sm border-t-2 border-red-600 justify-content">
      &copy; {metaData.title}, {new Date().getFullYear()}. || Brought to you by
      (
      <a
        href="https://www.linkedin.com/in/samson-okaludo"
        className="line underline"
      >
        {metaData.author}
      </a>
      )
    </footer>
  )
}
