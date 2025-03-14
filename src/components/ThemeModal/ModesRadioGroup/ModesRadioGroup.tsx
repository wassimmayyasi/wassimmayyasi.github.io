import { Radio } from "antd";
import { useTheme } from "../../../contexts/ThemeContext";
import "./modesradiogroup.scss";
import { MoonOutlined, SettingOutlined, SunOutlined } from "@ant-design/icons";

export default function ModesRadioGroup() {
    const { mode, toggleMode } = useTheme();

    return (
        <Radio.Group className="modes-radio" value={mode} onChange={(e) => toggleMode(e.target.value)}>
            <Radio.Button value="light">
                <SunOutlined />
                Light
            </Radio.Button>
            <Radio.Button value="dark">
                <MoonOutlined />
                Dark
            </Radio.Button>
            <Radio.Button value="system">
                <SettingOutlined />
                System
            </Radio.Button>
        </Radio.Group>
    );
}
