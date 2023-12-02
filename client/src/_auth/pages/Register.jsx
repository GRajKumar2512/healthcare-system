import React, { useContext, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .max(20, "Keep your name short & sweet")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "must be 6 characters minimum")
    .max(12, "must be 12 characters maximum")
    .required("password is required"),
  role: Yup.string().required("Role is required!"),
});

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setName, setRole, setEmail } = useContext(UserContext);

  const roles = ["admin", "nurse", "patient"];

  async function registerUser(values) {
    setLoading(true);

    const { name, email, password, role } = values;

    alert(`${name} with ${email} and ${password}, role:${role}`);

    const { data } = await axios.post("/register", {
      name,
      email,
      password,
      role,
    });

    setEmail(email);
    setName(name);
    setRole(role);

    setLoading(false);

    if (data && role === "admin") {
      navigate("/admin");
    } else if (data) {
      navigate("/");
    }
  }

  if (loading) return <h2 className="text-center">Loading...</h2>;

  return (
    <div className="w-full mt-25 md:px-10">
      <Formik
        initialValues={{ name: "", email: "", password: "", role: "" }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => registerUser(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-10"
          >
            <h2 className="font-bold text-2xl text-gray-500 tracking-widest">
              Healthcare
            </h2>
            <p className="text-sm text-gray-500 font-semibold text-center">
              Register now to unlock a world of personalized healthcare services
              and take control of your well-being with ease.
            </p>
            <div className="w-full">
              <input
                type="text"
                name="name"
                placeholder="your name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="w-full outline-none border-b border-gray-700 px-4 py-2"
              />
              <span className="text-sm text-red-600">
                {errors.name && touched.name && errors.name}
              </span>
            </div>
            <div className="w-full">
              <input
                type="email"
                name="email"
                placeholder="xyz@mail.com"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="w-full outline-none border-b border-gray-700 px-4 py-2"
              />
              <span className="text-sm text-red-600">
                {errors.email && touched.email && errors.email}
              </span>
            </div>

            <div className="w-full">
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="w-full outline-none border-b border-gray-700 px-4 py-2"
              />
              <span className="text-sm text-red-600">
                {errors.password && touched.password && errors.password}
              </span>
            </div>

            <div className="w-full">
              <select
                id="role"
                name="role"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.role}
                className="w-full outline-none border-b border-gray-700 px-4 py-2"
              >
                <option value="" disabled>
                  Select a role
                </option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full flex gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md w-full py-2 px-4 text-white bg-primary"
              >
                Sign Up
              </button>
              <Link
                to={"/sign-in"}
                type="submit"
                disabled={isSubmitting}
                className="rounded-md w-full py-2 px-4 text-primary text-center border border-primary"
              >
                Sign In
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
