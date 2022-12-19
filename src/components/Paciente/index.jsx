const Paciente = ({ paciente, setPaciente, elminarPaciente }) => {
  const { mascota, propietario, email, fecha, sintomas, id } = paciente;
  console.log(paciente);

  const handleEliminar = () => {
    const respuesta = confirm("¿Deseas eliminar paciente?");

    if (respuesta) {
      elminarPaciente(id);
    }
  };

  return (
    <div className="m-3 bg-white shadow-lg px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 tetx-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{mascota}</span>
      </p>
      <p className="font-bold mb-3 tetx-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 tetx-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 tetx-gray-700 uppercase">
        Fecha alta: <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 tetx-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-7 py-2 uppercase font-bold"
          type="button"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 text-white rounded-md px-7 py-2 uppercase font-bold"
          type="button"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export { Paciente };
