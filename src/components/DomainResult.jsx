"use client"; // This component uses browser-specific APIs (window, gtag), so it MUST be a client component.

import React from "react";
import Image from "next/image"; // Use Next.js Image component for optimized images
import IconsArrowForward from "@/assets/icons/ArrowForward"; // Adjust path if your IconsArrowForward is elsewhere

/**
 * DomainResults component displays the availability status of domain names.
 * It provides a "Claim Your Domain" button for available domains.
 */
export default function DomainResults({ availabilities }) {
    // Handler for claiming a domain
    const handleClaimDomain = () => {
        const waLink = "https://wa.me/6285156700100"; // WhatsApp link

        // Assuming gtag is globally available or configured in _app.js (Pages Router)
        // or in layout.js / via a <Script> component (App Router).
        // Check if gtag is defined before using it.
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "domain_claim", {
                event_callback: function () {
                    // Open the link after the gtag event fires
                    window.open(waLink, "_blank");
                },
            });
        } else {
            // Fallback if gtag is not available
            window.open(waLink, "_blank");
        }

        // The setTimeout is redundant if event_callback is used, as event_callback ensures
        // the action happens *after* the GA event. If gtag isn't guaranteed to fire
        // the callback, or for older gtag versions, having a fallback timeout *might* be considered,
        // but typically event_callback is preferred for reliability.
        // For simplicity, I'm removing the redundant setTimeout if event_callback is reliable.
        // If you specifically need a delay regardless of gtag callback, re-add it.
        /*
        setTimeout(function () {
            window.open(waLink, "_blank");
        }, 1000);
        */
    };

    return (
        <ul className="text-black flex flex-col gap-y-9">
            {/* Map over the availabilities array to render each domain result */}
            {availabilities.map((available) => (
                <li
                    key={available.domain} // Using domain as key is better if it's unique, otherwise use index
                    className="flex items-start justify-between border-b border-b-gray-300"
                >
                    <div className="flex flex-col lg:flex-row lg:w-full lg:justify-between gap-y-6 md:gap-y-7 pb-9 md:pb-14">
                        <span className="flex flex-col lg:flex-row lg:w-full lg:justify-between gap-y-1.5 md:gap-y-3">
                            <h3 className="font-bold text-2xl xl:text-3xl">
                                {available.domain}
                            </h3>
                            <p className="md:text-lg xl:text-3xl lg:mx-auto flex items-center">
                                {available.status === "inactive"
                                    ? "Available"
                                    : "Not Available"}
                            </p>
                        </span>

                        {/* Conditional rendering for buttons based on domain status */}
                        {available.status === "inactive" ? (
                            <button
                                onClick={handleClaimDomain} // Use onClick event handler
                                className="flex justify-center gap-x-1 text-white font-Inter font-semibold text-xs xl:text-sm w-[179px] xl:w-[200px] h-[40px] xl:h-[45px] rounded-md items-center bg-softBlack"
                            >
                                Claim Your Domain
                                <IconsArrowForward />
                            </button>
                        ) : (
                            <button
                                className="flex justify-center gap-x-1 text-white font-Inter font-semibold text-xs xl:text-sm w-[179px] xl:w-[200px] h-[40px] xl:h-[45px] rounded-md items-center bg-gray-400 cursor-not-allowed"
                                disabled // Use the 'disabled' attribute for disabled buttons
                            >
                                Not Available
                            </button>
                        )}
                    </div>

                    {/* Conditional rendering for images based on domain status */}
                    {available.status === "inactive" ? (
                        <Image
                            src="/images/check.png"
                            alt="Domain available" // Alt text for accessibility
                            className="w-32 md:w-40 lg:hidden translate-x-5 md:translate-x-10"
                            width={160} // Provide explicit width and height for Image component
                            height={160} // Adjust based on the actual image aspect ratio
                        />
                    ) : (
                        <Image
                            src="/images/cross.png"
                            alt="Domain not available" // Alt text for accessibility
                            className="w-32 md:w-40 lg:hidden translate-x-5 md:translate-x-10"
                            width={160} // Provide explicit width and height for Image component
                            height={160} // Adjust based on the actual image aspect ratio
                        />
                    )}
                </li>
            ))}
        </ul>
    );
}
