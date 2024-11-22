import { Modal } from "antd";
import "./thememodal.scss";
import { useTheme } from "../../contexts/ThemeContext";

interface Props {
    isOpen: boolean;
    closeModal: () => void;
}

const ThemeControls = () => {
    const { toggleTheme, toggleMode } = useTheme();

    return (
        <div>
            <select onChange={(e) => toggleTheme(e.target.value)}>
                <option value="theme1">Theme 1</option>
                <option value="theme2">Theme 2</option>
            </select>
            <button onClick={() => toggleMode("light")}>Light Mode</button>
            <button onClick={() => toggleMode("dark")}>Dark Mode</button>
        </div>
    );
};

export default function ThemeModal(props: Props) {
    const { isOpen, closeModal } = props;
    return (
        <>
            <div id="modal"></div>
            <Modal
                title="Theme Customization"
                open={isOpen}
                centered
                onCancel={closeModal}
                onClose={closeModal}
                getContainer={document.getElementById("modal")!}
            >
                <p>Test content</p>
                <ThemeControls />
            </Modal>
        </>
    );
}
