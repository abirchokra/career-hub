import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                   
                </div>
                <NavLink to={'/'}><a className="btn btn-ghost font-bold text-[38px]">CareerHub</a></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="text-purple-500"><a>Statistics</a></li>
                    <li className="text-gray-500"><a>Applied Jobs</a></li>
                    
                    <li className="text-gray-500"><a>Blog</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn  bg-[rgb(126,144,254)] text-white font-bold ">Star Applying</a>
            </div>
        </div>
    );
};

export default Header;