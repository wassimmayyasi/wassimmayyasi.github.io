import { FaReact } from "react-icons/fa";
import Section from "../Section/Section";
import { DiCss3, DiHtml5 } from "react-icons/di";
import Tool, { ToolType } from "./Tool";
import "./tools.scss";
import { SiDjango } from "react-icons/si";
import { FaAtlassian, FaAws, FaPython } from "react-icons/fa6";
import { BiLogoFigma, BiLogoPostgresql } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";

const tools: ToolType[] = [
    {
        icon: <FaReact />,
        name: "React",
    },
    {
        icon: <SiDjango />,
        name: "Django",
    },
    {
        icon: <DiHtml5 />,
        name: "HTML",
    },
    {
        icon: <DiCss3 />,
        name: "CSS",
    },
    {
        icon: <FaPython />,
        name: "Python",
    },
    {
        icon: <FaAws />,
        name: "AWS",
    },
    {
        icon: <FaAtlassian />,
        name: "Jira",
    },
    {
        icon: <BiLogoFigma />,
        name: "Figma",
    },
    {
        icon: <VscVscode />,
        name: "VS Code",
    },
    {
        icon: <BiLogoPostgresql />,
        name: "PSQL",
    },
];

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
