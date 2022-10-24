import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputCustom from "./InputCustom";
import { useState, useEffect } from "react";

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

interface IUser {
  name: string;
}

function Practive() {
  const [stateInput, setStateInput] = useState<IUser>({ name: "" });
  useEffect(() => {
    console.log(stateInput);
  }, [stateInput]);

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

  return <InputCustom stateInput={stateInput} setStateInput={setStateInput} />;
}

export default Practive;
