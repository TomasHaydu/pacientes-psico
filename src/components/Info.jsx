import React from 'react'
import { useState } from 'react';

const Info = (patient) => {

    const [infoPatient, setInfoPatient] = useState({})

    useEffect(() => {
        const getPatientsAPI = async () => {
          try {
            const url = `http://localhost:3000/posts/${patient.patient.id}`;
            const resolve = await fetch(url);
            const results = await resolve.json();
            setInfoPatient(results);
          } catch (error) {
            console.log(error);
          }
        };
        getPatientsAPI();
      }, []);

  return (
    <div>Info</div>
  )
}

export default Info