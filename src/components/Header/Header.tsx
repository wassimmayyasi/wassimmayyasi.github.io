import { Anchor, Layout } from "antd";
import "./Header.scss";
import { useEffect, useState } from "react";
import { navItems } from "../../utils";
import ThemesAndExternalLinks from "../ThemesAndExternalLinks/ThemesAndExternalLinks";

const { Header } = Layout;

export default function MyHeader() {
    const [headerClassName, setHeaderClassName] = useState("");

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
                onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
            >
                <h2>Wassim Mayyasi</h2>
            </div>
            <Anchor
                direction="horizontal"
                affix={false}
                items={navItems.map((item, index) => ({ ...item, key: index }))}
            />
            <ThemesAndExternalLinks />
        </Header>
    );
}
