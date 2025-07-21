import Sparkle from "@/assets/icons/sparkle";
import StarIcon from "@/assets/icons/star";
import Image from "next/image";
import Link from "next/link";
import { ScrollVelocity } from "./ScrollVelocity";
import AnimatedContent from "./AnimatedContent";

const taglineItems = [
    "BUILT FOR GROWTH",
    "RESULTS FIRST",
    "ALWAYS ADAPTIVE",
    "TRANSPARENCY",
    "REAL IMPACT",
    "INCREASE SALES",
];

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center text-center pt-[72px] md:pt-[104px] pb-2 md:pb-3.5 2xl:pb-7 lg:pb-5 overflow-y-clip">
            <AnimatedContent
                direction="horizontal"
                reverse={true}
                distance={80}
                duration={0.7}
                ease="back.out"
            >
                <Image
                    src="/pen.png"
                    width={138.76}
                    height={131.38}
                    alt="Pen"
                    className="lg:hidden absolute -top-12 -left-[4.5rem] -rotate-[20deg]"
                />
                <Image
                    src="/pen-desktop.png"
                    width={235.52}
                    height={223}
                    alt="Pen"
                    className="hidden lg:block absolute -top-24 -left-28 -rotate-[20deg]"
                />
                <Image
                    src="/meta.png"
                    width={68.53}
                    height={68.53}
                    alt="meta"
                    className="lg:hidden border-[6px] border-white rounded-full absolute top-24 md:top-12 -left-11 rotate-6 shadow-[1.71px_1.71px_0px_0px_#00000040]"
                />
                <Image
                    src="/meta.png"
                    width={87.56}
                    height={87.56}
                    alt="meta"
                    className="hidden lg:block border-[6px] border-white rounded-full absolute top-12 -left-11 rotate-6 shadow-[1.71px_1.71px_0px_0px_#00000040]"
                />
                <Image
                    src="/google.png"
                    width={68.53}
                    height={68.53}
                    alt="meta"
                    className="hidden md:block lg:hidden border-[6px] border-white rounded-full absolute top-80 left-0 -rotate-[8deg] shadow-[1.71px_1.71px_0px_0px_#00000040]"
                />
                <Image
                    src="/google.png"
                    width={100.91}
                    height={100.91}
                    alt="meta"
                    className="hidden lg:block border-[6px] border-white rounded-full absolute top-96 -translate-y-2 left-6 -rotate-[8deg] shadow-[1.71px_1.71px_0px_0px_#00000040]"
                />
                <Image
                    src="/clipped-full-shadow.png"
                    width={80}
                    height={80}
                    alt="Clipped Shadow"
                    className="lg:hidden absolute top-64 translate-y-6 md:translate-y-0 -left-14 md:left-20"
                />
                <Image
                    src="/clipped-full-shadow.png"
                    width={90.76}
                    height={90.76}
                    alt="Clipped Shadow"
                    className="hidden lg:block absolute top-64 translate-y-0 left-32"
                />
                <Image
                    src="/keyboard.png"
                    width={357.74}
                    height={148}
                    alt="Notes"
                    className="lg:hidden absolute top-60 md:top-16 right-full translate-x-11 md:translate-x-[3.4rem] rotate-[17.46deg]"
                />
                <Image
                    src="/keyboard-desktop.png"
                    width={658.19}
                    height={272.31}
                    alt="Notes"
                    className="hidden lg:block absolute -top-24 right-full translate-x-28 rotate-[17.46deg]"
                />
            </AnimatedContent>

            <AnimatedContent
                direction="horizontal"
                distance={80}
                duration={0.7}
                ease="back.out"
            >
                <Image
                    src="/notes.png"
                    width={190.83}
                    height={228.8}
                    alt="Notes"
                    className="lg:hidden absolute -top-28 md:-top-14 -right-[6.6rem] -rotate-[6.89deg]"
                />
                <Image
                    src="/notes-desktop.png"
                    width={407}
                    height={488}
                    alt="Notes"
                    className="hidden lg:block absolute -top-32 -right-[6.6rem]"
                />
                <Image
                    src="/google.png"
                    width={68.53}
                    height={68.53}
                    alt="meta"
                    className="md:hidden border-[6px] border-white rounded-full absolute top-[16.5rem] -right-9 -rotate-[8deg] shadow-[1.71px_1.71px_0px_0px_#00000040]"
                />
                <div className="lg:hidden">
                    <Image
                        src="/clipped-full-shadow.png"
                        width={80}
                        height={80}
                        alt="Clipped Shadow"
                        className="absolute top-96 -translate-y-2 md:translate-y-0 -right-[3.2rem] -rotate-[75deg]"
                    />
                    <Image
                        src="/clipped-full-shadow.png"
                        width={80}
                        height={80}
                        alt="Clipped Shadow"
                        className="absolute top-96 translate-y-10 md:translate-y-8 -right-12 md:-right-8 -rotate-[53deg]"
                    />
                </div>
                <div className="hidden lg:block">
                    <Image
                        src="/clipped-full-shadow-desktop.png"
                        width={90.76}
                        height={90.76}
                        alt="Clipped Shadow"
                        className="absolute top-96 -translate-y-6 xl:-translate-y-8 -right-[3.2rem] -rotate-[61.44deg]"
                    />
                    <Image
                        src="/clipped-full-shadow-desktop.png"
                        width={90.76}
                        height={90.76}
                        alt="Clipped Shadow"
                        className="absolute top-96 translate-y-7 xl:translate-y-4 -right-12 md:-right-8 -rotate-[38.74deg]"
                    />
                </div>
            </AnimatedContent>

            <AnimatedContent
                direction="vertical"
                distance={50}
                duration={0.7}
                ease="back.out"
            >
                <Image
                    src="/watch.png"
                    width={96.08}
                    height={117.76}
                    alt="Watch"
                    className="lg:hidden absolute top-96 translate-y-14 md:-translate-y-6 right-0 md:right-20 rotate-[10.81deg]"
                />
                <Image
                    src="/watch-desktop.png"
                    width={192.16}
                    height={235.51}
                    alt="Watch"
                    className="hidden lg:block absolute top-72 -translate-y-8 xl:-translate-y-10 right-20 rotate-[10.81deg]"
                />
                <div className="lg:hidden absolute top-96 translate-y-[5.5rem] md:translate-y-1 -left-5 md:left-8 h-24 overflow-hidden">
                    <Image
                        src="/sticky-notes.png"
                        width={278.28}
                        height={107.55}
                        alt="Sticky Notes"
                        className="-rotate-[7.34deg]"
                    />
                </div>
                <div className="hidden lg:block absolute top-96 -translate-y-2 left-12 h-28 xl:h-32 overflow-hidden">
                    <Image
                        src="/sticky-notes-desktop.png"
                        width={493.73}
                        height={190.81}
                        alt="Sticky Notes"
                        className="-rotate-[7.34deg]"
                    />
                </div>
            </AnimatedContent>
            <div className="flex flex-col items-center gap-y-3 mb-9 w-[350px] md:w-[632px]">
                <div className="flex items-center gap-x-2 px-2 py-0.5 rounded-[10px] bg-neutral-50 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08),0px_0px_0.5px_0.5px_rgba(0,0,0,0.08),inset_0px_0px_4px_0px_#ffffff4d]">
                    <ul className="flex gap-x-0.5">
                        {[...Array(5)].map((_, index) => (
                            <li key={index}>
                                <StarIcon className="w-4 h-4 text-yellow-400" />
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm text-slate-600 font-geist font-medium leading-5 tracking-[-0.1px]">
                        4.9 out of 5
                    </p>
                </div>
                <h1 className="text-4xl md:text-[56px] font-semibold leading-11 md:leading-[68px] tracking-[-0.8px] md:tracking-[-0.4px]">
                    Grow brand awareness and increase sales
                </h1>
                <h2 className="md:text-lg md:leading-7 md:w-[477px]">
                    Digital Solution agency that make 1-on-1 Solution for each
                    business, because every business is different
                </h2>
            </div>
            <Link
                href="/contact"
                className="bg-indigo-950 text-white text-[16px] font-semibold leading-6 tracking-[-0.1px] px-4 py-1 mb-12 rounded-lg"
            >
                Talk to an expert
            </Link>
            <div className="flex items-center gap-x-3 mb-[152px] md:mb-[87px]">
                <ul className="flex items-center">
                    {[...Array(3)].map((_, index) => (
                        <li key={index} className={index > 0 ? "-ml-2" : ""}>
                            <Image
                                src={`/person${index + 1}.jpg`}
                                width={24}
                                height={24}
                                alt={`Person ${index + 1}`}
                                className="rounded-full border border-white"
                            />
                        </li>
                    ))}
                </ul>
                <p className="text-sm leading-5 tracking-[-0.1px] text-slate-600">
                    100% satisfied clients
                </p>
            </div>
            <div className="bg-orange-500 py-3 -rotate-2 w-[110vw]">
                <ScrollVelocity
                    velocity={100}
                    numCopies={4}
                    className="font-semibold text-xl leading-[30px] tracking-[-0.2px] text-white"
                    wrapperClassName="translate-x-5"
                >
                    {taglineItems.map((tagline, index) => (
                        <li
                            key={index}
                            className="flex gap-x-4 items-center shrink-0"
                        >
                            <p>{tagline}</p>
                            <Sparkle />
                        </li>
                    ))}
                </ScrollVelocity>
            </div>
        </section>
    );
};
export default Hero;
