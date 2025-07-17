import Sparkle from "@/assets/icons/sparkle";
import StarIcon from "@/assets/icons/star";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center text-center pt-[72px] pb-2 overflow-y-clip">
            <Image
                src="/pen.png"
                width={138.76}
                height={131.38}
                alt="Pen"
                className="absolute top-2.5 -left-[4.5rem] -rotate-[20deg]"
            />
            <Image
                src="/notes.png"
                width={190.83}
                height={228.8}
                alt="Notes"
                className="absolute -top-10 -right-[6.6rem] -rotate-[6.89deg]"
            />
            <Image
                src="/keyboard.png"
                width={357.74}
                height={148}
                alt="Notes"
                className="absolute bottom-4 right-full translate-x-11 rotate-[17.46deg]"
            />
            <Image
                src="/watch.png"
                width={96.08}
                height={117.76}
                alt="Watch"
                className="absolute bottom-6 right-0 rotate-[10.81deg]"
            />
            <div className="absolute bottom-2 -left-5 h-32 overflow-hidden">
                <Image
                    src="/sticky-notes.png"
                    width={278.28}
                    height={107.55}
                    alt="Sticky Notes"
                    className="mix-blend-multiply -rotate-[7.34deg]"
                />
            </div>
            <div className="flex flex-col items-center gap-y-3 mb-9 w-[350px]">
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
                <h1 className="text-4xl font-semibold leading-11 tracking-[-0.8px]">
                    Grow brand awareness and increase sales
                </h1>
                <h2>
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
            <div className="flex items-center gap-x-3 mb-[152px]">
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
                <ul className="flex gap-x-4 items-center translate-x-5 font-semibold text-xl leading-[30px] tracking-[-0.2px] text-white">
                    <li>BUILT FOR GROWTH</li>
                    <li>
                        <Sparkle />
                    </li>
                    <li>RESULTS FIRST</li>
                </ul>
            </div>
        </section>
    );
};
export default Hero;
