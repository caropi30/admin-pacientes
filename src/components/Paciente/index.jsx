const Paciente = ({ paciente }) => {
  const { mascota, propietario, email, fecha, sintomas } = paciente;
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
    </div>
  );
};

export { Paciente };
