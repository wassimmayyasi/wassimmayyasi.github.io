import { useEffect, useRef } from "react";
import "./scrollindicator.scss";

export default function ScrollIndicator() {
    const indicatorRef = useRef<HTMLDivElement>(null);
    const hasHidden = useRef(false);
    const threshold = 100;

    useEffect(() => {
        const handleScroll = () => {
            if (hasHidden.current) return;
            if (window.scrollY > threshold) {
                indicatorRef.current?.classList.add("hidden");
                hasHidden.current = true;
                window.removeEventListener("scroll", handleScroll);
            }
        };

        if (window.scrollY > threshold) {
            indicatorRef.current?.classList.add("hidden");
            hasHidden.current = true;
        } else {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return <div ref={indicatorRef} className="scroll-indicator"></div>;
}
