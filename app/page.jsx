"use client";
import YourProbSection from "@/components/YourProbSection";
import ServiceCard from "@/components/ServiceCard";
import FindOut from "@/components/FindOut";
import UpcomingMoviesSection from "@/components/UpComing";
import WhyUs from "@/components/WhyUs";
import OurClients from "@/components/OurClients";
import TestimonialBox from "@/components/TestimonialBox";
import NavBar from "@/components/NavBar";
import ContactUs from "@/components/ContactUs";
import OurGallery from "@/components/OurGallery";
import Team from "@/components/Team";
import { ContactUs2 } from "@/components/ContactUs";
import { useRef, useEffect } from "react";

export default function Home() {
    const videoRef = useRef(null);
    useEffect(() => {
        videoRef.current.playbackRate = 0.5;
    }, []);
    return (
        <div>
            <video
                autoPlay="true"
                preload="auto"
                ref={videoRef}
                className="w-full h-128 md:h-full grayscale object-cover relative top-0 left-0 z-0 contrast-75 opacity-90"
            >
                <source src="/movievid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <NavBar></NavBar>
            <YourProbSection></YourProbSection>
            <div
                name="services"
                className=" md:w-screen h-full  flex flex-row justify-around md:pb-16 pb-10"
            >
                <FindOut></FindOut>
            </div>
            <div
                className="w-screen h-full  flex flex-col items-center my-10   bg-white"
                name="services"
            >
                <h1 className="text-3xl text-pink-600 font-semibold mt-10">
                    Our Services
                </h1>
                <ServiceCard></ServiceCard>
            </div>
            <div
                className="w-screen h-full  flex flex-col items-center my-10   bg-white"
                name="gallery"
            >
                <h1 className="text-3xl text-pink-600 font-semibold my-16">
                    Our Gallery
                </h1>
                <OurGallery></OurGallery>
            </div>
            <div className="text-center" name="aboutus">
                <h1 className="text-3xl text-pink-600 font-semibold my-16">
                    Meet Our Team
                </h1>
                <Team></Team>
            </div>
            <div className="text-center">
                <h1 className="text-4xl text-pink-600 font-semibold mt-16 ">
                    Upcoming Movie's
                </h1>
                <UpcomingMoviesSection></UpcomingMoviesSection>
            </div>
            <WhyUs></WhyUs>
            <OurClients></OurClients>
            <TestimonialBox></TestimonialBox>
            <ContactUs2></ContactUs2>
        </div>
    );
}
