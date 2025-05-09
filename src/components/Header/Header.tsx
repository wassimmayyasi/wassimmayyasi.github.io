// MyHeader.tsx
import { Anchor, Layout, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./Header.scss";
import { useEffect, useState } from "react";
import { navItems } from "../../utils";
import ThemesAndExternalLinks from "../ThemesAndExternalLinks/ThemesAndExternalLinks";
import content from "../../content/content";

const { Header } = Layout;

export default function MyHeader() {
    const [headerClassName, setHeaderClassName] = useState("");
    const [drawerVisible, setDrawerVisible] = useState(false);

    const handleScroll = (currentClassName: string) => {
        if (currentClassName !== "menuscroll" && window.scrollY >= 2) {
            setHeaderClassName("menuscroll");
        } else if (currentClassName === "menuscroll" && window.scrollY < 2) {
            setHeaderClassName("");
        }
    };

    useEffect(() => {
        window.onscroll = () => handleScroll(headerClassName);
    }, [headerClassName]);

    const showDrawer = () => setDrawerVisible(true);
    const closeDrawer = () => setDrawerVisible(false);

    return (
        <Header className={`header ${headerClassName}`}>
            <div
                className="logo"
                onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
            >
                <h2>{content.header_footer.name}</h2>
            </div>

            {/* Desktop Navigation */}
            <Anchor
                direction="horizontal"
                className="desktop-nav"
                affix={false}
                items={navItems.map((item, index) => ({ ...item, key: index }))}
            />
            <ThemesAndExternalLinks extraActionOnClicks={closeDrawer} className="desktop-nav" />

            {/* Mobile Navigation */}
            <div className="mobile-nav">
                <Button type="text" onClick={showDrawer}>
                    <MenuOutlined style={{ fontSize: "24px" }} />
                </Button>
                <Drawer
                    getContainer={() => document.getElementById("theme-wrapper")!}
                    className="menu-header"
                    style={{ background: "var(--background)" }}
                    title="Wassim Mayyasi"
                    closable={true}
                    placement="top"
                    onClose={closeDrawer}
                    open={drawerVisible}
                >
                    <Anchor
                        direction="vertical"
                        affix={false}
                        onClick={closeDrawer}
                        items={navItems.map((item, index) => ({ ...item, key: index }))}
                    />
                    <ThemesAndExternalLinks extraActionOnClicks={closeDrawer} />
                </Drawer>
            </div>
        </Header>
    );
}
