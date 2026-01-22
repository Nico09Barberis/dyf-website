const inputBaseStyles =
  "border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500";

function FormField({ type = "text", id, name, placeholder, required }) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      className={inputBaseStyles}
    />
  );
}

function FormSelect({ id, name, label, options, required }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 font-semibold">
        {label}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        className={inputBaseStyles}
      >
        <option value="">Selecciona</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

function FormTextarea({ id, name, label, placeholder, required, rows = 5 }) {
  return (
    <div className="flex flex-col md:col-span-2">
      <label htmlFor={id} className="mb-1 font-semibold">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={inputBaseStyles}
      />
    </div>
  );
}

export default function ContactForm() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl bg-white p-8">
        <h2 className="mb-2 text-start text-3xl font-urbanist uppercase font-bold tracking-wide">
          Contactanos
        </h2>
        <div className="mb-6 h-2 w-20 bg-dorado" />

        <form
          action="https://formspree.io/f/xovpkokq"
          method="POST"
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <FormField
            id="nombre"
            name="nombre"
            placeholder="Nombre"
            required
          />

          <FormField
            id="apellido"
            name="apellido"
            placeholder="Apellido"
            required
          />

          <FormField
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />

          <FormField
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Telefono"
          />

          <div className="flex flex-col">
            <label htmlFor="fecha" className="mb-1 font-semibold">
              Fecha de evento
            </label>
            <FormField
              type="date"
              id="fecha"
              name="fecha"
              required
            />
          </div>

          <FormSelect
            id="tipoEvento"
            name="tipoEvento"
            label="Tipo de evento"
            required
            options={[
              { value: "cumpleaños", label: "Cumpleaños" },
              { value: "bodas", label: "Boda" },
              { value: "corporativo", label: "Evento corporativo" },
              { value: "otros", label: "Otros" },
            ]}
          />

          <FormTextarea
            id="mensaje"
            name="mensaje"
            label="Descripción del evento"
            placeholder="Cuéntanos un poco qué quieres..."
            required
          />

          <div className="flex justify-center md:col-span-2">
            <button
              type="submit"
              className="
                inline-flex items-center justify-center
                px-8 py-3
                bg-dorado text-white
                font-urbanist font-semibold
                rounded-full
                shadow-md
                transition-all duration-300
                hover:bg-dorado/90 hover:shadow-lg hover:-translate-y-0.5
                focus:outline-none focus:ring-2 focus:ring-dorado focus:ring-offset-2"
              >
              Enviar 
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
