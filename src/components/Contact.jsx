import Image from "next/image";
import Link from "next/link";

const Contact = () => {
    return (
        <section className="bg-[#1D2146] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3 text-white">
                Ready to Scale Smarter?
            </h2>
            <p className="text-white/60 mb-8">
                From launch to scale, we’re here to make sure your next move is
                your best one
            </p>
            <Link
                href="#"
                className="bg-white grid place-content-center w-fit mx-auto px-4 h-10 rounded-[10px] font-semibold"
            >
                Contact Us
            </Link>
            <Image
                src="/contact.png"
                width={286}
                height={211.56}
                alt="Contact Us"
                className="scale-[130%] -translate-y-6"
            />
        </section>
    );
};
export default Contact;
