import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">
          © 2026 - FlowTECH. Todos los derechos reservados.
        </p>

        {/* Barra de navegación en el footer */}
        <nav className="footer-nav">
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <a
                href="https://wa.me/+5492235997874"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg"
                  alt="WhatsApp"
                  className="social-icon whatsapp-color"
                />
                WhatsApp
              </a>
            </li>

            <li className="footer-nav-item">
              <a
                href="https://instagram.com/tu_usuario"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg"
                  alt="Instagram"
                  className="social-icon instagram-color"
                />
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
