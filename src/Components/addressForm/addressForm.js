import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddressFormSchema = Yup.object().shape({
  street: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zip: Yup.string().required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  deliveryInstructions: Yup.string(),
  isDefault: Yup.boolean(),
});

const AddAddressForm = ({ isOpen, onClose, onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            className="absolute inset-0 bg-gray-500 opacity-75"
            onClick={handleClose}
          />
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Add an Address
                </h3>
              </div>
            </div>

            <Formik
              initialValues={{
                street: "",
                city: "",
                state: "",
                zip: "",
                firstName: "",
                lastName: "",
                phone: "",
                deliveryInstructions: "",
                isDefault: false,
              }}
              validationSchema={AddressFormSchema}
              onSubmit={(values, { setSubmitting }) => {
                setIsSubmitting(true);
                if (values.isDefault) {
                  values.isDefault = true;
                }
                onSubmit(values);
                setSubmitting(false);
                onClose();
              }}
            >
              {({ isSubmitting }) => (
                <Form className="mt-8 space-y-6">
                  <div className="md:col-span-6">
                    <label
                      htmlFor="street"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Street
                    </label>
                    <div className="mt-1">
                      <Field
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        type="text"
                        name="street"
                        placeholder="Street"
                      />
                      <ErrorMessage
                        className="text-red-500"
                        name="street"
                        component="p"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      city
                    </label>
                    <div className="mt-1">
                      <Field
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        type="text"
                        name="city"
                        placeholder="city"
                      />
                      <ErrorMessage
                        className="text-red-500"
                        name="city"
                        component="p"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700"
                    >
                      state
                    </label>
                    <div className="mt-1">
                      <Field
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        type="text"
                        name="state"
                        placeholder="state"
                      />
                      <ErrorMessage
                        className="text-red-500"
                        name="state"
                        component="p"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <label
                      htmlFor="zip"
                      className="block text-sm font-medium text-gray-700"
                    >
                      zip
                    </label>
                    <div className="mt-1">
                      <Field
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        type="text"
                        name="zip"
                        placeholder="zip"
                      />
                      <ErrorMessage
                        className="text-red-500"
                        name="zip"
                        component="p"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      first Name
                    </label>
                    <div className="mt-1">
                      <Field
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        type="text"
                        name="firstName"
                        placeholder="first Name"
                      />
                      <ErrorMessage
                        className="text-red-500"
                        name="firstName"
                        component="p"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      lastName
                    </label>
                    <div className="mt-1">
                      <Field
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        type="text"
                        name="lastName"
                        placeholder="lastName"
                      />
                      <ErrorMessage
                        className="text-red-500"
                        name="lastName"
                        component="p"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      phone
                    </label>
                    <div className="mt-1">
                      <Field
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        type="text"
                        name="phone"
                        placeholder="phone"
                      />
                      <ErrorMessage
                        className="text-red-500"
                        name="phone"
                        component="p"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <label
                      htmlFor="deliveryInstructions"
                      className="block text-sm font-medium text-gray-700"
                    >
                      delivery Instructions
                    </label>
                    <div className="mt-1">
                      <Field
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        type="textarea"
                        name="deliveryInstructions"
                        placeholder="delivery Instructions"
                      />
                      <ErrorMessage
                        className="text-red-500"
                        name="deliveryInstructions"
                        component="p"
                      />
                    </div>
                  </div>
                  <Field
                    id="isDefault"
                    name="isDefault"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="isDefault"
                    className="ml-2 text-sm text-gray-600"
                  >
                    Set as default address
                  </label>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      // onClick={() => onSubmit(values)}
                      disabled={isSubmitting}
                      className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm button is-primary ${
                        isSubmitting ? "is-loading" : ""
                      }`}
                    >
                      Save
                    </button>
                    <button
                      onClick={handleClose}
                      className={`mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm`}
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddAddressForm;
/**
 * This code defines the `AddAddressForm` component that renders a pop-up form with the fields you mentioned. The `Formik` component is used to handle form state and validation, and the `Field` and `ErrorMessage` components are used to render form inputs and error messages respectively.

The `onSubmit` function passed as a prop to the `AddAddressForm` component is called when the user submits the form, and it receives the form values as an argument. You can replace the `console.log` statement with your own logic to save the address to your state or database.

The `isSubmitting` state is used to disable the form buttons while the form is being submitted, and the `handleClose` function is used to close the pop-up form when the user clicks the close button or the background of the pop-up form.
 */
