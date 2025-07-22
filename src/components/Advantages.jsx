import WatchIcon from "@/assets/icons/watch";
import FileIcon from "@/assets/icons/file";
import Image from "next/image";
import ChartIcon from "@/assets/icons/chart";
import AnimatedContent from "./AnimatedContent";

const Advantages = () => {
    return (
        <div className="lg:px-5 lg:py-16 my-[52px]">
            <section className="bg-[#1D2146] min-h-screen px-5 py-7 md:pt-12 lg:pb-16 lg:pt-16 lg:px-20 space-y-5 text-white rounded-2xl">
                <h2 className="text-3xl md:text-5xl px-5 text-center font-semibold leading-[38px] tracking-[-0.6px]">
                    Why choose Lezenda?
                </h2>
                <div className="relative">
                    {/* This UL creates the divider lines */}
                    <ul className="flex flex-col gap-y-[72px] md:gap-y-12 divide-y divide-white/10">
                        {[...Array(24)].map((_, index) => (
                            <li key={index}></li>
                        ))}
                    </ul>

                    {/* This UL contains your main content with the grid layout */}
                    <ul className="grid grid-cols-1 lg:pt-12 md:grid-cols-3 gap-6 px-5 md:gap-x-8 md:gap-y-12 absolute top-0 left-0 pt-7 w-full h-full">
                        {/* Row 1 - 3 items */}
                        <AnimatedContent
                            direction="horizontal"
                            reverse
                            hoverRotate={6}
                            mixBlend={false}
                        >
                            <li className="bg-[#292C4F] flex flex-col md:justify-center items-center text-center p-6 rounded-xl -rotate-2">
                                <div className="flex items-center gap-x-2 mb-1.5">
                                    <WatchIcon className="rotate-2" />
                                    <span className="text-white">+</span>
                                    <FileIcon className="rotate-2" />
                                </div>
                                <h3 className="font-semibold tracking-[-0.1px] mb-1 md:text-2xl">
                                    Data backed strategy combined with market
                                    research
                                </h3>
                                <p className="text-white/50 text-sm leading-5 tracking-[-0.1px]">
                                    We provide you with better insight than you
                                    ever got
                                </p>
                            </li>
                        </AnimatedContent>

                        <AnimatedContent hoverRotate={-12} mixBlend={false}>
                            <li className="relative md:flex md:flex-col md:items-center md:justify-center md:space-y-6 bg-[#DD5F11] space-y-1.5 rounded-xl p-6 pr-7 rotate-[3.7deg]">
                                <Image
                                    src="/pinned.png"
                                    width={86.71}
                                    height={81.57}
                                    alt="Pinned"
                                    className="absolute -top-2.5 -right-2.5"
                                />
                                <h3 className="font-bold w-full">
                                    <span className="block text-left text-4xl leading-[120%] tracking-[-0.8px]">
                                        $2.18M+
                                    </span>
                                    Ad Budget Managed
                                </h3>
                                <p className="text-white/60 text-sm leading-5 tracking-[-0.1px]">
                                    Across Google, Meta, LinkedIn, Twitter,
                                    TikTok — Indonesia & global
                                </p>
                            </li>
                        </AnimatedContent>
                        <AnimatedContent
                            mixBlend={false}
                            direction="horizontal"
                            hoverRotate={4}
                        >
                            <li className="relative flex flex-row md:flex-col justify-center items-center bg-[#353B6C] rounded-xl pb-6 pt-0 pl-6 -rotate-2">
                                <Image
                                    src="/medal.png"
                                    width={130}
                                    height={130}
                                    alt="Medal"
                                    className="rotate-2 order-1 md:order-0 w-24 h-24 lg:w-32 lg:h-32"
                                />
                                <div className="flex items-end justify-center h-full">
                                    <div>
                                        <p className="md:text-2xl">
                                            Unlike other agency,
                                        </p>
                                        <p className="font-semibold md:text-2xl">
                                            We’re
                                            <span className="text-blue-400">
                                                {" "}
                                                builders{" "}
                                            </span>
                                            , not just maintainers
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </AnimatedContent>

                        {/* Row 2 - 2 items */}
                        <div className="md:col-span-2">
                            <AnimatedContent
                                direction="horizontal"
                                reverse
                                mixBlend={false}
                                hoverTranslate={{ x: 0, y: -10 }}
                                hoverDuration={0.4}
                                hoverEase="back.out(1.7)"
                            >
                                <li className="relative bg-[#2E3361] rounded-xl px-7 pt-7 rotate-[2.5deg] lg:-rotate-3 flex flex-col md:flex-row items-center h-full text-center md:text-left">
                                    <Image
                                        src="/clipped.png"
                                        width={69.78}
                                        height={86.2}
                                        alt="Clipped"
                                        className="absolute -top-3.5 -right-2.5 rotate-2"
                                    />
                                    <div className="md:order-1 md:pr-4">
                                        <Image
                                            src="/handle-visitor.png"
                                            width={184}
                                            height={155}
                                            alt="handle Visitor"
                                            className="-rotate-[2.5deg] translate-y-1 md:translate-y-0 lg:w-[280px] lg:h-[260px]"
                                        />
                                    </div>
                                    <div className="md:order-2 md:flex-grow">
                                        <h3 className="font-medium md:text-2xl">
                                            Handled visits more than
                                            <span className="block font-bold text-4xl leading-[120%] tracking-[-0.8px] md:text-6xl">
                                                56M+
                                            </span>
                                        </h3>
                                    </div>
                                </li>
                            </AnimatedContent>
                        </div>

                        <AnimatedContent
                            direction="horizontal"
                            mixBlend={false}
                            hoverTranslate={{ x: 0, y: -10 }}
                            hoverDuration={0.4}
                            hoverEase="back.out(1.7)"
                        >
                            <li className="bg-[#51D2FD] flex flex-col justify-between space-y-2.5 text-black/50 rounded-xl p-6 md:p-9 -rotate-[2.28deg] lg:rotate-3">
                                <h3 className="font-bold text-4xl md:text-6xl leading-[120%] tracking-[-0.8px]">
                                    95%
                                    <span className="block font-semibold text-base md:text-2xl">
                                        Campaign success rate
                                    </span>
                                </h3>
                                <p className="text-sm leading-5 tracking-[-0.1px]">
                                    Proven ROI in various industries, including
                                    retail, travel, coffee, online courses, and
                                    many others
                                </p>
                            </li>
                        </AnimatedContent>

                        {/* Row 3 - 2 items */}
                        <AnimatedContent
                            direction="horizontal"
                            reverse
                            mixBlend={false}
                            hoverTranslate={{ x: 0, y: -10 }}
                            hoverDuration={0.4}
                            hoverEase="back.out(1.7)"
                        >
                            <li className="bg-[#292C4F] space-y-2 rounded-xl p-6 rotate-2 lg:rotate-0">
                                <ChartIcon className="-rotate-2" />
                                <h3 className="font-semibold tracking-[0.1px] text-white lg:text-2xl">
                                    Always adaptive & innovative
                                </h3>
                                <p className="text-sm text-white/50 leading-5 tracking-[-0.1px] lg:text-base">
                                    We constantly innovate — not just in digital
                                    ads, but also in landing pages, customer
                                    service, AI automation, market analysis, and
                                    research
                                </p>
                            </li>
                        </AnimatedContent>
                        <div className="md:col-span-2">
                            <AnimatedContent
                                direction="horizontal"
                                mixBlend={false}
                                hoverTranslate={{ x: 0, y: -10 }}
                                hoverDuration={0.4}
                                hoverEase="back.out(1.7)"
                            >
                                <li className="bg-[#464D87] pb-6 flex flex-col lg:flex-row items-center gap-y-1.5 rounded-xl px-6 pt-6 -rotate-[1.56deg] lg:w-full lg:h-[288px]">
                                    <div className="lg:order-1 lg:pr-6 lg:text-left">
                                        <Image
                                            src="/build-ecommerce.png"
                                            width={160}
                                            height={160}
                                            alt="Build E-commerce"
                                            className="lg:w-[290px] lg:h-[290px] object-contain"
                                        />
                                    </div>
                                    <div className="lg:order-2 lg:text-left lg:flex-grow">
                                        <h3 className="text-sm lg:text-2xl lg:max-w-72 text-center leading-6 tracking-[-0.1px] lg:text-left">
                                            Built
                                            <span className="font-bold">
                                                {" "}
                                                e-commerce and systems{" "}
                                            </span>
                                            {" that processed"}
                                            <span className="font-bold text-blue-400">
                                                {" "}
                                                orders{" "}
                                            </span>{" "}
                                            more than
                                            <span className="block font-semibold text-4xl leading-11 tracking-[-0.8px]">
                                                2M+
                                            </span>
                                        </h3>
                                    </div>
                                </li>
                            </AnimatedContent>
                        </div>
                    </ul>
                </div>
            </section>
        </div>
    );
};
export default Advantages;
