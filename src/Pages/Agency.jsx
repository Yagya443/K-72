import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

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
            name: "Aarav Sharma",
            position: "CEO",
            img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop",
        },
        {
            name: "Priya Mehta",
            position: "CTO",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
        },
        {
            name: "Rohan Verma",
            position: "CFO",
            img: "https://images.unsplash.com/photo-1584794263691-2dd2f668cfee?q=80&w=687&auto=format&fit=crop",
        },
        {
            name: "Sneha Iyer",
            position: "HR Manager",
            img: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1974&auto=format&fit=crop",
        },
        {
            name: "Karan Patel",
            position: "Dev Manager",
            img: "https://images.unsplash.com/photo-1712546852186-4e180297529e?q=80&w=687&auto=format&fit=crop",
        },
        {
            name: "Neha Gupta",
            position: "Marketing Manager",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop",
        },
        {
            name: "Aditya Singh",
            position: "Product Manager",
            img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop",
        },
        {
            name: "Kavya Nair",
            position: "UI/UX Designer",
            img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop",
        },
        {
            name: "Ananya Kapoor",
            position: "Data Analyst",
            img: "https://images.unsplash.com/photo-1677005142678-d141a1eabbe9?w=600&auto=format&fit=crop&q=60",
        },
    ];

    const images = [
        "https://images.unsplash.com/photo-1723854222924-c70ae9efa8ca?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1761839258289-72f12b0de058?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1731093133109-78ea287c8b30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
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
        gsap.to(".photoDiv2", {
            y: -720,
            scrollTrigger: {
                // markers: true,
                pin: true,
                pinSpacing: false,
                scrub: 1,
                trigger: ".box-wrapper",
                start: "center-=400 center",
                end: "center+=200 center",
            },
        });
        gsap.to(".hoverImg", {
            scrollTrigger: {
                markers: true,
                scrub: 1,
                // trigger: ".hoverImg",
                start: "center center",
                end: "center+=200 center",
                pin: true,
            },
        });

        // gsap.to(".projectImgContainer", {
        //     scrollTrigger: {
        //         trigger: ".projectImgContainer",
        //         start: "top top",
        //         end: "bottom bottom",
        //         scrub: 1,
        //         pin: true,
        //         markers: true,
        //     },
        // });

        const projects = document.querySelectorAll(".projectImg1");
        projects.forEach((project, i) => {
            if (i === 0) return;

            gsap.to(project, {
                y: "-70vh",
                scrollTrigger: {
                    trigger: project,
                    markers:true,
                    start: "top+=50 center",
                    end: "center+=200 center",
                    scrub: 1,
                },
            });
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
            <div className={`section2 mt-32 min-h-screen w-full relative`}>
                <div className="box-wrapper h-auto rounded-2xl flex w-full items-center flex-col">
                    <div className="photoDiv1  w-120 rounded-2xl  ">
                        <img
                            src={teamData[2].img}
                            className="h-full w-full rounded-2xl object-cover"
                        />
                    </div>
                    <div className="photoDiv2 h-180 w-120 rounded-2xl ">
                        <img
                            src={teamData[3].img}
                            className="h-full w-full object-cover rounded-2xl"
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
                            <h1 className="text-5xl">{team.name}</h1>
                        </div>
                    ))}
                    <div
                        className={`hoverImg h-125 w-98 absolute -top-16 left-98 overflow-hidden`}
                    >
                        {imgDisplay !== -1 && (
                            <img
                                className={`w-full h-full object-cover rounded-3xl transition-transform duration-500 ease-out
      ${imgDisplay !== -1 ? "translate-x-0" : "-translate-x-full"}
    `}
                                src={teamData[imgDisplay].img}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className="min-h-[200vh] w-full relative mt-24">
                <p className="w-full flex justify-center sticky top-12 text-5xl text-amber-50 z-10">
                    View All Projects
                </p>

                <div className="projectImgContainer relative w-full">
                    {images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            className={`projectImg1 w-full h-[90vh] rounded-4xl object-cover absolute`}
                            style={{ top: `${idx * 80 - 10}vh` }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Agency;
