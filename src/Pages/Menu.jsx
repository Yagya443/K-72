import { Link, useNavigate } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const Menu = () => {
    const navigate = useNavigate();

    function onClose() {
        navigate(-1);
    }

    return (
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
                    className="group h-1/6 w-full border flex justify-center items-center overflow-hidden"
                >
                    <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
                        <div className="text-main text-9xl absolute">
                            <span>WORK</span>
                        </div>
                        <div className="text-hover absolute text-9xl">
                            <div className="w-screen overflow-hidden">
                                <div className="marquee-track flex w-[max-content] items-center gap-[3rem]">
                                    <div className="text-nowrap">
                                        SEE EVERYTHING
                                    </div>
                                    <img
                                        className="h-[100px]"
                                        src="./src/Media/gta-v-style-art_938060-121.webp"
                                    />
                                    <div className="text-nowrap">
                                        SEE EVERYTHING
                                    </div>
                                    <img
                                        className="h-[100px]"
                                        src="./src/Media/gta-v-style-art_938060-121.webp"
                                    />
                                    <div className="text-nowrap">
                                        SEE EVERYTHING
                                    </div>
                                    <img
                                        className="h-[100px]"
                                        src="./src/Media/gta-v-style-art_938060-121.webp"
                                    />
                                    <div className="text-nowrap">
                                        SEE EVERYTHING
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
                                    <img
                                        className="h-[100px]"
                                        src="./src/Media/gta-v-style-art_938060-121.webp"
                                    />
                                    <div className="text-nowrap">
                                        KNOW US MORE
                                    </div>
                                    <img
                                        className="h-[100px]"
                                        src="./src/Media/gta-v-style-art_938060-121.webp"
                                    />
                                    <div className="text-nowrap">
                                        KNOW US MORE
                                    </div>
                                    <img
                                        className="h-[100px]"
                                        src="./src/Media/gta-v-style-art_938060-121.webp"
                                    />
                                    <div className="text-nowrap">
                                        KNOW US MORE
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
                                        className="h-[100px]"
                                        src="./src/Media/gta-v-style-art_938060-121.webp"
                                    />
                                    <div className="text-nowrap">
                                        SEND US MAIL
                                    </div>
                                    <img
                                        className="h-[100px]"
                                        src="./src/Media/gta-v-style-art_938060-121.webp"
                                    />
                                    <div className="text-nowrap">
                                        SEND US MAIL
                                    </div>
                                    <img
                                        className="h-[100px]"
                                        src="./src/Media/gta-v-style-art_938060-121.webp"
                                    />
                                    <div className="text-nowrap">
                                        SEND US MAIL
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
        </div>
    );
};

export default Menu;
