import Image from "next/image";
import Link from "next/link";

const Contact = () => {
    return (
        <section id="contact-us" className=" bg-[#1D2146] rounded-2xl">
            <div className="relative">
                <div className="hidden md:block">
                    <ul className="flex flex-col gap-y-[72px] divide-y divide-white/5">
                        {[...Array(6)].map((_, index) => (
                            <li key={index}></li>
                        ))}
                    </ul>
                    <ul className="absolute top-0 flex gap-x-20 divide-x h-screen divide-white/5">
                        {[...Array(12)].map((_, index) => (
                            <li key={index}></li>
                        ))}
                    </ul>
                </div>
                <div className="md:absolute top-1 p-8 flex flex-col text-center md:text-start md:flex-row md:items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-semibold leading-[38px] md:leading-[135%] tracking-[-0.6px] md:tracking-[-0.8px] mb-3 text-white">
                            Ready to Scale Smarter?
                        </h2>
                        <p className="text-white/60 md:text-lg leading-5 md:leading-7 tracking-[-0.1px] mb-8">
                            From launch to scale, we’re here to make sure your
                            next move is your best one
                        </p>
                        <Link
                            href="#"
                            className="bg-white grid place-content-center w-fit mx-auto md:mx-0 px-4 h-10 rounded-[10px] font-semibold tracking-[-0.1px]"
                        >
                            Contact Us
                        </Link>
                    </div>
                    <Image
                        src="/contact.png"
                        width={286}
                        height={211.56}
                        alt="Contact Us"
                        className="scale-[130%] -translate-y-6"
                    />
                </div>
            </div>
        </section>
    );
};
export default Contact;
