"use client";

import { useRef, useLayoutEffect, useState } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";

function useElementWidth(ref) {
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        function updateWidth() {
            if (ref.current) {
                setWidth(ref.current.offsetWidth);
            }
        }
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, [ref]);

    return width;
}

export const ScrollVelocity = ({
    scrollContainerRef,
    velocity = 100,
    className = "",
    damping = 50,
    stiffness = 400,
    numCopies = 6,
    velocityMapping = { input: [0, 1000], output: [0, 5] },
    children,
    wrapperClassName = "",
}) => {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef
        ? { container: scrollContainerRef }
        : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping,
        stiffness,
    });
    const velocityFactor = useTransform(
        smoothVelocity,
        velocityMapping.input,
        velocityMapping.output,
        { clamp: false }
    );

    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min, max, v) {
        const range = max - min;
        const mod = (((v - min) % range) + range) % range;
        return mod + min;
    }

    const x = useTransform(baseX, (v) => {
        if (copyWidth === 0) return "0px";
        return `${wrap(-copyWidth, 0, v)}px`;
    });

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * velocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    const copies = Array.from({ length: numCopies }).map((_, i) => (
        <ul
            key={i}
            ref={i === 0 ? copyRef : null}
            className={`flex gap-x-4 items-center shrink-0 ${className}`}
        >
            {children}
        </ul>
    ));

    return (
        <div className={`relative overflow-hidden ${wrapperClassName}`}>
            <motion.div className="flex whitespace-nowrap" style={{ x }}>
                {copies}
            </motion.div>
        </div>
    );
};
