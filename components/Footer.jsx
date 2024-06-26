"use client";
import { Link } from "react-scroll";

export default function Footer() {
    return (
        <footer className="footer p-10 bg-neutral md:h-80 text-neutral-content">
            <nav className="max-w-80">
                <Link
                    activeClass="active"
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    <img
                        src="/bgremovedlogofinal.png"
                        alt=""
                        className="w-24 h-fit cursor-pointer "
                    />
                </Link>
                <p className="">
                    Premis Vision UK is a reputable film production company dedicated to
                    creating compelling and impactful cinema. With a keen eye for
                    storytelling and a commitment to excellence, Premis Vision UK
                    specializes in producing high-quality films that resonate with
                    audiences worldwide.
                </p>
            </nav>
            <nav>
                <header className="footer-title text-white text-xl">Quick Links</header>
                <a className="link link-hover" href="/">
                    Our Services
                </a>
                <a className="link link-hover" href="/contact">
                    About Us
                </a>
                <a className="link link-hover" href="/">
                    Gallery
                </a>
                <a className="link link-hover" href="/">
                    Testimonials
                </a>
                <a className="link link-hover" href="/contact">
                    Contact Us
                </a>
                <a className="link link-hover">Support and Help</a>
            </nav>
            <nav>
                <header className="footer-title text-white text-xl">Terms </header>
                <a className="link link-hover" href="/privacy">
                    Privacy policy
                </a>
                <a className="link link-hover" href="/privacy">
                    Cookie policy
                </a>
                <a className="link link-hover" href="/privacy">
                    Certificate and licencing
                </a>
            </nav>
            {/* <nav className="m-auto text-center md:text-left">
                <header className="footer-title text-gray-700 w-full opacity-100">
                    Connect with Us
                </header>
                 <div className="grid grid-flow-col gap-2">
                    <Link href="https://www.youtube.com" target="_blank">
                       logo
                    </Link>
                    <Link href="https://www.facebook.com" target="_blank">
                       logo
                    </Link>
                    <Link href="https://www.instagram.com" target="_blank">
                      logo
                    </Link>
                    <Link href="https://www.tiktok.com" target="_blank">
                       logo
                    </Link>
                </div> 
            </nav> */}
        </footer>
    );
}
