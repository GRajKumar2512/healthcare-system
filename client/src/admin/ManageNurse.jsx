import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
            <tr key={row.id}>
              <td>{row.firstName}</td>
              <td>{row.address}</td>
              <td>{row.mobile}</td>
              <td>{row.age}</td>
              <td>{row.department}</td>
              <td className="flex justify-center gap-4">
                <Link
                  to={`/admin/update-nurse/${row._id}`}
                  className="rounded-full py-1 px-3 bg-slate-500 text-white"
                >
                  update
                </Link>
                <button
                  className="rounded-full py-1 px-3 bg-red-400 text-white"
                  onClick={() => {
                    setSelectedPatient(row);
                    setIsOpen(true);
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

export default ViewNurse;
