// components/StampOnView.jsx
"use client";
import React, { useRef, useEffect } from "react";

const StampOnView = ({ children, className = "" }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const currentElement = elementRef.current;

        if (!currentElement) return;

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    currentElement.classList.add("stamp-effect");
                    currentElement.classList.remove("hidden-before-animation");
                } else {
                    currentElement.classList.remove("stamp-effect");
                    currentElement.classList.add("hidden-before-animation");
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
    }, []);

    return (
        <span
            ref={elementRef}
            className={`hidden-before-animation ${className}`}
        >
            {children}
        </span>
    );
};

export default StampOnView;
