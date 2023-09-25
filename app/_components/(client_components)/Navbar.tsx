"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { CiMenuFries } from "react-icons/ci";
import { VscChromeClose } from "react-icons/vsc";
import {
  IoFastFoodOutline,
  IoBicycleSharp,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import Logo from "./Logo";

type Props = {};

type NavLink = {
  icon: React.ReactNode;
  text: string;
  href: string;
};

const navLinks: NavLink[] = [
  {
    icon: <IoFastFoodOutline />,
    text: "Menu",
    href: "/menu",
  },
  {
    icon: <IoBicycleSharp />,
    text: "Delivery",
    href: "/delivery",
  },
  {
    icon: <IoPhonePortraitOutline />,
    text: "Contact Us",
    href: "/contact",
  },
];

const Navbar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav className="relative">
      {isMenuOpen && (
        <div onClick={handleClick} className="absolute bg-slate-800/80 h-screen w-screen"></div>
      )}
      <div className="container flex items-center justify-between">
        <Logo />

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <ul className="absolute left-0 top-0 h-screen w-1/2 py-12 px-6 lg:hidden flex flex-col bg-slate-200 gap-6">
            <Logo />
            {navLinks.map((link) => (
              <li key={link.text} onClick={handleClick}>
                <Link className="flex items-center gap-2" href={link.href}>
                  {link.icon}
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <ul className="hidden lg:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.text}>
              <Link className="flex items-center gap-2" href={link.href}>
                {link.icon}
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-3 items-center">
          <ThemeSwitcher />
          {isMenuOpen ? (
            <VscChromeClose
              className="lg:hidden"
              size={20}
              onClick={handleClick}
            />
          ) : (
            <CiMenuFries
              className="lg:hidden"
              size={20}
              onClick={handleClick}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
