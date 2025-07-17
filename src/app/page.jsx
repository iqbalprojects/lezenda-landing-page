import Advantages from "@/components/Advantages";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Innovations from "@/components/Innovations";
import Proccess from "@/components/Proccess";
import Services from "@/components/Services";

export default function Home() {
    return (
        <div className="flex flex-col gap-y-[52px] px-5 overflow-hidden">
            <Hero />
            <Clients />
            <Proccess />
            <Services />
            <Advantages />
            <Innovations />
            <Contact />
            <Footer />
        </div>
    );
}
