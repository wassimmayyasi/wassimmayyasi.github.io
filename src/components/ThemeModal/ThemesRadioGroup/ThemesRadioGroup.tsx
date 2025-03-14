import { Radio } from "antd";
import { useTheme } from "../../../contexts/ThemeContext";
import { ThemeOptions } from "../../../types";
import "./themesradiogroup.scss";

const colorOptions: Array<{ label: string; value: ThemeOptions }> = [
    { label: "Coastal Sunset", value: "coastal-sunset" },
    { label: "Mint Lavender Dream Dark", value: "mint-lavender" },
    { label: "Blossom Breeze", value: "blossom-breeze" },
    { label: "Periwinkle Mist", value: "periwinkle-mist" },
];

export default function ThemesRadioGroup() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Radio.Group
            className="themes-radio"
            onChange={(e) => toggleTheme(e.target.value)}
            value={theme}
            style={{ width: "100%" }}
        >
            {colorOptions.map((option) => (
                <Radio value={option.value} className={option.value}>
                    <div className="circle"></div>
                    {option.label}
                </Radio>
            ))}
        </Radio.Group>
    );
}
