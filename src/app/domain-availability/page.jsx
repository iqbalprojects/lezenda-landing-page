"use client";
import { useState, useMemo, createContext } from "react";
import Image from "next/image";
import axios from "axios";

// Import your components
import IconsType from "@/assets/icons/Type";
import IconsDomain from "@/assets/icons/Domain";
import IconsContact from "@/assets/icons/Contact";
import DomainSearchForm from "@/components/DomainSearchForm";
import DomainExtensionList from "@/components/DomainExtensionList";
import DomainResults from "@/components/DomainResult";
import FeatureSteps from "@/components/FeatureSteps";

// Create a context for sharing domain-related state and functions
export const DomainCheckerContext = createContext();

const API_URL = "https://app.bulan.my.id/api/v1/domains/search";

export default function Home() {
    const [keyword, setKeyword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [availabilities, setAvailabilities] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const iconMap = {
        IconsType,
        IconsDomain,
        IconsContact,
    };

    const [domains, setDomains] = useState([
        { isSelected: true, extension: ".com" },
        { isSelected: false, extension: ".co.id" },
        { isSelected: false, extension: ".id" },
        { isSelected: false, extension: ".net" },
        { isSelected: false, extension: ".org" },
        { isSelected: false, extension: ".website" },
        { isSelected: false, extension: ".world" },
        { isSelected: false, extension: ".xyz" },
        { isSelected: false, extension: ".online" },
        { isSelected: false, extension: ".store" },
        { isSelected: false, extension: ".tech" },
        { isSelected: false, extension: ".site" },
        { isSelected: false, extension: ".space" },
        { isSelected: false, extension: ".app" },
        { isSelected: false, extension: ".shop" },
        { isSelected: false, extension: ".tv" },
        { isSelected: false, extension: ".io" },
        { isSelected: false, extension: ".ai" },
        { isSelected: false, extension: ".me" },
        { isSelected: false, extension: ".dev" },
        { isSelected: false, extension: ".info" },
        { isSelected: false, extension: ".blog" },
        { isSelected: false, extension: ".pro" },
        { isSelected: false, extension: ".live" },
        { isSelected: false, extension: ".news" },
    ]);

    const steps = [
        {
            icon: <IconsType />,
            title: "Type and search the domain name that you love",
            buttonText: "Search Now",
        },
        {
            icon: <IconsDomain />,
            title: "Choose the domain name that you want",
            buttonText: "Try Now",
        },
        {
            icon: <IconsContact />,
            title: "Contact Us to purchase the domain name",
            buttonText: "Contact Us",
        },
    ];

    const selectedDomains = useMemo(() => {
        return domains
            .filter((domain) => domain.isSelected)
            .map((domain) => domain.extension.replace(/^\./, ""));
    }, [domains]);

    const updateDomainSelection = (domainToUpdate) => {
        setDomains((prevDomains) =>
            prevDomains.map((d) =>
                d.extension === domainToUpdate.extension
                    ? { ...d, isSelected: domainToUpdate.isSelected }
                    : d
            )
        );
    };

    const checkDomains = async () => {
        setErrorMessage("");

        if (!keyword.trim()) {
            setErrorMessage("Please enter a domain name");
            return;
        }

        if (selectedDomains.length === 0) {
            setErrorMessage("Please select at least one domain extension");
            return;
        }

        // Assuming gtag is globally available or set up in _app.js or _document.js
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "domain_check");
        }

        setIsLoading(true);
        setHasSearched(true);
        setIsExpanded(false); // Collapse extension list on search

        try {
            let cleanKeyword = keyword.trim();
            const extensionIndex = cleanKeyword.lastIndexOf(".");
            if (extensionIndex !== -1) {
                cleanKeyword = cleanKeyword.substring(0, extensionIndex);
            }

            const response = await axios.post(API_URL, {
                keyword: cleanKeyword,
                tlds: selectedDomains,
            });

            if (response.data && Array.isArray(response.data)) {
                setAvailabilities(response.data);
            } else {
                setAvailabilities([]);
                setErrorMessage("No domain data returned from the server");
            }
        } catch (error) {
            console.error("Error checking domains:", error);
            setErrorMessage("Failed to check domains. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    // Memoize the context value to prevent unnecessary re-renders of consumers
    const domainCheckerValue = useMemo(
        () => ({
            keyword,
            setKeyword,
            isLoading,
            isExpanded,
            setIsExpanded,
            domains, // Provide all domains for DomainExtensionList
            selectedDomains, // Provide selected domains for DomainSearchForm display
            errorMessage,
            checkDomains,
            updateDomainSelection,
        }),
        [keyword, isLoading, isExpanded, domains, errorMessage, selectedDomains]
    );

    return (
        <DomainCheckerContext.Provider value={domainCheckerValue}>
            <div className="font-quattrocento lg:container mx-auto px-5 md:px-10 lg:px-20 overflow-hidden">
                {/* Hero Section */}
                <section className="bg-purple-950 rounded-[10px] lg:rounded-2xl xxl:rounded-3xl lg:rounded-b-none xxl:rounded-b-none lg:rounded-br-2xl xxl:rounded-br-3xl pt-8 md:pt-14 lg:mt-3.5 lg:mb-24 xl:mt-5 text-white px-[17px] md:px-7 xl:px-12 xxl:px-[70px] h-[280px] xs:h-[320px] md:h-[350px] lg:h-[365px] xl:h-[420px] xxl:h-[440px] relative">
                    <div className="flex flex-col gap-y-[18px] md:justify-center">
                        <h1 className="font-bold text-xl xs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:leading-tight xl:leading-tight xxl:text-[3.2rem] max-w-sm md:max-w-md xl:max-w-xl">
                            Your brand, your identity, your future it starts
                            with a domain
                        </h1>
                        <div className="flex flex-col gap-y-6 max-w-[165px] md:max-w-xs lg:max-w-sm xl:max-w-lg xxl:max-w-xl">
                            <p className="text-xs xs:text-sm md:text-base xl:text-lg xxl:text-xl text-justify">
                                Your brand begins with a powerful domain. Don't
                                wait register it through Lezenda and launch with
                                confidence.
                            </p>
                            <a
                                href="https://wa.me/6285156700100"
                                target="_blank"
                                className="flex justify-center gap-x-1 font-Inter xs:font-semibold text-xs xl:text-sm w-[160px] md:w-[180px] lg:w-[178px] h-[30px] md:h-[40px] rounded-md items-center bg-black text-white"
                            >
                                Secure My Domain
                                <svg
                                    width="12"
                                    height="13"
                                    viewBox="0 0 12 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.88477 2.63672L10.2001 6.75593L5.88477 10.8751"
                                        stroke="currentColor"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M10.2027 6.75586L1.80273 6.75586"
                                        stroke="currentColor"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <Image
                        src="/hero.png"
                        className="object-contain w-[280px] h-[170px] xs:w-[312px] xs:h-[208px] md:w-[500px] md:h-[340px] lg:w-[600px] lg:h-[440px] xl:w-[700px] xl:h-[520px] xxl:w-[740px] xxl:h-[560px] absolute bottom-8 -right-12 xs:bottom-6 xs:-right-11 md:bottom-0 md:-right-14 lg:-top-14 xl:-top-[4.5rem] xxl:-top-[4.8rem] lg:-right-12"
                        alt="hero"
                        width={740}
                        height={560}
                        priority // Add priority for LCP image
                    />
                    <div className="hidden lg:grid grid-cols-7 xxl:grid-cols-9 absolute w-full top-full right-0">
                        <span className="col-span-1 bg-purple-950 rounded-b-2xl w-full h-full"></span>
                        <span className="col-span-6 xxl:col-span-8 bg-purple-950 relative">
                            <span className="w-full h-full bg-white rounded-tl-2xl absolute"></span>
                            <DomainSearchForm
                                className="relative ml-[15px] mt-[13px]"
                                isMobile={false}
                            />
                        </span>
                    </div>
                </section>

                {/* Search Section */}
                <section className="flex flex-col gap-y-9 my-9">
                    <DomainSearchForm
                        className="relative lg:hidden"
                        isMobile={true}
                    />

                    {/* This list is for desktop, showing only the first 5 by default */}
                    <DomainExtensionList
                        domainsToDisplay={domains.slice(0, 5)} // Only display first 5 for the initial row
                        isExpanded={isExpanded}
                        showToggle={true}
                        className="hidden lg:flex items-center justify-between px-[4.2rem] lg:pt-3 xl:pt-5 lg:pb-6 xl:pb-8"
                    />

                    {errorMessage && (
                        <div className="text-red-500 text-center p-2 lg:mb-4 bg-red-50 rounded-md">
                            {errorMessage}
                        </div>
                    )}

                    {/* This list appears when expanded, showing all domains */}
                    {isExpanded && (
                        <DomainExtensionList
                            domainsToDisplay={domains} // Display all domains when expanded
                            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-6 md:gap-x-4 border-2 lg:border-[3px] xxl:border-4 px-[17px] md:px-14 lg:px-16 py-6 md:py-8 lg:py-10 rounded-[20px] border-softPurple"
                        />
                    )}

                    {!hasSearched && (
                        <div className="flex flex-col items-center text-center gap-y-1.5">
                            <h2 className="flex items-end gap-x-4 justify-center font-bold text-[32px] md:text-4xl lg:text-[40px] text-softPurple">
                                <Image
                                    src="/monitor.png"
                                    className="w-12 h-12 hidden lg:block"
                                    alt="monitor"
                                    width={48}
                                    height={48}
                                />
                                Let's See What's Available!
                            </h2>
                            <p className="md:text-lg lg:text-2xl">
                                Pop in your name idea and we'll show you what's
                                up for grabs.
                            </p>
                        </div>
                    )}
                </section>

                {/* Results & Steps Section */}
                <section className="flex flex-col gap-y-[84px] py-6 md:py-9 text-white lg:mb-24">
                    {hasSearched && (
                        <div className="flex flex-col gap-y-[63px]">
                            <div className="flex items-end justify-center gap-x-1">
                                <Image
                                    src="/images/notes.png"
                                    className="w-11 lg:w-14"
                                    alt="notes"
                                    width={56}
                                    height={56}
                                />
                                <h2 className="text-softPurple font-bold text-4xl lg:text-[40px]">
                                    Status Domain
                                </h2>
                            </div>

                            {isLoading ? (
                                <div className="flex justify-center items-center p-10">
                                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-softPurple"></div>
                                </div>
                            ) : (
                                <DomainResults
                                    availabilities={availabilities}
                                />
                            )}
                        </div>
                    )}

                    <FeatureSteps steps={steps} iconMap={iconMap} />
                </section>

                {/* Call To Action Section */}
                <section className="bg-green-200 flex flex-col md:justify-center lg:items-end gap-y-6 rounded-[28px] lg:rounded-tr-none px-3.5 md:px-10 pt-6 my-9 h-[280px] xs:h-[300px] md:h-[350px] xl:h-[400px] relative">
                    <div className="flex flex-col gap-y-6 md:justify-center lg:items-start">
                        <h2 className="font-bold text-xl xs:text-2xl md:text-[27px] lg:leading-tight xxl:leading-tight lg:text-[32px] xl:text-[44px] xxl:text-5xl md:leading-tight tracking-wider md:max-w-xs lg:max-w-sm xl:max-w-lg xxl:max-w-xl">
                            Secure your space in the digital universe
                        </h2>
                        <div className="flex flex-col gap-y-10 lg:gap-y-6 max-w-[160px] xs:max-w-[190px] md:max-w-xs lg:max-w-sm xl:max-w-lg xxl:max-w-[34.5rem]">
                            <p className="text-xs md:text-sm xl:text-lg xxl:text-xl text-justify">
                                Your brand begins with a powerful domain. Don't
                                wait register it through Lezenda and launch with
                                confidence
                            </p>
                            <a
                                href="https://wa.me/6285156700100"
                                target="_blank"
                                className="flex justify-center gap-x-1 font-Inter xs:font-semibold text-xs xl:text-sm w-[160px] md:w-[180px] lg:w-[178px] h-[30px] md:h-[40px] rounded-md items-center bg-black text-white"
                            >
                                Secure My Domain
                                <svg
                                    width="12"
                                    height="13"
                                    viewBox="0 0 12 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.88477 2.63672L10.2001 6.75593L5.88477 10.8751"
                                        stroke="currentColor"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M10.2027 6.75586L1.80273 6.75586"
                                        stroke="currentColor"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <Image
                        src="/hero2.png"
                        className="object-contain w-[260px] h-[160px] xs:w-[280px] xs:h-[180px] md:w-[400px] md:h-[298px] lg:w-[540px] lg:h-[390px] xl:w-[620px] xl:h-[470px] xxl:w-[630px] xxl:h-[480px] absolute bottom-10 -right-10 xs:bottom-10 md:bottom-0 xs:-right-10 lg:-top-10 xl:-top-12 lg:-left-28 lg:z-10"
                        alt="hero2"
                        width={630}
                        height={480}
                    />
                    <div className="hidden lg:grid grid-cols-7 absolute w-full h-14 bottom-full right-0">
                        <span className="col-span-6 bg-softGreen relative">
                            <span className="w-full h-full bg-white rounded-br-2xl absolute"></span>
                        </span>
                        <span className="col-span-1 bg-softGreen rounded-t-2xl w-full h-full"></span>
                    </div>
                </section>
            </div>
        </DomainCheckerContext.Provider>
    );
}
