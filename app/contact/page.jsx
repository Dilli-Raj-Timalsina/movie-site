"use client";
import React, { useRef } from "react";
import BounceSpinners from "@/components/spinners/BounceSpinners";
import SuccessMessage from "@/components/spinners/SuccessMessage";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import NavBar2 from "@/components/NavBar2";

export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        from_name: "",
        to_name: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSucess] = useState(false);
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const sendEmail = (templateParams) => {
        emailjs
            .send(
                "default_service",
                "template_d5nvhbu",
                templateParams,
                "pwwGIhv0Mp6iAT3uD"
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                },
                (error) => {
                    console.log("FAILED...", error);
                }
            );
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(formData, "formData");
        sendEmail(formData);
        setTimeout(() => {
            setLoading(false);
            setFormData({ from_name: "", to_name: "", message: "" });
            setSucess(true);
            setTimeout(() => {
                setSucess(false);
            }, 3000);
        }, 3000);
    };
    return (
        <div className="w-screen h-full bg-slate-50">
            <img
                src="/rectangle.png"
                alt=""
                className="w-screen h-24 md:h-28 relative z-0 bg-sky-950"
            />
            <NavBar2></NavBar2>
            <section className="bg-blue-50 " id="contact">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mb-4">
                        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <p className="text-base font-semibold uppercase tracking-wide text-blue-600 ">
                                Contact
                            </p>
                            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900  text-3xl sm:text-5xl">
                                Get in Touch
                            </h2>
                            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 ">
                                In hac habitasse platea dictumst
                            </p>
                        </div>
                    </div>
                    <div className="flex items-stretch justify-center">
                        <div className="grid md:grid-cols-2">
                            <div className="h-full pr-6">
                                <p className="mt-3 mb-12 text-lg text-gray-600 ">
                                    We'd love to hear from you! Whether you have a
                                    question, feedback, or simply want to say hello, we're
                                    here to help. Reach out to us, and we'll be sure to
                                    get back to you as soon as possible.
                                </p>
                                <ul className="mb-6 md:mb-0">
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-6 w-6"
                                            >
                                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                                                Our Address
                                            </h3>
                                            <p className="text-gray-600 ">
                                                UNIT-21 MEADWAY PRECINCT TILEHURST READING
                                            </p>
                                            <p className="text-gray-600">
                                                UNITED KINGDOM RG30 4AA
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-6 w-6"
                                            >
                                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                                                <path d="M15 7a2 2 0 0 1 2 2"></path>
                                                <path d="M15 3a6 6 0 0 1 6 6"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                                                Contact
                                            </h3>
                                            <p className="text-gray-600">
                                                Mobile: 07462295395
                                            </p>
                                            <p className="text-gray-600 ">
                                                Mail: contact@premisvision.co.uk
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-6 w-6"
                                            >
                                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                                <path d="M12 7v5l3 3"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                                                Working hours
                                            </h3>
                                            <p className="text-gray-600 ">
                                                Monday - Friday: 08:00 - 17:00
                                            </p>
                                            <p className="text-gray-600 ">
                                                Saturday &amp; Sunday: 08:00 - 12:00
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                                <h2 className="mb-4 text-2xl font-bold">
                                    Ready to Get Started?
                                </h2>
                                <form id="contactForm" onSubmit={submitHandler}>
                                    <div className="mb-6">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label
                                                    htmlFor="name"
                                                    className="pb-1 text-xs uppercase tracking-wider"
                                                ></label>
                                                <input
                                                    type="text"
                                                    id="from_name"
                                                    name="from_name"
                                                    value={formData.from_name}
                                                    onChange={handleChange}
                                                    required
                                                    autoComplete="given-name"
                                                    placeholder="Your name"
                                                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0 dark:bg-white"
                                                />
                                            </div>
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label
                                                    htmlFor="email"
                                                    className="pb-1 text-xs uppercase tracking-wider"
                                                ></label>
                                                <input
                                                    type="email"
                                                    id="to_name"
                                                    name="to_name"
                                                    value={formData.to_name}
                                                    required
                                                    onChange={handleChange}
                                                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0 dark:bg-white"
                                                    placeholder="email"
                                                />
                                            </div>
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label
                                                htmlFor="textarea"
                                                className="pb-1 text-xs uppercase tracking-wider"
                                            ></label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="4"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Write your message..."
                                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0 dark:bg-white"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            disabled={loading}
                                            type="submit"
                                            className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                                        >
                                            {loading ? (
                                                <BounceSpinners size={"w-4 h-4"} />
                                            ) : (
                                                <span>Send Message</span>
                                            )}
                                        </button>
                                    </div>
                                    {success && (
                                        <SuccessMessage
                                            message={
                                                "contacted succesfully, we will reach you soon !"
                                            }
                                            position="top-10 right-10"
                                        ></SuccessMessage>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
