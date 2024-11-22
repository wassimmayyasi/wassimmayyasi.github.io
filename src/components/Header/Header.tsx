import { Anchor, Button, Layout } from "antd";
import "./Header.scss";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineBrush } from "react-icons/md";
import ThemeModal from "../ThemeModal/ThemeModal";

const { Header } = Layout;

export default function MyHeader() {
    const [headerClassName, setHeaderClassName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleScroll = (headerClassName: string) => {
        if (headerClassName !== "menuscroll" && window.scrollY >= 2) {
            setHeaderClassName("menuscroll");
        } else if (headerClassName === "menuscroll" && window.scrollY < 2) {
            setHeaderClassName("");
        }
    };

    useEffect(() => {
        window.onscroll = () => handleScroll(headerClassName);
    }, [headerClassName]);

    return (
        <Header className={`header ${headerClassName}`}>
            <div
                className="logo"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
                <h2>Wassim Mayyasi</h2>
            </div>
            <Anchor
                direction="horizontal"
                affix={false}
                items={[
                    {
                        key: "1",
                        href: "#about",
                        title: "About",
                    },
                    {
                        key: "2",
                        href: "#experience",
                        title: "Experience",
                    },
                    {
                        key: "3",
                        href: "#skills",
                        title: "Skills",
                    },
                    {
                        key: "4",
                        href: "#projects",
                        title: "Projects",
                    },
                ]}
            />
            <div className="extra-details">
                <div className="external">
                    <Button type="primary" shape="circle" icon={<FaGithub />} />
                    <Button type="primary" shape="circle" icon={<FaLinkedinIn />} />
                </div>
                <Button type="primary" shape="circle" icon={<MdOutlineBrush className="brush" />} onClick={showModal} />
            </div>
            <ThemeModal isOpen={isModalOpen} closeModal={closeModal} />
        </Header>
    );
}
