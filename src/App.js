"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Reservations from "./pages/Reservations"

function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const navigateTo = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="app">
      <Navbar navigateTo={navigateTo} />
      {currentPage === "home" && <Home navigateTo={navigateTo} />}
      {currentPage === "reservations" && <Reservations />}
      <Footer />
    </div>
  )
}

export default App

