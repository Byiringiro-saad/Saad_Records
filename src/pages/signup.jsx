// Assets
import { FaEyeSlash } from "react-icons/fa6";

// Assets
import background from "../assets/bg.png";
import { Link } from "react-router-dom";

const Signup = () => {
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
        <form action="#" className="w-1/2 h-auto flex flex-col items-center">
          <div className="flex w-full h-14 items-center mb-6">
            <input
              type="email"
              placeholder="Email"
              className="flex w-1/2 h-full rounded px-4 bg-gray mr-4"
            />
            <select
              name="Gender"
              id="Gender"
              className="flex w-1/2 h-full rounded px-4 bg-gray"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex w-full h-14 items-center mb-6">
            <input
              type="date"
              placeholder="Date of Birth"
              className="flex w-1/2 h-full rounded px-4 bg-gray mr-4"
            />
            <select
              name="Category"
              id="categort"
              className="flex w-1/2 h-full rounded px-4 bg-gray"
            >
              <option value="contributor">Contributor</option>
              <option value="validator">Validator</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="flex w-full h-14 items-center mb-6">
            <div className="flex w-1/2 h-14 items-center relative mr-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full h-full pl-4 bg-gray rounded"
              />
              <FaEyeSlash className="absolute right-6 cursor-pointer text-xl" />
            </div>
            <div className="flex w-1/2 h-14 items-center relative">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full h-full pl-4 bg-gray rounded"
              />
              <FaEyeSlash className="absolute right-6 cursor-pointer text-xl" />
            </div>
          </div>
          <button
            type="submit"
            className="w-1/2 h-14 bg-pink rounded text-white"
          >
            Signup
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
