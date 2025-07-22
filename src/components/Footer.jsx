import Image from "next/image";
import Link from "next/link";

const footerLinks = [
    // {
    //     href: "#",
    //     text: "Join the team",
    // },
    // {
    //     href: "#",
    //     text: "Discover our story",
    // },
    { href: "#", text: "Check domains" },
    // { href: "#", text: "Privacy & terms" },
];

const Footer = () => {
    return (
        <footer className="flex flex-col gap-y-[60px] items-center">
            <div className="py-8 w-full flex flex-col gap-y-[60px] md:flex-row justify-between">
                <div className="space-y-6">
                    <h2 className="text-zinc-400 text-3xl md:text-5xl leading-[38px] md:leading-[135%] tracking-[-0.6px] md:tracking-[-0.8px]">
                        Get in touch
                    </h2>
                    <ul className="space-y-3 font-semibold text-xl md:text-3xl leading-[30px] md:leading-[38px] tracking-[-0.2px] md:tracking-[-0.6px]">
                        <li>
                            <Link
                                href="mailto:ping@lezenda.com"
                                target="_blank"
                            >
                                ping@lezenda.com
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://wa.me/6285156700100"
                                target="_blank"
                            >
                                +628 5156 700 100
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul className="space-y-4">
                    {footerLinks.map((link, index) => (
                        <li
                            key={index}
                            className="md:font-medium md:text-lg md:leading-7"
                        >
                            <Link
                                href={link.href}
                                className="text-slate-600 font-medium text-lg leading-7"
                            >
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Image
                src="/lezenda-logo-white.png"
                alt="Lezenda Logo"
                width={1158}
                height={187}
                sizes="(max-width: 767px) 398px, 1158px"
            />
        </footer>
    );
};
export default Footer;
