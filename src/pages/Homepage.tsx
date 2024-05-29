import Navbar from '@/components/navbar';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className=" w-full bg-black text-white relative flex h-screen  flex-col">
      <img
        src="/bg.jpg"
        className=" absolute top-0 left-0 w-full h-full object-center object-cover"
      />
      <div className=" absolute bg-black opacity-40 top-0 left-0 w-full h-full "></div>
      <Navbar />
      <div className="flex-1 relative flex justify-center items-center    flex-col">
        <h1 className="mb-4 w-[95%] mx-auto md:w-auto text-2xl font-bold md:text-4xl md:max-w-[600px] capitalize text-center md:font-medium">
          Let Your Dark secrets live beyond you
        </h1>
        <p className="w-[95%] mx-auto md:w-auto text-center text-[20px]">
          Because the truth will set you free, let this be your therapeutic
          prison.
        </p>
        <Link
          className="hover:bg-black/50 w-[90%] md:w-auto hover:border-white transition-all ease-in-out hover:text-white flex justify-center items-center md:px-10 text-base md:text-xl mt-5 py-3 md:py-5 font-bold rounded-[7px] border-gray-300 border-[3px] shadow-inner  shadow-black"
          to="/login"
        >
          {' '}
          Share Dark Thoughts Now
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
