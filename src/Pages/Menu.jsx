import { Link, useNavigate } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const Menu = () => {
    const navigate = useNavigate();
    const [fromOutSide, setFromOutSide] = useState(false);
    const [active, setActive] = useState(null);

    function onClose() {
        navigate(-1);
    }

    const handleMouseEnter = (e, index) => {
        const from = e.relatedTarget;

        if (from && from.closest(".group2")) {
            setFromOutSide(false);
        } else {
            setFromOutSide(true);
        }

        setActive(index);
    };

    return (
        /* <div className="menu-wrapper">
            <div className=" h-screen w-full bg-black text-white flex flex-col">
                <div className="h-1/6 w-full border flex justify-between">
                    <div className="main-font text-7xl ml-2">K72</div>
                    <div
                        className="flex items-center justify-end"
                        onClick={onClose}
                    >
                        <IoCloseOutline
                            size={200}
                            className="hover:text-[#facc15] cursor-pointer"
                        />
                    </div>
                </div>
                <Link
                    to="/projects"
                    className="group h-1/6 w-full border flex justify-center items-center overflow-hidden"
                >
                    <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
                        <div className="text-main text-9xl absolute">
                            <span>WORK</span>
                        </div>
                        <div className="text-hover absolute text-9xl">
                            <div className="w-screen overflow-hidden">
                                <div className="marquee-track flex w-[max-content] items-center ">
                                    <div className="text-nowrap">
                                        SEE EVERYTHING
                                    </div>
                                    <img
                                        className="h-[100px] w-[225px] rounded-full"
                                        src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"
                                    />
                                    <div className="text-nowrap">
                                        SEE EVERYTHING
                                    </div>
                                    <img
                                        className="h-[100px] w-[225px] rounded-full"
                                        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93"
                                    />
                                    <div className="text-nowrap">
                                        SEE EVERYTHING
                                    </div>
                                    <img
                                        className="h-[100px] w-[225px] rounded-full"
                                        src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"
                                    />
                                    <div className="text-nowrap">
                                        SEE EVERYTHING
                                    </div>
                                    <img
                                        className="h-[100px] w-[225px] rounded-full"
                                        src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link
                    to="/agency"
                    className="group h-1/6 w-full border flex justify-center items-center overflow-hidden"
                >
                    <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
                        <div className="text-main text-9xl absolute">
                            <span>AGENCY</span>
                        </div>

                        <div className="text-hover absolute text-9xl">
                            <div className="w-screen overflow-hidden">
                                <div className="marquee-track flex w-[max-content] items-center gap-[3rem]">
                                    <div className="text-nowrap">
                                        KNOW US MORE
                                    </div>
                                    <FaHeart size={110}/>
                                    <div className="text-nowrap">
                                        KNOW US MORE
                                    </div>
                                    <FaHeart size={110}/>
                                    <div className="text-nowrap">
                                        KNOW US MORE
                                    </div>
                                    <FaHeart size={110}/>
                                    <div className="text-nowrap">
                                        KNOW US MORE
                                    </div>
                                    <FaHeart size={110}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link
                    to="/contact"
                    className="group h-1/6 w-full border flex justify-center items-center overflow-hidden"
                >
                    <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
                        <div className="text-main text-9xl absolute">
                            <span>CONTACT</span>
                        </div>
                        <div className="text-hover absolute text-9xl">
                            <div className="w-screen overflow-hidden">
                                <div className="marquee-track flex w-[max-content] items-center gap-[3rem]">
                                    <div className="text-nowrap">
                                        SEND US MAIL
                                    </div>
                                    <img
                                        className="h-[100px] w-[225px] rounded-full"

                                        src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=1280&h=960&s=184feac75d6b23e52aff206bff3c3c45"
                                    />
                                    <div className="text-nowrap">
                                        SEND US MAIL
                                    </div>
                                    <img
                                        className="h-[100px] w-[225px] rounded-full"
                                        src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=1280&h=960&s=0710934494c383dae85863a13e713d46"
                                    />
                                    <div className="text-nowrap">
                                        SEND US MAIL
                                    </div>
                                    <img
                                        className="h-[100px] w-[225px] rounded-full"

                                        src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=1280&h=960&s=184feac75d6b23e52aff206bff3c3c45"
                                    />
                                    <div className="text-nowrap">
                                        SEND US MAIL
                                    </div>
                                    <img
                                        className="h-[100px] w-[225px] rounded-full"
                                        src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=1280&h=960&s=0710934494c383dae85863a13e713d46"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link
                    to="/blog"
                    className="group h-1/6 w-full border flex justify-center items-center overflow-hidden"
                >
                    <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
                        <div className="text-main text-9xl absolute">
                            <span>BLOG</span>
                        </div>
                        <div className="text-hover absolute text-9xl">
                            <div className="w-screen overflow-hidden">
                                <div className="marquee-track flex w-[max-content] items-center gap-[3rem]">
                                    <div className="text-nowrap">
                                        READ ARTICLES
                                    </div>
                                    <img
                                        className="h-[100px]"
                                        src="./src/Media/gta-v-style-art_938060-121.webp"
                                    />
                                    <div className="text-nowrap">
                                        READ ARTICLES
                                    </div>
                                    <img
                                        className="h-[100px]"
                                        src="./src/Media/gta-v-style-art_938060-121.webp"
                                    />
                                    <div className="text-nowrap">
                                        READ ARTICLES
                                    </div>
                                    <img
                                        className="h-[100px]"
                                        src="./src/Media/gta-v-style-art_938060-121.webp"
                                    />
                                    <div className="text-nowrap">
                                        READ ARTICLES
                                    </div>
                                    <img
                                        className="h-[100px]"
                                        src="./src/Media/gta-v-style-art_938060-121.webp"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                <div className="h-1/6 w-full border relative ">
                    <div className="flex gap-4 [font-family:var(--secondary-font)] absolute right-4 bottom-2">
                        <a className="border-2 px-2 rounded-2xl py-1 text-2xl hover:text-[#facc15]" href="http://facebook.com/">FB</a>
                        <a className="border-2 px-2 rounded-2xl py-1 text-2xl hover:text-[#facc15]" href="http://instagram.com/">IG</a>
                        <a className="border-2 px-2 rounded-2xl py-1 text-2xl hover:text-[#facc15]" href="http://linkedin.com/">LN</a>
                        <a className="border-2 px-2 rounded-2xl py-1 text-2xl hover:text-[#facc15]" href="https://beyonce.com/">BE</a>
                    </div>

                    <div className="flex gap-5 text-sm items-end h-full pb-2 justify-center">
                        <p className="hover:text-[#facc15] cursor-pointer">PRIVACY POLICY</p>
                        <p className="hover:text-[#facc15] cursor-pointer">PRIVACY NOTICE</p>
                        <p className="hover:text-[#facc15] cursor-pointer">ETHICS REFORT</p>
                        <p className="hover:text-[#facc15] cursor-pointer">CONSERT CHOICES</p>
                    </div>
                </div>
            </div>
        </div> */

        <div className="menu-wrapper">
            <div className=" h-screen w-full bg-black text-white flex flex-col">
                <div className="h-1/6 w-full border flex justify-between">
                    <div className="main-font text-7xl ml-2">K72</div>
                    <div
                        className="flex items-center justify-end"
                        onClick={onClose}
                    >
                        <IoCloseOutline
                            size={200}
                            className="hover:text-[#facc15] cursor-pointer"
                        />
                    </div>
                </div>

                <Link
                    to="/projects"
                    onMouseEnter={(e) => handleMouseEnter(e, 0)}
                    onMouseLeave={() => setFromOutSide(false)}
                    className="group2  h-1/6 w-full border flex justify-center items-center overflow-hidden transition-all"
                >
                    <span className="text-9xl">WORK</span>
                    <div
                        className={`hoverText ${fromOutSide && active === 0 ? "slideDown opacity-100" : ""} w-screen overflow-hidden hidden `}
                    >
                        <div className="marquee-track flex w-max items-center text-9xl">
                            <div className="text-nowrap">SEE EVERYTHING</div>

                            <img
                                className="h-[100px] w-[225px] rounded-full"
                                src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"
                            />
                            <div className="text-nowrap">SEE EVERYTHING</div>
                            <img
                                className="h-[100px] w-[225px] rounded-full"
                                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93"
                            />
                            <div className="text-nowrap">SEE EVERYTHING</div>
                            <img
                                className="h-[100px] w-[225px] rounded-full"
                                src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"
                            />
                            <div className="text-nowrap">SEE EVERYTHING</div>
                            <img
                                className="h-[100px] w-[225px] rounded-full"
                                src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93"
                            />
                        </div>
                    </div>
                </Link>
                <Link
                    to="/agency"
                    className="group2 h-1/6 w-full border flex justify-center items-center overflow-hidden transition-all"
                >
                    <span className="text-9xl">AGENCY</span>
                    <div className="hoverText w-screen overflow-hidden hidden ">
                        <div className="marquee-track flex w-[max-content] items-center gap-[3rem] text-9xl">
                            <div className="text-nowrap">KNOW US MORE</div>
                            <FaHeart size={110} />
                            <div className="text-nowrap">KNOW US MORE</div>
                            <FaHeart size={110} />
                            <div className="text-nowrap">KNOW US MORE</div>
                            <FaHeart size={110} />
                            <div className="text-nowrap">KNOW US MORE</div>
                            <FaHeart size={110} />
                        </div>
                    </div>
                </Link>
                <Link
                    to="/contact"
                    className="group2 h-1/6 w-full border flex justify-center items-center overflow-hidden"
                >
                    <span className="text-9xl">CONTACT</span>
                    <div className="hoverText w-screen overflow-hidden hidden ">
                        <div className="marquee-track flex w-[max-content] items-center gap-[3rem] text-9xl">
                            <div className="text-nowrap">SEND US MAIL</div>
                            <img
                                className="h-[100px] w-[225px] rounded-full"
                                src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=1280&h=960&s=184feac75d6b23e52aff206bff3c3c45"
                            />
                            <div className="text-nowrap">SEND US MAIL</div>
                            <img
                                className="h-[100px] w-[225px] rounded-full"
                                src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=1280&h=960&s=0710934494c383dae85863a13e713d46"
                            />
                            <div className="text-nowrap">SEND US MAIL</div>
                            <img
                                className="h-[100px] w-[225px] rounded-full"
                                src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=1280&h=960&s=184feac75d6b23e52aff206bff3c3c45"
                            />
                            <div className="text-nowrap">SEND US MAIL</div>
                            <img
                                className="h-[100px] w-[225px] rounded-full"
                                src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=1280&h=960&s=0710934494c383dae85863a13e713d46"
                            />
                        </div>
                    </div>
                </Link>
                <Link
                    to="/blog"
                    onMouseEnter={(e) => handleMouseEnter(e, 3)}
                    onMouseLeave={() => setFromOutSide(false)}
                    className="group2 h-1/6 w-full border flex justify-center items-center overflow-hidden"
                >
                    <span className="text-9xl">BLOG</span>

                    <div
                        className={`hoverText ${fromOutSide && active === 3 ? "slideUp opacity-100" : ""} w-screen overflow-hidden hidden `}
                    >
                        <div className="marquee-track flex w-[max-content] items-center gap-[3rem] text-9xl">
                            <div className="text-nowrap">READ ARTICLES</div>
                            <img
                                className="h-[100px]"
                                src="./src/Media/gta-v-style-art_938060-121.webp"
                            />
                            <div className="text-nowrap">READ ARTICLES</div>
                            <img
                                className="h-[100px]"
                                src="./src/Media/gta-v-style-art_938060-121.webp"
                            />
                            <div className="text-nowrap">READ ARTICLES</div>
                            <img
                                className="h-[100px]"
                                src="./src/Media/gta-v-style-art_938060-121.webp"
                            />
                            <div className="text-nowrap">READ ARTICLES</div>
                            <img
                                className="h-[100px]"
                                src="./src/Media/gta-v-style-art_938060-121.webp"
                            />
                        </div>
                    </div>
                </Link>
                {/* </div> */}

                <div className="h-1/6 w-full border relative ">
                    <div className="flex gap-4 [font-family:var(--secondary-font)] absolute right-4 bottom-2">
                        <a
                            className="border-2 px-2 rounded-2xl py-1 text-2xl hover:text-[#facc15]"
                            href="http://facebook.com/"
                        >
                            FB
                        </a>
                        <a
                            className="border-2 px-2 rounded-2xl py-1 text-2xl hover:text-[#facc15]"
                            href="http://instagram.com/"
                        >
                            IG
                        </a>
                        <a
                            className="border-2 px-2 rounded-2xl py-1 text-2xl hover:text-[#facc15]"
                            href="http://linkedin.com/"
                        >
                            LN
                        </a>
                        <a
                            className="border-2 px-2 rounded-2xl py-1 text-2xl hover:text-[#facc15]"
                            href="https://beyonce.com/"
                        >
                            BE
                        </a>
                    </div>

                    <div className="flex gap-5 text-sm items-end h-full pb-2 justify-center">
                        <p className="hover:text-[#facc15] cursor-pointer">
                            PRIVACY POLICY
                        </p>
                        <p className="hover:text-[#facc15] cursor-pointer">
                            PRIVACY NOTICE
                        </p>
                        <p className="hover:text-[#facc15] cursor-pointer">
                            ETHICS REFORT
                        </p>
                        <p className="hover:text-[#facc15] cursor-pointer">
                            CONSERT CHOICES
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
