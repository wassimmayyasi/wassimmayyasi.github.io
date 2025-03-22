import { Button } from "antd";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineBrush } from "react-icons/md";
import ThemeModal from "../ThemeModal/ThemeModal";
import { useState } from "react";
import "./themesandexternallinks.scss";

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
                    <Button type="primary" shape="circle" icon={<FaGithub />} />
                    <Button type="primary" shape="circle" icon={<FaLinkedinIn />} />
                </div>
                <Button type="primary" shape="circle" icon={<MdOutlineBrush className="brush" />} onClick={showModal} />
            </div>
            <ThemeModal isOpen={isModalOpen} closeModal={closeModal} />
        </>
    );
}
