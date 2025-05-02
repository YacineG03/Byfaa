import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "300px",
          display: "flex",
          alignItems: "center",
          color: "white",
          backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        ></div>
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h1 style={{ fontSize: "36px", marginBottom: "15px" }}>Contactez-Nous</h1>
          <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto" }}>
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre
            projet immobilier.
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="section" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "50px",
            }}
          >
            {/* Contact Information */}
            <div>
              <h2 style={{ fontSize: "36px", marginBottom: "15px" }}>Nos Coordonnées</h2>
              <div
                style={{
                  width: "80px",
                  height: "3px",
                  backgroundColor: "#9c6644",
                  marginBottom: "20px",
                }}
              ></div>
              <p style={{ marginBottom: "30px", lineHeight: "1.8" }}>
                N'hésitez pas à nous contacter par téléphone, email ou en visitant notre agence. Notre équipe se fera un
                plaisir de vous accueillir et de répondre à toutes vos questions.
              </p>

              <div style={{ marginBottom: "30px" }}>
                <div style={{ display: "flex", marginBottom: "20px" }}>
                  <div
                    style={{
                      backgroundColor: "#f5f5f5",
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "15px",
                    }}
                  >
                    <MapPin size={24} style={{ color: "#9c6644" }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>Notre Adresse</h3>
                    <p>Bourguiba, Cité Cheikh Ahmadou Bamba</p>
                  </div>
                </div>

                <div style={{ display: "flex", marginBottom: "20px" }}>
                  <div
                    style={{
                      backgroundColor: "#f5f5f5",
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "15px",
                    }}
                  >
                    <Phone size={24} style={{ color: "#9c6644" }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>Téléphone</h3>
                    <p>
                      <a href="tel:+221778863664" style={{ color: "#666" }}>
                        +221 77 886 36 64
                      </a>
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      backgroundColor: "#f5f5f5",
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "15px",
                    }}
                  >
                    <Mail size={24} style={{ color: "#9c6644" }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>Email</h3>
                    <p>
                      <a href="mailto:Byfagroup11@gmail.com" style={{ color: "#666" }}>
                        Byfagroup11@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: "18px", marginBottom: "15px" }}>Suivez-nous</h3>
                <div style={{ display: "flex", gap: "15px" }}>
                  <a
                    href="#"
                    style={{
                      backgroundColor: "#f5f5f5",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    style={{
                      backgroundColor: "#f5f5f5",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    style={{
                      backgroundColor: "#f5f5f5",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    style={{
                      backgroundColor: "#f5f5f5",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div
                style={{
                  backgroundColor: "white",
                  padding: "30px",
                  borderRadius: "5px",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                }}
              >
                <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>Envoyez-nous un Message</h2>
                <div
                  style={{
                    width: "80px",
                    height: "3px",
                    backgroundColor: "#9c6644",
                    marginBottom: "20px",
                  }}
                ></div>
                <form>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "15px",
                      marginBottom: "15px",
                    }}
                  >
                    <div>
                      <label htmlFor="firstName" style={{ display: "block", marginBottom: "5px" }}>
                        Prénom
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        style={{
                          width: "100%",
                          padding: "10px",
                          border: "1px solid #ddd",
                          borderRadius: "5px",
                        }}
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" style={{ display: "block", marginBottom: "5px" }}>
                        Nom
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        style={{
                          width: "100%",
                          padding: "10px",
                          border: "1px solid #ddd",
                          borderRadius: "5px",
                        }}
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "15px",
                      marginBottom: "15px",
                    }}
                  >
                    <div>
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
                    <div>
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
                  </div>

                  <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="subject" style={{ display: "block", marginBottom: "5px" }}>
                      Sujet
                    </label>
                    <select
                      id="subject"
                      style={{
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #ddd",
                        borderRadius: "5px",
                      }}
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="buy">Achat de propriété</option>
                      <option value="sell">Vente de propriété</option>
                      <option value="rent">Location</option>
                      <option value="invest">Investissement</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="message" style={{ display: "block", marginBottom: "5px" }}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      style={{
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #ddd",
                        borderRadius: "5px",
                      }}
                      placeholder="Comment pouvons-nous vous aider ?"
                    ></textarea>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "flex", alignItems: "flex-start" }}>
                      <input type="checkbox" style={{ marginRight: "10px", marginTop: "5px" }} />
                      <span style={{ fontSize: "14px", color: "#666" }}>
                        J'accepte que mes données soient traitées conformément à la politique de confidentialité de BYFA
                        Group.
                      </span>
                    </label>
                  </div>

                  <button type="submit" className="btn" style={{ width: "100%" }}>
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <h2 className="section-title">Notre Emplacement</h2>
          <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
            Venez nous rendre visite dans notre agence située au cœur de Dakar, facilement accessible en transports en
            commun.
          </p>

          <div
            style={{
              height: "500px",
              backgroundColor: "#ddd",
              borderRadius: "5px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <MapPin size={64} style={{ color: "#9c6644", marginBottom: "20px" }} />
              <p style={{ fontSize: "24px", marginBottom: "10px" }}>Cité Cheikh Ahmadou Bamba</p>
              <p style={{ fontSize: "18px" }}>12 Dakar, Sénégal</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
