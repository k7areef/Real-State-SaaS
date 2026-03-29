import React from "react";
import AppLogo from "@components/common/AppLogo";
import Button from "@components/UI/Button";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const links = [
    { to: "/", label: "الرئيسية" },
    { to: "/properties", label: "العقارات" },
    { to: "/about", label: "من نحن" },
    { to: "/contact", label: "اتصل بنا" },
];

function Header() {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="py-4 bg-grey">
            <div className="container flex items-center justify-between max-md:flex-wrap">
                {/* App Logo */}
                <AppLogo />
                {/* Links */}
                <div className={`links grid transition-all ${isOpen ? 'max-md:grid-rows-[1fr]' : 'max-md:grid-rows-[0fr]'} max-md:order-1 max-md:w-full`}>
                    <div className={`overflow-hidden transition-opacity ${isOpen ? 'max-md:opacity-100' : 'max-md:opacity-0'}`}>
                        <ul className="flex md:items-center gap-3 max-md:flex-col">
                            {
                                links.map((link, index) => (
                                    <NavLink
                                        to={link.to}
                                        key={index}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) => `block p-2 font-medium sm:text-lg trasntiion ${isActive ? "text-primary opacity-100" : "opacity-70"} relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.75 after:bg-primary after:w-full after:transition ${isActive ? "after:opacity-100" : "after:opacity-0"}`}
                                    >
                                        {link.label}
                                    </NavLink>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                {/* Utils */}
                <div className="utils flex items-center gap-3">
                    {/* Signup */}
                    <Button
                        to={'/auth/signup'}
                        state={{ role: "host" }}
                        className=""
                    >
                        أضف عقارك
                    </Button>
                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        title={isOpen ? 'إغلاق' : 'فتح'}
                        aria-label={isOpen ? 'إغلاق' : 'فتح'}
                        onClick={() => setIsOpen(prev => !prev)}
                        className={`text-2xl md:hidden${isOpen ? ' text-primary' : ''}`}
                    >
                        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
                        <span className="sr-only">{isOpen ? 'إغلاق' : 'فتح'}</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;