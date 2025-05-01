import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-logo">
              BYFA<span>Group</span>
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
              <a href="tel:+33123456789" className="footer-link">
                +33 1 23 45 67 89
              </a>
            </div>
            <div className="footer-contact-item">
              <Mail className="footer-contact-icon" size={18} />
              <a href="mailto:contact@byfagroup.fr" className="footer-link">
                contact@byfagroup.fr
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BYFA Group. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
