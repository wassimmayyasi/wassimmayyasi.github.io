import { useEffect, useRef } from "react";
import "./scrollindicator.scss";
import Img from "../../assets/images/down.svg?react";

export default function ScrollIndicator() {
    const barRef = useRef<HTMLDivElement>(null);
    const handRef = useRef<HTMLDivElement>(null);
    const hasHidden = useRef(false);
    const threshold = 100;

    useEffect(() => {
        const handleScroll = () => {
            if (hasHidden.current) return;
            if (window.scrollY > threshold) {
                barRef.current?.classList.add("hidden");
                handRef.current?.classList.add("hidden");
                hasHidden.current = true;
                window.removeEventListener("scroll", handleScroll);
            }
        };

        if (window.scrollY > threshold) {
            barRef.current?.classList.add("hidden");
            handRef.current?.classList.add("hidden");
            hasHidden.current = true;
        } else {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div ref={barRef} className="scroll-indicator"></div>
            <div ref={handRef} className="hand-indicator">
                <Img />
            </div>
        </>
    );
}
