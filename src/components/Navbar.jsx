"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@/assets/icons/menu";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

const navItems = [
    {
        title: "Contact Us",
        url: "#contact-us",
    },
    {
        title: "Posts",
        url: "/posts",
    },
    {
        title: "Check Domains",
        url: "/domain-availability",
    },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="px-5 xl:px-[140px] py-[18.5px] xl:py-[29px] relative z-50">
            <div className="flex justify-between items-center">
                <Link href="/" className="text-white hover:text-gray-400">
                    <Image
                        src="/lezenda.png"
                        width={107}
                        height={18}
                        alt="Lezenda Logo"
                        sizes="(max-width: 767px) 92px, 107px"
                    />
                </Link>
                <button className="md:hidden" onClick={() => setIsOpen(true)}>
                    <MenuIcon />
                </button>
                <ul className="hidden md:flex space-x-4 ">
                    {navItems.map((nav, index) => (
                        <li key={index}>
                            <Link
                                href={nav.url}
                                className="hover:text-gray-400 font-medium"
                            >
                                {nav.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-4"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="mb-6 flex w-full justify-end"
                            >
                                <X className="w-6 h-6 text-gray-700" />
                            </button>
                            <ul className="flex flex-col space-y-4">
                                {navItems.map((nav, index) => (
                                    <li key={index}>
                                        <Link
                                            href={nav.url}
                                            className="text-gray-800 hover:text-blue-500"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {nav.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
