// import project images here, sample import:
import udacity from "../assets/images/udacity.png";
import scalers from "../assets/images/scalers.png";

export interface ProjectType {
    title: string;
    skills: string[];
    description: string;
    previewLink?: string;
    image: string;
}
// Just uncomment the block, and copy paste it to add more
// You can add as many as you'd like.
export const projects: ProjectType[] = [
    {
        title: "Scalers Hiring Platform",
        skills: ["React", "Django", "PSQL", "CSS", "AWS EB", "AWS RDS"],
        description: "",
        previewLink: "https://hired.withscalers.com",
        image: scalers,
    },
    {
        title: "[Udacity] AWS Cloud Developer",
        skills: ["", "", "", "", ""],
        description: "",
        previewLink: "https://www.udacity.com/certificate/e/4ff227ce-51df-11ef-a614-3ffa1749aba5",
        image: udacity,
    },
    {
        title: "Matching Reasons Generator",
        skills: ["", "", "", "", ""],
        description: "",
        previewLink: "",
        image: scalers,
    },
    {
        title: "Scalers Landing Page",
        skills: ["NextJS", "SCSS", "", "", ""],
        description: "",
        previewLink: "",
        image: scalers,
    },
    {
        title: "Bachelor's Thesis",
        skills: ["NextJS", "SCSS", "", "", ""],
        description: "",
        previewLink: "",
        image: scalers,
    },
    // {
    //     title: "This Site",
    //     skills: ["", "", "", "", ""],
    //     description: "",
    //     previewLink: "",
    //     image: project1,
    // },
];
