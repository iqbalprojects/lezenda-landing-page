"use client"; // This component uses client-side hooks (useContext), so it MUST be a client component.

import React, { useContext } from "react";
import IconsArrow from "@/assets//icons/Arrow"; // Adjust path if your IconsArrow is elsewhere
import { DomainCheckerContext } from "@/app/domain-availability/page"; // Adjust path to your context file if it's in app/page.jsx
// If you moved DomainCheckerContext into its own file (e.g., ../context/DomainCheckerContext.js),
// adjust the import path accordingly.

/**
 * DomainExtensionList component displays a list of domain extensions with checkboxes.
 * It interacts with the DomainCheckerContext for managing domain selection and expansion.
 */
export default function DomainExtensionList({
    domainsToDisplay,
    showToggle,
    className,
}) {
    // 1. Sending state from child to parent (via Context):
    //    We consume the context which provides functions to update the parent's state.
    const { updateDomainSelection, isExpanded, setIsExpanded } =
        useContext(DomainCheckerContext);

    // Handler for checkbox changes
    const handleCheckboxChange = (domain) => {
        // 2. Calling parent's state update function:
        //    This calls the `updateDomainSelection` function that was passed down through the context.
        //    `updateDomainSelection` is defined in the parent component (app/page.jsx)
        //    and modifies the `domains` state there.
        updateDomainSelection({ ...domain, isSelected: !domain.isSelected });
    };

    // Handler for the expand/collapse button
    const handleToggleExpand = () => {
        // 3. Calling parent's state update function:
        //    This calls the `setIsExpanded` function that was passed down through the context.
        //    `setIsExpanded` is the setter for the `isExpanded` state in the parent component.
        setIsExpanded((prev) => !prev);
    };

    return (
        <ul className={className}>
            {domainsToDisplay.map(
                (
                    domain // Removed `index` from key as `domain.extension` is usually unique
                ) => (
                    <li
                        key={`ext-${domain.extension}`}
                        className="flex items-center gap-x-4"
                    >
                        <input
                            type="checkbox"
                            id={`ext-${domain.extension}`}
                            checked={domain.isSelected} // React uses 'checked' for controlled checkboxes
                            onChange={() => handleCheckboxChange(domain)} // Use onChange to call the handler
                            className="w-8 h-8 rounded border border-purple-950 accent-purple-950 cursor-pointer"
                        />
                        <label
                            htmlFor={`ext-${domain.extension}`} // 'htmlFor' in React JSX
                            className="text-purple-950 cursor-pointer xl:text-xl"
                        >
                            {domain.extension}
                        </label>
                    </li>
                )
            )}
            {showToggle && (
                <li>
                    <button className="flex" onClick={handleToggleExpand}>
                        <IconsArrow
                            className={isExpanded ? "rotate-180" : ""}
                        />
                    </button>
                </li>
            )}
        </ul>
    );
}
