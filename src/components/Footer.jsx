import Image from "next/image";
import Link from "next/link";

const footerLinks = [
    {
        href: "#",
        text: "Join the team",
    },
    {
        href: "#",
        text: "Discover our story",
    },
    { href: "#", text: "Check domains" },
    { href: "#", text: "Privacy & terms" },
];

const Footer = () => {
    return (
        <footer className="space-y-[60px]">
            <div className="p-4 space-y-[60px]">
                <div className="space-y-6">
                    <h2 className="text-zinc-400 text-3xl leading-[38px] tracking-[-0.6px]">
                        Get in touch
                    </h2>
                    <ul className="space-y-3 font-semibold text-xl leading-[30px] tracking-[-0.2px]">
                        <li>
                            <Link href="#">ping@lezenda.com</Link>
                        </li>
                        <li>
                            <Link href="#">+628 5156 700 100</Link>
                        </li>
                    </ul>
                </div>
                <ul className="space-y-4">
                    {footerLinks.map((link, index) => (
                        <li key={index}>
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
                width={398}
                height={64.82}
                alt="Lezenda Logo"
                className=""
            />
        </footer>
    );
};
export default Footer;
