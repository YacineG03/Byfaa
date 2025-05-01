export default function Director() {
    return (
      <section id="director" className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt="Directrice"
            className="w-64 h-64 rounded-full object-cover mb-6 md:mb-0 md:mr-8 animate-fadeIn"
          />
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-bold mb-4">Mot de la Directrice</h2>
            <p className="text-gray-600 mb-4">
              Bonjour, je suis Marie Dubois, directrice d'Byfaa Group SARL. Depuis 10 ans, notre mission est d'accompagner
              nos clients dans la réalisation de leurs projets immobiliers avec passion et professionnalisme. Chaque maison
              que nous proposons est sélectionnée avec soin pour répondre à vos attentes. Faites-nous confiance pour trouver
              votre futur chez-vous !
            </p>
            <p className="text-gray-600 font-semibold">Marie Dubois</p>
          </div>
        </div>
      </section>
    );
  }