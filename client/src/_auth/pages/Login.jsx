import React, { useContext, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "must be 6 characters minimum")
    .max(12, "must be 12 characters maximum")
    .required("password is required"),
  role: Yup.string().required("Role is required!"),
});

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setName, setRole, setEmail } = useContext(UserContext);

  const roles = ["admin", "nurse", "patient"];

  async function loginUser(values) {
    setLoading(true);

    const { email, password, role } = values;

    alert(`${email} and ${password}, role:${role}`);

    const response = await axios.post("/login", {
      email,
      password,
      role,
    });

    console.log(response);

    const { data } = response;

    setName(data.name);
    setEmail(email);
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
    <div className="w-full mt-25 px-10">
      <Formik
        initialValues={{ email: "", password: "", role: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => loginUser(values)}
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
            <p className="text-sm text-gray-500 font-semibold">
              Welcome back! please login to your account
            </p>
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
                Sign In
              </button>
              <Link
                to={"/sign-up"}
                type="submit"
                disabled={isSubmitting}
                className="rounded-md w-full py-2 px-4 text-primary text-center border border-primary"
              >
                Sign Up
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
