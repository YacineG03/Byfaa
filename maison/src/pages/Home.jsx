import { Link } from "react-router-dom";
import { Search, HomeIcon, TrendingUp, Award } from "lucide-react";
import PropertyCard from "../components/PropertyCard";
import TestimonialCard from "../components/TestimonialCard";
import { properties } from "../data/properties";

const Home = () => {
  // Prendre seulement les 3 premières propriétés pour la section "Featured"
  const featuredProperties = properties.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/assets/bg.jpeg" alt="BYFA Group Background" />
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            {/* <h1 className="hero-title">Trouvez la Maison de Vos Rêves</h1> */}
            <p className="hero-subtitle">
              Des propriétés d'exception sélectionnées pour vous par notre équipe d'experts immobiliers.
            </p>
            <div className="hero-buttons">
              <Link to="/properties" className="btn">
                Découvrir nos propriétés
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="section" style={{ backgroundColor: "white" }}>
        <div className="container">
          <h2 className="section-title">Recherchez votre propriété idéale</h2>
          <form style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
              <div>
                <label htmlFor="location" style={{ display: "block", marginBottom: "5px" }}>
                  Localisation
                </label>
                <select
                  id="location"
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                  }}
                >
                  <option value="">Toutes les villes</option>
                  <option value="paris">Paris</option>
                  <option value="lyon">Lyon</option>
                  <option value="marseille">Marseille</option>
                  <option value="bordeaux">Bordeaux</option>
                </select>
              </div>
              <div>
                <label htmlFor="price" style={{ display: "block", marginBottom: "5px" }}>
                  Budget max
                </label>
                <select
                  id="price"
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                  }}
                >
                  <option value="">Tous les prix</option>
                  <option value="200000">Jusqu'à 200 000 €</option>
                  <option value="500000">Jusqu'à 500 000 €</option>
                  <option value="1000000">Jusqu'à 1 000 000 €</option>
                  <option value="2000000">Jusqu'à 2 000 000 €</option>
                </select>
              </div>
              <div>
                <label htmlFor="type" style={{ display: "block", marginBottom: "5px" }}>
                  Type de bien
                </label>
                <select
                  id="type"
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                  }}
                >
                  <option value="">Tous les types</option>
                  <option value="house">Maison</option>
                  <option value="apartment">Appartement</option>
                  <option value="villa">Villa</option>
                  <option value="penthouse">Penthouse</option>
                </select>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <button type="submit" className="btn" style={{ width: "100%" }}>
                  <Search size={18} style={{ marginRight: "8px" }} />
                  Rechercher
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <h2 className="section-title">Propriétés à la Une</h2>
          <p style={{ textAlign: "center", marginBottom: "40px" }}>
            Découvrez notre sélection de propriétés exceptionnelles, choisies pour leur emplacement privilégié, leur
            architecture remarquable et leur potentiel d'investissement.
          </p>

          <div className="properties-grid">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link to="/properties" className="btn">
              Voir toutes nos propriétés
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ backgroundColor: "white" }}>
        <div className="container">
          <h2 className="section-title">Pourquoi Nous Choisir</h2>
          <p style={{ textAlign: "center", marginBottom: "40px" }}>
            Avec plus de 15 ans d'expérience dans le secteur immobilier, notre agence s'engage à vous offrir un service
            personnalisé et de qualité.
          </p>

          <div className="features-grid">
            {[
              {
                icon: <HomeIcon size={48} />,
                title: "Propriétés Exclusives",
                description:
                  "Accédez à un portefeuille de biens immobiliers exclusifs, soigneusement sélectionnés pour leur qualité et leur emplacement.",
              },
              {
                icon: <Award size={48} />,
                title: "Expertise Reconnue",
                description:
                  "Notre équipe d'experts immobiliers possède une connaissance approfondie du marché et vous guide à chaque étape de votre projet.",
              },
              {
                icon: <TrendingUp size={48} />,
                title: "Investissement Sûr",
                description:
                  "Nous vous aidons à réaliser des investissements immobiliers rentables et sécurisés, adaptés à vos objectifs financiers.",
              },
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="section" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="container">
          <h2 className="section-title">Le mot de la Directrice</h2>
          <blockquote className="director-quote">
            "Chez BYFA Group, nous croyons que chaque maison raconte une histoire et que chaque client mérite de trouver
            celle qui lui correspond parfaitement. Notre mission est de vous accompagner dans cette quête avec passion,
            professionnalisme et une attention particulière à vos besoins."
          </blockquote>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <h2 className="section-title">Ce que disent nos clients</h2>
          <p className="text-center" style={{ marginBottom: "40px" }}>
            La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages sur leur expérience avec BYFA
            Group.
          </p>

          <div className="properties-grid">
            {[
              {
                name: "Jean Martin",
                role: "Propriétaire à Paris",
                image: "/assets/image.png",
                text: "Grâce à BYFA Group, j'ai vendu ma maison en moins de 3 semaines à un prix supérieur à mes attentes. Leur expertise du marché parisien est impressionnante.",
              },
              {
                name: "Marie Leclerc",
                role: "Acheteuse à Lyon",
                image: "/assets/image.png",
                text: "L'équipe a parfaitement compris nos besoins et nous a présenté des propriétés qui correspondaient exactement à nos critères. Un accompagnement de qualité du début à la fin.",
              },
              {
                name: "Pierre Dubois",
                role: "Investisseur",
                image: "/assets/image.png",
                text: "Je travaille avec BYFA Group depuis 5 ans pour mes investissements immobiliers. Leur conseil avisé m'a permis de constituer un portefeuille rentable et diversifié.",
              },
            ].map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="cta-title">Prêt à trouver la maison de vos rêves?</h2>
          <p className="cta-text">
            Contactez-nous dès aujourd'hui pour discuter de votre projet immobilier avec l'un de nos conseillers
            experts.
          </p>
          <Link to="/contact" className="btn btn-cta">
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;