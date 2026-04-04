import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    useGSAP(() => {
        const boxes = gsap.utils.toArray(".boxes");

        ScrollTrigger.create({
            trigger: ".boxes-wrapper",
            start: "top top",
            end: "+=2000",
            scrub: true,
            markers: true,
            onUpdate: (self) => {
                const progress = self.progress; // 0 → 1
                const total = boxes.length;

                const index = Math.floor(progress * total);

                boxes.forEach((box, i) => {
                    if (i <= index) {
                        gsap.to(box, { height: 500, duration: 0.2 });
                    } else {
                        gsap.to(box, { height: 300, duration: 0.2 });
                    }
                });
            },
        });
    }, []);

    return (
        <div className="project-wrapper h-screen w-full pt-1 ">
            <h1 className="text-[200px] relative mt-64 ml-4">
                WORK<sup className="text-5xl absolute top-10">17</sup>
            </h1>
            <div className="boxes-wrapper grid grid-cols-2 gap-3 items-start auto-rows-max px-3">
                <div className="boxes bg-amber-400 py-3 origin-bottom h-[300px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio, odio? Iusto, veritatis. Doloremque dignissimos id
                    dolor, in a nesciunt cupiditate ipsam mollitia magnam facere
                    vel repudiandae velit reprehenderit? Necessitatibus error
                    eos enim. Cupiditate mollitia eligendi est laudantium
                    officia. Incidunt reiciendis veritatis numquam perferendis
                    doloremque, modi corporis illum, vero ut eaque amet nesciunt
                    maiores perspiciatis illo beatae ex nulla, assumenda
                    consequuntur? Est laboriosam atque dolores earum vero
                    magnam? Architecto aspernatur modi ea atque, sunt libero
                    repellendus corporis eveniet commodi impedit illo voluptatum
                    ipsum eos non adipisci nostrum quo aut earum. Laborum quidem
                    facere dolore quam accusantium? Ex asperiores porro fuga
                    voluptatibus.
                </div>
                <div className="boxes bg-amber-400 py-3 origin-bottom h-[300px]">
                    hello
                </div>
                <div className="boxes bg-amber-400 py-3 origin-bottom h-[300px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio, odio? Iusto, veritatis. Doloremque dignissimos id
                    dolor, in a nesciunt cupiditate ipsam mollitia magnam facere
                    vel repudiandae velit reprehenderit? Necessitatibus error
                    eos enim. Cupiditate mollitia eligendi est laudantium
                    officia. Incidunt reiciendis veritatis numquam perferendis
                    doloremque, modi corporis illum, vero ut eaque amet nesciunt
                    maiores perspiciatis illo beatae ex nulla, assumenda
                    consequuntur? Est laboriosam atque dolores earum vero
                    magnam? Architecto aspernatur modi ea atque, sunt libero
                    repellendus corporis eveniet commodi impedit illo voluptatum
                    ipsum eos non adipisci nostrum quo aut earum. Laborum quidem
                    facere dolore quam accusantium? Ex asperiores porro fuga
                    voluptatibus.
                </div>
                <div className="boxes bg-amber-400 py-3 origin-bottom h-[300px]">
                    hello
                </div>
                <div className="boxes bg-amber-400 py-3 origin-bottom h-[300px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio, odio? Iusto, veritatis. Doloremque dignissimos id
                    dolor, in a nesciunt cupiditate ipsam mollitia magnam facere
                    vel repudiandae velit reprehenderit? Necessitatibus error
                    eos enim. Cupiditate mollitia eligendi est laudantium
                    officia. Incidunt reiciendis veritatis numquam perferendis
                    doloremque, modi corporis illum, vero ut eaque amet nesciunt
                    maiores perspiciatis illo beatae ex nulla, assumenda
                    consequuntur? Est laboriosam atque dolores earum vero
                    magnam? Architecto aspernatur modi ea atque, sunt libero
                    repellendus corporis eveniet commodi impedit illo voluptatum
                    ipsum eos non adipisci nostrum quo aut earum. Laborum quidem
                    facere dolore quam accusantium? Ex asperiores porro fuga
                    voluptatibus.
                </div>
                <div className="boxes bg-amber-400 py-3 origin-bottom h-[300px]">
                    hello
                </div>
            </div>
        </div>
    );
};

export default Projects;
