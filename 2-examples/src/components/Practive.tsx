import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  // password: Yup.string().required("Password is required"),
  // passwordConfirmation: Yup.string().oneOf(
  //   [Yup.ref("password"), null],
  //   "Passwords must match"
  // ),
  name: Yup.string()
    .min(3, "Text error min")
    .max(12, "Text error max")
    .required("The name is not blank"),
  age: Yup.number().required("The age is not blank"),
});

function Practive() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: undefined,
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(e.target.name, e.target.value);
    console.log(e.target);
  };

  return (
    <form onSubmit={formik.handleSubmit} className="w-50 m-auto text-center">
      <div>
        <input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <p>{formik.errors.name ?? null}</p>
      </div>
      <div>
        <input
          name="email"
          value={formik.values.email}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        <p>{formik.errors.email ?? null}</p>
      </div>
      <div>
        <input
          name="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <p>{formik.errors.age ?? null}</p>
      </div>
      <input type="submit" />
    </form>
  );
}

export default Practive;
