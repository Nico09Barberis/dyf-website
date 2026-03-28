import { useContactForm } from "./UseContactForm";

export default function ContactForm() {
  const { handleSubmit, status, errors } = useContactForm();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl bg-white p-8">
        <h2 className="mb-2 text-lg md:text-xl lg:text-2xl font-bold uppercase">
          Contactanos
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {/* Honeypot anti-spam */}
          <input type="text" name="_gotcha" className="hidden" />

          <FormField
            id="nombre"
            name="nombre"
            placeholder="Nombre"
            required
            error={errors.nombre}
          />

          <FormField
            id="apellido"
            name="apellido"
            placeholder="Apellido"
            required
            error={errors.apellido}
          />

          <FormField
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            error={errors.email}
          />

          <FormField
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Telefono"
          />

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
            error={errors.tipoEvento}
          />

          <FormTextarea
            id="mensaje"
            name="mensaje"
            label="Descripción del evento"
            placeholder="Cuéntanos un poco qué quieres..."
            required
            error={errors.mensaje}
          />

          <div className="flex flex-col items-center md:col-span-2 gap-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-8 py-3 bg-dorado text-white rounded-full"
            >
              {status === "loading" ? "Enviando..." : "Enviar"}
            </button>

            {status === "success" && (
              <p className="text-green-600">
                Mensaje enviado correctamente 👌
              </p>
            )}

            {status === "error" && (
              <p className="text-red-600">
                Hubo un error. Intenta nuevamente.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}