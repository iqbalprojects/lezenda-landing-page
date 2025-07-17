"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const servicesList = [
    {
        image: "performance-marketing",
        heading: "Performance Marketing",
        services: [
            {
                icons: ["google", "youtube"],
                title: "Google Ads Performance Marketing",
                description:
                    "Strategy, Execution, Analyze, Optimize in Google ecosystem including Youtube",
            },
            {
                icons: ["meta", "facebook", "instagram"],
                title: "Meta Ads Performance Marketing",
                description:
                    "Strategy, Execution, Analyze, Optimize in Facebook & Instagram",
            },
            {
                icons: ["linkedin", "reddit", "pinterest"],
                title: "Performance Marketing Channels",
                description:
                    "Complete channel for your brand needs in Linkedin, Reddit, Pinterest",
            },
        ],
    },
    {
        image: "webapp-development",
        heading: "Web & App Development",
        services: [],
    },
    {
        image: "marketplace-seo",
        heading: "Marketplace & SEO",
        services: [],
    },
    {
        image: "analysis-media",
        heading: "Analysis & Media",
        services: [],
    },
    {
        image: "special-program",
        heading: "Special Program",
        services: [],
    },
];

const Services = () => {
    const [isOpenStates, setIsOpenStates] = useState({});

    const toggleOpen = (index) => {
        setIsOpenStates((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <section className="space-y-10">
            <div className="text-center">
                <h3 className="font-caveat text-[22px] text-blue-600 tracking-[-1px]">
                    Our services
                </h3>
                <h2 className="font-bold text-3xl leading-[38px] tracking-[-0.6px]">
                    Complete end to end
                    <span className="block mx-auto my-1.5 outline-4 outline-indigo-100 bg-indigo-900 py-0.5 px-2.5 w-fit -rotate-[2.8deg] rounded-lg text-white font-semibold text-[28px] leading-[38px] tracking-[-0.6px]">
                        🌐 digital solutions
                    </span>
                </h2>
            </div>
            <ul className="space-y-5">
                {servicesList.map((service, index) => {
                    const isOpen = isOpenStates[index];
                    return (
                        <li
                            key={index}
                            className="px-4 pt-2 py-4 bg-neutral-50 rounded-xl border border-slate-100"
                        >
                            <div className="flex items-center justify-between">
                                <h2 className="font-semibold text-lg leading-[140%]">
                                    {service.heading}
                                </h2>
                                <div className="flex items-center gap-x-2">
                                    <Image
                                        src={`/${service.image}.png`}
                                        width={90}
                                        height={108}
                                        alt="Services Illustration"
                                    />
                                    <button
                                        className="bg-blue-100 rounded-full w-6 h-6 grid place-content-center transition-transform"
                                        onClick={() => toggleOpen(index)}
                                    >
                                        <motion.div
                                            animate={{
                                                rotate: isOpen ? 180 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="w-4 h-4" />
                                        </motion.div>
                                    </button>
                                </div>
                            </div>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.ul
                                        key="services"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                        className="overflow-hidden px-4 bg-white rounded-xl border border-slate-100"
                                    >
                                        {service.services.length > 0 ? (
                                            service.services.map(
                                                (s, sIndex) => (
                                                    <li
                                                        key={sIndex}
                                                        className="py-6 border-b border-slate-100 last:border-none"
                                                    >
                                                        <ul className="flex space-x-2 mb-2">
                                                            {s.icons.map(
                                                                (
                                                                    icon,
                                                                    iconIndex
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            iconIndex
                                                                        }
                                                                    >
                                                                        <Image
                                                                            src={`/${icon}.png`}
                                                                            width={
                                                                                20
                                                                            }
                                                                            height={
                                                                                20
                                                                            }
                                                                            alt={`${icon} icon`}
                                                                        />
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                        <h5 className="font-medium">
                                                            {s.title}
                                                        </h5>
                                                        <p className="text-sm text-slate-600">
                                                            {s.description}
                                                        </p>
                                                    </li>
                                                )
                                            )
                                        ) : (
                                            <li className="py-4 text-slate-500 italic">
                                                No services available.
                                            </li>
                                        )}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Services;
