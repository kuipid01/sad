/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Bell,
  DotSquare,
  Heart,
  Home,
  Image,
  MapPin,
  Search,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className=" w-full flex overflow-y-hidden flex-col bg-black h-svh  ">
      <Nav />
      <div className=" mb-5 md:mb-0 md:px-0 px-4">
        <PostCreator />
      </div>

      <div className="  max-h-[90vh] contents flex-1 md:flex flex-col md:flex-row">
        <div className="flex  flex-col  max-h-[90vh] overflow-y-auto gap-5 flex-1">
          <div className=" md:py-10 ">
            {[1, 2, 3, 4, 5].map((post) => (
              <SinglePost key={post} />
            ))}
          </div>
        </div>
        <div className=" md:flex w-1/4 h-[90vh]  hidden">
          <SideNav />
        </div>
      </div>

      <div className=" md:hidden flex">
        <BottomNav />
      </div>
    </div>
  );
};

export default Dashboard;

export const BottomNav = () => {
  return (
    <div className=" flex h-[10vh]  bg-white-900 backdrop-filter backdrop-blur-2xl bg-opacity-20 items-center fixed bottom-0 w-full left-0  shadow-md border-t  justify-evenly">
      <Link to="/">
        <Home
          color="white"
          className=" hover:translate-x-[2px] transition-all"
        />
      </Link>
      <Link to="/search">
        <Search
          color="white"
          className=" hover:translate-x-[2px] transition-all"
        />
      </Link>
      <Link to="/notification">
        <Bell
          color="white"
          className=" hover:translate-x-[2px] transition-all"
        />
      </Link>
      <Link to="/profile">
        <User
          color="white"
          className=" hover:translate-x-[2px] transition-all"
        />
      </Link>
    </div>
  );
};
export const Nav = () => {
  return (
    <div className=" shadow-xl  border-gray-700 border-opacity-25 flex justify-between h-[8vh] md:!h-[10vh] px-4 sticky top-0  items-center text-white  ">
      <Link to="/">
        <h1 className=" font-extrabold uppercase">Sad</h1>
      </Link>

      <Link to="/search">
        <Search
          size={20}
          color="white"
          className=" hover:translate-x-[2px] transition-all"
        />
      </Link>
    </div>
  );
};
export const PostCreator = () => {
  return (
    <div className=" md:hidden  w-full shadow-xl text-white border-gray-700 border-opacity-25 rounded-xl h-[150px] flex flex-col mt-3  border-2  bg-transparent">
      <div className=" p-3 flex items-start flex-1 gap-3">
        <img
          src="/bg.jpg"
          className=" size-[50px]   rounded-full object-cover object-center"
        />
        <input
          type="text"
          className=" flex flex-1 py-1 placeholder:font-light placeholder:text-gray-500 placeholder:capitalize  bg-inherit outline-none"
          placeholder="Write here ....(dark)"
        />
      </div>
      <div className="px-3  flex justify-between items-center py-3">
        <div className=" flex gap-2 items-center">
          <Image size={20} />
          <MapPin size={20} />
        </div>{" "}
        <div className=" hover:bg-gray-900 ease-linear cursor-pointer bg-bg-gray-950   border text-white w-fit px-5 py-2 rounded-[5px] font-bold flex justify-between">
          <button>Shad it</button>
        </div>
      </div>
    </div>
  );
};

export const SinglePost = () => {
  return (
    <div className=" w-full py-5 px-10 border-y border-y-gray-600 border-opacity-20 text-white h-fit">
      <div className=" flex justify-between">
        <div className="h-[40px] flex gap-2 mb-3 items-center">
          <img
            src="/bg.jpg"
            className=" size-[40px]   rounded-full object-cover object-center"
          />
          <div className=" flex flex-col ">
            <p className=" text-base font-bold">Kuipid Adegoke</p>
            <p className=" font-light text-sm text-gray-400">1 hour ago</p>
          </div>
        </div>
        <DotSquare color="white" />
      </div>
      <div className=" max-w-full mb-3 leading-7 text-left text-gray-200 font-medium">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
        temporibus quasi quae voluptas cumque! Nihil adipisci maiores ipsam
        laudantium molestias.
      </div>
      {/* <div className=" flex flex-wrap ">
         {[1, 2, 3, 4].map((img, i) => (
           <img src="/bg.jpg" className="  flex-1" alt="" />
         ))}
       </div> */}
      <div className=" flex text-xs text-gray-200 gap-2">
        <div className=" flex gap-1 items-center text-clip ">
          <Heart size={15} />
          123k
        </div>
      </div>
    </div>
  );
};

const SideNav = () => {
  return (
    <div className=" w-full px-5 flex flex-col justify-between max-h-[90vh]">
      <div className="  w-full shadow-xl text-white border-gray-700 border-opacity-25 rounded-xl h-[150px] flex flex-col mt-3  border-2  bg-transparent">
        <div className=" p-3 flex items-start flex-1 gap-3">
          <img
            src="/bg.jpg"
            className=" size-[50px]   rounded-full object-cover object-center"
          />
          <input
            type="text"
            className=" flex flex-1 py-1 placeholder:font-light placeholder:text-gray-500 placeholder:capitalize  bg-inherit outline-none"
            placeholder="Write here ....(dark)"
          />
        </div>
        <div className="px-3  flex justify-between items-center py-3">
          <div className=" flex gap-2 items-center">
            <Image size={20} />
            <MapPin size={20} />
          </div>{" "}
          <div className=" hover:bg-gray-900 ease-linear cursor-pointer bg-bg-gray-950   border text-white w-fit px-5 py-2 rounded-[5px] font-bold flex justify-between">
            <button>Shad it</button>
          </div>
        </div>
      </div>

      <div className=" flex h-[10vh]  bg-white-900 backdrop-filter backdrop-blur-2xl bg-opacity-20 items-center  bottom-0 w-full left-0  shadow-md border-t  justify-evenly">
        <Link to="/">
          <Home
            color="white"
            className=" hover:translate-x-[2px] transition-all"
          />
        </Link>
        <Link to="/search">
          <Search
            color="white"
            className=" hover:translate-x-[2px] transition-all"
          />
        </Link>
        <Link to="/notification">
          <Bell
            color="white"
            className=" hover:translate-x-[2px] transition-all"
          />
        </Link>
        <Link to="/profile">
          <User
            color="white"
            className=" hover:translate-x-[2px] transition-all"
          />
        </Link>
      </div>
    </div>
  );
};
