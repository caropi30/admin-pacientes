import { useState, useEffect } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre !== "") {
      console.log(`El nombre en el form es ${nombre}`);
      setError(false);
    } else {
      console.log("No hay nombre");
      setError(true);
    }
  };

  return (
    <>
      <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">
          Seguimiento Pacientes
        </h2>
        <p className="text-lg mt-5 text-center mb-10">
          Añade pacientes y{" "}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl py-10 px-5 mb-10 mx-3"
        >
          {error && (
            <div className="bg-red-600 py-3 mb-4 rounded">
              <p className="text-center text-white font-bold uppercase">
                El campo nombre es obligatorio
              </p>
            </div>
          )}
          <div className="mb-5">
            <label
              htmlFor="nombre"
              className="block text-gray-700 font-bold uppercase"
            >
              Nombre Mascota
            </label>
            <input
              id="nombre"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="text"
              placeholder="Nombre de Mascota"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="propietario"
              className="block text-gray-700 font-bold uppercase"
            >
              Nombre Mascota
            </label>
            <input
              id="propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="text"
              placeholder="Nombre de Mascota"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="nombre"
              className="block text-gray-700 font-bold uppercase"
            >
              Nombre del Propitario
            </label>
            <input
              id="nombre"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="text"
              placeholder="Nombre del Propietario"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold uppercase"
            >
              Email
            </label>
            <input
              id="email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="email"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="alta"
              className="block text-gray-700 font-bold uppercase"
            >
              Alta
            </label>
            <input
              id="alta"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="date"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="sintomas"
              className="block text-gray-700 font-bold uppercase"
            >
              Síntomas
            </label>
            <textarea
              id="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Descripción de síntomas"
            />
          </div>

          <input
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 w-full p-3 mb-2 text-white uppercase font-bold cursor-pointer transition-colors rounded-md"
            value="Agregar paciente"
          />
        </form>
      </div>
    </>
  );
};

export { Formulario };
