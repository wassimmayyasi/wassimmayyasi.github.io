import { Button } from "antd";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineBrush } from "react-icons/md";
import ThemeModal from "../ThemeModal/ThemeModal";
import { useState } from "react";
import "./themesandexternallinks.scss";

export default function ThemesAndExternalLinks() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="extra-details">
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
