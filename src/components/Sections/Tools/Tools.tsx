import { tools } from "../../../content/tools";
import Section from "../../Section/Section";
import Tool from "./Tool";
import "./tools.scss";

export default function Tools() {
    return (
        <Section title="Tools">
            <div className="tools">
                {tools.map((tool, index) => (
                    <Tool key={index} tool={tool} />
                ))}
            </div>
        </Section>
    );
}
