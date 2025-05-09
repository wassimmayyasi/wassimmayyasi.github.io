import { FaReact } from "react-icons/fa";
import { DiCss3, DiHtml5 } from "react-icons/di";
import { SiDjango } from "react-icons/si";
import { FaAtlassian, FaAws, FaPython } from "react-icons/fa6";
import { BiLogoFigma, BiLogoPostgresql } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { ToolType } from "../components/Sections/Tools/Tool";

// Description of how to add icons:
// We use the library 'react-icons' for getting the icons
// Visit: https://react-icons.github.io/react-icons/
// Search for whatever icon you want,
// once you find the exact one you want
// just click it and it will give you the exact import (to add above)
// and the usage as well.

export const tools: ToolType[] = [
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
