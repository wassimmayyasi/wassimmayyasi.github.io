import "./linewithdots.scss";

export default function LineWithDots() {
    return (
        <svg className="line-with-dots" viewBox="0 0 100 10" preserveAspectRatio="xMidYMid meet">
            <defs>
                <marker id="dot" markerWidth="3" markerHeight="3" refX="1.5" refY="1.5" orient="auto">
                    <circle cx="1.5" cy="1.5" r="1.5" fill="var(--primary)" />
                </marker>
            </defs>
            <line
                x1="1"
                y1="5"
                x2="99"
                y2="5"
                stroke="var(--primary)"
                strokeWidth="2"
                markerStart="url(#dot)"
                markerEnd="url(#dot)"
                vectorEffect="non-scaling-stroke"
            />
        </svg>
    );
}
