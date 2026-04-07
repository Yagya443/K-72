const ProjectsPages = ({ img1, img2 }) => {
    return (
        <>
            <div className=" group h-full w-1/2 hover:rounded-[40px] relative cursor-pointer">
                <img
                    className="h-full w-full object-cover  hover:rounded-[40px]  hover:grayscale-60 transition-all "
                    src={img1}
                />
                <div className=" opacity-0 absolute left-1/2 top-1/2 py-2 px-6 transition-all group-hover:opacity-100 text-6xl text-nowrap rounded-3xl border-2 -translate-1/2 z-50 text-white">
                    View Project
                </div>
            </div>
            <div className=" group h-full w-1/2 hover:rounded-[40px] relative cursor-pointer">
                <img
                    className="h-full w-full object-cover  hover:rounded-[40px]  hover:grayscale-40 transition-all "
                    src={img2}
                />
                <div className=" opacity-0 absolute left-1/2 top-1/2 py-2 px-6 transition-all group-hover:opacity-100 text-6xl text-nowrap rounded-3xl border-2 -translate-1/2 z-50 text-white">
                    View Project
                </div>
            </div>
        </>
    );
};

export default ProjectsPages;
