import { Link } from "react-router-dom";

const HomeBottomText = () => {
    return (
        <div className="flex gap-10 text-6xl justify-center ">
            <Link to="/projects" className="border-2 rounded-full px-8 py-4">
                PROJECTS
            </Link>
            <Link to="/agency" className="border-2 rounded-full px-8 py-4">
                AGENCE
            </Link>
        </div>
    );
};

export default HomeBottomText;
