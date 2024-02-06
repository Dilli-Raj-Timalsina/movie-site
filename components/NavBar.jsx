"use client";
import { Link } from "react-scroll";

export default function NavBar() {
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
                                src="/logo.png"
                                alt=""
                                className="w-32 h-fit cursor-pointer"
                            />
                        </a>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className=" text-white menu flex gap-6 items-center menu-horizontal text-lg">
                            {/* Navbar menu content here */}
                            <li className="cursor-pointer hover:text-yellow-300 bg-none">
                                <a>Home</a>
                            </li>
                            <li className="cursor-pointer hover:text-yellow-300 bg-none">
                                <a>About Us</a>
                            </li>
                            <li className="cursor-pointer hover:text-yellow-300 bg-none">
                                <a>Services</a>
                            </li>
                            <li className="cursor-pointer hover:text-yellow-300 bg-none">
                                <a>Clients</a>
                            </li>
                            <li className="cursor-pointer hover:text-yellow-300 bg-none">
                                <a>Gallery</a>
                            </li>
                            <li className="cursor-pointer hover:text-yellow-300 bg-none">
                                <a>Blogs</a>
                            </li>
                            <li className="cursor-pointer hover:text-yellow-300 ">
                                <a>Contact Us</a>
                            </li>

                            {/* <li className=" cursor-pointer hover:text-slate-400">
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                >
                                    Contact Us
                                </Link>
                            </li> */}
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
                    <li className="cursor-pointer hover:text-yellow-300 bg-none">
                        <a>Home</a>
                    </li>
                    <li className="cursor-pointer hover:text-yellow-300 bg-none ">
                        <a>Services</a>
                    </li>
                    <li className="cursor-pointer hover:text-yellow-300 bg-none ">
                        <a>About</a>
                    </li>
                    <li className="cursor-pointer hover:text-yellow-300 bg-none ">
                        <a>Projects</a>
                    </li>
                    <li className="cursor-pointer hover:text-yellow-300 bg-none ">
                        <a>Contacts</a>
                    </li>
                    <li className="cursor-pointer hover:text-yellow-300 bg-none ">
                        <a>Blogs</a>
                    </li>
                    <li className="cursor-pointer hover:text-yellow-300 bg-none ">
                        <a>FAQ</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
