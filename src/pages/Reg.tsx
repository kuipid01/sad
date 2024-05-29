/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Spinner from "@/components/spinner";
import api from "@/config/axios";
import { ChevronLeft, EyeIcon, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useToast } from "@/components/ui/use-toast";
const Reg = () => {
  const { toast } = useToast();
  const [showText, setShowText] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleRegister = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await api.post("/api/v1/users/signup", {
        email,
        password,
        passwordConfirm,
      });
      if (res) setLoading(false);
      if (res.status === 200) {
        navigate("/dashboard");
        toast({
          description: "Registration Successful",
        });
      }
    } catch (error: any) {
      const msg = error.response.data.message;
      toast({
        variant: "destructive",
        description: msg,
      });
      setLoading(false);
    }
  };
  return (
    <div className=" relative flex flex-col  px-3 md:px-0 justify-center items-center w-full h-screen ">
      <img
        src="/bg.jpg"
        className=" absolute top-0 left-0 w-full h-full object-center object-cover"
      />
      <div className=" absolute bg-black opacity-60 top-0 left-0 w-full h-full "></div>
      <h1 className=" relative w-full md:w-fit mb-3  text-white text-2xl font-bold uppercase">
        Sign up
      </h1>
      <div
        onClick={() => navigate(-1)}
        className="flex bg-gray-900 hover:scale-105 transition-all ease-in-out items-center font-bold gap-1 px-4  py-2 rounded-full  cursor-pointer absolute left-3 top-7 md:top-10 md:left-10 text-sm text-gray-100"
      >
        <ChevronLeft color="white" size={20} /> Go Back
      </div>
      <form
        action=""
        className=" bg-white-900 md:w-1/2 backdrop-filter rounded-[10px] backdrop-blur-2xl bg-opacity-40 md:bg-opacity-20 w-full gap-5  f-fit p-[20px] md:py-[40px] md:px-[40px] border border-gray-400 relative flex  flex-col"
      >
        <input
          onChange={(e) => setEmail(e.target.value)}
          className=" py-2 md:py-4 px-3 rounded-[5px] placeholder:text-gray-700 relative w-full border-[1px] border-gray-300 text-white bg-transparent  bg-black"
          type="email"
          placeholder="kuipid@gmail.com"
          name=""
          id=""
        />
        <div className=" w-full h-fit relative">
          <input
            onChange={(e) => setPassword(e.target.value)}
            className=" py-2 md:py-4 px-3 placeholder:text-gray-700  rounded-[5px] relative w-full border-[1px] border-gray-300 text-white bg-transparent  bg-black"
            type={showText ? "text" : "password"}
            placeholder="Enter Password"
            name=""
            id=""
          />
          {showText ? (
            <EyeOff
              color="white"
              onClick={() => setShowText(!showText)}
              className=" absolute right-[10px] top-1/2 -translate-y-1/2"
            />
          ) : (
            <EyeIcon
              color="white"
              className=" absolute right-[10px] top-1/2 -translate-y-1/2"
              onClick={() => setShowText(!showText)}
            />
          )}
        </div>
        <div className=" w-full h-fit relative">
          <input
            onChange={(e) => setPasswordConfirm(e.target.value)}
            className=" placeholder:text-gray-700  py-2 md:py-4 px-3 rounded-[5px] relative w-full border-[1px] border-gray-300 text-white bg-transparent  bg-black"
            type={showText ? "text" : "password"}
            placeholder="Confirm Password"
            name=""
            id=""
          />
          {showText ? (
            <EyeOff
              color="white"
              onClick={() => setShowText(!showText)}
              className=" absolute right-[10px] top-1/2 -translate-y-1/2"
            />
          ) : (
            <EyeIcon
              color="white"
              className=" absolute right-[10px] top-1/2 -translate-y-1/2"
              onClick={() => setShowText(!showText)}
            />
          )}
        </div>

        <button
          disabled={loading}
          onClick={handleRegister}
          className={` border py-4 ${
            loading ? " cursor-not-allowed bg-gray-400" : "bg-black"
          }  uppercase font-semibold w-full rounded-[5px] text-white`}
        >
          {loading ? <Spinner /> : "Register"}
        </button>
        <p className=" text-sm italic text-gray-400">
          Have an account ?
          <Link className=" ml-1 text-white font-bold" to="/login">
            Log In
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Reg;
