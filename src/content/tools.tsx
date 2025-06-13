import { FaReact, FaAws } from "react-icons/fa";
import { ToolType } from "../components/Sections/Tools/Tool";
import {
    SiDjango,
    SiFastapi,
    SiApachecassandra,
    SiPostgresql,
    SiDocker,
    SiApachekafka,
    SiCss3,
    SiServerless,
    SiAtlassian,
    SiOpenai,
} from "react-icons/si";

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
        icon: <SiFastapi />,
        name: "FastAPI",
    },
    {
        icon: <FaAws />,
        name: "AWS",
    },
    {
        icon: <SiPostgresql />,
        name: "PostgreSQL",
    },
    {
        icon: <SiCss3 />,
        name: "CSS",
    },
    {
        icon: <SiServerless />,
        name: "Serverless",
    },
    {
        icon: <SiOpenai />,
        name: "OpenAI API",
    },
    {
        icon: <SiDocker />,
        name: "Docker",
    },
    {
        icon: <SiAtlassian />,
        name: "Jira",
    },
    {
        icon: <SiApachecassandra />,
        name: "Cassandra",
    },
    {
        icon: <SiApachekafka />,
        name: "Kafka",
    },
];
