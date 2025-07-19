import Image from "next/image";
import Link from "next/link";

const innovationsList = [
    {
        domain: "menuju.co.id",
        title: "Website Builder",
        description:
            "We're not just an agency — we're your strategic growth partner from 0 to scale",
        image: "/menuju-website-builder.png",
    },
    {
        domain: "",
        title: "AI Customer Service and Sales",
        description:
            "We're not just an agency — we're your strategic growth partner from 0 to scale",
        image: "/ai-customer.png",
    },
];

const Innovations = () => {
    return (
        <section className="text-center space-y-10">
            <div>
                <h3 className="font-caveat text-[22px] md:text-2xl text-blue-600 tracking-[-1px]">
                    Our innovation
                </h3>
                <h2 className="font-bold text-3xl md:text-5xl leading-[38px] md:leading-[135%] tracking-[-0.6px] md:tracking-[-0.8px]">
                    Our curated innovation
                </h2>
            </div>
            <ul className="flex flex-col gap-y-6 md:flex-row md:gap-x-6">
                {innovationsList.map((innovation, index) => (
                    <li
                        key={index}
                        className="relative flex flex-col justify-between items-center gap-y-7 px-5 pt-7 bg-neutral-50 rounded-xl border border-slate-100"
                    >
                        {index === 0 && (
                            <Image
                                src="/clipped-full.png"
                                width={96.45}
                                height={38.36}
                                alt="Clipped"
                                className="absolute -top-0.5 -right-8 -rotate-[59.97deg]"
                            />
                        )}
                        <div className="flex flex-col items-center gap-y-2">
                            <Link
                                href={
                                    innovation.domain
                                        ? `https://${innovation.domain}`
                                        : "#"
                                }
                                className={`${
                                    index == 0
                                        ? "bg-blue-600 outline-blue-600/25"
                                        : "bg-orange-500 outline-orange-500/25"
                                } outline-[3px] font-semibold text-lg md:text-[22px] leading-[140%] md:leading-[30px] md:tracking-[-0.2px] px-1.5 rounded-md w-fit text-white`}
                            >
                                {innovation.domain
                                    ? innovation.domain
                                    : "⚠️ Coming Soon!"}
                            </Link>
                            <h3 className="font-semibold text-xl md:text-3xl leading-[30px] md:leading-[38px] tracking-[-0.2px] md:tracking-[-0.6px]">
                                {innovation.title}
                            </h3>
                            <p className="md:text-lg md:leading-7">
                                {innovation.description}
                            </p>
                        </div>
                        <Image
                            src={innovation.image}
                            width={302}
                            height={188}
                            alt={innovation.title}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};
export default Innovations;
