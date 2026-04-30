import {NavLink, useNavigate} from "react-router-dom";
import {assets} from "../assets/assets.js";
import {useEffect, useRef, useState} from "react";
import {IconSearch, IconUser, IconMenu2, IconX, IconTextDirectionRtl} from "@tabler/icons-react";

import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {

    const [open, setOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [rtl, setRtl] = useState(false);
    const [user, setUser] = useState(null);

    const dropdownRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        const savedDir = localStorage.getItem("dir");
        if (savedDir === "rtl") {
            setRtl(true);
            document.documentElement.dir = "rtl";
        }

        const storedUser = JSON.parse(localStorage.getItem("currentUser"));
        setUser(storedUser);
    }, []);

    const toggleDirection = () => {
        const newDir = rtl ? "ltr" : "rtl";
        setRtl(!rtl);
        document.documentElement.dir = newDir;
        localStorage.setItem("dir", newDir);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {

        const dir = localStorage.getItem("dir");
        localStorage.clear();

        if (dir) {
            localStorage.setItem("dir", dir);
        }

        setUser(null);
        setOpen(false);

        toast.success("Logout Successfully 👋");

        setTimeout(() => {
            navigate("/Login");
        }, 1500);
    };

    return (
        <>
            <header className="bg-black/20 border-b border-gray-800 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                    <div className="flex items-center gap-2">
                        <img className="w-10" src={assets.logo} alt=""/>
                        <h1 className="text-white text-xl font-bold hidden sm:block">Safety</h1>
                    </div>

                    <ul className="hidden md:flex items-center gap-8">
                        <NavLink to="/" className={({isActive}) =>
                            isActive ? "text-orange-500 font-semibold" : "text-white hover:text-orange-500"
                        }>Home</NavLink>

                        <NavLink to="/About" className={({isActive}) =>
                            isActive ? "text-orange-500 font-semibold" : "text-white hover:text-orange-500"
                        }>About</NavLink>

                        <NavLink to="/Pricing" className={({isActive}) =>
                            isActive ? "text-orange-500 font-semibold" : "text-white hover:text-orange-500"
                        }>Pricing</NavLink>

                        <NavLink to="/Book" className={({isActive}) =>
                            isActive ? "text-orange-500 font-semibold" : "text-white hover:text-orange-500"
                        }>Book</NavLink>

                        <NavLink to="/Contact" className={({isActive}) =>
                            isActive ? "text-orange-500 font-semibold" : "text-white hover:text-orange-500"
                        }>Contact</NavLink>

                        <NavLink to="/Faq" className={({isActive}) =>
                            isActive ? "text-orange-500 font-semibold" : "text-white hover:text-orange-500"
                        }>FAQ</NavLink>
                    </ul>

                    <div className="flex items-center gap-3">

                        <button className="p-2 text-white hover:bg-white/10 rounded-full cursor-pointer"><IconSearch/>
                        </button>
                        <button onClick={toggleDirection}
                                className="p-2 text-white hover:bg-white/10 rounded-full cursor-pointer">
                            <IconTextDirectionRtl/>
                        </button>
                        <div className="relative" ref={dropdownRef}>
                            <button onClick={() => setOpen(!open)}
                                    className="p-2 text-white hover:bg-white/10 rounded-full cursor-pointer"><IconUser/>
                            </button>

                            {open && (
                                <div
                                    className={`absolute ${rtl ? "left-0" : "right-0"} mt-3 w-48 bg-white rounded-xl shadow-lg z-50`}>
                                    <div className="px-4 py-3 border-b">
                                        <p className="text-sm font-semibold text-orange-500">{user?.name || "Guest"}</p>
                                        <p className="text-xs text-gray-500">{user?.email || "guest@email.com"}</p>
                                    </div>

                                    <ul className="text-sm">
                                        <NavLink to="/Profile"
                                                 className="block px-4 py-2 hover:bg-gray-100 text-orange-500">
                                            My Account
                                        </NavLink>

                                        {!user ? (
                                            <>
                                                <NavLink to="/Signup"
                                                         className="block px-4 py-2 hover:bg-gray-100 text-orange-500">
                                                    Sign Up
                                                </NavLink>

                                                <NavLink to="/Login"
                                                         className="block px-4 py-2 hover:bg-gray-100 text-orange-500">
                                                    Log In
                                                </NavLink>
                                            </>
                                        ) : (
                                            <button
                                                onClick={handleLogout}
                                                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">
                                                Log Out
                                            </button>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <button onClick={() => setMenuOpen(!menuOpen)}
                                className="md:hidden text-white">{menuOpen ? <IconX/> : <IconMenu2/>}
                        </button>

                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden bg-black/20 backdrop-blur-md text-white px-4 pb-4 space-y-3">
                        <NavLink to="/" className="block">Home</NavLink>
                        <NavLink to="/About" className="block">About</NavLink>
                        <NavLink to="/Pricing" className="block">Pricing</NavLink>
                        <NavLink to="/Book" className="block">Book</NavLink>
                        <NavLink to="/Contact" className="block">Contact</NavLink>
                        <NavLink to="/Faq" className="block">FAQ</NavLink>
                    </div>
                )}
            </header>

            <ToastContainer position="top-right" autoClose={2000}/>
        </>
    );
}

export default Header;