"use client"

import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Bed, Bath, Square, MapPin, Heart, Share2, Calendar, Phone, Mail } from "lucide-react"
import { properties } from "../data/properties"

const PropertyDetail = () => {
  const { id } = useParams()
  const [activeImage, setActiveImage] = useState(0)

  // Trouver la propriété correspondante
  const property = properties.find((p) => p.id === Number.parseInt(id)) || properties[0]

  // Si la propriété n'existe pas, rediriger vers la page des propriétés
  if (!property) {
    return <div>Propriété non trouvée</div>
  }

  return (
    <div style={{ paddingTop: "100px", paddingBottom: "60px" }}>
      <div className="container">
        <div style={{ marginBottom: "30px" }}>
          <Link to="/properties" style={{ display: "flex", alignItems: "center", color: "#666" }}>
            <ArrowLeft size={18} style={{ marginRight: "8px" }} />
            Retour aux propriétés
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "30px" }}>
          {/* Images et détails */}
          <div>
            {/* Image principale */}
            <div style={{ height: "500px", borderRadius: "5px", overflow: "hidden", marginBottom: "15px" }}>
              <img
                src={property.images[activeImage] || "/placeholder.svg?height=800&width=1200"}
                alt={property.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Galerie d'images */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px", marginBottom: "30px" }}>
              {property.images.map((image, index) => (
                <div
                  key={index}
                  style={{
                    cursor: "pointer",
                    height: "80px",
                    borderRadius: "5px",
                    overflow: "hidden",
                    border: activeImage === index ? "2px solid #9c6644" : "none",
                  }}
                  onClick={() => setActiveImage(index)}
                >
                  <img
                    src={image || "/placeholder.svg?height=200&width=200"}
                    alt={`${property.title} - Vue ${index + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>

            {/* Détails de la propriété */}
            <div>
              <h1 style={{ fontSize: "32px", marginBottom: "15px" }}>{property.title}</h1>
              <div style={{ display: "flex", alignItems: "center", color: "#666", marginBottom: "20px" }}>
                <MapPin size={18} style={{ marginRight: "8px", color: "#9c6644" }} />
                <span>
                  {property.location.address}, {property.location.city}, {property.location.zipCode}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  padding: "20px 0",
                  borderTop: "1px solid #eee",
                  borderBottom: "1px solid #eee",
                  marginBottom: "20px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Bed size={20} style={{ marginRight: "8px", color: "#9c6644" }} />
                  <span>{property.bedrooms} chambres</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Bath size={20} style={{ marginRight: "8px", color: "#9c6644" }} />
                  <span>{property.bathrooms} salles de bain</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Square size={20} style={{ marginRight: "8px", color: "#9c6644" }} />
                  <span>{property.surface} m²</span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "30px",
                }}
              >
                <div style={{ fontSize: "32px", fontWeight: "700", color: "#9c6644" }}>
                  {property.price.toLocaleString()} €
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#f5f5f5",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <Heart size={20} />
                  </button>
                  <button
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#f5f5f5",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>Description</h2>
                <p style={{ lineHeight: "1.8", color: "#666", whiteSpace: "pre-line" }}>{property.description}</p>
              </div>

              <div>
                <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>Caractéristiques</h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "15px",
                  }}
                >
                  {property.features.map((feature, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "#9c6644",
                          marginRight: "10px",
                        }}
                      ></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact et agent */}
          <div>
            <div
              style={{
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "5px",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                marginBottom: "30px",
              }}
            >
              <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Intéressé par cette propriété ?</h2>
              <form>
                <div style={{ marginBottom: "15px" }}>
                  <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                    }}
                    placeholder="Votre nom"
                  />
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                    }}
                    placeholder="Votre email"
                  />
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <label htmlFor="phone" style={{ display: "block", marginBottom: "5px" }}>
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                    }}
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <label htmlFor="message" style={{ display: "block", marginBottom: "5px" }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                    }}
                    placeholder="Je souhaite obtenir plus d'informations sur cette propriété..."
                  ></textarea>
                </div>
                <button type="submit" className="btn" style={{ width: "100%" }}>
                  Envoyer ma demande
                </button>
              </form>
            </div>

            <div
              style={{
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "5px",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
              }}
            >
              <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Votre agent immobilier</h2>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Agent"
                  style={{ width: "60px", height: "60px", borderRadius: "50%", marginRight: "15px" }}
                />
                <div>
                  <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "5px" }}>Marc Leroy</h3>
                  <p style={{ color: "#9c6644", fontSize: "14px" }}>Conseiller Immobilier Senior</p>
                </div>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <Phone size={18} style={{ color: "#9c6644", marginRight: "10px" }} />
                  <a href="tel:+221778863664" style={{ color: "#666" }}>
                    +221 77 886 36 64
                  </a>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Mail size={18} style={{ color: "#9c6644", marginRight: "10px" }} />
                  <a href="mailto:marc@maisonselite.fr" style={{ color: "#666" }}>
                    marc@maisonselite.fr
                  </a>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "20px",
                  borderTop: "1px solid #eee",
                }}
              >
                <Calendar size={18} style={{ color: "#9c6644", marginRight: "10px" }} />
                <span>Disponible pour des visites</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetail
