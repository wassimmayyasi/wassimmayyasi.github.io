import { useEffect, useState } from "react";
import { useTheme } from "../../../contexts/ThemeContext";
import "./profilebanner.scss";

export default function ProfileBanner() {
    const { theme } = useTheme();
    const [img, setImage] = useState();

    async function loadThemeImage(theme: string) {
        const imageModule = await import(`../../../assets/images/me-${theme}.svg`);
        return imageModule.default;
    }

    useEffect(() => {
        loadThemeImage(theme).then((img) => {
            setImage(img);
        });
    }, [theme]);

    return (
        <div className="profile-banner">
            <div className="name-and-pic">
                <h1>Wassim</h1>
                <img src={img} />
                <h1>Mayyasi</h1>
            </div>
            <div className="job-title">
                <h2>Senior Software Engineer</h2>
            </div>
        </div>
    );
}
