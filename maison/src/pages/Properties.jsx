"use client"

import { useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import PropertyCard from "../components/PropertyCard"
import { properties } from "../data/properties"

const Properties = () => {
  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    propertyType: "",
  })

  const [showFilters, setShowFilters] = useState(false)

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  // Filtrer les propriétés en fonction des critères
  const filteredProperties = properties.filter((property) => {
    let match = true

    if (filters.location && property.location.city.toLowerCase() !== filters.location.toLowerCase()) {
      match = false
    }

    if (filters.minPrice && property.price < Number.parseInt(filters.minPrice)) {
      match = false
    }

    if (filters.maxPrice && property.price > Number.parseInt(filters.maxPrice)) {
      match = false
    }

    if (filters.bedrooms && property.bedrooms < Number.parseInt(filters.bedrooms)) {
      match = false
    }

    if (filters.propertyType && property.type !== filters.propertyType) {
      match = false
    }

    return match
  })

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
          <h1 style={{ fontSize: "36px", marginBottom: "15px" }}>Nos Propriétés</h1>
          <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto" }}>
            Découvrez notre sélection de propriétés d'exception, choisies pour leur emplacement, leur architecture et
            leur potentiel.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section style={{ padding: "40px 0", backgroundColor: "white" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
              <div style={{ position: "relative", flexGrow: 1 }}>
                <Search
                  size={18}
                  style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }}
                />
                <input
                  type="text"
                  placeholder="Rechercher une propriété..."
                  style={{
                    width: "100%",
                    padding: "10px 10px 10px 35px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 20px",
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal size={18} />
                Filtres
              </button>
            </div>

            {showFilters && (
              <div
                style={{
                  backgroundColor: "#f5f5f5",
                  padding: "20px",
                  borderRadius: "5px",
                  marginBottom: "30px",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "20px",
                  }}
                >
                  <div>
                    <label htmlFor="location" style={{ display: "block", marginBottom: "5px" }}>
                      Ville
                    </label>
                    <select
                      id="location"
                      name="location"
                      value={filters.location}
                      onChange={handleFilterChange}
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
                    <label htmlFor="minPrice" style={{ display: "block", marginBottom: "5px" }}>
                      Prix minimum
                    </label>
                    <select
                      id="minPrice"
                      name="minPrice"
                      value={filters.minPrice}
                      onChange={handleFilterChange}
                      style={{
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #ddd",
                        borderRadius: "5px",
                      }}
                    >
                      <option value="">Aucun minimum</option>
                      <option value="200000">200 000 €</option>
                      <option value="500000">500 000 €</option>
                      <option value="1000000">1 000 000 €</option>
                      <option value="2000000">2 000 000 €</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="maxPrice" style={{ display: "block", marginBottom: "5px" }}>
                      Prix maximum
                    </label>
                    <select
                      id="maxPrice"
                      name="maxPrice"
                      value={filters.maxPrice}
                      onChange={handleFilterChange}
                      style={{
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #ddd",
                        borderRadius: "5px",
                      }}
                    >
                      <option value="">Aucun maximum</option>
                      <option value="500000">500 000 €</option>
                      <option value="1000000">1 000 000 €</option>
                      <option value="2000000">2 000 000 €</option>
                      <option value="5000000">5 000 000 €</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="bedrooms" style={{ display: "block", marginBottom: "5px" }}>
                      Chambres (min)
                    </label>
                    <select
                      id="bedrooms"
                      name="bedrooms"
                      value={filters.bedrooms}
                      onChange={handleFilterChange}
                      style={{
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #ddd",
                        borderRadius: "5px",
                      }}
                    >
                      <option value="">Toutes</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                      <option value="5">5+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="propertyType" style={{ display: "block", marginBottom: "5px" }}>
                      Type de propriété
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={filters.propertyType}
                      onChange={handleFilterChange}
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
                    <button
                      className="btn btn-outline"
                      style={{ width: "100%" }}
                      onClick={() =>
                        setFilters({
                          location: "",
                          minPrice: "",
                          maxPrice: "",
                          bedrooms: "",
                          propertyType: "",
                        })
                      }
                    >
                      Réinitialiser
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Properties List */}
      <section style={{ padding: "40px 0", backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <h2 style={{ fontSize: "24px", marginBottom: "30px" }}>
            {filteredProperties.length} propriété{filteredProperties.length > 1 ? "s" : ""} trouvée
            {filteredProperties.length > 1 ? "s" : ""}
          </h2>

          {filteredProperties.length > 0 ? (
            <div className="properties-grid">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <h3 style={{ fontSize: "24px", marginBottom: "15px" }}>
                Aucune propriété ne correspond à vos critères de recherche.
              </h3>
              <p style={{ color: "#666" }}>Essayez de modifier vos filtres pour voir plus de résultats.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Properties
