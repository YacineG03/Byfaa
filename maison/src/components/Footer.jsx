import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-logo">
              BYFAA<span>Group</span>
            </h3>
            <p className="footer-description">
              Votre partenaire de confiance pour trouver la maison de vos rêves. Nous vous accompagnons dans toutes les
              étapes de votre projet immobilier.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link">
                <Facebook size={18} />
              </a>
              <a href="#" className="footer-social-link">
                <Instagram size={18} />
              </a>
              <a href="#" className="footer-social-link">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Liens Rapides</h4>
            <ul className="footer-links">
              {[
                { path: "/", label: "Accueil" },
                { path: "/properties", label: "Nos Propriétés" },
                { path: "/about", label: "À Propos de Nous" },
                { path: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.path} className="footer-link-item">
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Nos Services</h4>
            <ul className="footer-links">
              {[
                "Achat de propriétés",
                "Vente de propriétés",
                "Estimation immobilière",
                "Conseil en investissement",
                "Visite virtuelle",
              ].map((service, index) => (
                <li key={index} className="footer-link-item">
                  <a href="#" className="footer-link">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact-item">
              <MapPin className="footer-contact-icon" size={18} />
              <span>Bourguiba, Cité Cheikh Ahmadou Bamba</span>
            </div>
            <div className="footer-contact-item">
              <Phone className="footer-contact-icon" size={18} />
              <a href="tel:+221778863664" className="footer-link">
                +221 77 886 36 64
              </a>
            </div>
            <div className="footer-contact-item">
              <Mail className="footer-contact-icon" size={18} />
              <a href="mailto:Byfagroup11@gmail.com" className="footer-link">
                Byfagroup11@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BYFAA Group S.A.R.L. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
