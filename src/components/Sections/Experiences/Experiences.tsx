import Section from "../../Section/Section";
import ScrollPathAnimation from "./newexp";
import { my_experiences } from "./data";
import "./experiences.scss";

export default function Experiences() {
    return (
        <Section title="Experiences">
            <div className="experiences">
                <ScrollPathAnimation experiences={my_experiences} />
            </div>
        </Section>
    );
}
