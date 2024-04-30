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
import { useRef, useEffect, useState } from "react";

export default function Home() {
    const videoRef = useRef(null);
    const doSomething = async () => {
        const res = await fetch("http://localhost:3000/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbGxpcmFqdGltYWxzaW5hMzU0QGdtYWlsLmNvbSIsInJvbGVzIjpbInVzZXIiXSwicGFzc3dvcmQiOiIxMjM0Njc4OSIsImZpcnN0TmFtZSI6Ik5pc2NoYWwiLCJtaWRkbGVOYW1lIjoicmFqIiwibGFzdE5hbWUiOiJUaW1hbHNpbmEiLCJpYXQiOjE3MDczMTA0NzgsImV4cCI6MTcwNzMxNDA3OH0.jbXDjFMma5_qb4j4_1TsFfvVoB1Ndt7NcuMUp5wxQIc`,
            },
            body: JSON.stringify({
                firstName: "Nischal",
                lastName: "Timalsina",
                middleName: "raj",
                contact: 12345,
                email: "dillirajtimalsina354@gmail.com",
                password: "12346789",
            }),
        });
        const result = await res.json();

        console.log(result);
    };
    useEffect(() => {
        // videoRef.current.playbackRate = 0.5;
        // doSomething();
    }, []);
    return (
        <div>
            <img
                src={
                    "https://images.unsplash.com/photo-1490971774356-7fac993cc438?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                className="w-full h-128 md:h-full  relative top-0 left-0 z-0 "
            ></img>
            <NavBar></NavBar>
            <YourProbSection></YourProbSection>
            <hr />
            <div
                name="services"
                className=" md:w-screen h-full  flex flex-row justify-around md:pb-16 pb-10"
            >
                <FindOut></FindOut>
            </div>

            <div
                className="w-screen h-full  flex flex-col items-center mt-10 pb-10   bg-slate-100"
                name="services"
            >
                <h1 className="text-3xl text-pink-600 font-semibold mt-10">
                    Our Services
                </h1>
                <ServiceCard></ServiceCard>
            </div>
            <hr className="text-2xl " />
            <div
                className="w-screen h-full  flex flex-col items-center   bg-slate-50"
                name="gallery"
            >
                <h1 className="text-3xl text-pink-600 font-semibold my-16">
                    Our Gallery
                </h1>
                <OurGallery></OurGallery>
            </div>
            <hr />
            <div className="text-center" name="aboutus">
                <h1 className="text-3xl text-pink-600 font-semibold my-16">
                    Meet Our Team
                </h1>
                <Team></Team>
            </div>
            <hr />
            <div className="text-center">
                <h1 className="text-4xl text-pink-600 font-semibold mt-16 ">
                    Upcoming Movie's
                </h1>
                <UpcomingMoviesSection></UpcomingMoviesSection>
            </div>
            <hr />
            <WhyUs></WhyUs>
            <hr />
            <OurClients></OurClients>
            <hr />
            <TestimonialBox></TestimonialBox>
            <hr />
            <ContactUs2></ContactUs2>
        </div>
    );
}
