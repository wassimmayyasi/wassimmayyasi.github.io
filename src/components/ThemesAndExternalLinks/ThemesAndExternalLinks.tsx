import { Button } from "antd";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineBrush } from "react-icons/md";
import ThemeModal from "../ThemeModal/ThemeModal";
import { useState } from "react";
import "./themesandexternallinks.scss";
import content from "../../content/content";

interface Props {
    className?: string;
    extraActionOnClicks?: () => void;
}

export default function ThemesAndExternalLinks(props: Props) {
    const { className, extraActionOnClicks } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        if (extraActionOnClicks) extraActionOnClicks();
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className={`extra-details ${className && className}`}>
                <div className="external">
                    {content.header_footer.github_link && (
                        <Button
                            type="primary"
                            shape="circle"
                            icon={<FaGithub />}
                            onClick={() => window.open(content.header_footer.github_link, "_blank")}
                        />
                    )}
                    <Button
                        type="primary"
                        shape="circle"
                        icon={<FaLinkedinIn />}
                        onClick={() => window.open(content.header_footer.linkedin_link, "_blank")}
                    />
                </div>
                <Button type="primary" shape="circle" icon={<MdOutlineBrush className="brush" />} onClick={showModal} />
            </div>
            <ThemeModal isOpen={isModalOpen} closeModal={closeModal} />
        </>
    );
}
