import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const regExp = /^[0-9]{10}$/;

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  dob: Yup.date().required("Date of Birth is required"),
  age: Yup.number().required("Age is required"),
  address: Yup.string().required("Address is required"),
  mobile: Yup.string()
    .matches(regExp, "Invalid Number")
    .required("Mobile No is required"),
  ailment: Yup.string().required("Ailment is required"),
  patientType: Yup.string().required("Patient Type is required"),
});

const PatientForm = () => {
  const navigate = useNavigate();
  const { id } = useContext(UserContext);

  const initialValues = {
    firstname: "",
    lastname: "",
    dob: "",
    age: "",
    address: "",
    mobile: "",
    ailment: "",
    patientType: "",
  };

  // Form submission handler
  const onSubmit = async (values) => {
    const { data } = await axios.post("/patient/add", {
      patientId: id,
      ...values,
    });

    if (data) {
      navigate("/patient/profile");
    }
  };

  return (
    <div className="mt-20">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="lg:w-[70%] md:w-[80%] mx-auto py-8 px-10 border bg-gray-100">
          <div className=" py-2">
            <label htmlFor="firstname">First Name:</label>
            <Field
              type="text"
              id="firstname"
              name="firstname"
              placeholder="John"
            />
            <ErrorMessage
              name="firstname"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className=" py-2">
            <label htmlFor="lastname">Last Name:</label>
            <Field
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Doe"
            />
            <ErrorMessage
              name="lastname"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className=" py-2">
            <label htmlFor="dob">Date of Birth:</label>
            <Field type="date" id="dob" name="dob" placeholder="" />
            <ErrorMessage name="dob" component="div" className="text-red-500" />
          </div>

          <div className=" py-2">
            <label htmlFor="age">Age:</label>
            <Field type="number" id="age" name="age" placeholder="eg. 20" />
            <ErrorMessage name="age" component="div" className="text-red-500" />
          </div>

          <div className=" py-2">
            <label htmlFor="address">Address:</label>
            <Field
              type="text"
              id="address"
              name="address"
              placeholder="H.no, Street, Area, City"
            />
            <ErrorMessage
              name="address"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className=" py-2">
            <label htmlFor="mobile">Mobile No:</label>
            <Field
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Your Number"
            />
            <ErrorMessage
              name="mobile"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className=" py-2">
            <label htmlFor="ailment">Ailment:</label>
            <Field
              type="text"
              id="ailment"
              name="ailment"
              placeholder="Any Ailments"
            />
            <ErrorMessage
              name="ailment"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className=" py-2">
            <label htmlFor="patientType">Patient Type:</label>
            <Field as="select" id="patientType" name="patientType">
              <option value="">Select Patient Type</option>
              <option value="In">In</option>
              <option value="Out">Out</option>
            </Field>
            <ErrorMessage
              name="patientType"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="text-end mt-5">
            <button
              type="submit"
              className="bg-gray-800 px-4 py-2 rounded-lg text-white"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PatientForm;

// const [patient, setPatient] = useState(null);

// useEffect(() => {
//   if (id) {
//     const getPatientDetails = async () => {
//       const { data } = await axios.get(`/patient/${id}`);

//       setPatient((prevPatient) => ({ ...prevPatient, ...data }));

//       console.log("updated patient", patient);
//     };
//     getPatientDetails();
//   }
// }, [id]);

// const initialValues = id
//   ? {
//       firstname: patient?.firstname,
//       lastname: patient?.lastname,
//       dob: patient?.dob,
//       age: patient?.age,
//       address: patient?.address,
//       mobile: patient?.mobile,
//       ailment: patient?.ailment,
//       patientType: patient?.type,
//     }
//   : {
//       firstname: "",
//       lastname: "",
//       dob: "",
//       age: "",
//       address: "",
//       mobile: "",
//       ailment: "",
//       patientType: "",
//     };
