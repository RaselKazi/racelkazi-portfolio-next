import { useForm } from "react-hook-form";
import React, { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.name);
    console.log(process.env.YOUR_SERVICE_ID);
    emailjs
      .sendForm(
        process.env.YOUR_SERVICE_ID,
        process.env.YOUR_TEMPLATE_ID,
        form.current,
        process.env.YOUR_USER_ID
      )
      .then(
        (result) => {
          Swal.fire(
            `Good job!  ${data.name}`,
            "Your Message was sent successfully!",
            "success"
          );
        },
        (error) => {
          Swal.fire("Oops...", "Something went wrong!", "error");
        }
      );
  };

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
      <div className="items-center mx-4 md:-mx-2 md:flex">
        <div className="w-full mx-2">
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Name
          </label>

          <input
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            type="text"
            placeholder="Name"
            {...register("name", { required: true, maxLength: 50 })}
          />
          <p className="my-2 text-xs italic text-red-500">
            {errors.name?.type === "required" && "Please input Your Name"}
          </p>
        </div>

        <div className="w-full mx-2 mt-4 md:mt-0">
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            E-mail
          </label>
          <input
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            type="email"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <p className="my-2 text-xs italic text-red-500">
            {errors.Email?.type === "required" && "Please Email is required"}
          </p>
        </div>
      </div>

      <div className=" mt-4 mx-4 md:-mx-1">
        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
          Message
        </label>

        <textarea
          className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          {...register("message", { required: true, max: 300 })}
        ></textarea>
        <p className="my-2 text-xs italic text-red-500">
          {errors.message?.type === "required" && "Please Email is required"}
        </p>
      </div>

      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
