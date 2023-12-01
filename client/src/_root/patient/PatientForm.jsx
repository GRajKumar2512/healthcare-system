import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const PatientForm = () => {
  const regExp = /^[0-9]{10}$/;
  const formik = useFormik({
    initialValues: {
      fullName: "",
      dateOfBirth: "",
      gender: "",
      contactInformation: "",
      address: "",
      emergencyContact: "",
      knownAllergies: "",
      chronicConditions: "",
      medications: "",
      documentUploads: null,
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      dateOfBirth: Yup.date().required("Required"),
      gender: Yup.string().required("Required"),
      contactInformation: Yup.string()
        .matches(regExp, "Invalid Number")
        .required("Required"),
      address: Yup.string().required("Required"),
      emergencyContact: Yup.string()
        .matches(regExp, "Invalid Number")
        .required("Required"),
      knownAllergies: Yup.string(),
      chronicConditions: Yup.string(),
      medications: Yup.string(),
      documentUploads: Yup.mixed().notRequired(),
    }),
    onSubmit: (values) => {
      console.log();
    },
  });

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-4 items-center lg:w-[50%] md:w-[80%] my-10 border  py-10 bg-white"
      >
        <div className="input_div">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className="text-red-600">{formik.errors.fullName}</div>
          ) : null}
        </div>

        <div className="input_div">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dateOfBirth}
          />
          {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
            <div className="text-red-600">{formik.errors.dateOfBirth}</div>
          ) : null}
        </div>

        <div className="input_div">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gender}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {formik.touched.gender && formik.errors.gender ? (
            <div className="text-red-600">{formik.errors.gender}</div>
          ) : null}
        </div>

        <div className="input_div">
          <label htmlFor="contactInformation">Contact Information:</label>
          <input
            type="text"
            id="contactInformation"
            name="contactInformation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contactInformation}
          />
          {formik.touched.contactInformation &&
          formik.errors.contactInformation ? (
            <div className="text-red-600">
              {formik.errors.contactInformation}
            </div>
          ) : null}
        </div>

        <div className="input_div">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-600">{formik.errors.address}</div>
          ) : null}
        </div>

        <div className="input_div">
          <label htmlFor="emergencyContact">Emergency Contact:</label>
          <input
            type="text"
            id="emergencyContact"
            name="emergencyContact"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.emergencyContact}
          />
          {formik.touched.emergencyContact && formik.errors.emergencyContact ? (
            <div className="text-red-600">{formik.errors.emergencyContact}</div>
          ) : null}
        </div>

        <div className="input_div">
          <label htmlFor="knownAllergies">Known Allergies:</label>
          <input
            type="text"
            id="knownAllergies"
            name="knownAllergies"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.knownAllergies}
          />
          {formik.touched.knownAllergies && formik.errors.knownAllergies ? (
            <div className="text-red-600">{formik.errors.knownAllergies}</div>
          ) : null}
        </div>

        <div className="input_div">
          <label htmlFor="chronicConditions">Chronic Conditions:</label>
          <input
            type="text"
            id="chronicConditions"
            name="chronicConditions"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.chronicConditions}
          />
          {formik.touched.chronicConditions &&
          formik.errors.chronicConditions ? (
            <div className="text-red-600">
              {formik.errors.chronicConditions}
            </div>
          ) : null}
        </div>

        <div className="input_div">
          <label htmlFor="medications">Medications:</label>
          <input
            type="text"
            id="medications"
            name="medications"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.medications}
          />
          {formik.touched.medications && formik.errors.medications ? (
            <div className="text-red-600">{formik.errors.medications}</div>
          ) : null}
        </div>

        <div className="input_div">
          <label htmlFor="documentUploads">Document Uploads:</label>
          <input
            type="file"
            id="documentUploads"
            name="documentUploads"
            onChange={(event) =>
              formik.setFieldValue(
                "documentUploads",
                event.currentTarget.files[0]
              )
            }
            onBlur={formik.handleBlur}
          />
          {formik.touched.documentUploads && formik.errors.documentUploads ? (
            <div className="text-red-600">{formik.errors.documentUploads}</div>
          ) : null}
        </div>

        <button
          type="submit"
          className="bg-primary px-4 py-2 rounded-lg text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PatientForm;
