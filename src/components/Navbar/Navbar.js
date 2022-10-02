import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import NavItems from "../NavItems/NavItems";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Products", path: "/products" },
    { id: 3, name: "Orders", path: "/orders" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "About", path: "/about" },
  ];
  return (
    <nav className="bg-purple-400">
      <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>

      <ul className={`bg-purple-400 w-full md:flex justify-center absolute md:static duration-500 ease-in ${open ? 'top-6': 'top-[-120px]'}`}>
        {routes.map((route) => (
          <NavItems key={route.id} route={route}></NavItems>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
