import Section from "../../Section/Section";
import ScrollPathAnimation from "./newexp";
import MobileTimeline from "./mobile-exp";
import "./experiences.scss";
import { ReactNode } from "react";
import content from "../../../content/content";

interface ExperienceContainerType {
    children: ReactNode;
    isMobile?: boolean;
}

function ExperiencesWrapper(props: ExperienceContainerType) {
    const { children, isMobile = false } = props;
    return (
        <div className={`experiences ${isMobile && "mobile"}`}>
            <div className="the-start">{content.experiences.beginning_content}</div>
            {children}
            <div className="the-end">{content.experiences.end_content}</div>
        </div>
    );
}

export default function Experiences() {
    return (
        <Section title="Experiences">
            <>
                <ExperiencesWrapper>
                    <ScrollPathAnimation />
                </ExperiencesWrapper>
                <ExperiencesWrapper isMobile={true}>
                    <MobileTimeline />
                </ExperiencesWrapper>
            </>
        </Section>
    );
}
