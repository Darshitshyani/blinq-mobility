import React from "react";
import SolvingModule from "./components/SolvingModule";
import NewsroomHighlights from "./components/NewsroomHighlights";
import BlogSection from "./components/BlogSection";
import { InteractiveVideo } from "./components/videosection/InteractiveVideo";



const HomePage: React.FC = () => {
  return (
    <>
   
  <div className="w-full lg:min-h-screen relative ">
    <InteractiveVideo />
  {/* <video
    src="city.mp4"
    autoPlay
    loop
    muted
    className="w-full h-full object-cover"
  /> */}
   
  {/* Black shade on top */}
<div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
<div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent pointer-events-none" />


</div>
 <div
 className=" flex  bg-background flex-col text-black-100 justify-center items-center text-center relative pt-[120px] lg:min-h-screen">
  <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-background to-transparent pointer-events-none" />

  <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">

  <h1 className="text-5xl md:text-7xl font-bold mb-6 lg:w-[70%] ">Revolutionizing Urban Mobility with<span className="text-gradient"> Modular EVs & 5-Minute Battery Swaps.</span></h1>
  <h1 className="text-[20px] text-[#ccc]">Safer, cleaner, and more affordable rides for your daily commute.</h1>
  
				

  </div>
                <div className="flex flex-col md:flex-row gap-6 mt-[50px] w-full h-full px-4 sm:px-6 lg:px-8 justify-center items-center">
            <div className="bg-card-gradient border border-border rounded-xl p-6 shadow-accent w-[350px] h-[210px]">
              <h3 className="text-xl font-semibold text-primary mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                Make EVs the default choice of commute for the masses by overcoming range anxiety, 
                charging downtime, and high upfront costs.
              </p>
            </div>
            <div className="bg-card-gradient border border-border rounded-xl p-6 shadow-accent h-[210px] w-[350px]">
              <h3 className="text-xl font-semibold text-accent mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                Build a seamless zero-emission ecosystem combining purpose-built vehicles, 
                AI-driven battery swapping, and microfactories for sustainable mobility.
              </p>
            </div>
          </div>
      
 </div>
          <SolvingModule />
          <NewsroomHighlights />
          <BlogSection />

    </>
  );
};

export default HomePage;
