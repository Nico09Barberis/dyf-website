import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-6">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-20 space-y-6">
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
          Bienvenido a <span className="text-blue-600">Mi Sitio Web</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          Este es un ejemplo base hecho con <span className="font-semibold">React</span> y <span className="font-semibold">Tailwind CSS</span>.  
          Editá este archivo para construir tu página principal.
        </p>

        <Link
          to="/inicio" 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
        >
          Comenzar
        </Link>

      </section>

    </main>
  );
}
