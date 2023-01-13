import React from "react";
import { FcGoogle } from "react-icons/fc";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../../shared/loading";
import useToken from "../../../hooks/useToken";
import { useState } from "react";

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [createdEmail, setCreatedEmail] = useState("");
  const [token] = useToken(user || gUser);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let signInError;

  if (loading || gLoading || updating) {
    return <Loading />;
  }

  if (error || gError || updateError) {
    signInError = (
      <p className="text-red-500">{error?.message || gError?.message}</p>
    );
  }

  if (user || gUser) {
    navigate("/");
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data?.email, data?.password);
    await updateProfile({ displayName: data?.name });
  };

  return (
    <div className="mt-20 md:px-12 px-6 flex justify-center items-center h-screen">
      <div className="card lg:w-[600px] bg-base-100 shadow-xl px-6">
        <div className="card-body">
          <h2 className="text-2xl text-center font-bold text-primary pb-5">
            Sign UP
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-3 justify-items-center"
          >
            <input
              type="text"
              className="p-2 rounded-md focus:outline-none border focus:border-primary w-full"
              placeholder="Enter your name"
              name="name"
              id="name"
              {...register("name", {
                required: { value: true, message: "Name is required*" },
              })}
            />
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
            <input
              type="email"
              className="p-2 rounded-md focus:outline-none border focus:border-primary w-full"
              placeholder="example@gmail.com"
              name="email"
              id="email"
              {...register("email", {
                required: { value: true, message: "Email is required*" },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "error message",
                },
              })}
            />
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
            <input
              type="password"
              className="p-2 rounded-md focus:outline-none border focus:border-primary w-full"
              placeholder="Enter your password"
              name="password"
              {...register("password", {
                required: { value: true, message: "Password is required*" },
                minLength: {
                  value: 6,
                  message: "Must be 6 characters or longer",
                },
              })}
            />
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500 text-sm text-start">
                {errors.password.message}
              </span>
            )}
            {signInError}
            <input
              type="submit"
              value="sign up"
              className="w-full rounded-full text-xl btn btn-primary uppercase text-neutral font-semibold bg-gradient-to-r from-secondary to-primary"
            />
          </form>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-primary text-md">
              Please Login
            </Link>
          </p>
          <div className="divider">OR</div>
          <FcGoogle
            onClick={() => signInWithGoogle()}
            className="inline w-12 h-12 m-auto cursor-pointer text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
