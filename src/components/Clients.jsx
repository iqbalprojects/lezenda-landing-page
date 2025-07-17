import Image from "next/image";

const clientsList = [
    {
        name: "Otten Coffee",
        image: "/otten-coffee.png",
        description: "Web Development, Performance Marketing",
    },
    {
        name: "I Am Geprek Bensu",
        image: "/iam-geprek-bensu.png",
        description:
            "Offline store launch campaigns, Line Channel management, Brand dispute management",
    },
    {
        name: "Javasari",
        image: "/javasari.png",
        description:
            "Marketplace Accelerator Program, Kickstart the initial launch program with KOL, Ads, and store optimization, Shopee Star Seller and Tokopedia Pro Merchant in 60 days",
    },
    {
        name: "Brewsuniq",
        image: "/brewsuniq.png",
        description: "Web Development, Performance Marketing",
    },
];

const Clients = () => {
    return (
        <section className="relative p-5 rounded-[20px] shadow-[1px_1px_1px_0px_#00000026,-0.5px_1px_1px_0px_#0000001A]">
            <Image
                src="/pinned.png"
                width={71.3}
                height={67}
                alt="Pinned"
                className="absolute -left-4"
            />
            <div className="flex flex-col items-center text-center">
                <h3 className="font-caveat text-[22px] text-blue-600 tracking-[-1px] mb-2">
                    Our clients
                </h3>
                <h2 className="text-4xl font-bold leading-[120%] tracking-[-0.8px] mb-4">
                    Who we have worked with
                </h2>
                <h4 className="leading-6 tracking-[-0.1px]">
                    Digital Solution agency that make 1-on-1 Solution for each
                    business, because every business is different
                </h4>
                <Image
                    src="/client.png"
                    width={310}
                    height={312.68}
                    alt="Illustration Client"
                />
            </div>
            <ul className="relative px-4 py-2 rounded-[20px] shadow-[1px_1px_1px_0px_#00000026,-0.5px_1px_1px_0px_#0000001A]">
                <Image
                    src="/clipped.png"
                    width={71.24}
                    height={88}
                    alt="Clipped"
                    className="absolute -top-4 -right-1"
                />
                {clientsList.map((client, index) => (
                    <li
                        key={index}
                        className="py-5 border-b border-slate-100 flex flex-col gap-y-3"
                    >
                        <div className="flex items-center gap-x-3">
                            <Image
                                src={client.image}
                                width={36}
                                height={36}
                                alt={client.name}
                            />
                            <h5 className="font-semibold leading-6 tracking-[-0.1px]">
                                {client.name}
                            </h5>
                        </div>
                        <p className="text-sm leading-5 tracking-[-0.1px]">
                            {client.description}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Clients;
