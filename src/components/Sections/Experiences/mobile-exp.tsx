import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactElement, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const FadeInSection = ({ children }: { children: ReactElement }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

const experiences = [
    {
        job_title: "Full-Stack Developer",
        company_name: "Scalers",
        start_date: "08/2022",
        end_date: "present",
        responsibilities: [
            "Experience details for Scalers. Company C. ahsdajhd ajhsdjah dkjashd jkashdkjsah djkahsd kajhdak jhdkjashd skajhdksaj",
            "asiodasdhsajdhsa ahkjsdhjksahd sajhdjksa hkjdsah jk",
            "jkoashdsaikdhsajkdnakl",
        ],
    },
    {
        job_title: "Software Engineer",
        company_name: "Company B",
        start_date: "01/2021",
        end_date: "07/2022",
        responsibilities: [
            "Experience details for Scalers. Company C. ahsdajhd ajhsdjah dkjashd jkashdkjsah djkahsd kajhdak jhdkjashd skajhdksaj",
            "asiodasdhsajdhsa ahkjsdhjksahd sajhdjksa hkjdsah jk",
            "jkoashdsaikdhsajkdnakl",
        ],
    },
    {
        job_title: "Frontend Developer",
        company_name: "Company C",
        start_date: "05/2019",
        end_date: "12/2020",
        responsibilities: [
            "Experience details for Scalers. Company C. ahsdajhd ajhsdjah dkjashd jkashdkjsah djkahsd kajhdak jhdkjashd skajhdksaj",
            "asiodasdhsajdhsa ahkjsdhjksahd sajhdjksa hkjdsah jk",
            "jkoashdsaikdhsajkdnakl",
        ],
    },
];

export default function MobileTimeline() {
    useEffect(() => {
        const containers: Array<HTMLDivElement> = gsap.utils.toArray(".arrow-container");

        containers.forEach((container) => {
            const line: SVGPathElement = container.querySelector(".arrow-line")!;
            const head: SVGPolygonElement = container.querySelector(".arrow-head")!;

            if (line && head && typeof line.getTotalLength === "function") {
                const lineLength = line.getTotalLength();

                gsap.set(line, { strokeDasharray: lineLength, strokeDashoffset: lineLength });
                gsap.set(head, { scale: 0 });

                gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                })
                    .to(line, {
                        strokeDashoffset: 0,
                        duration: 0.5,
                        ease: "none",
                    })
                    .to(
                        head,
                        {
                            scale: 1,
                            duration: 0.5,
                            ease: "bounce.out",
                        },
                        "-=0.1"
                    );
            }
        });
    }, []);
    return (
        <div className="mobile-exps">
            {experiences.map((exp, index) => {
                return (
                    <FadeInSection>
                        <div className={`${index}-container`}>
                            <div key={index} className={`mobile exp-info exp-info-${index}`}>
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
                                        hoho hehe ahsjdhsajlk dahdhaskihdkjsa kjdsah askljdhnaskjdhsa kjhaskdjh
                                        askjdhsajkd shakj
                                    </li>
                                    <li>
                                        hihi hehe ahsjdhsajlk dahdhaskihdkjsa kjdsah askljdhnaskjdhsa kjhaskdjh
                                        askjdhsajkd shakj
                                    </li>
                                </ul>
                            </div>
                            {index < experiences.length - 1 && (
                                <div className="arrow-container">
                                    <svg width="24" height="100" viewBox="0 0 24 90">
                                        <path
                                            className="arrow-line"
                                            d="M12 2 v80"
                                            stroke="var(--secondary)"
                                            strokeWidth="2"
                                            fill="none"
                                        />
                                        <polygon
                                            className="arrow-head"
                                            points="12,90 6,80 18,80"
                                            fill="var(--secondary)"
                                        />
                                    </svg>
                                </div>
                            )}
                        </div>
                    </FadeInSection>
                );
            })}
        </div>
    );
}
