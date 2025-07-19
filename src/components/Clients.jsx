import Image from "next/image";
import ScrollingClientsList from "./ScrollingClientList";

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
    {
        name: "Smiley",
        image: "/smiley.png",
        description:
            "Patient management system, Improving operation efficiency",
    },
    {
        name: "Norvus Mall",
        image: "/norvus.png",
        description:
            "Ecommerce development, Meta Ads CPAS, Marketplace Optimization, Payment Gateway Integration",
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
            <div className="flex flex-col md:flex-row md:gap-[59px]">
                <div className="flex flex-col items-center text-center md:pt-7">
                    <h3 className="font-caveat text-[22px] text-center md:text-left w-full md:pl-7 text-blue-600 tracking-[-1px] mb-2">
                        Our clients
                    </h3>
                    <h2 className="text-4xl font-bold leading-[120%] text-center md:text-left tracking-[-0.8px] mb-4">
                        Who we have worked with
                    </h2>
                    <h4 className="leading-6 font-normal text-lg text-center md:text-left tracking-[-0.1px]">
                        Digital Solution agency that make 1-on-1 Solution for
                        each business, because every business is different
                    </h4>
                    <Image
                        src="/client.png"
                        width={310}
                        height={312.68}
                        alt="Illustration Client"
                    />
                </div>
                <ScrollingClientsList clients={clientsList} />
            </div>
        </section>
    );
};

export default Clients;
