import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navItem = <>
        <li><NavLink to={'/portfolio'}>Portfolio</NavLink></li>
        <li><NavLink to={'/Bolg'}>Blog</NavLink></li>
        <li className="bg-yellow-500 text-white font-semibold rounded py-2 px-3"><button>Hire Me</button></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {navItem}
                        </ul>
                    </div>
                    <a className="font-bold text-3xl">Ma<span className="text-yellow-500">r</span>y</a>
                </div>
                <div className="navbar-end hidden lg:flex items-center">
                    <ul className="menu menu-horizontal px-1 text-xl flex items-center">
                        {navItem}
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;