export default function Header() {
    return (
      <header className="bg-gray-800 text-white py-6 sticky top-0 z-10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold">Byfaa Group SARL</h1>
          <nav>
            <a href="#home" className="mx-4 hover:text-blue-400">Accueil</a>
            <a href="#properties" className="mx-4 hover:text-blue-400">Maisons</a>
            <a href="#director" className="mx-4 hover:text-blue-400">Mot de la Directrice</a>
            <a href="#about" className="mx-4 hover:text-blue-400">À Propos</a>
          </nav>
        </div>
      </header>
    );
  }