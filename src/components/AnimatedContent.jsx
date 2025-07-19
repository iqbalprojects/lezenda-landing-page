"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({
    mixBlend = true,
    children,
    distance = 100,
    direction = "vertical",
    reverse = false,
    duration = 0.8,
    ease = "power3.out",
    initialOpacity = 0,
    animateOpacity = true,
    scale = 1,
    threshold = 0.1,
    delay = 0,
    onComplete,
    hoverRotate,
}) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const axis = direction === "horizontal" ? "x" : "y";
        const offset = reverse ? -distance : distance;
        const startPct = (1 - threshold) * 100;

        gsap.set(el, {
            [axis]: offset,
            scale,
            opacity: animateOpacity ? initialOpacity : 1,
        });

        gsap.to(el, {
            [axis]: 0,
            scale: 1,
            opacity: 1,
            duration,
            ease,
            delay,
            onComplete,
            scrollTrigger: {
                trigger: el,
                start: `top ${startPct}%`,
                toggleActions: "play none none none",
                once: true,
            },
        });

        const handleEnter = () => {
            if (hoverRotate !== undefined) {
                gsap.to(el, {
                    rotate: hoverRotate,
                    duration: 0.3,
                    ease: "power2.out",
                });
            }
        };

        const handleLeave = () => {
            if (hoverRotate !== undefined) {
                gsap.to(el, {
                    rotate: 0,
                    duration: 0.3,
                    ease: "power2.out",
                });
            }
        };

        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
        return () => {
            el.removeEventListener("mouseenter", handleEnter);
            el.removeEventListener("mouseleave", handleLeave);
            ScrollTrigger.getAll().forEach((t) => t.kill());
            gsap.killTweensOf(el);
        };
    }, [
        distance,
        direction,
        reverse,
        duration,
        ease,
        initialOpacity,
        animateOpacity,
        scale,
        threshold,
        delay,
        onComplete,
    ]);
    return (
        <div
            ref={ref}
            className={`relative ${
                mixBlend && "mix-blend-multiply"
            } block w-full h-full`}
            style={{ willChange: "transform" }}
        >
            {children}
        </div>
    );
};

export default AnimatedContent;
