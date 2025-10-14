import React, { useState, useEffect } from "react";
import Logo from "@/untils/images/logo 1.svg";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import CustomPopover from "../CustomPopover";
import {
  ArrowDropDown,
  ArrowDropUp,
  ArrowRightAlt,
} from "@mui/icons-material";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);

  const router = useRouter();

  // handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSidebarClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 350);
  };

  const isActive = (path: string) => {
    if (path === "/blogs") return router.pathname.startsWith("/blogs");
    return router.pathname === path;
  };

  return (
    <>
      <div
        className={`h-[90px] w-full pb-[35px] md:pb-0 flex justify-between items-center px-3 fixed z-50 transition-all duration-300 ${
          scrolled ? "bg-white/10 backdrop-blur-2xl border-gray-200 shadow-sm  pb-0" : ""
        }`}
      >
        {/* Logo */}
        <div>
          <h1
            className="text-[22px] text-white font-bold flex mb-0 items-center cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              src={Logo}
              alt="Logo"
              className="w-[80px] md:w-[120px] h-auto object-contain"
            />
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden gap-8 font-light text-[21px] text-white md:hidden lg:flex xl:flex relative z-50">
          <p
            className={`cursor-pointer transition-colors duration-200 ${
              isActive("/") ? "text-primary font-semibold" : "hover:text-primary-main"
            }`}
            onClick={() => router.push("/")}
          >
            Home
          </p>

          {/* Technology Dropdown (Permanent Blur) */}
          <div
            className={`flex items-center justify-center gap-1 hover:text-primary-main transition-colors duration-200 ${
              openDrop && "text-primary-main"
            }`}
          >
            <CustomPopover
              isOpen={openDrop}
              handleClose={(event) => setOpenDrop(event)}
              buttonTitleLabel="Technology"
              children={
                <div
                  className="flex flex-col absolute rounded-xl gap-3 p-3 border border-white/20 shadow-xl 
                  !bg-card backdrop-saturate-150 mt-[20px] min-w-[250px]"
                >
                  <ul>
                    <li
                      className="cursor-pointer hover:text-primary flex items-center gap-1"
                      onClick={() => {
                        router.push("/technology/#swap");
                        setOpenDrop(false);
                      }}
                    >
                      <ArrowRightAlt /> Swapping
                    </li>
                    <li
                      className="cursor-pointer hover:text-primary flex items-center gap-1"
                      onClick={() => {
                        router.push("/technology/#vehicles");
                        setOpenDrop(false);
                      }}
                    >
                      <ArrowRightAlt /> Vehicles
                    </li>
                  </ul>
                </div>
              }
            />
            {openDrop ? <ArrowDropUp /> : <ArrowDropDown />}
          </div>

          <p
            className={`cursor-pointer transition-colors duration-200 ${
              isActive("/fleets")
                ? "text-primary font-semibold"
                : "hover:text-primary-main"
            }`}
            onClick={() => router.push("/fleets")}
          >
            Fleets
          </p>

          <p
            className={`cursor-pointer transition-colors duration-200 ${
              isActive("/blogs")
                ? "text-primary font-semibold"
                : "hover:text-primary-main"
            }`}
            onClick={() => router.push("/#blog")}
          >
            Blogs
          </p>

          <p
            className={`cursor-pointer transition-colors duration-200 ${
              isActive("/about-us")
                ? "text-primary font-semibold"
                : "hover:text-primary-main"
            }`}
            onClick={() => router.push("/about-us")}
          >
            About Us
          </p>

          <p
            className={`cursor-pointer transition-colors duration-200 ${
              isActive("/contact-us")
                ? "text-primary font-semibold"
                : "hover:text-primary-main"
            }`}
            onClick={() => router.push("/contact-us")}
          >
            Contact Us
          </p>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="flex sm:flex md:flex lg:hidden xl:hidden cursor-pointer p-2 rounded-full hover:bg-primary transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuIcon />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-2xl z-40 animate-fade-in"
            onClick={handleSidebarClose}
          />
          {/* Sidebar */}
          <div
            className={`fixed w-[85%] h-full bg-background/95 backdrop-blur-3xl right-0 flex flex-col z-50 shadow-xl 
              ${isClosing ? "animate-slide-out-right" : "animate-slide-in-left"}`}
          >
            <div className="h-[70px] border-b border-acent w-full flex justify-between items-center px-4">
              <h1 className="text-[22px] text-primary font-semibold flex items-center">
                Blinq Mobility
              </h1>
              <div
                className="cursor-pointer p-2 rounded-full hover:bg-primary transition-colors duration-200"
                onClick={handleSidebarClose}
              >
                <CloseIcon />
              </div>
            </div>

            <div className="flex flex-col gap-0 font-semibold text-[16px] text-black-600 overflow-auto px-5 py-4">
              <div
                className={`py-4 cursor-pointer ${
                  isActive("/") ? "text-primary-main font-bold" : "hover:text-primary-main"
                }`}
                onClick={() => {
                  router.push("/");
                  handleSidebarClose();
                }}
              >
                Home
              </div>

              <div
                className={`py-4 cursor-pointer ${
                  isActive("/technology")
                    ? "text-primary-main font-bold"
                    : "hover:text-primary-main"
                }`}
                onClick={() => {
                  router.push("/technology");
                  handleSidebarClose();
                }}
              >
                Technology
              </div>

              <div
                className={`py-4 cursor-pointer ${
                  isActive("/fleets")
                    ? "text-primary-main font-bold"
                    : "hover:text-primary-main"
                }`}
                onClick={() => {
                  router.push("/fleets");
                  handleSidebarClose();
                }}
              >
                Fleets
              </div>

              <div
                className={`py-4 cursor-pointer ${
                  isActive("/blogs")
                    ? "text-primary-main font-bold"
                    : "hover:text-primary-main"
                }`}
                onClick={() => {
                  router.push("/blogs/iitstartupindia-cohort-12");
                  handleSidebarClose();
                }}
              >
                Blogs
              </div>

              <div
                className={`py-4 cursor-pointer ${
                  isActive("/about-us")
                    ? "text-primary-main font-bold"
                    : "hover:text-primary-main"
                }`}
                onClick={() => {
                  router.push("/about-us");
                  handleSidebarClose();
                }}
              >
                About Us
              </div>

              <div
                className={`py-4 cursor-pointer ${
                  router.asPath.includes("#contact")
                    ? "text-primary-main font-bold"
                    : "hover:text-primary-main"
                }`}
                onClick={() => {
                  router.push("/contact-us");
                  handleSidebarClose();
                }}
              >
                Contact Us
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Topbar;
