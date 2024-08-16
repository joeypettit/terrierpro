import { useEffect, useState } from "react";
import ProfileCircle from "./profile-circle";
import { Link, Outlet } from "react-router-dom";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";

import { RxRocket } from "react-icons/rx";
import { FaRegMap } from "react-icons/fa6";
import { BsTruck } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPersonWalkingWithCane } from "react-icons/fa6";

// doggy icons
import { FaDog } from "react-icons/fa";
import { GiDogBowl } from "react-icons/gi";
import { LuBone } from "react-icons/lu";
import { TbDog } from "react-icons/tb";
import { GiPlasticDuck } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";

const iconSize = "1.8rem";

const links = [
  // {
  //   to: "/loadboost",
  //   label: "LoadBoost",
  //   icon: <RxRocket size={iconSize} />,
  // },
  // {
  //   to: "/trips",
  //   label: "Trips",
  //   icon: <FaRegMap size={iconSize} />,
  // },
  // {
  //   to: "/loads",
  //   label: "Loads",
  //   icon: <BsBoxSeam size={iconSize} />,
  // },
  // {
  //   to: "/trips",
  //   label: "Drivers",
  //   icon: <FaRegAddressCard size={iconSize} />,
  // },
  // {
  //   to: "/loads",
  //   label: "Assets",
  //   icon: <BsTruck size={iconSize} />,
  // },
  {
    to: "/loadboost",
    label: "KibbleBoost",
    icon: <GiDogBowl size={iconSize} />,
  },
  {
    to: "/trips",
    label: "Walks",
    icon: <FaDog size={iconSize} />,
  },
  {
    to: "/loads",
    label: "Treats",
    icon: <LuBone size={iconSize} />,
  },
  {
    to: "/trips",
    label: "Humans",
    icon: <IoMdPerson size={iconSize} />,
  },
  {
    to: "/loads",
    label: "Toys",
    icon: <GiPlasticDuck size={iconSize} />,
  },
  {
    to: "/loadboost",
    label: "Friends",
    icon: <TbDog size={iconSize} />,
  },
  {
    to: "/loadboost",
    label: "Settings",
    icon: <IoSettingsOutline size={iconSize} />,
  },
];

function NavBar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to handle window resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Set up event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth > 768) {
    return <LargeScreenNavBar />;
  } else {
    return <SmallScreenNavBar />;
  }
}

function LargeScreenNavBar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col justify-start">
      <div className="p-3 flex justify-between border-b-2 shadow-sm bg-slate-100">
        <Link to="/loadboost">
          <div className="flex flex-start flex-row items-center">
            <img
              src="/assets/tp-logo-blue.png"
              alt="Terrier Pro App Icon"
              style={{ height: "4rem", width: "4rem" }}
            />
            <span className="p-2 text-3xl ">TerrierPro™</span>
          </div>
        </Link>
        <ProfileCircle />
      </div>
      <div className="flex flex-row ">
        <nav
          className={`shadow-md ${
            isOpen ? "w-36" : "w-0"
          } h-screen transition-all duration-300 bg-slate-100`}
        >
          <div className="relative">
            <div
              className="p-1 absolute -right-8 top-1 bg-slate-100 rounded-lg shadow-lg border-2"
              onClick={toggleSidebar}
            >
              {isOpen ? <BsChevronDoubleLeft /> : <BsChevronDoubleRight />}
            </div>
          </div>
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } transition-all duration-300`}
          >
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={link.to}>
                    <div
                      className="
                      pl-3 pr-4 py-3
                      flex flex-row justify-between
                      group
                      hover:bg-slate-100"
                    >
                      <div className="group-hover:text-gray-700">
                        {link.icon}
                      </div>
                      <div>{link.label}</div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function SmallScreenNavBar() {
  return (
    <div className="flex flex-col">
      <div className="h-full">
        <Outlet />
      </div>
      <div className="pb-2 pt-1 px-2 border-t-2 shadow-sm fixed bottom-0 bg-slate-100">
        <nav className="w-screen p-1">
          <ul className="flex flex-row justify-around items-end">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={link.to}>
                    <div className="group-hover:text-gray-700">{link.icon}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
