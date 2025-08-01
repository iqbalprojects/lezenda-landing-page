"use client"; // This component uses client-side hooks (useState, useContext) and event handlers, so it MUST be a client component.

import React, { useContext } from "react";
import IconsSearch from "@/assets/icons/Search"; // Adjust path if your IconsSearch is elsewhere
import IconsArrow from "@/assets/icons/Arrow"; // Adjust path if your IconsArrow is elsewhere
import { DomainCheckerContext } from "@/app/domain-availability/page"; // Adjust path to your context file

/**
 * DomainSearchForm component handles the domain search input and actions.
 * It adapts its layout and behavior based on `isMobile` prop and interacts
 * with the DomainCheckerContext for state management.
 */
export default function DomainSearchForm({ isMobile, className }) {
    // Consume the context provided by the parent (e.g., app/page.jsx)
    const {
        keyword,
        setKeyword,
        isLoading,
        isExpanded,
        setIsExpanded, // This is the equivalent of 'toggle-expand'
        selectedDomains,
        checkDomains, // This is the equivalent of 'checkDomains' from parentScope
    } = useContext(DomainCheckerContext);

    // This handles the form submission for both desktop and mobile.
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior (page reload)
        checkDomains(); // Call the checkDomains function from context
    };

    // This handles the mobile arrow button click
    const handleToggleExpand = () => {
        setIsExpanded((prev) => !prev); // Toggle the expansion state
    };

    // This handles the mobile search button click with conditional expand logic
    const handleMobileSearchClick = () => {
        // Equivalent of Vue's 'if (selectedDomains.length === 0 && keyword) { toggleExpandOpen(); }'
        if (selectedDomains.length === 0 && keyword) {
            // In Next.js/React, `toggleExpandOpen` was about setting isExpanded to true.
            // So we directly set it here.
            setIsExpanded(true); // Open the expansion list
        }
        // Then, proceed with domain check
        checkDomains();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`flex items-center bg-white rounded-full h-12 md:h-14 lg:h-16 shadow-md border border-gray-200 ${className}`}
        >
            <input
                type="text"
                value={keyword} // Controlled component: value is tied to state
                onChange={(e) => setKeyword(e.target.value)} // Update state on change
                placeholder="Enter Your Domain Here"
                className="flex-grow pl-5 pr-2 md:pl-7 lg:pl-8 py-2 focus:outline-none rounded-l-full text-sm md:text-base text-gray-700"
                // Original Vue classes:
                // class="w-full text-softPurple xl:text-xl rounded-3xl lg:rounded-2xl h-12 md:h-14 xl:h-16 pl-4 md:pl-6 placeholder:text-softPurple placeholder:xl:text-xl outline outline-2 outline-softPurple"
                // Merged into the Tailwind classes above for simplicity.
                // If you need the exact original styling, ensure these are merged correctly.
            />

            {/* Desktop search button (v-if="!isMobile") */}
            {!isMobile && (
                <div className="pl-2 lg:pl-10 border-l-2 lg:text-black lg:font-semibold lg:text-lg border-l-softPurple absolute right-1 lg:right-6 top-1/2 -translate-y-1/2">
                    <button
                        type="submit" // This button triggers the form's onSubmit
                        className="bg-green-200 lg:w-44 lg:h-9 lg:rounded-lg xl:w-[218px] xl:h-[40px]"
                        disabled={isLoading} // Use 'disabled' attribute directly
                    >
                        {isLoading ? "Checking..." : "Check"}
                    </button>
                </div>
            )}

            {/* Mobile search and expand buttons (v-else) */}
            {isMobile && (
                <>
                    <button
                        type="button" // Use type="button" to prevent form submission for this specific button
                        onClick={handleToggleExpand} // Use onClick event handler
                        className="absolute right-24 md:right-28 top-1/2 -translate-y-1/2 text-softPurple stroke-[4px]"
                    >
                        <IconsArrow
                            className={isExpanded ? "rotate-180" : ""}
                        />
                    </button>
                    <div className="pl-2 border-l-2 border-l-softPurple absolute right-1 top-1/2 -translate-y-1/2">
                        <button
                            type="submit" // This button will submit the form
                            onClick={handleMobileSearchClick} // Calls a handler that includes conditional logic AND submission
                            className="bg-green-200 flex items-center justify-center w-[72px] md:w-[80px] h-10 md:h-12 rounded-r-[30px] rounded-md"
                            disabled={isLoading}
                        >
                            <IconsSearch />
                        </button>
                    </div>
                </>
            )}
        </form>
    );
}
