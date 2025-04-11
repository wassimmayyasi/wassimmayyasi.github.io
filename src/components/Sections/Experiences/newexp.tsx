import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const experiences = [
    {
        job_title: "Full-Stack Developer",
        company_name: "Scalers",
        start_date: "08/2022",
        end_date: "present",
        description:
            "Experience details for Scalers. Company C. ahsdajhd ajhsdjah dkjashd jkashdkjsah djkahsd kajhdak jhdkjashd skajhdksaj",
    },
    {
        job_title: "Software Engineer",
        company_name: "Company B",
        start_date: "01/2021",
        end_date: "07/2022",
        description:
            "Experience details for Company B.Company C. ahsdajhd ajhsdjah dkjashd jkashdkjsah djkahsd kajhdak jhdkjashd skajhdksaj",
    },
    {
        job_title: "Frontend Developer",
        company_name: "Company C",
        start_date: "05/2019",
        end_date: "12/2020",
        description:
            "Experience details for Company C. ahsdajhd ajhsdjah dkjashd jkashdkjsah djkahsd kajhdak jhdkjashd skajhdksaj ",
    },
];

export default function ScrollPathAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.defaults({ ease: "none" });
            gsap.set(".ball.ball01", { x: 300, y: 0 });
            gsap.set(".exp-info", { autoAlpha: 0 });

            const path = document.querySelector(".theLine") as SVGPathElement;
            if (path) {
                const pathLength = path.getTotalLength();
                gsap.set(path, {
                    strokeDasharray: pathLength,
                    strokeDashoffset: pathLength,
                });
            }

            gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: containerRef.current,
                    scrub: 0.5,
                    start: "top center",
                    end: "bottom center",
                },
            })
                .to(".theLine", { strokeDashoffset: 0 }, 0)
                .to(".ball01", { motionPath: { path: ".theLine", alignOrigin: [0.5, 0.5] } }, 0);

            experiences.forEach((_, index) => {
                gsap.fromTo(
                    `.exp-info-${index}`,
                    { autoAlpha: 0, y: 20 },
                    {
                        autoAlpha: 1,
                        duration: 0.4,
                        ease: "power1.inOut",
                        scrollTrigger: {
                            trigger: `.exp-info-${index}`,
                            start: `70px center`,
                            toggleActions: "play none none reverse",
                        },
                        y: 0,
                    }
                );
                gsap.from(`.exp-info-${index} .exp-delay`, {
                    opacity: 0,
                    duration: 1,
                    delay: 0.3,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: `.exp-info-${index} .exp-delay`,
                        start: `top center`,
                        toggleActions: "play none none reverse",
                    },
                });
            });
        }, containerRef);

        gsap.to(".the-start", {
            opacity: 1,
            duration: 0.4,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: `.the-start`,
                start: `top center`,
                toggleActions: "play none none reverse",
            },
        });
        gsap.to(".the-end", {
            opacity: 1,
            duration: 0.4,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: `.the-end`,
                start: `top center`,
                toggleActions: "play none none reverse",
            },
        });

        gsap.fromTo(
            ".ball.ball01",
            { scale: 0, autoAlpha: 0, transformOrigin: "50% 50%" },
            {
                scale: 1,
                autoAlpha: 1,
                duration: 0.6,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ".the-start",
                    start: "top center",
                    toggleActions: "play none none reverse",
                },
            }
        );
        return () => ctx.revert();
    }, []);

    return (
        <>
            <div
                ref={containerRef}
                className="exp-container"
                style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 2000">
                    <defs>
                        <linearGradient
                            id="strokeGradient"
                            x1="180"
                            y1="0"
                            x2="600"
                            y2="2000"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="var(--path-start)" />
                            <stop offset="1" stopColor="var(--path-stop)" />
                        </linearGradient>
                    </defs>
                    <path
                        className="theLine"
                        d={`M 300,0
                            Q 800 250 300 550
                            T 200 1100
                            Q 800 1350 500 1550
                            T 180 2000`}
                        fill="none"
                        stroke="url(#strokeGradient)"
                        strokeWidth="4px"
                    />
                    <circle className="ball ball01" r="11" fill="var(--secondary)" />
                </svg>
                {experiences.map((exp, index) => {
                    const topPositions = ["11%", "40%", "68%"];
                    const leftPositions = ["42%", "10%", "51%"];
                    return (
                        <div
                            key={index}
                            className={`exp-info exp-info-${index}`}
                            style={
                                {
                                    marginBottom: "20px",
                                    position: "absolute",
                                    "--top": topPositions[index],
                                    "--left": leftPositions[index],
                                } as React.CSSProperties
                            }
                        >
                            <div className="exp-details">
                                <div className="exp-delay">
                                    <p className="company ">At {exp.company_name}</p>
                                    <p className="date exp-delay">
                                        {exp.start_date} - {exp.end_date}
                                    </p>
                                </div>
                                <p className="title">{exp.job_title}</p>
                            </div>
                            <ul className="responsibilities">
                                <li>
                                    hehe hehe hehe hehe hehe hehe hehe hehe ahsjdhsajlk dahdhaskihdkjsa kjdsah
                                    askljdhnaskjdhsa kjhaskdjh askjdhsajkd shakj
                                </li>
                                <li>
                                    hoho hehe ahsjdhsajlk dahdhaskihdkjsa kjdsah askljdhnaskjdhsa kjhaskdjh askjdhsajkd
                                    shakj
                                </li>
                                <li>
                                    hihi hehe ahsjdhsajlk dahdhaskihdkjsa kjdsah askljdhnaskjdhsa kjhaskdjh askjdhsajkd
                                    shakj
                                </li>
                            </ul>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
