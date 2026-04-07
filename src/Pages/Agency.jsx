import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { Timeline } from "gsap/gsap-core.js";

const Agency = () => {
    const imgDiv = useRef(null);
    const [index, setIndex] = useState(0);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const [heightBG, setheightBG] = useState(false);
    const [imgDisplay, setImgDisplay] = useState(-1);

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;
            setScreenHeight(current);

            if (current >= 1200) {
                setheightBG(true);
            } else {
                setheightBG(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    gsap.registerPlugin(ScrollTrigger);

    const teamData = [
        {
            firstName: "Aarav",
            lastName: "Sharma",
            position: "CEO",
            img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop",
        },
        {
            firstName: "Priya",
            lastName: "Mehta",
            position: "CTO",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
        },
        {
            firstName: "Rohan",
            lastName: "Verma",
            position: "CFO",
            img: "https://images.unsplash.com/photo-1584794263691-2dd2f668cfee?q=80&w=687&auto=format&fit=crop",
        },
        {
            firstName: "Sneha",
            lastName: "Iyer",
            position: "HR Manager",
            img: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1974&auto=format&fit=crop",
        },
        {
            firstName: "Karan",
            lastName: "Patel",
            position: "Dev Manager",
            img: "https://images.unsplash.com/photo-1712546852186-4e180297529e?q=80&w=687&auto=format&fit=crop",
        },
        {
            firstName: "Neha",
            lastName: "Gupta",
            position: "Marketing Manager",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop",
        },
        {
            firstName: "Aditya",
            lastName: "Singh",
            position: "Product Manager",
            img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop",
        },
        {
            firstName: "Kavya",
            lastName: "Nair",

            position: "UI/UX Designer",
            img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop",
        },
        {
            firstName: "Ananya",
            lastName: "Kapoor",
            position: "Data Analyst",
            img: "https://images.unsplash.com/photo-1677005142678-d141a1eabbe9?w=600&auto=format&fit=crop&q=60",
        },
    ];

    const images = [
        {
            image: "https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757",
            para: "opto-réseau",
            title: "We See You Like No Other",
        },
        {
            image: "https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000",
            para: "Lamajeure",
            title: "Lamajeure",
        },
        {
            image: "https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821",
            para: "Lassonde",
            title: "Fruité",
        },
    ];

    useGSAP(() => {
        gsap.to(imgDiv.current, {
            scrollTrigger: {
                trigger: imgDiv.current,
                start: "top 10%",
                end: "top -70%",
                // markers: true,
                scrub: 2,
                pin: true,
                onUpdate: function (e) {
                    let newIdx;
                    if (e.progress < 1) {
                        newIdx = Math.floor(e.progress * teamData.length);
                    } else {
                        newIdx = teamData.length - 1;
                    }
                    setIndex(newIdx);
                },
            },
        });
    });

    useGSAP(() => {
        gsap.to(".card2 ", {
            y: "-97vh",
            scrollTrigger: {
                // markers: true,
                pin: true,
                pinSpacing: false,
                scrub: 1,
                trigger: ".box-wrapper",
                start: "center-=375 center",
                end: "center+=200 center",
            },
        });
        gsap.to(".hoverImg", {
            scrollTrigger: {
                // markers: true,
                scrub: 1,
                trigger: ".hoverImg",
                start: "center center",
                end: "center+=200 center",
                pin: true,
            },
        });

        gsap.to(".projectImgContainer", {
            scrollTrigger: {
                trigger: ".projectImgContainer",
                // markers: true,
                start: "center+=300 center",
                end: `+=${images.length * 100}%`,
                pin: true,
            },
        });

        document.querySelectorAll(".projectImg").forEach((card, idx) => {
            if (idx === 0) {
                gsap.to(card.querySelector("img"), {
                    scale: 1.1,
                    ease: "power2.in",
                    scrollTrigger: {
                        trigger: card,
                        start: "top center",
                        end: "center+=200 center",
                        markers: true,
                        scrub: 2,
                    },
                });
                return;
            }

            gsap.to(card, {
                y: `-${idx * 75}vh`,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top-=250 center",
                    end: "center+=200 center",
                    scrub: 2,
                },
            });

            gsap.to(card.querySelector("img"), {
                scale: 1.1,
                ease: "power2.in",
                scrollTrigger: {
                    trigger: card,
                    // markers:true,
                    start: "top-=250 center",
                    end: "center+=200 center",
                    scrub: 2,
                },
            });
        });

        gsap.to(".firstName-wrapper,.firstName-wrapper2", {
            xPercent: -50,
            duration: 8,
            ease: "none",
            repeat: -1,
        });

        gsap.fromTo(
            ".lastName-wrapper, .lastName-wrapper2",
            { xPercent: -100 },
            {
                xPercent: 0,
                duration: 12,
                ease: "none",
                repeat: -1,
            },
        );

        ScrollTrigger.create({
            trigger: ".photoDiv1",
            // markers: true,
            start: "top center+=50",
            end: "center center",
            onEnter: () => {
                gsap.to(".lastName-wrapper, .firstName-wrapper", {
                    opacity: 1,
                });
            },
            onLeave: () => {
                gsap.to(".lastName-wrapper, .firstName-wrapper", {
                    opacity: 0,
                });
            },
            onEnterBack: () => {
                gsap.to(".lastName-wrapper, .firstName-wrapper", {
                    opacity: 1,
                });
            },
            onLeaveBack: () => {
                gsap.to(".lastName-wrapper, .firstName-wrapper", {
                    opacity: 0,
                });
            },
        });

        ScrollTrigger.create({
            trigger: ".photoDiv1",
            start: "center+=100 center",
            end: "bottom+=500 center",
            markers: true,
            onEnter: () => {
                gsap.to(".lastName-wrapper2, .firstName-wrapper2", {
                    opacity: 1,
                });
            },
            onLeave: () => {
                gsap.to(".lastName-wrapper2, .firstName-wrapper2", {
                    opacity: 0,
                });
            },
            onEnterBack: () => {
                gsap.to(".lastName-wrapper2, .firstName-wrapper2", {
                    opacity: 1,
                });
            },
            onLeaveBack: () => {
                gsap.to(".lastName-wrapper2, .firstName-wrapper2", {
                    opacity: 0,
                });
            },
        });
    });

    return (
        <div
            className={`agency min-h-screen w-full ${heightBG ? "bg-gray-800" : "bg-amber-50"}`}
        >
            <div className="section1 min-h-[200vh] w-full ">
                <div
                    className="absolute h-[50vh] top-40 left-130 w-[15vw] overflow-hidden rounded-3xl"
                    ref={imgDiv}
                >
                    <img
                        className="object-fit h-full w-full pointer-events-none"
                        src={teamData[index].img}
                        alt={index}
                    />
                </div>
                <div>
                    <div className="relative title top-[60vh] text-[240px] text-center [line-height:200px]">
                        <h1>
                            SEVEN7Y
                            <br />
                            TWO
                        </h1>
                    </div>
                    <div className="relative pl-[40%] top-[70vh] ">
                        <p className="para w-[90%] text-[45px] [line-height:45px] ">
                            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; We’re
                            inquisitive and open-minded, and we make sure
                            creativity crowds out ego from every corner. A brand
                            is a living thing, with values, a personality and a
                            story. If we ignore that, we can achieve short-term
                            success, but not influence that goes the distance.
                            We bring that perspective to every brand story we
                            help tell.
                        </p>
                    </div>
                </div>
            </div>
            {/* teamInfo */}
            <div
                className={`section2 mt-32 min-h-screen w-full relative overflow-hidden`}
            >
                <div className="box-wrapper h-auto rounded-2xl flex w-full items-center flex-col">
                    {/* First Images */}
                    <div className="card1 relative w-125 rounded-2xl">
                        <div className="absolute left-0 top-[20vh]">
                            <div className="firstName-wrapper flex w-[200vw] z-0">
                                <h1 className="text-[12rem] text-[#ffcc00] w-[100vw]">
                                    {teamData[2].firstName}
                                </h1>
                                <h1 className="text-[12rem] text-[#ffcc00] w-[100vw]">
                                    {teamData[2].firstName}
                                </h1>
                            </div>
                            <div className="lastName-wrapper flex w-[200vw] relative z-20">
                                <div className="flex items-end gap-4 justify-end w-[100vw]">
                                    <h1 className="text-[8rem] text-[#ffcc00]">
                                        {teamData[2].lastName}
                                    </h1>
                                    <h4 className="text-4xl text-amber-50 pb-10">
                                        {teamData[2].position}
                                    </h4>
                                </div>
                                <div className="flex items-end justify-end gap-4 w-[100vw]">
                                    <h1 className="text-[8rem] text-[#ffcc00]">
                                        {teamData[2].lastName}
                                    </h1>
                                    <h4 className="text-4xl text-amber-50 pb-10">
                                        {teamData[2].position}
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <img
                            className="photoDiv1 h-full w-full object-cover relative z-10"
                            src={teamData[2].img}
                        />
                    </div>

                    {/* Second Images */}
                    <div className="card2 relative z-20 w-125 rounded-2xl">
                        <div className="absolute left-0 top-[20vh] w-full ">
                            <div className="firstName-wrapper2 flex w-[200vw] z-30">
                                <h1 className="text-[12rem] text-[#ffcc00] w-[100vw]">
                                    {teamData[3].firstName}
                                </h1>
                                <h1 className="text-[12rem] text-[#ffcc00] w-[100vw]">
                                    {teamData[3].firstName}
                                </h1>
                            </div>
                            <div className="lastName-wrapper2 flex w-[200vw] relative z-50">
                                <div className="flex items-end justify-end gap-4 w-[100vw]">
                                    <h1 className="text-[8rem] text-[#ffcc00]">
                                        {teamData[3].lastName}
                                    </h1>
                                    <h4 className="text-4xl text-amber-50 pb-10">
                                        {teamData[3].position}
                                    </h4>
                                </div>
                                <div className="flex items-end justify-end gap-4 w-[100vw]">
                                    <h1 className="text-[8rem] text-[#ffcc00]">
                                        {teamData[3].lastName}
                                    </h1>
                                    <h4 className="text-4xl text-amber-50 pb-10">
                                        {teamData[3].position}
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <img
                            className="photoDiv2 h-full w-full object-cover relative z-40"
                            src={teamData[3].img}
                        />
                    </div>
                </div>

                <div className="w-full border-amber-50 border-t-2 relative">
                    {teamData.map((team, idx) => (
                        <div
                            className={`teamInfo w-full flex justify-between py-2 px-4 border-b-2 text-amber-50 relative cursor-pointer ${imgDisplay === idx && "bg-[#facc15] "}`}
                            key={idx}
                            onMouseEnter={() => setImgDisplay(idx)}
                            onMouseLeave={() => setImgDisplay(-1)}
                        >
                            <h3 className="text-xl">{team.position}</h3>
                            <h1 className="text-5xl">
                                {team.firstName} {team.lastName}
                            </h1>
                        </div>
                    ))}
                    <div
                        className={`hoverImg h-125 w-98 absolute -top-16 left-98 overflow-hidden`}
                    >
                        {imgDisplay !== -1 && (
                            <img
                                className={`w-full h-full object-cover rounded-3xl z-30 transition-transform duration-500 ease-out
      ${imgDisplay !== -1 ? "translate-x-0" : "-translate-x-full"}
    `}
                                src={teamData[imgDisplay].img}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className="min-h-[100vh] w-full relative mt-72">
                <p className="w-full flex justify-center sticky top-8  text-5xl text-amber-50 z-10">
                    View All Projects
                </p>

                <div className="projectImgContainer mt-2 relative w-full">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className="projectImg absolute w-full rounded-4xl h-[90vh] overflow-hidden"
                            style={{
                                top: `${idx * 80}vh`,
                                zIndex: idx,
                            }}
                        >
                            <img
                                src={img.image}
                                className={`w-full h-full rounded-4xl object-cover absolute`}
                            />
                            <div className="absolute left-1/2 top-1/2 -translate-1/2 text-center text-amber-50 text-nowrap ">
                                <div className="text-4xl font-semibold">
                                    {img.para}
                                </div>
                                <div className="text-8xl font-bold">
                                    {img.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Agency;
