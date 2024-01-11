import { useState } from "react";
import { useForm } from "react-hook-form";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

// Assets
import { FaEyeSlash } from "react-icons/fa6";

// Assets
import background from "../assets/bg.png";

// Utils
import { isValidEmail } from "../utils/util";

// Firebase
import { auth, db } from "../firebase";

const Signup = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const validateEmail = (email) => {
    if (isValidEmail(email)) {
      return true;
    } else {
      return false;
    }
  };

  const comparePasswords = (password) => {
    if (password === getValues("password")) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmit = (data) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((cred) => {
        setDoc(doc(db, "Users", cred.user.uid), {
          email: data?.email,
          gender: data?.gender,
          dob: data?.dob,
          category: data?.category,
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-full h-[100vh] relative flex items-center justify-around">
      <img
        src={background}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="w-[97%] h-[95%] flex flex-col items-center justify-center bg-background rounded">
        <div className="flex flex-col items-center mb-20">
          <p className="text-black text-2xl mb-2 font-extrabold">
            Get Started!
          </p>
          <p className="text-black text-base">Please Enter your details</p>
        </div>
        <form
          className="w-1/2 h-auto flex flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex w-full h-14 items-center mb-6">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                validate: validateEmail,
              })}
              className="flex w-1/2 h-full rounded px-4 bg-gray mr-4"
            />
            <select
              name="Gender"
              id="Gender"
              {...register("gender", { required: true })}
              className="flex w-1/2 h-full rounded px-4 bg-gray"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {
            <p className="text-red-500 text-sm mb-6 text-pink">
              {errors?.email?.type === "required" && "Email is required"}
              {errors?.email?.type === "validate" && "Email is not valid"}
            </p>
          }
          <div className="flex w-full h-14 items-center mb-6">
            <input
              type="date"
              placeholder="Date of Birth"
              {...register("dob", { required: true })}
              className="flex w-1/2 h-full rounded px-4 bg-gray mr-4"
            />
            <select
              name="Category"
              id="categort"
              {...register("category", { required: true })}
              className="flex w-1/2 h-full rounded px-4 bg-gray"
            >
              <option value="contributor">Contributor</option>
              <option value="validator">Validator</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          {
            <p className="text-red-500 text-sm mb-6 text-pink">
              {errors?.dob?.type === "required" && "Date of Birth is required"}
            </p>
          }
          <div className="flex w-full h-14 items-center mb-6">
            <div className="flex w-1/2 h-14 items-center relative mr-4">
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
                className="w-full h-full pl-4 bg-gray rounded"
              />
              <FaEyeSlash className="absolute right-6 cursor-pointer text-xl" />
            </div>
            <div className="flex w-1/2 h-14 items-center relative">
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: true,
                  validate: comparePasswords,
                })}
                className="w-full h-full pl-4 bg-gray rounded"
              />
              <FaEyeSlash className="absolute right-6 cursor-pointer text-xl" />
            </div>
          </div>
          {
            <p className="text-red-500 text-sm mb-6 text-pink">
              {errors?.password?.type === "required" && "Password is required"}
              &nbsp;{" || "}
              {errors?.confirmPassword?.type === "required" &&
                "Confirm Password is required"}
              {errors?.confirmPassword?.type === "validate" &&
                "Passwords do not match"}
            </p>
          }
          <button
            type="submit"
            className="w-1/2 h-14 bg-pink rounded text-white"
          >
            {loading ? (
              <div className="flex w-6 h-6 justify-center items-center">
                <div className="w-4 h-4 border-2 border-white rounded-full animate-spin" />
              </div>
            ) : (
              "Signup"
            )}
          </button>
        </form>
        <div className="flex mt-20">
          <p className="text-black text-base">Already have an account?</p>
          <Link to={"/"} className="text-pink text-base ml-2 cursor-pointer">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
