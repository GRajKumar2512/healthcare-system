import React, { useEffect, useState } from "react";
import axios from "axios";
import PatientDetail from "../components/shared/PatientDetail";

const ViewPatient = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getPatients = async () => {
      const { data } = await axios.get("/patient");

      setPatients(data);
    };
    getPatients();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <table className="min-w-full bg-white border border-gray-300 shadow">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Ailment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((row, index) => (
            <tr key={row._id}>
              <td>{index + 1}</td>
              <td>{row.firstname}</td>
              <td>{row.address}</td>
              <td>{row.mobile}</td>
              <td>{row.age}</td>
              <td>{row.ailment}</td>
              <td>
                <button
                  className="rounded-full py-1 px-3 bg-primary text-white"
                  onClick={() => {
                    setSelectedPatient(row);
                    setIsOpen(true);
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <PatientDetail
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        patient={selectedPatient}
      />
    </div>
  );
};

export default ViewPatient;

// S.no, Name, Address,Phone, age, category, action(view)
