import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ReactElement } from "react";

export default function FadeInSection({ children }: { children: ReactElement }) {
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
}
