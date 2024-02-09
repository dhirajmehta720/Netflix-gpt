import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignin, setisSignin] = useState(true);
  const toggleSignin = () => {
    setisSignin(!isSignin);
  };
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //Validate the Form
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMessage(msg);
    if (msg) return;

    if (!isSignin) {
      //Signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      //Signin logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute z-[-1]">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>
      <div className="opacity-[90%] rounded-sm p-12 px-14 bg-black text-white relative top-[100px] w-[400px] mx-auto flex flex-col">
        <div className="font-bold text-4xl mb-[20px]">
          {isSignin ? "Sign In" : "Sign Up"}
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          {!isSignin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full py-3 px-3 mb-5 bg-slate-800 rounded-md"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="w-full py-3 px-3 mb-5 bg-slate-800 rounded-md"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full py-3 px-3 mb-4 bg-slate-800 rounded-md"
          />
          <p className="text-red-600 font-semibold pb-2">{errorMessage}</p>
          <button
            onClick={handleButtonClick}
            className=" text-white rounded-md bg-opacity-100 cursor-pointer mb-6 w-full py-2 text-center bg-red-600 font-semibold"
          >
            {isSignin ? "Sign In" : "Sign Up"}
          </button>
          <Link to={"/"} className="mx-[80px] cursor-pointer">
            Forgot Password?
          </Link>
        </form>
        <p
          className="text-white mt-8 mx-auto cursor-pointer"
          onClick={toggleSignin}
        >
          {isSignin
            ? "New to Netflix? Sign up Now."
            : "Already Registered? Sign In Now."}
        </p>
      </div>
    </div>
  );
};

export default Login;
