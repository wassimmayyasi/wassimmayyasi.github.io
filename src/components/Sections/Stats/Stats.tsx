import CountUp from "react-countup";
import "./stats.scss";
interface StatProps {
    title: string;
    stat: number;
}

function Stat(props: StatProps) {
    return (
        <div className="full-stat">
            <div className="stat">
                <span className="number">
                    <CountUp end={props.stat} duration={5} />
                    <p>+</p>
                </span>
                <p className="title">{props.title}</p>
            </div>
        </div>
    );
}

export default function Stats() {
    return (
        <div className="stats-bg">
            <div className="stats">
                <Stat stat={2} title="Years of Experience" />
                <Stat stat={10} title="Project Completed" />
                <Stat stat={150} title="Code Reviews" />
            </div>
        </div>
    );
}
