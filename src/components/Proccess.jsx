import Image from "next/image";

const proccessList = [
    {
        title: "⏱️ Pre-Launch",
        description:
            "Strategy to get the best of your business on the first 6 months",
    },
    {
        title: "🚀 Launch",
        description:
            "Execute like your inhouse team for platform building, “packaged” as an agency",
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
        <section className="flex flex-col items-center gap-y-10">
            <div className="text-center flex flex-col">
                <h3 className="font-caveat text-[22px] text-blue-600 tracking-[-1px]">
                    The process
                </h3>
                <h2 className="font-bold text-3xl leading-[38px] tracking-[-0.6px]">
                    We help businesses
                    <span className="block mx-auto my-1.5 outline-4 outline-indigo-100 bg-indigo-900 py-0.5 px-2.5 w-fit -rotate-[2.8deg] rounded-lg text-white font-semibold text-[28px] leading-[38px] tracking-[-0.6px]">
                        🚀 in every step
                    </span>
                    of their growth
                </h2>
            </div>
            <Image
                src="/proccess.png"
                width={350}
                height={280.8}
                alt="Illustration Proccess"
            />

            <ul className="relative flex flex-col gap-y-10">
                <div className="absolute -z-10 right-1/2 translate-x-1/2 top-0 h-full border border-dashed border-neutral-300"></div>
                {proccessList.map((item, index) => (
                    <li
                        key={index}
                        className="relative space-y-4 bg-neutral-50 rounded-[20px] shadow-[1px_1px_1px_0px_#00000026,-0.5px_1px_1px_0px_#0000001A] p-5"
                    >
                        <p className="text-black/10 font-bold text-3xl leading-[38px] tracking-[-0.6px]">
                            0{index + 1}
                        </p>
                        <div className="space-y-0.5">
                            <h5 className="font-semibold text-lg leading-[140%]">
                                {item.title}
                            </h5>
                            <p className="leading-5 tracking-[-0.1px]">
                                {item.description}
                            </p>
                        </div>
                        {index !== 0 && (
                            <i className="absolute bottom-full right-1/2 translate-1/2 w-2 h-2 rounded-full bg-neutral-300"></i>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};
export default Proccess;
