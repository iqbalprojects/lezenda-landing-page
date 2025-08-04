import Image from "next/image";
import StampOnView from "./StampSpan";

const proccessList = [
    {
        title: "⏱️ Pre-Launch",
        description:
            "Strategy to get the best of your business on the first 6 months",
    },
    {
        title: "🚀 Launch",
        description: `Execute like your inhouse team for platform building, "packaged" as an agency`,
    },
    {
        title: "⚙️ Optimize",
        description:
            "Make sure your business is built to last — aligned with latest trends, competitors, and platform demands",
    },
    {
        title: "📈 Scale",
        description:
            "When it is time to scale up your effort, we will strategize how it should and work on it for you",
    },
    {
        title: "🌎 Expansion",
        description:
            "Expand your offer whether from online to offline, offline to online, local to national, national to global",
    },
];

const Proccess = () => {
    return (
        <section className="flex flex-col my-[52px] xl:my-[60px] xl:mx-[140px] items-center gap-y-10">
            <div className="text-center flex flex-col">
                <h3 className="font-caveat text-[22px] text-blue-600 tracking-[-1px]">
                    The process
                </h3>
                <h2 className="font-bold text-3xl md:text-5xl leading-[38px] md:leading-16 tracking-[-0.6px] text-[#1D2146]">
                    We help businesses
                    <div className="flex flex-col md:flex-row justify-center gap-x-2 md:mt-1 text-[#1D2146]">
                        <StampOnView className="mx-auto my-1.5 md:my-4 outline-4 outline-indigo-100 bg-[#242A63] py-0.5 md:py-3 px-2.5 w-fit rounded-lg text-white font-semibold text-[28px] md:text-5xl leading-[38px] tracking-[-0.6px]">
                            🚀 in every step
                        </StampOnView>
                        of their growth
                    </div>
                </h2>
            </div>
            <div className="flex flex-col items-center gap-y-10">
                <Image
                    src="/proccess.png"
                    width={350}
                    height={280.8}
                    alt="Illustration Proccess"
                    className="block md:hidden"
                />
                <ul className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-10">
                    {proccessList.map((item, index) => (
                        <li
                            key={index}
                            className="relative flex flex-col justify-between gap-y-4 md:h-[280px] bg-neutral-50 p-7 rounded-[20px] shadow-[1px_1px_1px_0px_#00000026,-0.5px_1px_1px_0px_#0000001A]"
                        >
                            <p className="text-black/10 font-bold text-3xl md:text-5xl leading-[38px] tracking-[-0.6px]">
                                0{index + 1}
                            </p>
                            <div className="space-y-0.5 md:space-y-2">
                                <h5 className="font-semibold text-lg md:text-2xl leading-[140%]">
                                    {item.title}
                                </h5>
                                <p className="leading-5 md:text-base tracking-[-0.1px]">
                                    {item.description}
                                </p>
                            </div>

                            {/* Connection dots */}
                            {index !== 0 && (
                                <>
                                    {/* Mobile dots - show on all cards except first */}
                                    <i className="absolute top-0 -translate-y-0.5 right-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-neutral-300 md:hidden"></i>

                                    {/* MD screen dots - only on cards that receive connections (odd indices) */}
                                    {index % 2 === 1 && (
                                        <i className="hidden md:block lg:hidden absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-neutral-300"></i>
                                    )}

                                    {/* LG screen dots - show on cards that receive horizontal connections (not first card in each row) */}
                                    {index % 3 !== 0 && (
                                        <i className="hidden lg:block absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-neutral-300"></i>
                                    )}
                                </>
                            )}

                            {/* Mobile vertical connections */}
                            {index !== proccessList.length - 1 && (
                                <span className="absolute left-1/2 top-full h-10 w-0.5 border-l border-dashed border-neutral-300 transform -translate-x-1/2 md:hidden" />
                            )}

                            {/* Desktop connections - for 2-column layout (MD screens) */}
                            <>
                                {/* Horizontal line to next card in same row (2-col) */}
                                {index % 2 === 0 &&
                                    index < proccessList.length - 1 && (
                                        <span className="hidden md:block lg:hidden absolute top-1/2 left-full w-10 h-0.5 border-t border-dashed border-neutral-300 -translate-y-0.5" />
                                    )}
                            </>

                            {/* Desktop connections - for 3-column layout */}
                            {index < proccessList.length - 1 && (
                                <>
                                    {/* Horizontal line to next card in same row (3-col: connect every card except last in row) */}
                                    {(index + 1) % 3 !== 0 && (
                                        <span className="hidden lg:block absolute top-1/2 left-full w-10 border-t border-dashed border-neutral-300" />
                                    )}

                                    {/* Vertical line down from last card in row to next row (3-col) */}
                                    {(index + 1) % 3 === 0 &&
                                        index < proccessList.length - 3 && (
                                            <span className="hidden lg:block absolute left-1/2 top-full h-10 w-0.5 border-l border-dashed border-neutral-300 transform -translate-x-1/2" />
                                        )}
                                </>
                            )}
                        </li>
                    ))}

                    {/* Desktop image - shows in grid on medium and large screens */}
                    <li className="hidden md:flex justify-center items-center">
                        <Image
                            src="/proccess.png"
                            width={350}
                            height={280.8}
                            alt="Illustration Proccess"
                        />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Proccess;
