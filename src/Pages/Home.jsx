import React from "react";
import Video from "../Home/Video";
import HomeHeroText from "../Home/HomeHeroText";
import HomeBottomText from "../Home/HomeBottomText";

const Home = () => {
    return (
        <div className="text-white">
            <div className="w-screen h-screen fixed -z-100">
                <Video />
            </div>
            <div className="absolute w-[20%] right-20 bottom-30 font-bold  [text-indent: 40px]">
                      <s></s>K72 is an agency that builds brands from every angle. Today,
                tomorrow and years from now. We think the best sparks fly when
                comfort zones get left behind and friction infuses our
                strategies, brands and communications with real feeling. We’re
                transparent, honest and say what we mean, and when we believe in
                something, we’re all in.
            </div>
            <div className="title h-screen w-screen relative flex flex-col justify-between py-10">
                <HomeHeroText />
                <HomeBottomText />
            </div>
        </div>
    );
};

export default Home;
