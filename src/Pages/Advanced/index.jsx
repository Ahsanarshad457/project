import React from "react";
import { useForm } from "react-hook-form";

const SimpleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    reset(); // Clear the form after submission
  };

  return (
    <div className="flex justify-center items-center flex-col gap-10 mt-8">
      <form
        className="flex flex-col gap-6 w-80 bg-white shadow-lg p-6 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* FirstName */}
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="font-semibold">
            First Name
          </label>
          <input
            type="text"
            {...register("firstName", {
              required: "First name is required",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Only letters are allowed",
              },
            })}
            className="border-2 border-gray-300 p-2 rounded-md"
            placeholder="Enter your first name"
          />
          {errors.firstName && (
            <p className="text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        {/* SecondName */}
        <div className="flex flex-col gap-2">
          <label htmlFor="secondName" className="font-semibold">
            Second Name
          </label>
          <input
            type="text"
            {...register("secondName", {
              required: "Second name is required",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Only letters are allowed",
              },
            })}
            className="border-2 border-gray-300 p-2 rounded-md"
            placeholder="Enter your second name"
          />
          {errors.secondName && (
            <p className="text-red-600">{errors.secondName.message}</p>
          )}
        </div>

        {/* UserName */}
        <div className="flex flex-col gap-2">
          <label htmlFor="userName" className="font-semibold">
            Username
          </label>
          <input
            type="text"
            {...register("userName", {
              required: "Username is required",
              pattern: {
                value: /^[A-Za-z0-9@!#$%^&*]+$/,
                message: "Only letters, numbers, and special characters are allowed",
              },
            })}
            className="border-2 border-gray-300 p-2 rounded-md"
            placeholder="Enter your username"
          />
          {errors.userName && (
            <p className="text-red-600">{errors.userName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
            })}
            className="border-2 border-gray-300 p-2 rounded-md"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                  "Password must contain at least one letter, one number, and one special character",
              },
            })}
            className="border-2 border-gray-300 p-2 rounded-md"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}
        </div>

        {/* PhoneNo */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNo" className="font-semibold">
            Phone No
          </label>
          <input
            type="text"
            {...register("phoneNo", {
              required: "Phone number is required",
              pattern: {
                value: /^\+92\d{3}\d{7}$/,
                message: "Invalid Pakistani phone number format (+92xxx xxxxxxx)",
              },
            })}
            className="border-2 border-gray-300 p-2 rounded-md"
            placeholder="+92xxx xxxxxxx"
          />
          {errors.phoneNo && <p className="text-red-600">{errors.phoneNo.message}</p>}
        </div>

        <button
          type="submit"
          className="border-2 border-gray-300 py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
