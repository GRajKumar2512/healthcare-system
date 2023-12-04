import React, { useEffect, useState } from "react";
import axios from "axios";
import NurseDetail from "../components/shared/NurseDetail";

const ViewNurse = () => {
  const [nurses, setNurses] = useState([]);
  const [selectedNurse, setSelectedNurse] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getNurses = async () => {
      const { data } = await axios.get("/nurse");

      setNurses(data);
    };
    getNurses();
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
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {nurses.map((row, index) => (
            <tr key={`${row.firstName}-${index + 1}`}>
              <td>{index + 1}</td>
              <td>{row.firstName}</td>
              <td>{row.address}</td>
              <td>{row.mobile}</td>
              <td>{row.age}</td>
              <td>{row.department}</td>
              <td>
                <button
                  className="rounded-full py-1 px-3 bg-primary text-white"
                  onClick={() => {
                    setSelectedNurse(row);
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

      <NurseDetail
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        nurse={selectedNurse}
      />
    </div>
  );
};

export default ViewNurse;
