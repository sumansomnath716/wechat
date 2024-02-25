import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import TDInput from "../../components/TDInput";
import TDError from "../../components/TDError";

const Signin = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values);
    // navigate('/dashboard')
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Not a correct a email format"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <div className="block">
          {/* <label className="text-sm text-gray-500 font-bold"> Email</label>
        <input type="text" name='email' value={formik.values.email} className="block border-gray-300 text-[13px] pt-2 p-1 pl-3 rounded-md
        focus:outline-none 
        focus:ring-0 
        w-full focus:outline-0 border focus:border-green-900 focus:border-2 duration-300" placeholder="name@company.com" onChange={formik.handleChange} onBlur={formik.handleBlur}/> */}
          <TDInput
            placeholder="youremail@gmail.com"
            type="email"
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
        <div className="block">
          {/* <label className="text-sm text-gray-500 font-bold"> Password</label>
        <input type="password" name='password' value={formik.values.password} className="block border-gray-300 text-[13px] pt-1 p-1 pl-3 rounded-md focus:outline-none 
        focus:ring-0 
        w-full focus:outline-0 border focus:border-green-900 focus:border-2 duration-300" placeholder="*******" onChange={formik.handleChange} onBlur={formik.handleBlur}/> */}
          <TDInput
            placeholder="********"
            label="Password"
            name="password"
            formControlName={formik.values.password}
            type="password"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password ? (
            <TDError message={formik.errors.password} />
          ) : null}
        </div>
        <div className="flex flex-wrap justify-between">
          <p>
            <input
              className="rounded-sm checked:bg-green-900 checked:border-green-900 focus:ring-green-900"
              type="checkbox"
            />
            <label className="pl-3 text-sm text-gray-500 font-semibold ">
              Remember Me
            </label>
          </p>
          <p>
            <Link className="text-sm pl-5 hover:underline text-green-800 cursor-pointer">
              Lost Password?
            </Link>
          </p>
        </div>
        <div className="block text-sm">
          <button
            disabled={!formik.isValid}
            type="submit"
            className="bg-green-900 hover:bg-green-800 w-full text-white p-3 rounded-full disabled:bg-green-900 disabled:opacity-50"
          >
            Login to your account
          </button>
        </div>
      </form>

      <div className="flex justify-center items-center">
        <p className="text-sm text-gray-500">Not registered?</p>
        <Link
          to="/auth/signup"
          className="text-sm pl-2 text-green-800 hover:underline cursor-pointer"
        >
          Create account
        </Link>
      </div>
    </>
  );
};

export default Signin;
