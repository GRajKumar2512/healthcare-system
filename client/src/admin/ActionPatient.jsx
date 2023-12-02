import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// Define Yup schema for validation
const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  dob: Yup.date().required("Date of Birth is required"),
  age: Yup.number().required("Age is required"),
  address: Yup.string().required("Address is required"),
  mobile: Yup.string().required("Mobile No is required"),
  ailment: Yup.string().required("Ailment is required"),
  patientType: Yup.string().required("Patient Type is required"),
});

const ActionPatient = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    if (id) {
      const getPatientDetails = async () => {
        const { data } = await axios.get(`/record/${id}`);

        setPatient((prevPatient) => ({ ...prevPatient, ...data }));

        console.log("updated patient", patient);
      };
      getPatientDetails();
    }
  }, [id]);

  const initialValues = id
    ? {
        firstname: patient?.firstname,
        lastname: patient?.lastname,
        dob: patient?.dob,
        age: patient?.age,
        address: patient?.address,
        mobile: patient?.mobile,
        ailment: patient?.ailment,
        patientType: patient?.type,
      }
    : {
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
    const { data } = await axios.post("/record/add", { ...values });

    if (data) {
      navigate("/admin/view-patient");
    }
  };

  return (
    <div className="mt-20">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="w-[80%] mx-auto p-4 border border-gray-500">
          <div className="px-4 py-2">
            <label htmlFor="firstname">First Name:</label>
            <Field
              type="text"
              id="firstname"
              name="firstname"
              className="border border-gray-500"
            />
            <ErrorMessage name="firstname" component="div" />
          </div>

          <div className="px-4 py-2">
            <label htmlFor="lastname">Last Name:</label>
            <Field
              type="text"
              id="lastname"
              name="lastname"
              className="border border-gray-500"
            />
            <ErrorMessage name="lastname" component="div" />
          </div>

          <div className="px-4 py-2">
            <label htmlFor="dob">Date of Birth:</label>
            <Field
              type="date"
              id="dob"
              name="dob"
              className="border border-gray-500"
            />
            <ErrorMessage name="dob" component="div" />
          </div>

          <div className="px-4 py-2">
            <label htmlFor="age">Age:</label>
            <Field
              type="number"
              id="age"
              name="age"
              className="border border-gray-500"
            />
            <ErrorMessage name="age" component="div" />
          </div>

          <div className="px-4 py-2">
            <label htmlFor="address">Address:</label>
            <Field
              type="text"
              id="address"
              name="address"
              className="border border-gray-500"
            />
            <ErrorMessage name="address" component="div" />
          </div>

          <div className="px-4 py-2">
            <label htmlFor="mobile">Mobile No:</label>
            <Field
              type="text"
              id="mobile"
              name="mobile"
              className="border border-gray-500"
            />
            <ErrorMessage name="mobile" component="div" />
          </div>

          <div className="px-4 py-2">
            <label htmlFor="ailment">Ailment:</label>
            <Field
              type="text"
              id="ailment"
              name="ailment"
              className="border border-gray-500"
            />
            <ErrorMessage name="ailment" component="div" />
          </div>

          <div className="px-4 py-2">
            <label htmlFor="patientType">Patient Type:</label>
            <Field
              as="select"
              id="patientType"
              name="patientType"
              className="border border-gray-500"
            >
              <option value="">Select Patient Type</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
            </Field>
            <ErrorMessage name="patientType" component="div" />
          </div>
          <div className="text-center mt-5">
            <button
              type="submit"
              className="bg-primary px-4 py-2 rounded-lg text-white w-full"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ActionPatient;

// firstname, lastname, dob, age, address, mobile no, ailment, patient type
