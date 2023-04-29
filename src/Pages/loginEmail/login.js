import React from "react";
import { Formik, Form, Field} from "formik";
import "./form.css";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const initialValues= {
  email: ''
}
const validate = values => {
  const errors = {};
              if (!values.email) {
                errors.email = "Email address is required.";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Please enter a valid email address.";
              }

              return errors;
}

const LoginEmail = ({ setEmail }) => {

  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/customer/login",
        {
          email: values.email,
        }
      );
      console.log(response.data);
      if (response.data.isFound) {
        setEmail(values.email);
        navigate("/loginpass");
      } else {
        setEmail(values.email);
        navigate("/signup");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="mx-auto ">
        <div className="w-96 mx-auto">
          <img
            src="https://imgs.search.brave.com/HbXQqvlxR9C4IV1GwZG5v_0gtvnUOgigXWJ_h4CAm2k/rs:fit:924:655:1/g:ce/aHR0cHM6Ly9kd2ds/b2dvLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wNS9X/YWxtYXJ0X2xvZ29f/MTQwMHg5OTMtMTAy/NHg3MjYucG5n"
            className="img-fluid rounded-5 h-16 mx-auto"
            alt=""
          />
          <h5 className="text-center font-bold w-3/4 mx-auto mb-4">
            Enter your email to sign in or create an account
          </h5>
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({
              errors,
              touched,
              isSubmitting,
            }) => (
              <Form className="flex flex-col">
                <label
                  htmlFor="exampleInputEmail1"
                  className="text-gray-600 font-medium mb-2"
                >
                  Email Address
                </label>
                <div className="flex ">
                  <Field
                    type="email"
                    name="email"
                    className={`grow outline outline-offset-1 outline-1 outline-gray-300 focus:ring  bg-transparent outline-0 focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm p-3 ${
                      errors.email && touched.email ? "outline-red-500" : ""
                    }`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                {errors.email && touched.email && (
                  <div className="invalid-feedback text-rose-600 ml-3 mt-2 text-xs flex">
                    <span className=" mt-1 mb-5">{errors.email}</span>
                    <span className="text-base">
                      <MdError />
                    </span>
                  </div>
                )}
                <button
                  className="bg-blue-500 text-white rounded-full mt-6 py-2 px-4 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Continue
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default LoginEmail;
