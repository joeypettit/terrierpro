import React from "react";
import { Link, Outlet } from "react-router-dom";
import { RxRocket } from "react-icons/rx";
import { FaRegMap } from "react-icons/fa6";
import { BsTruck } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { FaRegAddressCard } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

const iconSize = "1.8rem";

const links = [
  {
    to: "/loadboost",
    label: "LoadBoost",
    icon: <RxRocket size={iconSize} />,
  },
  {
    to: "/trips",
    label: "Trips",
    icon: <FaRegMap size={iconSize} />,
  },
  {
    to: "/loads",
    label: "Loads",
    icon: <BsBoxSeam size={iconSize} />,
  },

  {
    to: "/trips",
    label: "Drivers",
    icon: <FaRegAddressCard size={iconSize} />,
  },
  {
    to: "/loads",
    label: "Assets",
    icon: <BsTruck size={iconSize} />,
  },
  {
    to: "/loadboost",
    label: "Contacts",
    icon: <RiContactsLine size={iconSize} />,
  },
  {
    to: "/loadboost",
    label: "Settings",
    icon: <IoSettingsOutline size={iconSize} />,
  },
];

const TerrierProNavBar: React.FC = () => {
  return (
    <div className="container flex flex-col justify-start md:flex-row">
      <div className="p-2 w-100 flex flex-row">
        <Link to="/loadboost">
          <div
            className="
                  flex row items-center
                  group 
                  hover:bg-slate-100"
          >
            <img
              src="/assets/tp-logo-bw.jpg"
              alt="Terrier Pro App Icon"
              style={{ height: "4rem", width: "4rem" }}
            />
            <span className="hidden md:block text-2xl ">TerrierPro™</span>
          </div>
        </Link>
      </div>
      <div className="">
        <nav>
          <ul
            className="
            flex items-end
            p-2
            w-full flex-row  
            md:h-full md:w-42 md:flex-col "
          >
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={link.to}>
                    <div
                      className="
                      p-2
                      flex row items-center
                      group
                      hover:bg-slate-100"
                    >
                      <div className="group-hover:text-gray-700">
                        {link.icon}
                      </div>
                      <div className=" hidden md:block">{link.label}</div>
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
};

export default TerrierProNavBar;
