import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {

    const links = <>

        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "text-lg font-bold" : isActive ? "text-[#FF444A] underline text-lg font-bold " : "text-lg font-bold"
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                    isPending ? "text-lg font-bold" : isActive ? "text-[#FF444A] underline text-lg font-bold" : "text-lg font-bold"
                }
            >
                Donation
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                    isPending ? "text-lg font-bold" : isActive ? "text-[#FF444A] underline text-lg font-bold" : "text-lg font-bold"
                }
            >
                Statistics
            </NavLink>
        </li>

    </>

    return (

        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 bg-white rounded-lg">
                        {links}
                    </ul>
                </div>
                <a className=""><Logo></Logo></a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className=" menu-horizontal px-1 gap-5">
                    {links}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;