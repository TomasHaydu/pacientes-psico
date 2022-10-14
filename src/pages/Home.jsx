import { useState, useEffect } from "react";
import Patient from "../components/Patient";

const Home = () => {
  
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const getPatientsAPI = async () => {
      try {
        const url = import.meta.env.VITE_API_URL;
        const resolve = await fetch(url);
        const results = await resolve.json();
        setPatients(results);
      } catch (error) {
        console.log(error);
      }
    };
    getPatientsAPI();
  }, []);

  const handleDelete = async (id) => {

    const confirmed = confirm('¿Desea ELIMINAR este paciente?')
    
    if(confirmed){
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`
        const resolve = await fetch(url, {
          method: 'DELETE'
      })
        const result = resolve.json()
        const newListPatient = patients.filter((patient) => patient.id !== id)
        setPatients(newListPatient)
      } catch (error) {
        
      }
    }
  }

  return (
    <div className="">

      <div className="p-2 grid grid-cols-6 gap-16 bg-orange-500 rounded-sm mx-2 my-2">
        <p className="ml-4">Nombre</p>
        <p>Apellido</p>
        <p>Edad</p>
        <p>Telefono</p>
        <p className="col-span-2"></p>
      </div>

      {patients.length > 0 ? patients.map(patient => (
        <Patient
        key={patient.id}
        patient={patient}
        handleDelete={handleDelete} />
      )) : <p
      className="text-lg mx-72 my-60"
      >No existen pacientes aun. Vaya a "Nuevo Paciente" a su izquierda para agregar pacientes</p> }


    </div>
  );
};

export default Home;
