export default function ContactForm() {
  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto bg-white p-8">
        <h2 className="text-3xl font-italiana uppercase font-bold mb-2 text-start">Contactanos</h2>
        <div className="bg-dorado h-2 w-20 mb-6"></div>
        <form
          action="https://formspree.io/f/xovpkokq" // <- reemplaza con tu endpoint
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Nombre */}
          <div className="flex flex-col">
            <label htmlFor="nombre" className="mb-1 font-italiana  font-bold tracking-wider">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Apellido */}
          <div className="flex flex-col">
            <label htmlFor="apellido" className="mb-1 font-italiana  font-bold tracking-wider">Apellido</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              placeholder="Tu apellido"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-italiana  font-bold tracking-wider">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tu@email.com"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Teléfono */}
          <div className="flex flex-col">
            <label htmlFor="telefono" className="mb-1 font-italiana  font-bold tracking-wider">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="Ej: +54 9 11 1234-5678"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Fecha de evento */}
          <div className="flex flex-col">
            <label htmlFor="fecha" className="mb-1 font-italiana  font-bold tracking-wider">Fecha de evento</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Tipo de evento */}
          <div className="flex flex-col">
            <label htmlFor="tipoEvento" className="mb-1 font-italiana  font-bold tracking-wider">Tipo de evento</label>
            <select
              id="tipoEvento"
              name="tipoEvento"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Selecciona</option>
              <option value="cumpleaños">Cumpleaños</option>
              <option value="bodas">Boda</option>
              <option value="corporativo">Evento corporativo</option>
              <option value="otros">Otros</option>
            </select>
          </div>

          {/* Mensaje (textarea) */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="mensaje" className="mb-1 font-italiana  font-bold tracking-wider">Descripción del evento</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Cuéntanos un poco qué quieres..."
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Botón de envío */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
