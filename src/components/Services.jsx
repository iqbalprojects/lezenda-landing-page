"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import StampOnView from "./StampSpan";

const servicesList = [
    {
        image: "performance-marketing",
        imageDesktop: "performance-marketing-desktop",
        video: "performance-marketing",
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
        imageDesktop: "webapp-development-desktop",
        video: "webapp-development",
        heading: "Web & App Development",
        services: [
            {
                icons: ["chrome", "safari"],
                title: "Web Development",
                description:
                    "But unlike others, we build custom design and system",
            },
            {
                icons: ["appstore", "googleplaystore"],
                title: "Mobile App",
                description:
                    "Create mobile app and launch to App Store and Google Play Store",
            },
        ],
    },
    {
        image: "marketplace-seo",
        imageDesktop: "marketplace-seo-desktop",
        video: "marketplace-seo",
        heading: "Marketplace & SEO",
        services: [
            {
                icons: ["chrome", "safari"],
                title: "Search Engine Optimization",
                description:
                    "Invest in long term growth to protect your brand from future changes with better SEO",
            },
            {
                icons: ["shopee", "tokopedia", "tiktok"],
                title: "Marketplace Optimization",
                description:
                    "Shopee, Tokopedia, Tiktok Optimization to make sure you are on the same level and better than your competitor",
            },
        ],
    },
    {
        image: "analysis-media",
        imageDesktop: "analysis-media-desktop",
        video: "analysis-media",
        heading: "Analysis & Media",
        services: [
            {
                icons: ["chrome", "safari"],
                title: "Data & Market analysis",
                description:
                    "Look into your competitor strategy in Shopee, Website, etc to gain more insight",
            },
            {
                icons: ["kompas", "tribun", "yahoo", "abcnews", "7news"],
                title: "National and Global Press Release",
                description:
                    "Release your company action to tier 1 media like Kompas, Media Indonesia, Tribun, Yahoo!, ABC News, 7 News, etc",
            },
        ],
    },
    {
        image: "special-program",
        imageDesktop: "special-program-desktop",
        video: "special-program",
        heading: "Special Program",
        services: [
            {
                icons: ["chrome", "safari"],
                title: "Web3 Engineer",
                description: "Development of smart contract in Solidity, Rust",
            },
            {
                icons: ["appstore", "googleplaystore"],
                title: "Accelerator Program",
                description:
                    "Launch your brand with the best strategy with accelerator program",
            },
        ],
    },
];

const Services = () => {
    const [isOpenStates, setIsOpenStates] = useState({});
    const [isIndexOpen, setIsIndexOpen] = useState(0);

    const toggleOpen = (index) => {
        setIsIndexOpen(index);
        setIsOpenStates((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <section className="relative flex flex-col gap-y-10 my-[52px] items-center">
            <motion.div
                className="hidden md:block absolute top-0 left-0"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Image src="/clipv2.png" width={100} height={100} alt="clip" />
            </motion.div>

            <div className="text-center">
                <h3 className="font-caveat text-2xl text-blue-600 tracking-[-1px]">
                    Our services
                </h3>
                <h2 className="font-bold text-3xl leading-[38px] tracking-[-0.6px]">
                    Complete end to end
                    <StampOnView className="block mx-auto my-1.5 outline-4 outline-indigo-100 bg-indigo-900 py-0.5 px-2.5 w-fit rounded-lg text-white font-semibold text-[28px] leading-[38px] tracking-[-0.6px]">
                        🌐 digital solutions
                    </StampOnView>
                </h2>
            </div>
            <ul className="md:hidden space-y-5 w-full">
                {servicesList.map((service, index) => {
                    const isOpen = isOpenStates[index];
                    return (
                        <li
                            key={index}
                            className="px-4 pt-2 py-4 bg-neutral-50 rounded-xl border border-slate-100"
                            onClick={() => toggleOpen(index)}
                        >
                            <div className="flex items-center justify-between">
                                <h2 className="font-semibold text-lg leading-[140%] max-w-40">
                                    {service.heading}
                                </h2>
                                <div className="flex items-center gap-x-2">
                                    <Image
                                        src={`/${service.image}.png`}
                                        width={90}
                                        height={108}
                                        alt="Services Illustration"
                                        className="mix-blend-multiply"
                                    />
                                    <button className="bg-blue-100 shrink-0 rounded-full w-6 h-6 grid place-content-center transition-transform">
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
            <div className="hidden md:block outline outline-neutral-200 p-4 rounded-[20px] space-y-7 lg:w-[1160px]">
                <ul className="flex gap-3 justify-center flex-wrap">
                    {servicesList.map((service, index) => {
                        return (
                            <li
                                key={index}
                                className="bg-white pt-4 rounded-xl outline outline-neutral-200 flex flex-col items-center justify-between text-center transition-all duration-300 hover:shadow-lg hover:scale-105 relative" // Added 'relative' here
                                onClick={() => toggleOpen(index)}
                            >
                                <h2 className="max-w-[7rem] font-semibold text-lg leading-[140%]">
                                    {service.heading}
                                </h2>
                                {index === servicesList.length - 1 && (
                                    <motion.div
                                        initial={{
                                            scale: 0,
                                            y: -20,
                                            rotate: -15,
                                            opacity: 0,
                                        }}
                                        whileInView={{
                                            scale: 1,
                                            y: 0,
                                            rotate: 0,
                                            opacity: 1,
                                        }}
                                        viewport={{ once: true, amount: 0.8 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 30,
                                        }}
                                        className="absolute -right-0 top-0"
                                    >
                                        <Image
                                            src="/pinned.png"
                                            width={71.3}
                                            height={67}
                                            alt="Pinned"
                                            className="w-[71.3px] h-[67px]"
                                        />
                                    </motion.div>
                                )}
                                {isIndexOpen === index ? (
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        className={`object-contain w-[216px] h-[202px]`}
                                    >
                                        <source
                                            src={`/${service.video}.mp4`}
                                            type="video/mp4"
                                        />
                                    </video>
                                ) : (
                                    <Image
                                        src={`/${service.imageDesktop}.png`}
                                        width={216}
                                        height={202}
                                        alt={service.heading}
                                        className="w-[216px] h-[202px] object-contain"
                                    />
                                )}
                            </li>
                        );
                    })}
                </ul>
                <ul className="flex flex-wrap items-center justify-center divide-x-2 divide-neutral-200 transition-all duration-500">
                    {servicesList[isIndexOpen].services.length > 0 ? (
                        servicesList[isIndexOpen].services.map((s, sIndex) => (
                            <li
                                key={sIndex}
                                className="px-7 py-5 flex-1 min-w-0 transition-all duration-500 hover:bg-gray-50 animate-fade-in"
                                style={{
                                    animationDelay: `${sIndex * 100}ms`,
                                }}
                            >
                                <ul className="flex space-x-2 mb-2 transition-all duration-300">
                                    {s.icons.map((icon, iconIndex) => (
                                        <li
                                            key={iconIndex}
                                            className="transition-transform duration-300 hover:scale-110"
                                        >
                                            <Image
                                                src={`/${icon}.png`}
                                                width={20}
                                                height={20}
                                                alt={`${icon} icon`}
                                                className="transition-opacity duration-300 hover:opacity-80"
                                            />
                                        </li>
                                    ))}
                                </ul>
                                <h5 className="font-medium transition-colors duration-300 hover:text-blue-600"></h5>
                                <p className="text-sm text-slate-600">
                                    {s.description}
                                </p>
                            </li>
                        ))
                    ) : (
                        <li className="py-4 text-slate-500 italic">
                            No services available.
                        </li>
                    )}
                </ul>
            </div>
        </section>
    );
};

export default Services;
