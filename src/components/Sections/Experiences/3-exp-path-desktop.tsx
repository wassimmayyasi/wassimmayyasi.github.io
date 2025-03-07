import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ExperiencesType } from "./data";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

interface SquaresDisplayProps {
    items: ExperiencesType[];
    squaresRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

function SquaresDisplay(props: SquaresDisplayProps) {
    const { items, squaresRefs } = props;
    let topPositions = ["28%", "57%", "91%"];

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
                        <div className="exp-details">
                            <p className="title">{item.job_title}</p>
                            <div className="company-and-dates">
                                <p>At {item.company_name} ~ </p>
                                <p>
                                    {item.start_date} - {item.end_date}
                                </p>
                            </div>
                        </div>
                        <p className="description">
                            ssssssssssssssssssss ssssssssssssssssss ssssssssssssssssss sssssssssssssssssssss
                            sssssssssssssssssssss
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

interface Props {
    experiences: Array<ExperiencesType>;
}

export default function ScrollPathAnimation(props: Props) {
    const { experiences } = props;
    const circleRef = useRef<SVGCircleElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const squaresRefs = useRef<(HTMLDivElement | null)[]>([]);
    const maxProgress = useRef(0);

    useEffect(() => {
        if (!circleRef.current || !pathRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: pathRef.current,
                start: "top center",
                end: "bottom center",
                scrub: true,
                onUpdate: (self) => {
                    if (self.progress > maxProgress.current) {
                        maxProgress.current = self.progress;
                    } else if (self.progress < maxProgress.current) {
                        tl.progress(maxProgress.current);
                    }
                },

                snap: {
                    snapTo: [0, 0.27, 0.63, 1],
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
                end: 0.29,
                align: pathRef.current,
                autoRotate: false,
                alignOrigin: [0.5, 0.5],
            },
        }).to(squaresRefs.current[0], { duration: 0.5, autoAlpha: 1, ease: "power1.inOut" }, "-=0.5");

        tl.to(circleRef.current, {
            duration: 1,
            ease: "none",
            motionPath: {
                path: pathRef.current,
                start: 0.29,
                end: 0.63,
                align: pathRef.current,
                autoRotate: false,
                alignOrigin: [0.5, 0.5],
            },
        }).to(squaresRefs.current[1], { duration: 0.5, autoAlpha: 1, ease: "power1.inOut" }, "-=0.5");

        tl.to(circleRef.current, {
            duration: 1,
            ease: "none",
            motionPath: {
                path: pathRef.current,
                start: 0.63,
                end: 1,
                align: pathRef.current,
                autoRotate: false,
                alignOrigin: [0.5, 0.5],
            },
        }).to(squaresRefs.current[2], { duration: 0.5, autoAlpha: 1, ease: "power1.inOut" }, "-=0.5");
    }, []);

    return (
        <>
            <svg viewBox="0 0 1600 2290" width="100%" height="1700px">
                <defs>
                    <linearGradient
                        id="strokeGradient"
                        x1="500"
                        y1="50"
                        x2="1600"
                        y2="2140"
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
                        C1600,1945, 1385,2140, 1300,2190
                    `}
                    stroke="url(#strokeGradient)"
                    strokeWidth={28}
                    fill="none"
                />
                <circle ref={circleRef} cx="700" cy="0" r="8" fill="#FDD35C" />
            </svg>
            <SquaresDisplay items={experiences} squaresRefs={squaresRefs} />
        </>
    );
}
