import { useState } from "react";

export function useContactForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const newErrors = {};

    if (!data.nombre) newErrors.nombre = "El nombre es obligatorio";
    if (!data.apellido) newErrors.apellido = "El apellido es obligatorio";

    if (!data.email) {
      newErrors.email = "El email es obligatorio";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "Email inválido";
    }

    if (!data.tipoEvento) {
      newErrors.tipoEvento = "Selecciona un tipo de evento";
    }

    if (!data.mensaje) {
      newErrors.mensaje = "El mensaje es obligatorio";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("idle");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const validationErrors = validate(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("https://formspree.io/f/mqeybapy", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.error(error);
    }
  };

  return {
    handleSubmit,
    status,
    errors,
  };
}
