// import project images here, sample import:
// import project1 from "../assets/images/testing.png";

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
    // {
    //     title: "",
    //     skills: ["", "", "", "", ""],
    //     description: "",
    //     previewLink: "",
    //     image: project1,
    // },
];
