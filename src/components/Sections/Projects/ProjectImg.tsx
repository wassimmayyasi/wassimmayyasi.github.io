import Background from "../../../assets/images/project-bg.svg?react";

interface Picture {
    pic: string;
}

export default function ProjectImg(props: Picture) {
    const { pic } = props;
    return (
        <div className="project-pic">
            <Background />
            <div className="img-project-container">
                <img src={pic} />
            </div>
        </div>
    );
}
