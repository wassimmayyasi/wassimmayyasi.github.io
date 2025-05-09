import CountUp from "react-countup";
import "./stats.scss";
import content from "../../../content/content";
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
                <Stat stat={content.stats.stat1.number} title={content.stats.stat1.stat_title} />
                <Stat stat={content.stats.stat2.number} title={content.stats.stat2.stat_title} />
                <Stat stat={content.stats.stat3.number} title={content.stats.stat3.stat_title} />
            </div>
        </div>
    );
}
