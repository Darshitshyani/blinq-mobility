import React from "react";
import SolvingModule from "./components/SolvingModule";
import NewsroomHighlights from "./components/NewsroomHighlights";
import BlogSection from "./components/BlogSection";
import { InteractiveVideo } from "./components/videosection/InteractiveVideo";




const HomePage: React.FC = () => {
  return (
    <>
   
  <div className="w-full  relative ">
    <InteractiveVideo />

<div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
<div className="absolute bottom-0 left-0 w-full h-[40px] bg-gradient-to-t from-background to-transparent pointer-events-none" />


</div>
 <div
 className=" flex  bg-background flex-col text-black-100 justify-center items-center text-center relative pt-[120px] lg:min-h-screen" id="mission">
  <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-background to-transparent pointer-events-none" />

  <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">

  <h1 className="text-5xl md:text-7xl font-bold mb-6 lg:w-[70%] ">Revolutionizing Urban Mobility with<span className="text-gradient"> Compact EVs & Quick Battery Swaps.</span></h1>
  <h1 className="text-[20px] text-[#ccc]">Safer, cleaner, and more affordable rides for your daily commute.</h1>
  
				

  </div>
                <div className="flex flex-col md:flex-row gap-6 mt-[50px] w-full h-full px-4 sm:px-6 lg:px-8 justify-center items-center" >
            <div className="w-[60%] mt-20">
              <h3 className="text-4xl font-semibold text-primary mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
               We are on a Mission to Make EVs the default choice of commute for the masses by overcoming range anxiety, charging downtime, and high upfront costs and making them better than ICE Vehicles in every way.

              </p>
            </div>
           
          </div>
      
 </div>
          <SolvingModule />
          <NewsroomHighlights />
          {/* <VehicleShowcase /> */}
          <BlogSection />

    </>
  );
};

export default HomePage;
