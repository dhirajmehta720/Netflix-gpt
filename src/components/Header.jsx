import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute z-[1] flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black ">
      <img
        className="w-[200px]"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex gap-7">
          <img
            src="https://shorturl.at/ntY27"
            alt="User"
            className="mt-5 rounded-md w-12 h-10"
          />
          <button
            onClick={handleSignOut}
            className="rounded-md font-semibold px-2 h-10 mt-5 mr-5 bg-black text-white"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
