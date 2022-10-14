import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Forms from "../components/Forms";

const EditPatient = () => {
  const [patient, setPatient] = useState({});

  const {id} = useParams();

  useEffect(() => {
    const getPatientAPI = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const resolve = await fetch(url);
        const results = await resolve.json();
        setPatient(results);
      } catch (error) {
        console.log(error);
      }
    };
    getPatientAPI();
  }, []);

  return (
    <div>
      <div className="">
        <h2 className="font-bold text-2xl flex justify-center mt-5">
          Editar paciente
        </h2>
        <p className="font-serif text-base flex justify-center">
          {" "}
          Edite el formulario para poder corregir datos del paciente
        </p>
      </div>

      <div>
        {patient.nombre ? (
          <Forms patient={patient} />
        ) : (
          <p className="flex justify-center mt-40 text-lg p-2 border-2 bg-slate-50 mx-20">
            Este paciente no existe
          </p>
        )}
      </div>
    </div>
  );
};

export default EditPatient;
