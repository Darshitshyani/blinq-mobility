import React, { useState, useEffect } from "react";
import  Logo  from "@/untils/images/logo 1.svg";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";





const Topbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	
	const [scrolled, setScrolled] = useState(false);

	const router = useRouter();

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
			
		}, 350); // Match your animation duration
	};

	return (
		<>
			<div
				className={`h-[90px] w-full   flex justify-between items-center px-3 fixed  z-50 transition-all duration-300 ${
					scrolled
						? "bg-white/10 backdrop-blur-2xl border-gray-200 shadow-sm"
						: ""
				}`}
			>
				<div>
					<h1
						className="text-[22px] text-white font-bold flex mb-0 items-center cursor-pointer"
						onClick={() => router.push("/")}
					>
						
							<Image
								src={Logo}
								alt="Logo"
								className="  w-[80px] md:w-[120px] h-auto object-contain"
							/>
						
						
					</h1>
				</div>
				<div className="hidden gap-8 font-light text-[21px] text-white md:hidden lg:flex xl:flex relative z-50">
					<p
						className="cursor-pointer hover:text-primary-main transition-colors duration-200"
						onClick={() => {
							const el = document.getElementById("who");
							if (el) {
								el.scrollIntoView({ behavior: "smooth" });
							} else {
								router.push("/");
							}
						}}
					>
						Home
					</p>
					<p className="cursor-pointer hover:text-primary-main transition-colors duration-200" onClick={
						()=>{
							router.push("/technology")
						}
					}>Technology</p>
					<p
						className="cursor-pointer hover:text-primary-main transition-colors duration-200"
						onClick={() => router.push("/fleets")}
					>
						Fleets
					</p>
					<p
						className="cursor-pointer hover:text-primary-main transition-colors duration-200"
						onClick={() => {
							router.push("/about-us");
						}}
					>
						About Us
					</p>
				</div>
				<div>
	<button
  className="w-[160px] rounded-lg hidden md:hidden lg:flex xl:flex 
             bg-white/10 backdrop-blur-md border border-white/20 
             py-3 px-3 flex items-center justify-center 
             text-white shadow-lg
             hover:bg-white/20 transition-colors duration-300"
  onClick={() => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  }}
>
  Contact us
</button>

				</div>
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
					{/* Backdrop with fade-in */}
					<div
						className="fixed inset-0 bg-black/30 backdrop-blur-4xl z-40 animate-fade-in"
						onClick={handleSidebarClose}
					/>
					{/* Sidebar with slide-in/out animation */}
					<div
						className={`fixed w-[85%] h-full bg-background/95 backdrop-blur-3xl right-0 flex flex-col z-50 shadow-xl 
      ${isClosing ? "animate-slide-out-right" : "animate-slide-in-left"}
    `}
					>
						<div className="h-[70px] border-b border-acent w-full flex justify-between items-center px-4 ">
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
							<div className="flex flex-col mt-1">
								<div
									className={`w-full flex justify-between 
										 "border-b "
									items-center py-4 cursor-pointer `}
									
								>
									<span>Home</span>
									
								</div>
								
							</div>

							<div className="flex flex-col mt-1">
								<div
									className={`w-full flex justify-between items-center py-4 cursor-pointer 
										
									`}
									onClick={
						()=>{
							router.push("/technology")
						}
					}
								>
									Technology
									
								</div>
								
							</div>

							<p
								className="py-4  border-gray-200/50 cursor-pointer hover:text-primary-main transition-colors duration-200"
								onClick={()=>{
									router.push("/fleets")
								}}
							>
								Feets
							</p>

							
							<p
								className="py-4 border-gray-200/50 cursor-pointer hover:text-primary-main transition-colors duration-200" onClick={() => {
									router.push("/about-us");
								}}>
								
								About Us
							</p>
								<p
								className="py-4 border-gray-200/50 cursor-pointer hover:text-primary-main transition-colors duration-200">
								
							Contact Us
							</p>


						
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Topbar;

