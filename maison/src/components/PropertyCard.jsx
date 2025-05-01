import { Link } from "react-router-dom"
import { Bed, Bath, Square, MapPin } from 'lucide-react'

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <Link to={`/properties/${property.id}`} className="property-image-container">
        <img
          src={property.images[0] || "/placeholder.svg?height=600&width=800"}
          alt={property.title}
          className="property-image"
        />
        <div className="property-overlay">
          <div className="property-price">{property.price.toLocaleString()} €</div>
        </div>
        <div className="property-type">
          {property.type === "house"
            ? "Maison"
            : property.type === "apartment"
              ? "Appartement"
              : property.type === "villa"
                ? "Villa"
                : property.type === "penthouse"
                  ? "Penthouse"
                  : "Propriété"}
        </div>
        <div className="property-badge">
          {property.status === "sale"
            ? "À Vendre"
            : property.status === "rent"
              ? "À Louer"
              : property.status === "sold"
                ? "Vendu"
                : "Nouveau"}
        </div>
      </Link>

      <div className="property-content">
        <Link to={`/properties/${property.id}`}>
          <h3 className="property-title">{property.title}</h3>
        </Link>

        <div className="property-location">
          <MapPin size={16} />
          <span>
            {property.location.address}, {property.location.city}
          </span>
        </div>

        <div className="property-features">
          <div className="property-feature">
            <Bed size={16} />
            <span>{property.bedrooms}</span>
          </div>
          <div className="property-feature">
            <Bath size={16} />
            <span>{property.bathrooms}</span>
          </div>
          <div className="property-feature">
            <Square size={16} />
            <span>{property.surface} m²</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
