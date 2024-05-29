import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [displayOverlay, setDisplayOverlay] = useState(false);
  return (
    <>
      {displayOverlay && <MenuSection />}
      <div className=" h-[12vh]  text-gray-100 items-center bg-white-900 backdrop-filter backdrop-blur-2xl bg-opacity-20  flex justify-between w-full px-4 md:px-10 sticky top-0 ">
        <h1 className=" text-2xl font-bold uppercase">Sad</h1>
        <div className="md:flex hidden uppercase  gap-5">
          <Link
            className=" px-5 py-2 font-bold rounded-[7px] border-gray-300 border"
            to="/login"
          >
            {' '}
            Login
          </Link>
          <Link
            className=" px-5 py-2 font-bold rounded-[7px] border-gray-300 border"
            to="/register"
          >
            Sign Up
          </Link>
        </div>
        {displayOverlay ? (
          <X
            onClick={() => setDisplayOverlay(!displayOverlay)}
            className=" relative cursor-pointer"
            color="white"
            size={30}
          />
        ) : (
          <Menu
            onClick={() => setDisplayOverlay(!displayOverlay)}
            className=" relative cursor-pointer"
            color="white"
            size={30}
          />
        )}
      </div>
    </>
  );
};

export default Navbar;
const MenuSection = () => {
  return (
    <div className=" w-full fixed bg-white-900 backdrop-filter backdrop-blur-2xl gap-6 bg-opacity-20  z-[1000] top-[12vh] flex flex-col items-center justify-center bg-black h-[90vh]">
      <Link
        className=" w-[90%] h-[50px] flex justify-center items-center font-bold rounded-[7px] border-gray-300 border"
        to="/login"
      >
        {' '}
        Login
      </Link>
      <Link
        className=" w-[90%] h-[50px] flex justify-center items-center font-bold rounded-[7px] border-gray-300 border"
        to="/register"
      >
        Sign Up
      </Link>
    </div>
  );
};
