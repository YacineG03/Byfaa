export default function Hero() {
    return (
      <section
        id="home"
        className="h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c)' }}
      >
        <div className="container mx-auto text-center text-white animate-fadeIn">
          <h2 className="text-5xl font-bold mb-4">Trouvez la maison de vos rêves</h2>
          <p className="text-xl mb-6">Byfaa Group SARL, votre partenaire immobilier depuis 10 ans.</p>
          <a href="#properties" className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700">
            Voir nos maisons
          </a>
        </div>
      </section>
    );
  }