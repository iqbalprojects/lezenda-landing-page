import WatchIcon from "@/assets/icons/watch";
import FileIcon from "@/assets/icons/file";
import Image from "next/image";
import ChartIcon from "@/assets/icons/chart";

const Advantages = () => {
    return (
        <section className="bg-[#1D2146] px-5 py-7 space-y-5 text-white rounded-2xl">
            <h2 className="text-3xl px-5 text-center font-semibold leading-[38px] tracking-[-0.6px]">
                Why choose Lezenda?
            </h2>
            <div className="relative">
                <ul className="flex flex-col gap-y-[72px] divide-y divide-white/10">
                    {[...Array(23)].map((_, index) => (
                        <li key={index}></li>
                    ))}
                </ul>
                <ul className="space-y-9 px-5 absolute top-6">
                    <li className="bg-[#292C4F] flex flex-col items-center text-center p-6 rounded-xl -rotate-2">
                        <div className="flex items-center gap-x-2 mb-1.5">
                            <WatchIcon className="rotate-2" />
                            <span className="text-white">+</span>
                            <FileIcon className="rotate-2" />
                        </div>
                        <h3 className="font-semibold tracking-[-0.1px] mb-1">
                            Data backed strategy combined with market research
                        </h3>
                        <p className="text-white/50 text-sm leading-5 tracking-[-0.1px]">
                            We provide you with better insight than you ever got
                        </p>
                    </li>
                    <li className="relative bg-[#DD5F11] space-y-1.5 rounded-xl p-6 pr-7 rotate-[3.7deg]">
                        <Image
                            src="/pinned.png"
                            width={86.71}
                            height={81.57}
                            alt="Pinned"
                            className="absolute -top-2.5 -right-2.5"
                        />
                        <h3 className="font-bold">
                            <span className="block text-4xl leading-[120%] tracking-[-0.8px]">
                                $2.18M+
                            </span>
                            Ad Budget Managed
                        </h3>
                        <p className="text-white/60 leading-5 tracking-[-0.1px]">
                            Across Google, Meta, LinkedIn, Twitter, TikTok —
                            Indonesia & global
                        </p>
                    </li>
                    <li className="relative bg-[#353B6C] rounded-xl py-6 pl-6 -rotate-2">
                        <Image
                            src="/medal.png"
                            width={95.3}
                            height={95.3}
                            alt="Medal"
                            className="absolute -top-0.5 right-0 rotate-2"
                        />
                        Unlike other agency,
                        <p className="font-semibold">
                            We’re{" "}
                            <span className="text-blue-400">builders</span>,
                        </p>
                        <p className="font-semibold">not just maintainers</p>
                    </li>
                    <li className="relative bg-[#2E3361] rounded-xl px-7 pt-7 rotate-[2.5deg] flex flex-col items-center text-center">
                        <Image
                            src="/clipped.png"
                            width={69.78}
                            height={86.2}
                            alt="Clipped"
                            className="absolute -top-3.5 -right-2.5 rotate-2"
                        />
                        <h3 className="font-medium">
                            Handled visits more than{" "}
                            <span className="block font-bold text-4xl leading-[120%] tracking-[-0.8px]">
                                56M+
                            </span>
                        </h3>
                        <Image
                            src="/handle-visitor.png"
                            width={184}
                            height={155}
                            alt="handle Visitor"
                            className="-rotate-[2.5deg] translate-y-1"
                        />
                    </li>
                    <li className="bg-[#51D2FD] space-y-2.5 text-black/50 rounded-xl p-6 -rotate-[2.28deg]">
                        <h3 className="font-bold text-4xl leading-[120%] tracking-[-0.8px]">
                            95%
                            <span className="block font-semibold text-base">
                                Campaign success rate
                            </span>
                        </h3>
                        <p className="text-sm leading-5 tracking-[-0.1px]">
                            Proven ROI in various industries, including retail,
                            travel, coffee, online courses, and many others
                        </p>
                    </li>
                    <li className="bg-[#292C4F] space-y-2 rounded-xl p-6 rotate-2">
                        <ChartIcon className="-rotate-2" />
                        <h3 className="font-semibold tracking-[0.1px] text-white">
                            Always adaptive & innovative
                        </h3>
                        <p className="text-sm text-white/50 leading-5 tracking-[-0.1px]">
                            We constantly innovate — not just in digital ads,
                            but also in landing pages, customer service, AI
                            automation, market analysis, and research
                        </p>
                    </li>
                    <li className="bg-[#464D87] flex flex-col items-center gap-y-1.5 rounded-xl px-6 pt-6 -rotate-[1.56deg]">
                        <h3 className="text-sm text-center leading-5 tracking-[-0.1px]">
                            Built{" "}
                            <span className="font-bold">
                                e-commerce and systems that processed
                            </span>
                            <span className="font-bold text-blue-400">
                                {" "}
                                orders
                            </span>{" "}
                            more than{" "}
                            <span className="block font-semibold text-4xl leading-11 tracking-[-0.8px]">
                                2M+
                            </span>
                        </h3>
                        <Image
                            src="/build-ecommerce.png"
                            width={160}
                            height={160}
                            alt="Build E-commerce"
                        />
                    </li>
                </ul>
            </div>
        </section>
    );
};
export default Advantages;
