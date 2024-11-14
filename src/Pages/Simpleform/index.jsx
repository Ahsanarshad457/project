import React, { useState } from 'react';
import './simpleform.css';
const SimpleForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    setSubmitted(false);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let err = { ...errors };

    if (name === 'email') {
      if (!value) {
        err.email = 'Email is required';
      } else if (!validateEmail(value)) {
        err.email = 'Invalid Email';
      } else {
        delete err.email;
      }
    }

    if (name === 'password') {
      if (!value) {
        err.password = 'Password is required';
      } else if (!validatePassword(value)) {
        err.password = 'Password must contain letters, numbers, and a special character';
      } else {
        delete err.password;
      }
    }

    setErrors(err);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = {};

    if (!formData.email) {
      err.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      err.email = 'Invalid Email';
    }

    if (!formData.password) {
      err.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      err.password = 'Password must contain letters, numbers, and a special character';
    }

    setErrors(err);

    if (Object.keys(err).length === 0) {
      setSubmitted(true);
      console.log('Form Data Submitted:', formData);
      setFormData({ email: '', password: '' }); // Clear form
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col gap-10 mt-8">
      <form className="flex flex-col gap-6 w-80" onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            className="border-2 border-gray-300 p-2 rounded-md"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            required
          />
          {errors.email && <p className="text-red-600">{errors.email}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            className="border-2 border-gray-300 p-2 rounded-md"
            name="password"
            value={formData.password}
            placeholder="Enter your password"
            required
          />
          {errors.password && <p className="text-red-600">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="border-2 border-gray-300 py-2 px-4 rounded-md bg-slate-900 text-gray-100 hover:bg-slate-700 transition"
        >
          Submit
        </button>
      </form>

      {submitted && (
        <div className="mt-4 text-green-600 font-semibold">
          Form submitted successfully!
        </div>
      )}
    </div>
  );
};

export default SimpleForm;
