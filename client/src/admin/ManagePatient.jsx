import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ManagePatient = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getPatients = async () => {
      const { data } = await axios.get("/patient");

      setPatients(data);
    };
    getPatients();
  }, []);

  const handleDelete = async () => {
    await axios.delete(`/patient/${selectedPatient}`);
    navigate("/admin/manage-patient");
  };

  return (
    <div className="container mx-auto p-8">
      <table className="min-w-full bg-white border border-gray-300 shadow">
        <thead>
          <tr>
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
            <tr key={row.id}>
              <td>{row.firstname}</td>
              <td>{row.address}</td>
              <td>{row.mobile}</td>
              <td>{row.age}</td>
              <td>{row.ailment}</td>
              <td className="flex justify-center gap-4">
                <Link
                  to={`/admin/update-patient/${row._id}`}
                  className="rounded-full py-1 px-3 bg-slate-500 text-white"
                >
                  update
                </Link>
                <button
                  className="rounded-full py-1 px-3 bg-red-400 text-white"
                  onClick={() => {
                    setSelectedPatient(row._id);
                    handleDelete();
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagePatient;

// patient, Number,address, category, actions(update, delete, view)
