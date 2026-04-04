import Video from "./Video";

const HomeHeroText = () => {
    return (
        <div>
            <div className="text-9xl text-center mt-22 flex flex-col">
                <div>The Spark For</div>
                <div className="flex items-center justify-center ">
                    <div>All</div>
                    <div className="w-[220px] h-[120px] mx-6 rounded-full overflow-hidden ">
                        <Video className="rounded-full" />
                    </div>
                    <div>Things</div>
                </div>
                <div>Creative</div>
            </div>
        </div>
    );
};

export default HomeHeroText;
