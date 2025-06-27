import { ReactElement } from "react";
import Title from "../Title/Title";
import "./section.scss";
import FadeInSection from "../FadeInSection/FadeInSection";

interface Props {
    title: string;
    children: ReactElement;
}

export default function Section(props: Props) {
    const { title, children } = props;
    return (
        <FadeInSection>
            <div className="section">
                <Title title={title} />
                {children}
            </div>
        </FadeInSection>
    );
}
