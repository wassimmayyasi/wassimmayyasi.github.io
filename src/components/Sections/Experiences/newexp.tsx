import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { experiences } from "../../../content/experiences";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

// SVG viewBox for the timeline line.
const TIMELINE_VB = { minX: 0, minY: 0, width: 600 };
// Shift the arc section slightly right from the vertical lead line.
const ARC_START_SHIFT_X = 22;
// Fixed visual height per arc (each experience). The arc command uses `ry`,
// and the vertical distance covered by one arc is `2 * ry`.
const ARC_HEIGHT = 350;

const formatNum = (n: number) => {
    // Keep path strings stable and readable, without bloating the DOM.
    const rounded = Math.round(n * 1000) / 1000;
    return Number.isFinite(rounded) ? rounded : 0;
};

function buildExperiencesPathD(experienceCount: number, viewBoxH: number) {
    const vbW = TIMELINE_VB.width;
    const vbH = viewBoxH;
    const x0 = vbW / 2;
    const arcX = x0 + ARC_START_SHIFT_X;

    const lead = 90;
    const tail = 90;
    const join = 20; // how rounded the start/end transitions are
    // With fixed arc sizes, vbH should be computed from count; keep this as a guard.
    const usableH = Math.max(0, vbH - lead - tail);

    const n = Math.max(1, experienceCount);
    const ryFixed = ARC_HEIGHT / 2;
    const maxRx = vbW / 2 - 90;

    const dParts: string[] = [];
    dParts.push(`M ${formatNum(x0)} ${formatNum(0)}`);
    // Smoothly bend into the first arc. Arc tangents are horizontal at endpoints,
    // so approach the arc start point with a horizontal tangent.
    // First arc bulges right (sweep=1), so we bias that tangent to the right.
    const firstSweep = 1; // matches the loop's i=0 sweep below
    const firstEndTangentDir = firstSweep === 1 ? 1 : -1; // +1 => right, -1 => left
    // For a cubic, the end tangent points from the last control point to the end point.
    // Put the last control point on the opposite side so the tangent points the right way.

    const yLeadStart = Math.max(0, lead - join);
    dParts.push(`L ${x0} ${yLeadStart}`);
    dParts.push(
        // Keep the line vertical for most of the lead, then gently ease into the arc.
        `C ${x0} ${yLeadStart + join * 0.85} ${arcX - firstEndTangentDir * (join * 0.15)} ${lead} ${arcX} ${lead}`
    );

    let y = lead;
    for (let i = 0; i < n; i++) {
        const t = n <= 1 ? 0.5 : i / (n - 1);
        // Make arcs a bit "sharper" (tighter) lower in the list by reducing rx relative to ry.
        const sharpness = t * 0.2; // 1.0 .. 1.7

        const ry = Math.max(85, Math.min(ryFixed, usableH / (2 * n) || ryFixed));
        const rx = clamp(ry / sharpness, 70, Math.max(70, maxRx));

        const yNext = y + 2 * ry;
        const sweep = i % 2 === 0 ? 1 : 0;
        const lastArcEndX =
            x0 + ((n - 1) % 2 === 0 ? ARC_START_SHIFT_X : -ARC_START_SHIFT_X);
        const endX = i === n - 1 ? lastArcEndX : arcX;
        dParts.push(
            `A ${formatNum(rx)} ${formatNum(ry)} 0 0 ${sweep} ${formatNum(endX)} ${formatNum(yNext)}`
        ); 
        y = yNext;
    }

    // End: cut from the last arc and smoothly curve into one final vertical line.
    const lastBulgeDir = (n - 1) % 2 === 0 ? 1 : -1;
    const lastEndTangentDir = -lastBulgeDir; // tangent flips at the bottom endpoint
    const yTailEnd = Math.min(vbH, y + tail);

    // First, do a tiny "cut" along the arc's tangent so the exit feels decisive
    const xCut = arcX - ARC_START_SHIFT_X;
    // dParts.push(`L ${formatNum(xCut)} ${formatNum(y)}`);

    const curveLen = Math.max(0, Math.min(40, yTailEnd - y));
    const xEnd = x0;
    const yCurveEnd = y + curveLen;

    // Cubic Bezier:
    // - Start tangent: horizontal (follow the arc's tangent direction briefly)
    // - End tangent: vertical (enter the final line cleanly)
    dParts.push(
        `C ${formatNum(xCut + lastEndTangentDir * (curveLen * 0.09))} ${formatNum(y)} ` +
            `${formatNum(xEnd)} ${formatNum(yCurveEnd - curveLen * 0.1)} ` +
            `${formatNum(xEnd)} ${formatNum(yCurveEnd)}`
    );
    dParts.push(`L ${formatNum(xEnd)} ${formatNum(yTailEnd)}`);
    return `${dParts.join(" ")} `;
}

export default function ScrollPathAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);

    const lead = 90;
    const tail = 90;
    const viewBoxH = lead + tail + Math.max(1, experiences.length) * ARC_HEIGHT;
    const linePathD = buildExperiencesPathD(experiences.length, viewBoxH);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.defaults({ ease: "none" });
            gsap.set(".exp-info", { autoAlpha: 0 });

            const path = containerRef.current?.querySelector(".theLine") as SVGPathElement | null;
            if (path) {
                const pathLength = path.getTotalLength();
                gsap.set(path, {
                    strokeDasharray: pathLength,
                    strokeDashoffset: pathLength,
                });

                // Ensure the ball is in the correct initial position even before
                // scroll-driven GSAP updates run.
                // IMPORTANT: For SVG elements, GSAP's MotionPath tends to position via
                // transforms (x/y), so we should initialize using MotionPath too.
                gsap.set(".ball.ball01", {
                    motionPath: {
                        path,
                        alignOrigin: [0.5, 0.5],
                        start: 0,
                        end: 0,
                    },
                });

                // Place each experience box along the SVG curve, so it works for any number of experiences.
                const svgEl = containerRef.current?.querySelector("svg#svg") as SVGSVGElement | null;
                let viewBoxMinX = TIMELINE_VB.minX;
                let viewBoxW = TIMELINE_VB.width;
                let viewBoxH = lead + tail + Math.max(1, experiences.length) * ARC_HEIGHT;
                const viewBoxAttr = svgEl?.getAttribute("viewBox");
                if (viewBoxAttr) {
                    const parts = viewBoxAttr.split(/\s+/).map((n) => Number(n));
                    if (parts.length === 4 && parts.every((n) => Number.isFinite(n))) {
                        viewBoxMinX = parts[0];
                        viewBoxW = parts[2];
                        viewBoxH = parts[3];
                    }
                }

                const total = experiences.length;
                const n = Math.max(1, total);
                const usableH = Math.max(0, viewBoxH - lead - tail);
                const ryFixed = ARC_HEIGHT / 2;
                let yStart = lead;

                experiences.forEach((_, index) => {
                    const expEl = containerRef.current?.querySelector(
                        `.exp-info-${index}`
                    ) as HTMLDivElement | null;
                    if (!expEl) return;

                    const ry = Math.max(85, Math.min(ryFixed, usableH / (2 * n) || ryFixed));

                    const apexY = yStart + ry;
                    yStart += 2 * ry;

                    expEl.style.setProperty("--top", `calc(${(apexY / viewBoxH) * 100}% - 100px)`);
                    const isOdd = index % 2 !== 0;
                    if (isOdd) {
                        expEl.style.setProperty("--left", "20%");
                    } else {
                        expEl.style.setProperty("--left", "80%");
                    }
                });

                requestAnimationFrame(() => {
                    ScrollTrigger.refresh();
                });

                gsap.timeline({
                    defaults: { duration: 1 },
                    scrollTrigger: {
                        trigger: containerRef.current,
                        scrub: 0.5,
                        start: "top center",
                        end: "bottom center",
                    },
                })
                    .to(path, { strokeDashoffset: 0 }, 0)
                    .to(
                        ".ball01",
                        {
                            motionPath: {
                                path,
                                alignOrigin: [0.5, 0.5],
                            },
                        },
                        0
                    );

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
                            start: "top 60%",
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
                        trigger: `.exp-info-${index}`,
                        start: "top 78%",
                        toggleActions: "play none none reverse",
                    },
                });
            });
            }
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
    }, [linePathD, experiences.length]);

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
                <svg
                    id="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={`${TIMELINE_VB.minX} ${TIMELINE_VB.minY} ${TIMELINE_VB.width} ${viewBoxH}`}
                >
                    <defs>
                        <linearGradient
                            id="strokeGradient"
                            x1={TIMELINE_VB.width * 0.18}
                            y1="0"
                            x2={TIMELINE_VB.width * 0.92}
                            y2={viewBoxH}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="var(--path-start)" />
                            <stop offset="1" stopColor="var(--path-stop)" />
                        </linearGradient>
                    </defs>
                    <path
                        className="theLine"
                        d={linePathD}
                        fill="none"
                        stroke="url(#strokeGradient)"
                        strokeWidth="4px"
                    />
                    <circle className="ball ball01" r="11" fill="var(--secondary)" />
                </svg>
                {experiences.map((exp, index) => {
                    // Initial fallback (gets updated after mount using the SVG path).
                    const total = experiences.length;
                    const topPct = total <= 1 ? 50 : 8 + (index / (total - 1)) * 84;
                    const leftPct = 50;
                    return (
                        <div
                            key={index}
                            className={`exp-info exp-info-${index}`}
                            data-side={index % 2 === 0 ? "right" : "left"}
                            style={
                                {
                                    marginBottom: "20px",
                                    position: "absolute",
                                    "--top": `${topPct}%`,
                                    "--left": `${leftPct}%`,
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
                                {exp.responsibilities.map((resp) => (
                                    <li>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
