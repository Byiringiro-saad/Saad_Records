import { Link } from "react-router-dom";

// Icons
import { FaEyeSlash } from "react-icons/fa6";

// Assets
import background from "../assets/bg.png";

const Login = () => {
  return (
    <div className="w-full h-[100vh] relative flex items-center justify-around">
      <img
        src={background}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="flex flex-col w-[45%] items-center justify-center">
        <div>
          <div className="flex w-auto h-auto items-center mb-4">
            <div className="flex w-14 h-14 bg-white opacity-50 rounded mr-4" />
            <div className="flex flex-col">
              <p className="text-white font-extrabold text-lg">Get Started</p>
              <p className="text-white text-base">
                Create an account or login into the system.
              </p>
            </div>
          </div>
          <div className="flex w-auto h-auto items-center mb-4">
            <div className="flex w-14 h-14 bg-white opacity-50 rounded mr-4" />
            <div className="flex flex-col">
              <p className="text-white font-extrabold text-lg">
                Record your moments
              </p>
              <p className="text-white text-base">
                Click record and start recording your moments.
              </p>
            </div>
          </div>
          <div className="flex w-auto h-auto items-center mb-4">
            <div className="flex w-14 h-14 bg-white opacity-50 rounded mr-4" />
            <div className="flex flex-col">
              <p className="text-white font-extrabold text-lg">
                Record approval
              </p>
              <p className="text-white text-base">
                Let your records get approved by validators.
              </p>
            </div>
          </div>
          <div className="flex w-auto h-auto items-center">
            <div className="flex w-14 h-14 bg-white opacity-50 rounded mr-4" />
            <div className="flex flex-col">
              <p className="text-white font-extrabold text-lg">Enjoy!</p>
              <p className="text-white text-base">Enjoy your moments!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-[95%] bg-background flex flex-col items-center justify-center rounded">
        <div className="flex flex-col items-center mb-20">
          <p className="text-black text-2xl mb-2 font-extrabold">
            Welcome Back!
          </p>
          <p className="text-black text-base">Please Enter your details</p>
        </div>
        <form action="#" className="flex flex-col w-full items-center">
          <input
            type="text"
            placeholder="Email"
            className="w-1/2 h-14 pl-4 rounded bg-gray mb-6"
          />
          <div className="flex w-1/2 h-14 items-center relative mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full h-full pl-4 bg-gray rounded"
            />
            <FaEyeSlash className="absolute right-6 cursor-pointer text-xl" />
          </div>
          <button
            type="submit"
            className="w-1/2 h-14 bg-pink rounded text-white"
          >
            Login
          </button>
        </form>
        <div className="flex mt-20">
          <p className="text-black text-base">Don't have an account?</p>
          <Link
            to={"/signup"}
            className="text-pink text-base ml-2 cursor-pointer"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
