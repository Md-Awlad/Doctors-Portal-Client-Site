import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../../shared/loading";
import useToken from "../../../hooks/useToken";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user || gUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let signInError;

  useEffect(() => {
    if (user || gUser) {
      navigate(from, { replace: true });
    }
  }, [user, gUser, from, navigate]);
  //   if (token) {
  //     navigate(from, { replace: true });
  //   }
  // }, [token, from, navigate]);

  if (loading || gLoading) {
    return <Loading />;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-500">{error?.message || gError?.message}</p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data?.email, data?.password);
  };

  return (
    <div className="mt-20 md:px-12 px-6 flex justify-center items-center h-screen">
      <div className="card lg:w-[600px] bg-base-100 shadow-xl px-6">
        <div className="card-body">
          <h2 className="text-2xl text-center font-bold text-primary pb-5">
            Please Login
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-3 justify-items-center"
          >
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
              value="login"
              className="w-full rounded-full text-xl btn btn-primary uppercase text-neutral font-semibold bg-gradient-to-r from-secondary to-primary"
            />
          </form>
          <p>
            New to Doctors Portal?{" "}
            <Link to="/signup" className="text-primary text-md">
              Create New Account
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

export default Login;
