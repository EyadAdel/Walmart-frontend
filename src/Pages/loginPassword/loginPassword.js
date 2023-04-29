import "../loginEmail/form.css";
import React, { useState } from "react";
import { Field, Formik } from "formik";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const PasswordInput = ({ field, form, ...props }) => {
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
        className={`input-group outline outline-offset-1 outline-1 flex rounded mt-2 ${form.touched[field.name] && form.errors[field.name]
          ? "outline-rose-500"
          : ""
          }`}
      >
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
      {form.touched[field.name] && form.errors[field.name] && (
        <div className="invalid-feedback text-rose-600 ml-3 mt-2 text-xs flex">
          <span>{form.errors[field.name]}</span>
          <span className="text-base">
            <MdError />
          </span>
        </div>
      )}
    </div>
  );
};

export const KeepSignin = () => {
  const [showDiv, setShowDiv] = useState(false);
  const handleButtonClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div className="text-sm my-4">
      <span className="mr-2">Uncheck if using a public device.</span>
      <button className="text-blue-400" onClick={handleButtonClick}>
        {showDiv ? "Hide" : "Show"}
      </button>
      {showDiv && (
        <div className="text-xs mt-3">
          We'll keep you signed in on this device. You may be asked to enter
          your password when modifying sensitive account information.
        </div>
      )}
    </div>
  );
};

const LoginPass = ({ email }) => {

  //Error Message if password is Incorrect
  const [showError, setShowError] = useState('');
  const handleClick = () => {
    setTimeout(() => {
      setShowError('Your password and email do not match. Please try again or Reset your password.');
    }, 0)
  }

  //Keep me sign in checkbox
  const [signIn, setSignIn] = useState(false);
  const handleKeepMeSignInChange = (event) => {
    setSignIn(event.target.checked);
  };

  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/customer/signin",
        {
          email,
          password: values.password,
        }
      );
      console.log(response.data);
      if (response.data) {
        localStorage.setItem('SignedIn', signIn)
        localStorage.setItem('Token',response.data.token)
        localStorage.setItem('CustomerDetails', JSON.stringify(response.data.customer))
        navigate("/");
      } else {
        handleClick();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="mx-auto ">
        <div className="mx-auto w-96">
          <img
            src="https://imgs.search.brave.com/HbXQqvlxR9C4IV1GwZG5v_0gtvnUOgigXWJ_h4CAm2k/rs:fit:924:655:1/g:ce/aHR0cHM6Ly9kd2ds/b2dvLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wNS9X/YWxtYXJ0X2xvZ29f/MTQwMHg5OTMtMTAy/NHg3MjYucG5n"
            className="img-fluid rounded-5 h-16 mx-auto"
            alt=""
          />
          {showError &&
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span class="block sm:inline">{showError}</span>
              <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg class="fill-current h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10.707 10l4.147-4.146a.5.5 0 10-.708-.708L10 9.293 5.854 5.146a.5.5 0 00-.708.708L9.293 10l-4.147 4.146a.5.5 0 10.708.708L10 10.707l4.146 4.147a.5.5 0 00.708-.708L10.707 10z" /></svg>
              </span>
            </div>}
          <h5 className="text-center font-bold w-3/4 mx-auto mb-4">
            Welcome back!
          </h5>
          <Formik
            initialValues={{ password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.password) {
                errors.password = "Password is required.";
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
                  <p className="text-sm">Email Address</p>
                  <span className="mr-3">{email}</span>
                  <Link
                    className="changeEmail underline  text-slate-400 text-sm"
                    to="/login"
                  >
                    Change
                  </Link>
                </div>
                <PasswordInput
                  label="Enter your password"
                  field={{
                    name: "password",
                    value: values.password,
                    onChange: handleChange,
                    onBlur: handleBlur,
                  }}
                  form={{ touched, errors }}
                />
                <div className="flex justify-end my-5">
                  <Link className="underline text-sm text-slate-400" to="/any">
                    Forgot password?
                  </Link>
                </div>
                <div className="mb-2">
                  <Field
                    name="keepSignin"
                    id="keepSignin"
                    className="mr-2 leading-tight"
                    type="checkbox"
                    checked={signIn}
                    onChange={handleKeepMeSignInChange}
                  />
                  <label htmlFor="keepSignin" className="text-sm font-bold">
                    Keep me signed in
                  </label>
                </div>
                <KeepSignin />
                <div>
                  <button
                    className="bg-blue-500 text-white rounded-full py-2 px-4 disabled:bg-gray-300 disabled:cursor-not-allowed w-full mt-6"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Sign In
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
      ;
    </>
  );
};

export default LoginPass;
