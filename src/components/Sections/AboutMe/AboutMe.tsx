import { useEffect, useState } from "react";
import Section from "../../Section/Section";
import "./aboutme.scss";

export default function AboutMe() {
    let text =
        "Hello, my name is Wassim. Welcome to my website portfolio. Let me tell you a little bit about myself. I am currently a full-stack developer at Scalers. I built both the frontend and backend of the company's hiring platform from the ground up. I'm always interested in learning about new frameworks, languages, and tools that are thriving in the tech market. I am the type of person who constantly puts himself in difficult situations in order to learn something new.";
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
