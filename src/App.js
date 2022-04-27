import React from "react";
import './index.css';
import { useFormik } from "formik";


function App() {
  // TODO: add a const called formik assigned to useFormik()

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("Login Successful!");
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) errors.email = "field required";
      if (!values.password) errors.password = "field required";
      return errors;
    },
  });

  return (
    <div>
      <form onSubmit = {formik.handleSubmit}>
        <div>Name</div>
        <input name='name' type='text' onChange={formik.handleChange} value={formik.values.name}/>
        {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div>: null}
        <div>Email</div>
        <input name='email' type='text' onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div>: null}
        <div>Password</div>
        <input name='password' type='text' onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div>: null}
        <button type ='submit'>Submit</button>
      </form>
      <p>
      </p>
    </div>
  );
}

export default App;
