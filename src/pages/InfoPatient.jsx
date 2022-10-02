import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const InfoPatient = () => {
  const [patient, setPatient] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getPatientsAPI = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const resolve = await fetch(url);
        const results = await resolve.json();
        setPatient(results);
      } catch (error) {
        console.log(error);
      }
    };
    getPatientsAPI();
  }, []);

  return (
    <div className="">
      <div className="flex justify-center font-bold text-4xl mt-4">
        <p>Datos del paciente:</p>
      </div>

      <div className="mx-8 my-4 bg-yellow-100 p-2 rounded-lg">
        <p className="text-lg">
          <span className="font-semibold underline text-xl mr-4">
            Nombre:{""}
          </span>
          {patient.nombre}
        </p>

        <p className="text-lg mt-4">
          <span className="font-semibold underline text-xl mr-4">
            Apellido:{""}
          </span>
          {patient.apellido}
        </p>

        <p className="text-lg mt-4">
          <span className="font-semibold underline text-xl mr-4">
            Domicilio:{""}
          </span>
          {patient.domicilio === "" ? "-" : patient.domicilio}
        </p>

        <p className="text-lg mt-4">
          <span className="font-semibold underline text-xl mr-4">
            Edad:{""}
          </span>
          {patient.edad === "" ? "-" : patient.edad}
        </p>

        <p className="text-lg mt-4">
          <span className="font-semibold underline text-xl mr-4">DNI:{""}</span>
          {patient.dni === "" ? "-" : patient.dni}
        </p>

        <p className="text-lg mt-4">
          {" "}
          <span className="font-semibold underline text-xl mr-4">
            Telefono:{""}
          </span>
          {patient.telefono === "" ? "-" : patient.telefono}
        </p>

        <p className="text-lg mt-4">
          {" "}
          <span className="font-semibold underline text-xl mr-4">
            Diagnostico:{""}
          </span>
          {patient.diagnostico === "" ? "-" : patient.diagnostico}
        </p>

        <p className="text-lg mt-4">
          {" "}
          <span className="font-semibold underline text-xl mr-4">
            Obra Social:{""}
          </span>
          {patient.obraSocial === "" ? "-" : patient.obraSocial}
        </p>

        <p className="text-lg mt-4">
          <span className="font-semibold underline text-xl mr-4">
            Derivacion:{""}
          </span>
          {patient.derivacion === "" ? "-" : patient.derivacion}
        </p>

        <p className="text-lg mt-4">
          {" "}
          <span className="font-semibold underline text-xl mr-4">
            Tratamiento Complementario:{""}
          </span>
          {patient.tratamientoComplementario === "" ? "-" : patient.tratamientoComplementario}
        </p>

        <p className="text-lg mt-4">
          {" "}
          <span className="font-semibold underline text-xl mr-4">
            Observaciones:{""}
          </span>
          {patient.observaciones === "" ? "-" : patient.observaciones}
        </p>
      </div>
    </div>
  );
};

export default InfoPatient;
