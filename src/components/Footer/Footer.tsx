import { useState } from "react";
import { Button, Layout } from "antd";
import PandaIcon from "../../assets/images/PandaIcon";
import { navItems } from "../../utils";
import "./footer.scss";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineBrush } from "react-icons/md";
import ThemeModal from "../ThemeModal/ThemeModal";
import LineWithDots from "../LineWithDots/LineWithDots";

const { Footer } = Layout;

export default function MyFooter() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Footer className="footer">
            <h1 className="title">
                <PandaIcon />
                Wassim Mayyasi
            </h1>
            <div className="nav-and-extra">
                <div className="nav">
                    {navItems.map((item, index) => (
                        <a key={index} href={item.href} onClick={(e) => handleClick(e, item.href)}>
                            {item.title}
                        </a>
                    ))}
                </div>
                <div className="extra-details">
                    <div className="external">
                        <Button type="primary" shape="circle" icon={<FaGithub />} />
                        <Button type="primary" shape="circle" icon={<FaLinkedinIn />} />
                    </div>
                    <Button
                        type="primary"
                        shape="circle"
                        icon={<MdOutlineBrush className="brush" />}
                        onClick={showModal}
                    />
                </div>
            </div>
            <div className="credits">
                <LineWithDots />
                <div className="people">
                    <div>
                        <p>Developed by:</p> <a href="">Wassim Mayyasi</a>
                    </div>
                    <div>
                        <p>Designed by:</p> <a href="">Bassel Al Droubi</a>
                    </div>
                </div>
            </div>
            <ThemeModal isOpen={isModalOpen} closeModal={closeModal} />
        </Footer>
    );
}
