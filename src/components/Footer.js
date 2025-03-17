import "../styles/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <div className="footer-logo-image"></div>
            <div className="footer-logo-text">
              <div>LITTLE</div>
              <div>LEMON</div>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>Document Navigation</h3>
          <ul>
            <li>
              <span className="bullet">•</span> Home
            </li>
            <li>
              <span className="bullet">•</span> About
            </li>
            <li>
              <span className="bullet">•</span> Menu
            </li>
            <li>
              <span className="bullet">•</span> Reservations
            </li>
            <li>
              <span className="bullet">•</span> Order Online
            </li>
            <li>
              <span className="bullet">•</span> Login
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>
              <span className="bullet">•</span> Address
            </li>
            <li>
              <span className="bullet">•</span> Phone Number
            </li>
            <li>
              <span className="bullet">•</span> Email
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <span className="bullet">•</span> Facebook
            </li>
            <li>
              <span className="bullet">•</span> Instagram
            </li>
            <li>
              <span className="bullet">•</span> Twitter
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

