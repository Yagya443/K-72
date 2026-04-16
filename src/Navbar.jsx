import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
    const scrollRef = useRef(0);

    const [showMenu, setShowMenu] = useState(true);

    useGSAP(() => {
        function hideNav() {
            gsap.to(".agencyItem, .projectItem", {
                y: "-105%",
                ease: "power3.out",
            });
            gsap.to(".menuItem", {
                y: "-60%",
                ease: "power3.out",
            });
            gsap.to(".icon-wrapper", {
                y: 80,
                ease: "power3.out",
            });
            setShowMenu(false);
        }
        function showNav() {
            gsap.to(".agencyItem, .projectItem, .menuItem", {
                y: 0,
            });
            gsap.to(".icon-wrapper", {
                y: 0,
            });
            setShowMenu(true);
        }
        const handleNavbar = () => {
            if (window.scrollY <= 50 && scrollRef.current !== -1) {
                scrollRef.current = -1;
                showNav();
            } else if (window.scrollY > 50 && scrollRef.current !== 1) {
                scrollRef.current = 1;
                hideNav();
            }
        };
        document.addEventListener("wheel", handleNavbar);

        return () => {
            document.removeEventListener("wheel", handleNavbar);
        };
    }, []);

    return (
        <div className="navBar fixed right-0 top-0 z-[100] flex text-2xl text-white  items-start">
            <Link
                to="/projects"
                className="navBaritem projectItem bg-black pr-48 pl-4 pt-6 pb-2"
            >
                <div
                    className={`${
                        showMenu ? "opacity-100 " : "opacity-0"
                    } itemtext`}
                >
                    Projects
                </div>
            </Link>

            <Link
                to="/agency"
                className="navBaritem agencyItem bg-black pr-48 pl-4 pt-18 pb-2"
            >
                <div
                    className={`${
                        showMenu ? "opacity-100 " : "opacity-0"
                    } itemtext`}
                >
                    Agency
                </div>
            </Link>

            <Link
                to="/menu"
                className="navBaritem relative menuItem bg-black pr-48 pl-4 pb-2 pt-30 "
            >
                <div
                    className={`${
                        showMenu ? "opacity-100 " : "opacity-0"
                    }  itemtext`}
                >
                    Menu
                </div>
                <div className="icon-wrapper absolute z-30 right-2 top-0">
                    <IoMenuOutline size={60} />
                </div>
            </Link>
        </div>
    );
};

export default Navbar;
