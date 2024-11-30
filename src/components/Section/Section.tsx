import { ReactElement } from "react";
import Title from "../Title/Title";
import "./section.scss";

interface Props {
    title: string;
    children: ReactElement;
}

export default function Section(props: Props) {
    const { title, children } = props;
    return (
        <div className="section">
            <Title title={title} />
            {children}
        </div>
    );
}
