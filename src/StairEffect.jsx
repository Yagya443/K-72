import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const StairEffect = (props) => {
    const stairParent = useRef(null);
    const pageRef = useRef(null);
    const currentPath = useLocation().pathname;

    useGSAP(() => {
        gsap.set(".stairs", {
            y: 0,
        });

        const tl = gsap.timeline();

        tl.set(stairParent.current, {
            display: "block",
        });

        tl.from(".stairs", {
            height: 0,
            stagger: {
                amount: -0.3,
            },
            ease: "power2.out",
        });

        tl.to(".stairs", {
            y: "100%",
            stagger: {
                amount: 0.3,
            },
            ease: "power2.in",
        });

        tl.set(stairParent.current, {
            display: "none",
        });

        gsap.from(pageRef.current,{
            opacity:0,
            delay:1,
        })

    }, [currentPath]);

    return (
        < >
            <div
                ref={stairParent}
                className="fixed top-0 left-0 h-screen w-full z-50"
            >
                <div className="flex h-full w-full">
                    <div className="stairs flex-1 h-full bg-black"></div>
                    <div className="stairs flex-1 h-full bg-black"></div>
                    <div className="stairs flex-1 h-full bg-black"></div>
                    <div className="stairs flex-1 h-full bg-black"></div>
                    <div className="stairs flex-1 h-full bg-black"></div>
                </div>
            </div>
            <div ref={pageRef}>{props.children}</div>
        </>
    );
};

export default StairEffect;
