"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@/assets/icons/menu";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="p-4 relative z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white hover:text-gray-400">
                    <Image
                        src="/lezenda.png"
                        width={100}
                        height={100}
                        alt="Lezenda Logo"
                    />
                </Link>
                <button onClick={() => setIsOpen(true)}>
                    <MenuIcon />
                </button>
                <ul className="hidden md:flex space-x-4">
                    <li>
                        <a
                            href="#home"
                            className="text-white hover:text-gray-400"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="text-white hover:text-gray-400"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            className="text-white hover:text-gray-400"
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="text-white hover:text-gray-400"
                        >
                            Contact
                        </a>
                    </li>
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
                                <li>
                                    <Link
                                        href="#"
                                        className="text-gray-800 hover:text-blue-500"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-gray-800 hover:text-blue-500"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-gray-800 hover:text-blue-500"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
