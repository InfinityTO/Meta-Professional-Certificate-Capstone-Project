import ReservationForm from "../components/ReservationForm"
import "../styles/Reservations.css"

function Reservations() {
  return (
    <main className="reservations">
      <section className="reservations-section">
        <div className="reservations-container">
          <h1>Reservations</h1>
          <div className="form-container">
            <h2>Book a Table</h2>
            <ReservationForm />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Reservations

