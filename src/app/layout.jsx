import {
    Plus_Jakarta_Sans,
    Caveat,
    Geist,
    Quattrocento_Sans,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { GoogleTagManager } from "@next/third-parties/google";
import { BASE_MENUJU_URL } from "@/const";
const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

const caveat = Caveat({
    variable: "--font-caveat",
    subsets: ["latin"],
});

const geist = Geist({
    variable: "--font-geist",
    subsets: ["latin"],
});

const quattrocento = Quattrocento_Sans({
    variable: "--font-quattrocento",
    subsets: ["latin"],
    weight: "400",
});

export const metadata = {
    metadataBase: new URL(process.env.BASE_URL),
    title: "Lezenda - Ecommerce Marketing Consultant",
    description: "We help grow brand awareness and increase sales.",
    openGraph: {
        title: "Lezenda - Ecommerce Marketing Consultant",
        description: "We help grow brand awareness and increase sales.",
        images: [
            {
                url: "/lezenda_logo.png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Lezenda - Ecommerce Marketing Consultant",
    },
};

export default async function RootLayout({ children }) {
    const response = await fetch(BASE_MENUJU_URL, {
        next: { revalidate: 60 },
    });
    const data = await response.json();
    return (
        <html lang="en" className="scroll-smooth">
            <GoogleTagManager gtmId={data.user.ga_id} />
            <body
                className={`${plusJakartaSans.variable} ${quattrocento.variable} ${caveat.variable} ${geist.variable} font-plus-jakarta-sans text-slate-950 antialiased`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
