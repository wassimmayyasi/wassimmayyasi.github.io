import project1 from "../assets/images/testing.png";
import project2 from "../assets/images/testing.png";
import project3 from "../assets/images/testing.png";
import project4 from "../assets/images/testing.png";
import project5 from "../assets/images/testing.png";

export interface ProjectType {
    title: string;
    skills: string[];
    description: string;
    githubLink?: string;
    previewLink?: string;
    image: string;
}

export const projects: ProjectType[] = [
    {
        title: "Scalers Hiring Platform",
        skills: ["ReactJS", "Django", "PSQL", "DynamoDB", "Figma"],
        description: "Description of Project A",
        previewLink: "https://hired.withscalers.com/",
        image: project1,
    },
    {
        title: "Unix Shell Implementation",
        skills: ["Bash", "C"],
        description:
            "A Unix shell, comparable to sh, bash, or zsh, was developed using the C programming language. Aside from the necessities (exit, chdir, cd, etc.), a few more functionality were implemented.",
        githubLink: "https://github.com/wassimmayyasi/ShellImplementation",
        image: project2,
    },
    {
        title: "Code Snippets Application",
        skills: ["Java", "UML Diagrams", "Design Patterns"],
        description:
            "A code snippet desktop application was created for the 'Software Design' course using the Java programming language. It was created using various design patterns and adhered to conventional software agile development, including the creation of UML diagrams, implementation, and testing. This simple software contains features for adding, removing, modifying, favoriting, and more.",
        githubLink: "https://github.com/wassimmayyasi/CodeSnippetsApplication",
        image: project3,
    },
    {
        title: "Tetris Game",
        skills: ["Scala", "Game Development", "Object-Oriented"],
        description:
            "During the Advanced Programming course, a basic Tetris game was built with graphics and aesthetics based on a pre-defined code structure. All of the game logic was implemented in Scala utilizing object-oriented programming ideas.",
        image: project4,
    },
    {
        title: "Bachelor Thesis",
        skills: ["Sorting Algorithms", "SAT solver"],
        description:
            "This paper provides a solid foundation for studying sorting networks, making it an excellent starting point. It also goes above and beyond by correctly encoding and integrating that encoding into software.",
        previewLink: "https://drive.google.com/file/d/1vTNRR0Ng7MevoUrLQGJPModFEPrgYtE-/view",
        image: project5,
    },
];
