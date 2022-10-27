const Alert = ({ children }) => {
  {
    /* Cuando se utiliza children se le envía todas las props al componente
          y dentro del mismo se indica la prop como {children} y como paraetro del componente de la misma manera, ejem:
          <div className="bg-red-600 py-3 mb-4 rounded">
            {children}
         </div>
          en el caso de que fuera por destruturing se pasaría como {mensaje} tanto como parámetrod el componente como prop a leer en el mismo, ejm:
          <div className="bg-red-600 py-3 mb-4 rounded">
            <p className="text-center text-white font-bold uppercase">{mensaje}</p>
        </div> */
  }
  return (
    <div className="bg-red-600 py-3 mb-4 rounded">
      <p className="text-center text-white font-bold uppercase">{children}</p>
    </div>
  );
};

export { Alert };
