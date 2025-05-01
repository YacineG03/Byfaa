import { Award, Target, Shield } from "lucide-react"

const About = () => {
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
          <h1 style={{ fontSize: "36px", marginBottom: "15px" }}>À Propos de BYFA Group</h1>
          <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto" }}>
            Découvrez notre histoire, notre équipe et notre vision pour l'immobilier de prestige.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "50px",
              alignItems: "center",
            }}
          >
            <div>
              <h2 style={{ fontSize: "36px", marginBottom: "15px" }}>Notre Histoire</h2>
              <div
                style={{
                  width: "80px",
                  height: "3px",
                  backgroundColor: "#9c6644",
                  marginBottom: "20px",
                }}
              ></div>
              <p style={{ marginBottom: "15px", lineHeight: "1.8" }}>
                Fondée en 2008 par Sophie Dupont, BYFA Group est née d'une passion pour l'immobilier de qualité et d'une
                vision claire : offrir un service d'exception à nos clients dans leur recherche du bien idéal.
              </p>
              <p style={{ marginBottom: "15px", lineHeight: "1.8" }}>
                Au fil des années, notre agence s'est développée pour devenir une référence dans le secteur de
                l'immobilier haut de gamme. Nous avons constitué une équipe de professionnels partageant les mêmes
                valeurs d'excellence, d'intégrité et de dévouement envers nos clients.
              </p>
              <p style={{ lineHeight: "1.8" }}>
                Aujourd'hui, BYFA Group est fière d'avoir accompagné plus de 1500 familles dans leurs projets
                immobiliers et continue de se distinguer par la qualité de son portefeuille de biens et de ses services
                personnalisés.
              </p>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Notre histoire"
                style={{ width: "100%", borderRadius: "5px", boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <h2 className="section-title">Nos Valeurs</h2>
          <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
            Chez BYFA Group, nos valeurs guident chacune de nos actions et décisions. Elles sont le fondement de notre
            engagement envers nos clients et partenaires.
          </p>

          <div className="features-grid">
            {[
              {
                icon: <Shield size={48} />,
                title: "Intégrité",
                description:
                  "Nous agissons avec honnêteté et transparence dans toutes nos transactions, en plaçant l'intérêt de nos clients au centre de nos préoccupations.",
              },
              {
                icon: <Award size={48} />,
                title: "Excellence",
                description:
                  "Nous visons l'excellence dans chaque aspect de notre service, de la sélection des propriétés à l'accompagnement personnalisé de nos clients.",
              },
              {
                icon: <Target size={48} />,
                title: "Innovation",
                description:
                  "Nous adoptons les technologies et méthodes les plus avancées pour offrir une expérience immobilière moderne et efficace.",
              },
            ].map((value, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{value.icon}</div>
                <h3 className="feature-title">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section" style={{ backgroundColor: "white" }}>
        <div className="container">
          <h2 className="section-title">Notre Équipe</h2>
          <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
            Notre équipe est composée de professionnels passionnés et expérimentés, dédiés à vous offrir un service
            immobilier d'exception.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "30px",
            }}
          >
            {[
              {
                name: "Sophie Dupont",
                role: "Directrice et Fondatrice",
                image: "/placeholder.svg?height=300&width=300",
                description:
                  "Avec plus de 20 ans d'expérience dans l'immobilier de luxe, Sophie a fondé MaisonsÉlite avec la vision de créer une agence d'exception.",
              },
              {
                name: "Thomas Moreau",
                role: "Directeur Commercial",
                image: "/placeholder.svg?height=300&width=300",
                description:
                  "Expert en négociation, Thomas supervise toutes les transactions et s'assure que chaque client obtient les meilleures conditions.",
              },
              {
                name: "Julie Lambert",
                role: "Responsable Marketing",
                image: "/placeholder.svg?height=300&width=300",
                description:
                  "Julie met en valeur chaque propriété grâce à des stratégies marketing innovantes et personnalisées.",
              },
              {
                name: "Marc Leroy",
                role: "Conseiller Immobilier Senior",
                image: "/placeholder.svg?height=300&width=300",
                description:
                  "Spécialiste des propriétés de prestige, Marc accompagne nos clients les plus exigeants dans leur recherche du bien parfait.",
              },
            ].map((member, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  overflow: "hidden",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
              >
                <div style={{ height: "250px", overflow: "hidden" }}>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontSize: "20px", marginBottom: "5px" }}>{member.name}</h3>
                  <p style={{ color: "#9c6644", marginBottom: "15px" }}>{member.role}</p>
                  <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="cta-title">Rejoignez la Famille MaisonsÉlite</h2>
          <p className="cta-text">
            Que vous souhaitiez vendre, acheter ou investir, notre équipe est prête à vous accompagner dans votre projet
            immobilier.
          </p>
          <a href="/contact" className="btn btn-cta">
            Contactez-nous
          </a>
        </div>
      </section>
    </>
  )
}

export default About
