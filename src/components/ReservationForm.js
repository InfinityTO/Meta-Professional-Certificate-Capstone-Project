"use client"

import { useState } from "react"
import "../styles/ReservationForm.css"

function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    specialRequests: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters."
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address."
    }

    if (!formData.phone || formData.phone.length < 10) {
      newErrors.phone = "Please enter a valid phone number."
    }

    if (!formData.date) {
      newErrors.date = "Please select a date."
    }

    if (!formData.time) {
      newErrors.time = "Please select a time."
    }

    if (!formData.guests) {
      newErrors.guests = "Please select the number of guests."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // In a real app, you would submit this data to your backend
      console.log(formData)
      setIsSubmitted(true)
    }
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      occasion: "",
      specialRequests: "",
    })
  }

  if (isSubmitted) {
    return (
      <div className="confirmation">
        <div className="check-icon">✓</div>
        <h3>Reservation Confirmed!</h3>
        <p>Thank you for your reservation. We look forward to serving you.</p>
        <button onClick={handleReset} className="reset-button">
          Make Another Reservation
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Guests</label>
          <select id="guests" name="guests" value={formData.guests} onChange={handleChange}>
            <option value="">Select number of guests</option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
          {errors.guests && <span className="error">{errors.guests}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="time">Time</label>
          <select id="time" name="time" value={formData.time} onChange={handleChange}>
            <option value="">Select a time</option>
            {["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"].map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && <span className="error">{errors.time}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion (Optional)</label>
          <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
            <option value="">Select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="date">Date Night</option>
            <option value="business">Business Meal</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="form-group full-width">
        <label htmlFor="specialRequests">Special Requests (Optional)</label>
        <input
          type="text"
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          placeholder="Any special requests or dietary restrictions"
        />
        <small>Please let us know if you have any special requirements.</small>
      </div>

      <button type="submit" className="submit-button">
        Confirm Reservation
      </button>
    </form>
  )
}

export default ReservationForm

