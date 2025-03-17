"use client"
import "../styles/Home.css"

function Home({ navigateTo }) {
  return (
    <main className="home">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Junaid's Cuisine and Delicacies</h2>
            <p>
              Discover the perfect blend of tradition and innovation at our family-owned Mediterranean restaurant, where
              classic recipes are reimagined with a contemporary flair.
            </p>
            <button className="reserve-button" onClick={() => navigateTo("reservations")}>
              Reserve Table
            </button>
          </div>
          <div className="hero-image">
            <div className="image-container"></div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home

