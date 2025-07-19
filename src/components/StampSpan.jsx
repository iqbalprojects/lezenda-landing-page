// components/StampOnView.jsx
"use client";
import React, { useRef, useEffect, useState } from "react";

const StampOnView = ({ children, className = "" }) => {
    const elementRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const currentElement = elementRef.current;

        if (!currentElement) return;

        const observerOptions = {
            root: null, // viewport
            rootMargin: "0px",
            threshold: 0.5, // Trigger when 50% of the element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(currentElement);

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
            observer.disconnect();
        };
    }, [hasAnimated]);

    return (
        <span
            ref={elementRef}
            // Use the global class names directly as strings
            className={`${
                !hasAnimated ? "hidden-before-animation" : "stamp-effect"
            } ${className}`}
        >
            {children}
        </span>
    );
};

export default StampOnView;
