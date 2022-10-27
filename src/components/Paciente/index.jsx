const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-lg px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 tetx-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 tetx-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">Carolina</span>
      </p>
      <p className="font-bold mb-3 tetx-gray-700 uppercase">
        Email:{" "}
        <span className="font-normal normal-case">caropi30@gmail.com</span>
      </p>
      <p className="font-bold mb-3 tetx-gray-700 uppercase">
        Fecha alta: <span className="font-normal normal-case">10/10/2022</span>
      </p>
      <p className="font-bold mb-3 tetx-gray-700 uppercase">
        Síntomas:{" "}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis sunt
          similique neque, facere temporibus nostrum. Ad porro totam inventore
          deleniti maxime pariatur, incidunt iure accusamus neque iste
          accusantium beatae provident!
        </span>
      </p>
    </div>
  );
};

export { Paciente };
