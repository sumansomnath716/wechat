import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import TDInput from "../../components/TDInput";
import TDError from "../../components/TDError";
function Signup() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    rPass: "",
    terms: "",
  };

  // Yup.object({
  //   password: Yup.string().required('Password is required'),
  //   passwordConfirmation: Yup.string()
  //     .test('passwords-match', 'Passwords must match', function(value){
  //       return this.parent.password === value
  //     })
  // })

  const onSubmit = (values) => {
    console.log(values);
    // navigate('/dashboard')
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Not a correct a email format"),
    password: Yup.string().required("Password is required"),
    name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone is required").length(10),
    rPass: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    terms: Yup.string().required(""),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  const handleConfirmPassword = (event) => {
    if (event.target.value !== formik.password) {
      console.log("error");
    }
  };
  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <TDInput
            placeholder="John Doe"
            type="text"
            label="Name"
            name="name"
            formControlName={formik.values.name}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name ? (
            <TDError message={formik.errors.name} />
          ) : null}
        </div>
        <div className="mb-4">
          <TDInput
            placeholder="youremail@email.com"
            type="text"
            label="Email"
            name="email"
            formControlName={formik.values.email}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <TDError message={formik.errors.email} />
          ) : null}
        </div>
        <div className="mb-4">
          <TDInput
            placeholder="9836751294"
            type="tel"
            label="Phone"
            name="phone"
            formControlName={formik.values.phone}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
          {formik.errors.phone && formik.touched.phone ? (
            <TDError message={formik.errors.phone} />
          ) : null}
        </div>
        <div className="mb-4">
          <TDInput
            placeholder="*******"
            type="password"
            label="Password"
            name="password"
            formControlName={formik.values.password}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password ? (
            <TDError message={formik.errors.password} />
          ) : null}
        </div>
        <div className="mb-4">
          <TDInput
            placeholder="*******"
            type="password"
            label="Repeat Password"
            name="rPass"
            formControlName={formik.values.rPass}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
          {formik.errors.rPass && formik.touched.rPass ? (
            <TDError message={formik.errors.rPass} />
          ) : null}
        </div>
        <div className="flex items-start mb-4">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value={formik.values.terms}
              name="terms"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="rounded-sm checked:bg-green-900 checked:border-green-900 focus:ring-green-900"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-green-800 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="text-white bg-green-900 hover:bg-green-800 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center disabled:bg-green-900 disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            disabled={!formik.isValid}
          >
            Register new account
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
