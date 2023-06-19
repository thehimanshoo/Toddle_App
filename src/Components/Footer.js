import React from 'react'

export default function Footer() {
    let footerStyle={
        position: "absolute",
        top: "100vh",
        width: "100%",
    }
  return (
    <footer className="bg-dark text-light py-3" style= {footerStyle}>
        <p className="text-center">
Copyright &copy;Wall-E-Wall.com
        </p>
    </footer>
  )
}
