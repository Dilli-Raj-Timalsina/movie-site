"use client";
import { Link } from "react-scroll";
import { useRouter } from "next/navigation";
export default function NavBar2() {
    const router = useRouter();
    return (
        <div className="drawer absolute top-0 z-20">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar lg:pl-20 lg:pr-24">
                    <div className="flex-none lg:hidden">
                        <label
                            htmlFor="my-drawer-3"
                            aria-label="open sidebar"
                            className="btn btn-square btn-ghost"
                        >
                            <img src="/hamburgermenu.svg" alt="" className="w-8 h-8 " />
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 navbar-end lg:navbar-start ">
                        <a href="/">
                            <img
                                src="/bgremovedlogofinal.png"
                                alt=""
                                className="md:w-44 md:h-16 w-28 h-12 cursor-pointer "
                            />
                        </a>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className=" text-white menu flex gap-6 items-center menu-horizontal text-lg bg-none">
                            {/* Navbar menu content here */}
                            <li className="cursor-pointer hover:text-yellow-300 hover:bg-none ">
                                <a href="/">Home</a>
                            </li>
                            <li className="cursor-pointer hover:text-yellow-300 bg-none">
                                <button
                                    onClick={() => {
                                        router.push("/contact");
                                    }}
                                >
                                    About Us
                                </button>
                            </li>
                            <li className="cursor-pointer hover:text-yellow-300 bg-none">
                                <a href="/">Services</a>
                            </li>
                            <li className="cursor-pointer hover:text-yellow-300 bg-none">
                                <a href="/">Gallery</a>
                            </li>
                            <li className="cursor-pointer hover:text-yellow-300 bg-none">
                                <a href="/">Clients</a>
                            </li>
                            <li className="cursor-pointer hover:text-yellow-300 bg-none">
                                <a href="/">Testimonials</a>
                            </li>
                            <li className="cursor-pointer hover:text-yellow-300 ">
                                <a href="/">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side ">
                <label
                    htmlFor="my-drawer-3"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="  w-80 min-h-full  bg-base-200 flex flex-col gap-8 text-2xl items-center pt-14">
                    {/* Sidebar content here */}
                    <li className="cursor-pointer hover:text-yellow-300 bg-none  dark:text-white">
                        <a href="/">Home</a>
                    </li>
                    <li className="cursor-pointer hover:text-yellow-300 bg-none dark:text-white">
                        <button
                            onClick={() => {
                                router.push("/contact");
                            }}
                        >
                            About Us
                        </button>
                    </li>
                    <li className="cursor-pointer hover:text-yellow-300 bg-none  dark:text-white">
                        <a href="/">Services</a>
                    </li>
                    <li className="cursor-pointer hover:text-yellow-300 bg-none  dark:text-white">
                        <a href="/">Gallery</a>
                    </li>
                    <li className="cursor-pointer hover:text-yellow-300 bg-none  dark:text-white">
                        <a href="/">Clients</a>
                    </li>
                    <li className="cursor-pointer hover:text-yellow-300 bg-none  dark:text-white">
                        <a href="/">Testimonials</a>
                    </li>
                    <li className="cursor-pointer hover:text-yellow-300  dark:text-white">
                        <a href="/">contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
