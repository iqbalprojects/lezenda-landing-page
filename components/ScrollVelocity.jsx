"use client";

import { useRef, useLayoutEffect, useState } from "react";
import {
    motion,
    useTransform,
    useMotionValue,
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
    velocity = 100,
    className = "",
    numCopies = 6,
    children,
    wrapperClassName = "",
}) => {
    const baseX = useMotionValue(0);
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

    const directionFactor = -1;

    useAnimationFrame((t, delta) => {
        const moveBy = directionFactor * velocity * (delta / 1000);
        baseX.set(baseX.get() + moveBy);
    });

    const copies = Array.from({ length: numCopies }).map((_, i) => (
        <ul
            key={i}
            ref={i === 0 ? copyRef : null}
            className={`flex items-center shrink-0 ${className}`}
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
