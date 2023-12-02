import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import PatientDetail from "../../components/shared/PatientDetail";

const NursePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  // trigger use effect and loop over all the patients data and pass the details each patient card
  return (
    <div className="lg:w-[60%] md:w-[80%] mx-auto mt-20">
      <h1 className="text-2xl font-semibold text-gray-600 mb-10">
        Your Patients
      </h1>
      <div>
        <div className="bg-white px-4 py-4 flex gap-4 items-center justify-between shadow-md">
          <p>Name: Patient Name</p>
          <p>UID: unique id number</p>
          <p>Summary: health brief</p>
          <button
            className="rounded-full bg-primary py-1 px-5 text-white"
            onClick={() => setIsOpen(true)}
          >
            View record
          </button>
        </div>
      </div>

      <PatientDetail
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        patient={"patient"}
      />
    </div>
  );
};

export default NursePage;
