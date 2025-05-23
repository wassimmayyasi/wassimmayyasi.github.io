import { Button } from "antd";
import { projects, ProjectType } from "../../../content/projects";
import Section from "../../Section/Section";
import ProjectImg from "./ProjectImg";
import "./projects.scss";
import { EyeOutlined } from "@ant-design/icons";

const PICTURE_FIRST = "pic_first" as const;
const TEXT_FIRST = "text_first" as const;

type Position = typeof PICTURE_FIRST | typeof TEXT_FIRST;

interface ProjectProp {
    project: ProjectType;
    position: Position;
}

function Project(props: ProjectProp) {
    const { project, position } = props;
    return (
        <div className={`project ${position}`}>
            <ProjectImg pic={project.image} />
            <div className="details">
                <div className="text-details">
                    <div className="title-and-skills">
                        <p className="title">{project.title}</p>
                        <div className="skills">
                            {project.skills.map((skill, index) => (
                                <p key={index} className="skill">
                                    {skill}
                                </p>
                            ))}
                        </div>
                    </div>
                    <p className="description">{project.description}</p>
                </div>
                <div className="external-links">
                    {project.previewLink && (
                        <Button
                            type="primary"
                            htmlType="submit"
                            icon={<EyeOutlined />}
                            iconPosition="start"
                            onClick={() => window.open(project.previewLink, "_blank")}
                        >
                            Preview
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <Section title="Projects">
            <div className="projects">
                {projects.map(
                    (project, index): JSX.Element => (
                        <Project key={index} project={project} position={index % 2 != 0 ? TEXT_FIRST : PICTURE_FIRST} />
                    )
                )}
            </div>
        </Section>
    );
}
