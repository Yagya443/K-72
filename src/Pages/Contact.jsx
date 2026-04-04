import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Contact = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to(".manique", {
            scrollTrigger: {
                trigger: ".manique",
                start: "top 70%",
                end: "top 20%",
                markers: true,
                scrub: 2,
            },
        });

        function handlemarque(e){
          console.log(e);
          
        }

        document.addEventListener("wheel", handlemarque);

        return(
          document.removeEventListener("wheel", handlemarque)
        );
    });

    return (
        <div className="h-[400vh] w-full contact-wrapper bg-black pt-1 overflow-y-hidden">
            <div className="text-[150px] w-[50%] text-center mt-36 mx-auto [line-height:130px]">
                To Talk About Your Project
            </div>
            <div className="flex justify-between w-[80%] items-center mx-auto hell relative bottom-18">
                <p className="text-center">
                    Onscreen or in an office.
                    <br /> Here. There. <br />
                    Anywhere.
                </p>
                <p className="text-center">
                    525 Av. Viger O - Suite 400 <br /> Montréal, QC H2Z 1G6 →
                </p>
            </div>
            <div className="manique-track flex bg-amber-300">
              <p className="text-[148px]">YAGYAAKV99@GMAIL.COM</p>
              <p className="text-[148px]">YAGYAAKV99@GMAIL.COM</p>
            </div>
            <div>Hello</div>
        </div>
    );
};

export default Contact;
