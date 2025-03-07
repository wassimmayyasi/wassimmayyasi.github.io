import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

interface SquaresDisplayProps {
    items: string[];
    squaresRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const SquaresDisplay: React.FC<SquaresDisplayProps> = ({ items, squaresRefs }) => {
    let topPositions = ["23%", "46%", "70%", "93%"];

    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
            }}
        >
            {items.map((item, index) => {
                const topPosition = topPositions[index];
                const leftPosition = index % 2 === 0 ? "40%" : "60%";
                return (
                    <div
                        key={index}
                        ref={(el) => (squaresRefs.current[index] = el)}
                        style={{
                            position: "absolute",
                            top: topPosition,
                            left: leftPosition,
                        }}
                        className="exp-info"
                    >
                        {item}
                    </div>
                );
            })}
        </div>
    );
};

const ScrollPathAnimation: React.FC = () => {
    const circleRef = useRef<SVGCircleElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const squaresRefs = useRef<(HTMLDivElement | null)[]>([]);
    const items = ["Item 1", "Item2", "Item3", "Item4"];

    useEffect(() => {
        if (!circleRef.current || !pathRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: pathRef.current,
                start: "top center",
                end: "bottom center",
                scrub: true,
                snap: {
                    snapTo: [0, 0.25, 0.5, 0.75, 1],
                    duration: 1,
                    ease: "power1.inOut",
                },
            },
        });

        tl.to(circleRef.current, {
            duration: 1,
            ease: "none",
            motionPath: {
                path: pathRef.current,
                start: 0,
                end: 0.19,
                align: pathRef.current,
                autoRotate: false,
                alignOrigin: [0.5, 0.5],
            },
        })
            .to(
                circleRef.current,
                {
                    duration: 0.5,
                    fill: "#ff5733",
                    attr: { r: 16 },
                    ease: "power1.inOut",
                },
                "-=0.5"
            )
            .to(squaresRefs.current[0], { duration: 0.5, autoAlpha: 1, ease: "power1.inOut" }, "-=0.5");

        tl.to(circleRef.current, {
            duration: 1,
            ease: "none",
            motionPath: {
                path: pathRef.current,
                start: 0.19,
                end: 0.46,
                align: pathRef.current,
                autoRotate: false,
                alignOrigin: [0.5, 0.5],
            },
        })
            .to(
                circleRef.current,
                {
                    duration: 0.5,
                    fill: "#33aaff",
                    attr: { r: 16 },
                    ease: "power1.inOut",
                },
                "-=0.5"
            )
            .to(squaresRefs.current[1], { duration: 0.5, autoAlpha: 1, ease: "power1.inOut" }, "-=0.5");

        tl.to(circleRef.current, {
            duration: 1,
            ease: "none",
            motionPath: {
                path: pathRef.current,
                start: 0.46,
                end: 0.73,
                align: pathRef.current,
                autoRotate: false,
                alignOrigin: [0.5, 0.5],
            },
        })
            .to(
                circleRef.current,
                {
                    duration: 0.5,
                    fill: "#7d33ff",
                    attr: { r: 16 },
                    ease: "power1.inOut",
                },
                "-=0.5"
            )
            .to(squaresRefs.current[2], { duration: 0.5, autoAlpha: 1, ease: "power1.inOut" }, "-=0.5");

        tl.to(circleRef.current, {
            duration: 1,
            ease: "none",
            motionPath: {
                path: pathRef.current,
                start: 0.73,
                end: 1,
                align: pathRef.current,
                autoRotate: false,
                alignOrigin: [0.5, 0.5],
            },
        })
            .to(
                circleRef.current,
                {
                    duration: 0.5,
                    fill: "#33ff77",
                    attr: { r: 16 },
                    ease: "power1.inOut",
                },
                "-=0.5"
            )
            .to(squaresRefs.current[3], { duration: 0.5, autoAlpha: 1, ease: "power1.inOut" }, "-=0.5");
    }, []);

    return (
        <>
            <svg viewBox="0 0 1600 2800" width="100%" height="1700px">
                <defs>
                    <linearGradient
                        id="strokeGradient"
                        x1="500"
                        y1="50"
                        x2="1600"
                        y2="2650"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#9FE0C9" />
                        <stop offset="1" stopColor="#489279" />
                    </linearGradient>
                </defs>
                <path
                    ref={pathRef}
                    d={`
                        M700,0 C790,280, 850,300, 1000,330, C1200,340, 1300,345, 1385,410,
                        C1600,605, 1385,800, 1300,850, C1200,920, 1000,940, 850,950, 
                        C550,975, 380,980, 215,1110, C0,1305, 215,1500, 380,1550,
                        C550,1620, 750,1640, 900,1650, C1200,1660, 1300,1680, 1385,1750,
                        C1600,1945, 1385,2140, 1300,2190, C1200,2260, 1000,2280, 850,2290,
                        C550,2315, 380,2320, 290,2450, C240, 2520, 210,2580, 170,2700
                    `}
                    stroke="url(#strokeGradient)"
                    strokeWidth={28}
                    fill="none"
                />
                <circle ref={circleRef} cx="700" cy="0" r="8" fill="#FDD35C" />
            </svg>
            <SquaresDisplay items={items} squaresRefs={squaresRefs} />
        </>
    );
};

export default ScrollPathAnimation;
