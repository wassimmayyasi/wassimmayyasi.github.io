import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import Title from "../Title/Title";
import "./section.scss";

interface Props {
    title: string;
    children: ReactElement;
}

const FadeInSection = ({ children }: { children: ReactElement }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

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
