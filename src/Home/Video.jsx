import React from "react";

const Video = ({ className = "" }) => {
    return (
        <>
            <video
                className={`${className} h-full w-full object-cover pointer-events-none `}
                loop
                autoPlay
                muted
                src="../src/Media/69496b2d.mp4"
            />
        </>
    );
};

export default Video;
