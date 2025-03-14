import { Modal } from "antd";
import "./thememodal.scss";
import ModesRadioGroup from "./ModesRadioGroup/ModesRadioGroup";
import ThemesRadioGroup from "./ThemesRadioGroup/ThemesRadioGroup";

interface Props {
    isOpen: boolean;
    closeModal: () => void;
}

const ThemeControls = () => {
    return (
        <div className="theme-controls">
            <div className="mode">
                <p>Mode</p>
                <ModesRadioGroup />
            </div>
            <div className="themes">
                <p>Themes</p>
                <ThemesRadioGroup />
            </div>
        </div>
    );
};

export default function ThemeModal(props: Props) {
    const { isOpen, closeModal } = props;
    return (
        <>
            <div id="modal"></div>
            <Modal
                title="Display Settings"
                open={isOpen}
                centered
                footer={null}
                onCancel={closeModal}
                getContainer={document.getElementById("modal")!}
            >
                <ThemeControls />
            </Modal>
        </>
    );
}
