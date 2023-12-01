import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import PatientForm from "./PatientForm";

const PatientPage = () => {
  const { name: currentName } = useContext(UserContext);

  return (
    <div>
      <PatientForm />
    </div>
  );
};

export default PatientPage;
