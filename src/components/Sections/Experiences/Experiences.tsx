import Section from "../../Section/Section";
import ScrollPathAnimation from "./newexp";
import MobileTimeline from "./mobile-exp";
import "./experiences.scss";

export default function Experiences() {
    return (
        <Section title="Experiences">
            <>
                <div className="experiences">
                    <div className="the-start">Content at the start</div>
                    <ScrollPathAnimation />
                    <div className="the-end">Content at the end</div>
                </div>
                <div className="experiences mobile">
                    <div className="the-start">Content at the start</div>
                    <MobileTimeline />
                    <div className="the-end">Content at the end</div>
                </div>
            </>
        </Section>
    );
}
