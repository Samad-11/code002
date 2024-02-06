import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    {
      actionTitle: "Home",
      linkTo: "/",
    },
    {
      actionTitle: "about us",
      linkTo: "/about",
    },
    {
      actionTitle: "helping hand",
      linkTo: "/helping-hands",
    },
    {
      actionTitle: "on going campaign",
      linkTo: "/campaign",
    },
    {
      actionTitle: "report injured animal",
      linkTo: "/report",
    },
    {
      actionTitle: "contact us",
      linkTo: "/contact",
    },
  ];
  return (
    <div className="navbar bg-base-100 border border-black z-10 ">
      <div className="flex-1 ">
        <Link href="/" className=" text-xl">
          <Image src={logo} alt={"logoImg"} width={"50"} height={"50"} />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) => (
            <li key={item.linkTo}>
              <Link href={item.linkTo} className="uppercase">
                {item.actionTitle}
              </Link>
            </li>
          ))}
        </ul>
        <span className="text-2xl font-bold "> | </span>
        <Link href={"/blog"} className="btn btn-ghost mx-2 uppercase">
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
