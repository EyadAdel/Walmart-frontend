import React, { useState } from "react";
import { Field, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { MdError } from "react-icons/md";
import { HiCheck } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import axios from "axios";

const PasswordInput = ({ field, form, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="form-group">
      <label className="text-sm font-semibold" htmlFor={field.name}>
        {props.label}
      </label>
      <div
        className={`input-group outline outline-offset-1 outline-1 outline-gray-300 rounded-sm shadow-sm flex rounded mt-2 ${
          form.touched[field.name] && form.errors[field.name]
            ? "outline-rose-500"
            : ""
        }`}
      >
        {/*  outline outline-offset-1  outline-gray-300 focus:ring  bg-transparent outline-0 focus:ring-indigo-200 focus:ring-opacity-50 rounded-sm shadow-sm p-3 */}
        <input
          type={showPassword ? "text" : "password"}
          className={`form-control p-3 grow bg-transparent outline-0`}
          id={field.name}
          {...field}
          {...props}
        />
        <button
          type="button"
          className="btn btn-outline-secondary p-3 w-15 underline text-slate-400 text-sm"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <div className="mt-3">
        <p className="mb-1 text-sm font-semibold">
          Your password must include the following:
        </p>
        <ul className="font-light text-sm">
          <li className="flex items-center">
            {props.values.length >= 8 && props.values.length <= 100 ? (
              <span className="mr-1 text-base text-green-600">
                <HiCheck />
              </span>
            ) : (
              <span className="mr-1 text-base text-red-600">
                <HiXMark />
              </span>
            )}{" "}
            8-100 characters
          </li>
          <li className="flex items-center">
            {/[a-z]/.test(props.values) && /[A-Z]/.test(props.values) ? (
              <span className="mr-1 text-base text-green-600">
                <HiCheck />
              </span>
            ) : (
              <span className="mr-1 text-base text-red-600">
                <HiXMark />
              </span>
            )}{" "}
            Upper & lowercase letters
          </li>

          <li className="flex items-center">
            {/\d/.test(props.values) || /[^\w\s]/.test(props.values) ? (
              <span className="mr-1 text-base text-green-600">
                <HiCheck />
              </span>
            ) : (
              <span className="mr-1 text-base text-red-600">
                <HiXMark />
              </span>
            )}{" "}
            At least one number or special character
          </li>
        </ul>
        <div className="text-danger">{props.errors}</div>
      </div>
    </div>
  );
};

const Signup = ({ email }) => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/customer/signup",
        {
          email,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
        }
      );
      console.log(response.data);
      if (response.data) {
        localStorage.setItem('CustomerDetails', JSON.stringify(response.data.customer))
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="mx-auto">
      <div className="mx-auto w-96">
        <img
          src="https://imgs.search.brave.com/HbXQqvlxR9C4IV1GwZG5v_0gtvnUOgigXWJ_h4CAm2k/rs:fit:924:655:1/g:ce/aHR0cHM6Ly9kd2ds/b2dvLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wNS9X/YWxtYXJ0X2xvZ29f/MTQwMHg5OTMtMTAy/NHg3MjYucG5n"
          className="img-fluid rounded-5 h-16 mx-auto"
          alt=""
        />
        <h5 className="text-center font-bold w-3/4 mx-auto mb-4">
          Welcome back!
        </h5>
        <Formik
          initialValues={{ firstName: "", lastName: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.password) {
              errors.password = "noPass";
            } else if (
              !/[a-z]/.test(values.password) ||
              !/[A-Z]/.test(values.password)
            ) {
              errors.password = "noUpperAndLower";
            } else if (
              !/\d/.test(values.password) ||
              !/[\w\s]/.test(values.password)
            ) {
              errors.password = "noNumOrSpecial";
            } else if (
              values.password.length < 8 ||
              values.password.length >= 100
            ) {
              errors.password = "notBetween8-100";
            }
            if (!values.firstName) {
              errors.firstName = "frist name is required.";
            }
            if (!values.lastName) {
              errors.lastName = "last name is required.";
            }
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-group my-5">
                <p className="text-sm font-semibold">Email Address</p>
                <span className="mr-3">{email}</span>
                <Link
                  className="changeEmail underline  text-slate-400 text-sm"
                  to="/login"
                >
                  Change
                </Link>
              </div>
              <div className="mb-3 fName">
                <label
                  htmlFor="firstName"
                  className="text-sm font-semibold mb-3"
                >
                  First name
                </label>
                <div className="flex mt-2">
                  <input
                    type="firstName"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    className={`grow outline outline-offset-1 outline-1 outline-gray-300 focus:ring  bg-transparent outline-0 focus:ring-indigo-200 focus:ring-opacity-50 rounded-sm shadow-sm p-3 ${
                      errors.firstName && touched.firstName
                        ? "outline-red-500"
                        : ""
                    }`}
                    id="FirstName"
                    aria-describedby="firstNameHelp"
                  />
                </div>
                {touched.firstName && errors.firstName && (
                  <div className="invalid-feedback text-rose-600 ml-3 mt-2 text-xs flex">
                    <span>{errors.firstName}</span>
                    <span className="text-base">
                      <MdError />
                    </span>
                  </div>
                )}
              </div>
              <div className="mb-3 lName">
                <label
                  htmlFor="lastName"
                  className="text-sm font-semibold mb-3"
                >
                  Last name
                </label>
                <div className="flex mt-2">
                  <input
                    type="lastName"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    className={`grow outline outline-offset-1 outline-1 outline-gray-300 focus:ring  bg-transparent outline-0 focus:ring-indigo-200 focus:ring-opacity-50 rounded-sm shadow-sm p-3 ${
                      errors.lastName && touched.lastName
                        ? "outline-red-500"
                        : ""
                    }`}
                    id="lastName"
                    aria-describedby="lastNameHelp"
                  />
                </div>
                {touched.lastName && errors.lastName && (
                  <div className="invalid-feedback text-rose-600 ml-3 mt-2 text-xs flex">
                    <span>{errors.lastName}</span>
                    <span className="text-base">
                      <MdError />
                    </span>
                  </div>
                )}
              </div>
              <PasswordInput
                label="Create a password"
                values={values.password}
                field={{
                  name: "password",
                  value: values.password,
                  onChange: handleChange,
                  onBlur: handleBlur,
                }}
                form={{ touched, errors }}
              />

              <div className="my-2">
                <Field
                  name="keepSignin"
                  id="keepSignin"
                  className="mr-2 leading-tight"
                  type="checkbox"
                />
                <label htmlFor="keepSignin" className="text-sm font-bold">
                  Keep me signed in
                </label>
              </div>
              <div className="mb-2">
                <Field
                  name="sendEmails"
                  id="sendEmails"
                  className="mr-2 leading-tight"
                  type="checkbox"
                />
                <label
                  htmlFor="sendEmails"
                  className="text-sm font-bold text-slate-400"
                >
                  Send me emails about new arrivals, hot items, daily savings, &
                  more.
                </label>
              </div>
              <div className="mb-5 text-xs text-slate-400">
                By clicking Create Account, you acknowledge you have read and
                agreed to our Terms of Use and Privacy Policy.
              </div>
              <button
                className="bg-blue-500 text-white rounded-full py-2 px-4 disabled:bg-gray-300 disabled:cursor-not-allowed w-full mt-6"
                type="submit"
                disabled={isSubmitting}
              >
                Create Account
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
