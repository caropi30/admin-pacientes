import { Paciente } from "../Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, elminarPaciente }) => {
  //const [mascota, propietario, email, fecha, sintomas, id] = pacientes;

  // console.log(pacientes);
  return (
    <>
      <div className="md:w-1/2 lg:w-3/5 h-screen md:h-screen lg:overflow-y-scroll">
        {pacientes && pacientes.length ? (
          <>
            <h2 className="font-black text-3xl text-center">
              Listado Pacientes
            </h2>
            <p className="text-xl mt-5 mb-10 text-center">
              {" "}
              Administra tus{" "}
              <span className="text-indigo-600 font-bold text-xl">
                Pacientes y Citas
              </span>
            </p>
            {pacientes.map((paciente) => (
              <Paciente
                paciente={paciente}
                key={paciente.id}
                setPaciente={setPaciente}
                elminarPaciente={elminarPaciente}
              />
            ))}
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">
              No hay Pacientes
            </h2>
            <p className="text-xl mt-5 mb-10 text-center">
              {" "}
              Coemienza agregando pacientes y{" "}
              <span className="text-indigo-600 font-bold text-xl">
                aparecerán en este lugar
              </span>
            </p>
          </>
        )}
      </div>
    </>
  );
};

export { ListadoPacientes };
