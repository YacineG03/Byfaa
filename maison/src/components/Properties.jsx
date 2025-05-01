export default function Properties() {
    const houses = [
      { id: 1, title: "Villa Moderne", price: "450 000 €", location: "Côte d'Azur", bedrooms: 4, bathrooms: 3, area: "180 m²", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
      { id: 2, title: "Maison Familiale", price: "320 000 €", location: "Provence", bedrooms: 3, bathrooms: 2, area: "140 m²", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" },
      { id: 3, title: "Chalet de Luxe", price: "780 000 €", location: "Alpes", bedrooms: 5, bathrooms: 4, area: "250 m²", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be" },
    ];
  
    return (
      <section id="properties" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fadeIn">Nos Maisons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {houses.map(house => (
              <div key={house.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale animate-fadeIn">
                <img src={house.image} alt={house.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{house.title}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{house.price}</p>
                  <p className="text-gray-600 mb-2">{house.location}</p>
                  <p className="text-gray-600 mb-2">{house.bedrooms} chambres | {house.bathrooms} salles de bain | {house.area}</p>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">En savoir plus</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }