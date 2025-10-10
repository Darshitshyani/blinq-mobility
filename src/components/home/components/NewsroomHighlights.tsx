"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image, { StaticImageData } from "next/image";

import fiireImg from "@/untils/images/1.png";
import dpiitImg from "@/untils/images/6.png";
import deshpandeImg from "@/untils/images/4.png";
import razorpayImg from "@/untils/images/3.png";
import iitImg from "@/untils/images/5.png";
import iimas from "@/untils/images/1 (1).png";
import nexo from "@/untils/images/nexus logo.png";
import atalImg from "@/untils/images/Atal_Incubation_Centre_Banasthali_Vidyapith_0e560e4ffa.png";
import i8 from "@/untils/images/8i Ventures.png";
import gov from "@/untils/images/8.png";
import nidhi from "@/untils/images/5.jpg";
import op from "@/untils/images/9.jpeg";
import seed from "@/untils/images/11.png";
import aamf from "@/untils/images/6.jpeg";

interface Highlight {
  image: StaticImageData;
  title: string;
}

const highlights: Highlight[] = [
  { image: aamf, title: "FIIRE Goa Acceleration Program" },
  { image: seed, title: "Seed Fund" },
  { image: gov, title: "Government of India" },
  { image: op, title: "Open Power Alliance" },
  { image: fiireImg, title: "FIIRE" },
  { image: dpiitImg, title: "DPIIT" },
  { image: nidhi, title: "NIDHI PRAYAS" },
  { image: deshpandeImg, title: "Deshpande Foundation" },
  { image: razorpayImg, title: "Razorpay" },
  { image: iitImg, title: "IIT Startups" },
  { image: atalImg, title: "Atal Incubation Centre" },
  { image: nexo, title: "Nexus Startup Hub" },
  { image: i8, title: "8i Ventures" },
  { image: iimas, title: "IIM Ahmedabad" },
];

export default function NewsroomHighlights() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000, // smooth scroll
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear", // continuous movement
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="bg-background py-16 h-full lg:h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-[100px]">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Supported By</span>
          </h1>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Slider {...settings}>
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center px-6"
              >
                <div className="w-40 h-40 md:w-48 md:h-48 flex justify-center items-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="object-contain w-full h-full drop-shadow-lg"
                    priority={index < 3} // optimize LCP
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
