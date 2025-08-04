// This component does not use client-side hooks (useState, useEffect, useContext) or browser-specific APIs directly within its rendering logic.
// It is primarily presentational and receives props, making it a good candidate for a Server Component by default in Next.js 14.
// If your Icon components themselves are client components (e.g., if they use interactive features), they'll handle their own 'use client' directives.
// Therefore, we do NOT need 'use client' at the top of this file.

import React from "react";

/**
 * FeatureSteps component displays a list of feature steps with dynamic icons and action buttons.
 */
export default function FeatureSteps({ steps, iconMap }) {
    return (
        <ul className="flex flex-col xl:flex-row gap-y-2.5 xl:gap-x-2.5">
            {/* Map over the steps array to render each feature step */}
            {steps.map((step, index) => {
                // Get the Icon Component from the iconMap
                // In React, you reference a component directly, not by a string name
                // const IconComponent = iconMap[step.icon];

                return (
                    <li
                        key={`step-${index}`} // Using index as key is acceptable if items don't change order or get added/removed
                        className="bg-purple-950 flex flex-col justify-center rounded-[20px] h-[348px] md:w-full"
                    >
                        <div className="flex flex-col items-center gap-y-8">
                            <span className="max-w-xs md:max-w-xl flex flex-col gap-y-8 xl:px-10">
                                {/* Render the dynamic Icon Component */}
                                {/* {IconComponent && ( // Check if the icon component exists before rendering
                                    <IconComponent className="bg-gray-200 rounded-full p-5 w-16 h-16 md:w-20 md:h-20 xl:w-16 xl:h-16" />
                                )} */}
                                <div className="bg-gray-200 rounded-full p-5 w-16 h-16 md:w-20 md:h-20 xl:w-16 xl:h-16">
                                    {step.icon}
                                </div>
                                <h3 className="font-bold text-2xl md:text-4xl xl:text-2xl text-start">
                                    {step.title}
                                </h3>
                            </span>
                            <a
                                href="https://wa.me/6285156700100"
                                target="_blank"
                                rel="noopener noreferrer" // Recommended for target="_blank" for security
                                className="flex items-center font-Inter font-semibold text-sm md:text-xl xl:text-sm h-[47.52px] px-4 bg-black"
                            >
                                {step.buttonText}
                            </a>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
