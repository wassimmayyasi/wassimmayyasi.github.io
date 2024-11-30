import "./title.scss";

interface Props {
    title: string;
}

export default function Title(props: Props) {
    const { title } = props;

    return (
        <div className="section-title">
            <h1>{title}</h1>
            <svg className="line-with-dots" viewBox="0 0 100 10" preserveAspectRatio="xMidYMid meet">
                <circle className="dot" cx="1" cy="5" />
                <line className="line" x1="1" y1="5" x2="99" y2="5" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                <circle className="dot" cx="99" cy="5" />
            </svg>
        </div>
    );
}
