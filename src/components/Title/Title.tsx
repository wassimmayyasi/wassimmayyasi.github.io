import LineWithDots from "../LineWithDots/LineWithDots";
import "./title.scss";

interface Props {
    title: string;
}

export default function Title(props: Props) {
    const { title } = props;

    return (
        <div className="section-title">
            <h1>{title}</h1>
            <LineWithDots />
        </div>
    );
}
