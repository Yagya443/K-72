import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectsPages from "../Projects/ProjectsPages";
import Logo from "../../Logo";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projects = [
        {
            image1: "https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c",
            image2: "https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14",
        },
        {
            image1: "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e",
            image2: "https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022",
        },
        {
            image1: "https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479",
            image2: "https://k72.ca/images/caseStudies/BEST/BEST_site_Thumbnail.jpg?w=1280&h=960&s=2b73eecfda8d95a72efa768383b50860",
        },
        {
            image1: "https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996",
            image2: "https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c",
        },
        {
            image1: "https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124",
            image2: "https://k72.ca/images/caseStudies/OSM/thumbnailimage_OSM.jpg?w=1280&h=960&s=7a3a71e610146472e6439cc8c765fccd",
        },
        {
            image1: "https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda",
        },
    ];

    const projectArrLen = projects.length;

    useGSAP(() => {
        gsap.from(".individualBox", {
            height: "50px",
            stagger: 0.45,
            transformOrigin: "top",
            ease: "none",
            scrollTrigger: {
                scrub: 0.1,
                trigger: ".boxes-wrapper",
                // markers: true,
                start: "top 96%",
                end: `+=${projectArrLen * 525}`,
            },
        });
    }, []);

    return (
        <div className="project-wrapper min-h-screen w-full pt-1 ">
            <Link to="/">
                <Logo />
            </Link>
            <h1 className="project-text text-[200px] relative mt-58 ml-4">
                WORK<sup className="text-5xl absolute top-10">17</sup>
            </h1>
            <div className="boxes-wrapper -mt-16 w-full  ">
                {projects.map((elem, idx) => (
                    <div
                        key={idx}
                        className="individualBox w-full h-[525px] flex gap-4  mb-4"
                    >
                        <ProjectsPages img1={elem.image1} img2={elem.image2} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
