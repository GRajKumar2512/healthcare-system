import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

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

const NurseForm = () => {
  const navigate = useNavigate();
  const { id: nurseId } = useContext(UserContext);
  console.log(nurseId);

  const initialValues = {
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
    const { data } = await axios.post("/nurse/add", { nurseId, ...values });

    if (data) {
      navigate("/nurse/profile");
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
          <div className="px-4 py-2">
            <label htmlFor="firstName">First Name:</label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="px-4 py-2">
            <label htmlFor="lastName">Last Name:</label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="px-4 py-2">
            <label htmlFor="dob">Date of Birth:</label>
            <Field type="date" id="dob" name="dob" placeholder="" />
            <ErrorMessage name="dob" component="div" className="text-red-500" />
          </div>

          <div className="px-4 py-2">
            <label htmlFor="age">Age:</label>
            <Field type="number" id="age" name="age" placeholder="eg. 23" />
            <ErrorMessage name="age" component="div" className="text-red-500" />
          </div>

          <div className="px-4 py-2">
            <label htmlFor="address">Address:</label>
            <Field
              type="text"
              id="address"
              name="address"
              placeholder="H. No, Street, Area, City"
            />
            <ErrorMessage
              name="address"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="px-4 py-2">
            <label htmlFor="mobile">Mobile No:</label>
            <Field
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Your Mobile No."
            />
            <ErrorMessage
              name="mobile"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="px-4 py-2">
            <label htmlFor="qualification">Qualification:</label>
            <Field
              type="text"
              id="qualification"
              name="qualification"
              placeholder="eg. Bsc etc"
            />
            <ErrorMessage
              name="qualification"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="px-4 py-2">
            <label htmlFor="department">Department:</label>
            <Field
              type="text"
              id="department"
              name="department"
              placeholder="eg. Critical Care"
            />
            <ErrorMessage
              name="department"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="px-4 py-2">
            <label htmlFor="shift">Shift:</label>
            <Field
              type="text"
              id="shift"
              name="shift"
              placeholder="Night / Day"
            />
            <ErrorMessage
              name="shift"
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

export default NurseForm;
