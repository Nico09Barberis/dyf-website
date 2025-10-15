export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-6">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-20">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Bienvenido a <span className="text-blue-600">Mi Sitio Web</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Este es un ejemplo base hecho con <span className="font-semibold">React</span> y <span className="font-semibold">Tailwind CSS</span>.
          Editá este archivo para construir tu página principal.
        </p>
        <a
          href="#"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          Comenzar
        </a>
      </section>
    </main>
  );
}
