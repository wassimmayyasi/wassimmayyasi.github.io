import { ReactElement } from "react";

export interface ToolType {
    icon: ReactElement;
    name: string;
}

interface Props {
    tool: ToolType;
}

export default function Tool(props: Props) {
    const { tool } = props;

    return (
        <div className="tool">
            {tool.icon}
            <p className="tool-name">{tool.name}</p>
        </div>
    );
}
