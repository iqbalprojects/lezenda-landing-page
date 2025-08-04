"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ScrollingClientsList = ({ clients }) => {
    return (
        <div className="relative rounded-[20px] shadow-[1px_1px_1px_0px_#00000026,-0.5px_1px_1px_0px_#0000001A]">
            <Image
                src="/clipped.png"
                width={71.24}
                height={88}
                alt="Clipped"
                className="absolute -top-7 -right-4 z-10"
            />
            <div className="h-[576px] overflow-hidden">
                <motion.ul
                    className="px-4 py-2"
                    animate={{ y: [0, "-50%"] }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...clients, ...clients].map((client, index) => (
                        <li
                            key={index}
                            className="py-5 border-b border-slate-100 flex flex-col gap-y-3"
                        >
                            <div className="flex gap-x-3 items-start">
                                <div className="rounded-full overflow-hidden flex-shrink-0">
                                    <Image
                                        src={client.image}
                                        width={48}
                                        height={48}
                                        alt={client.name}
                                    />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h5 className="font-semibold leading-6 text-lg tracking-[-0.1px]">
                                        {client.name}
                                    </h5>
                                    <p className="text-base leading-5 tracking-[-0.1px]">
                                        {client.description}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
};

export default ScrollingClientsList;
