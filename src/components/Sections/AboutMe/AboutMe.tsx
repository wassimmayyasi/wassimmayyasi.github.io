import { useEffect, useState } from "react";
import Section from "../../Section/Section";
import "./aboutme.scss";
import content from "../../../content/content";

export default function AboutMe() {
    let text = content.about_me.text;
    const [state] = StreamingHook(text);

    return (
        <Section title="About Me">
            <>
                <p className="about-me background">{state}</p>
                <p className="about-me">{text}</p>
            </>
        </Section>
    );
}

function StreamingHook(text: string) {
    const [state, setState] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const splittedText = text.split("");
        setTimeout(() => {
            setState(() => {
                return splittedText.slice(0, index).join("");
            });
            setIndex(index + 1);
        }, 20);
    }, [index]);

    return [state];
}
