import { useGSAP } from "@gsap/react";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaHeart } from "react-icons/fa";

const Contact = () => {
    gsap.registerPlugin(ScrollTrigger);

    const [scrollUpwards, setScrollUpwards] = useState(true);

    const arrRef = useRef(null);

    useGSAP(() => {
        const arr = gsap.utils.toArray(
            arrRef.current.querySelectorAll(
                ".contact-manquee .contact-manqueepara",
            ),
        );

        gsap.fromTo(
            arr,
            { x: 0 },
            {
                x: "-100%",
                duration: 9,
                ease: "none",
                repeat: -1,
            },
        );
    });

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const current = window.scrollY;
            if (current > lastScrollY) {
                setScrollUpwards(false);
                lastScrollY = current;
            } else {
                setScrollUpwards(true);
                lastScrollY = current;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScrollEnd = () => {

            if (
                window.innerHeight + window.scrollY >=
                document.body.scrollHeight - 10
            ) {
                window.scrollTo(0, 0);
            }
        };

        window.addEventListener("scroll", handleScrollEnd);
        return () => {
            window.removeEventListener("scroll", handleScrollEnd);
        };
    }, []);

    return (
        <div
            className="contact-wrapper w-full bg-black pt-1 overflow-hidden pb-20"
            ref={arrRef}
        >
            {Array.from({ length: 15 }).map((_, i) => (
                <div key={i}>
                    <div className="contact-wrapper-title text-[150px] w-[50%] text-center mt-24 mx-auto [line-height:130px] ">
                        To Talk About Your Project
                    </div>
                    <div className="contact-wrapper-text flex justify-between w-[80%] items-center relative bottom-18">
                        <p className="text-center">
                            Onscreen or in an office.
                            <br /> Here. There. <br />
                            Anywhere.
                        </p>
                        <p className="text-center">
                            525 Av. Viger O - Suite 400 <br /> Montréal, QC H2Z
                            1G6 →
                        </p>
                    </div>
                    <div
                        className={`contact-manquee w-[110%] bg-amber-300 px-4 -translate-x-4 flex gap-8 mt-16 ${scrollUpwards ? "rotate-5" : "-rotate-5"} transition-all duration-400`}
                    >
                        <div className="contact-manqueepara flex items-center gap-8 ">
                            <p className="text-[150px] ">
                                YAGNAAKV99@GMAIL.COM
                            </p>
                            <FaHeart className="contact-manqueepara-heart" size={120} />
                        </div>
                        <div className="contact-manqueepara flex items-center gap-8 ">
                            <p className="text-[150px] ">
                                YAGNAAKV99@GMAIL.COM
                            </p>
                            <FaHeart className="contact-manqueepara-heart" size={120} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Contact;
