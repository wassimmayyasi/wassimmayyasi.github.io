import { Layout } from "antd";
import PandaIcon from "../../assets/images/PandaIcon";
import { navItems } from "../../utils";
import "./footer.scss";
import LineWithDots from "../LineWithDots/LineWithDots";
import ThemesAndExternalLinks from "../ThemesAndExternalLinks/ThemesAndExternalLinks";

const { Footer } = Layout;

export default function MyFooter() {
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
                <ThemesAndExternalLinks />
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
        </Footer>
    );
}
