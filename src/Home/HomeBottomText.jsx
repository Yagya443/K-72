import { Link } from "react-router-dom";

const HomeBottomText = () => {
    return (
        <div className=" flex gap-10 justify-center ">
            <Link to="/projects" className="home-wrapper-project border-2 rounded-full px-8 py-4 text-6xl">
                PROJECTS
            </Link>
            <Link to="/agency" className="home-wrapper-agency border-2 rounded-full px-8 py-4 text-6xl">
                AGENCE
            </Link>
        </div>
    );
};

export default HomeBottomText;
