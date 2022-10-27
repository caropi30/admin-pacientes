import { useState, useEffect } from "react";
import { Alert } from "../Alert";

const Formulario = ({ pacientes, setPacientes }) => {
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [fecha, setFecha] = useState("");
  const [email, setEmail] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now();

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([mascota, propietario, fecha, email, sintomas].includes("")) {
      setError(true);
    } else {
      setError(false);
    }

    const objtPaciente = {
      mascota,
      propietario,
      fecha,
      email,
      sintomas,
      id: generarId(),
    };

    setPacientes([...pacientes, objtPaciente]);

    //REINICIAR FORMULARIO
    setMascota("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
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
          {/* Cuando se utiliza children se le envía todas las props al componente
          por eso se utiliza la sintaxis
          <Alert>"Todos los campos son obligatorios"</Alert>,
          pero si quisiera pasar solo una prop a traves de su nombre como "mensaje", tambie´n se podría con la sintaxis
          <Alert mensaje="Aquí va el mensaje" /> */}

          {error && <Alert>"Todos los campos son obligatorios"</Alert>}
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
              value={mascota}
              onChange={(e) => setMascota(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="propietario"
              className="block text-gray-700 font-bold uppercase"
            >
              Nombre del Propietario
            </label>
            <input
              id="propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              type="text"
              placeholder="Nombre de Mascota"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
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
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
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
