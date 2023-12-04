import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// Define Yup schema for validation

const regExp = /^[0-9]{10}$/;

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  dob: Yup.date().required("Date of Birth is required"),
  age: Yup.number().required("Age is required"),
  address: Yup.string().required("Address is required"),
  mobile: Yup.string()
    .matches(regExp, "Invalid Number")
    .required("Mobile No is required"),
  qualification: Yup.string().required("Qualification is required"),
  department: Yup.string().required("Department is required"),
  shift: Yup.string().required("Shift is required"),
});

const ActionNurse = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [nurse, setNurse] = useState(null);

  useEffect(() => {
    if (id) {
      const getNurseDetails = async () => {
        const { data } = await axios.get(`/nurse/${id}`);

        setNurse((prevNurse) => ({ ...prevNurse, ...data }));

        console.log("updated nurse", nurse);
      };
      getNurseDetails();
    }
  }, [id]);

  const initialValues = id
    ? {
        firstName: nurse?.firstName,
        lastName: nurse?.lastName,
        dob: nurse?.dob,
        age: nurse?.age,
        address: nurse?.address,
        mobile: nurse?.mobile,
        qualification: nurse?.qualification,
        department: nurse?.department,
        shift: nurse?.shift,
      }
    : {
        firstName: "",
        lastName: "",
        dob: "",
        age: "",
        address: "",
        mobile: "",
        qualification: "",
        department: "",
        shift: "",
      };

  const onSubmit = async (values) => {
    const { data } = await axios.post("/nurse/add", { nurseId: id, ...values });

    if (data) {
      navigate("/admin/view-nurse");
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
            <label htmlFor="firstName">First Name:</label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              className="border border-gray-500"
            />
            <ErrorMessage name="firstName" component="div" />
          </div>

          <div className="px-4 py-2">
            <label htmlFor="lastName">Last Name:</label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              className="border border-gray-500"
            />
            <ErrorMessage name="lastName" component="div" />
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
            <label htmlFor="qualification">Qualification:</label>
            <Field
              type="text"
              id="qualification"
              name="qualification"
              className="border border-gray-500"
            />
            <ErrorMessage name="qualification" component="div" />
          </div>

          <div className="px-4 py-2">
            <label htmlFor="department">Department:</label>
            <Field
              type="text"
              id="department"
              name="department"
              className="border border-gray-500"
            />
            <ErrorMessage name="department" component="div" />
          </div>

          <div className="px-4 py-2">
            <label htmlFor="shift">Shift:</label>
            <Field
              type="text"
              id="shift"
              name="shift"
              className="border border-gray-500"
            />
            <ErrorMessage name="shift" component="div" />
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

export default ActionNurse;
