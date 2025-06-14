// import project images here, sample import:
import udacity from "../assets/images/udacity.png";
import scalers from "../assets/images/scalers.png";
import matching from "../assets/images/matching.png";
import bachelor from "../assets/images/bachelor.png";
import thissite from "../assets/images/thissite.png";
import landing from "../assets/images/landing.png";

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
        skills: ["React", "Django", "PSQL", "CSS", "MUI", "AWS EB", "AWS RDS"],
        description:
            "Scalers is a hiring platform that helps companies find talent in specialized fields, currently focusing on Sales, Marketing, and Accounting. Each job creation flow is tailored to its field, gathering specific details to build an Ideal Candidate Profile (ICP). Using this ICP, the platform automatically matches relevant candidates to the job. Recruiters can then review and manage these candidates through Scalers' integrated ATS, which includes features like matching reasons (more on this below), interview scheduling, and offer management—all designed to streamline the hiring process.",
        previewLink: "https://hired.withscalers.com",
        image: scalers,
    },
    {
        title: "[Udacity] AWS Cloud Developer",
        skills: ["IAM", "EC2", "Lambda", "S3", "Cloudfront", "RDS", "DynamoDB", "SQS", "Kubernetes"],
        description:
            "Udacity's Cloud Developer Nanodegree is a hands-on program focused on building and deploying applications in the cloud. The course covers everything from developing RESTful APIs with Node.js and Express to containerizing applications with Docker and managing them with Kubernetes. One of the key parts of the course is learning how to deploy full-stack applications on AWS using services like Elastic Beanstalk and S3. Along the way, it introduces concepts like CI/CD pipelines, securing applications, and applying best practices for cloud-native development. The whole program is project-based, so every concept is applied in real-world scenarios.",
        previewLink: "https://www.udacity.com/certificate/e/4ff227ce-51df-11ef-a614-3ffa1749aba5",
        image: udacity,
    },
    {
        title: "Matching Reasons & Interview Questions Generator",
        skills: ["FastAPI", "Serverless", "AWS Lambda", "OpenAI API"],
        description:
            "One of the key features of the Scalers hiring platform was the Matching Reasons & Interview Questions Generator. To build this in a scalable way, we developed it as a separate microservice, deployed serverlessly on AWS Lambda. The service takes in three inputs—the job, the company, and the candidate—and prepares all the relevant data for matching. This involves formatting and normalizing the candidate's information to focus on key attributes like experience, location, seniority, and courses. Once the data is prepared, it's fed into a carefully engineered prompt (also designed by me), which is then sent to OpenAI's API. The result is a tailored output containing both the specific reasons why that candidate was matched to the job, and a list of personalized interview questions. With thorough prompt engineering, the results were consistently accurate, relevant, and highly useful for recruiters.",
        image: matching,
    },
    {
        title: "Scalers Landing Page",
        skills: ["NextJS", "NodeJS", "SCSS"],
        description:
            "Like any other company, Scalers also had a landing page designed for marketing and lead generation—both for recruiters and potential candidates. The landing page was built with Next.js to take advantage of server-side rendering and improve SEO performance. It also had its own lightweight Node.js backend to handle sign-up submissions and lead capture. This setup was live and actively maintained for over two years, until we eventually migrated to Framer, which made more sense for the business in terms of speed and flexibility for marketing teams to ship changes faster.",
        image: landing,
    },
    {
        title: "Bachelor's Thesis",
        skills: ["SAT Solver", "Scala", "Research"],
        description:
            "For my bachelor's thesis, I wrote a research paper on leveraging SAT solvers to find counterexamples in sorting networks to determine their correctness. The paper provides a solid foundation for studying sorting networks, making it a useful starting point for anyone interested in the topic. It also goes a step further by properly encoding the problem and integrating that encoding into a working software setup. The final implementation was done with some minimal programming in Scala to generate and test results.",
        previewLink: "https://drive.google.com/file/d/1vTNRR0Ng7MevoUrLQGJPModFEPrgYtE-/view?usp=sharing",
        image: bachelor,
    },
    {
        title: "This Site",
        skills: ["React", "Ant Design", "TypeScript", "SCSS", "GSAP"],
        description:
            "This personal portfolio website was built to both showcase my frontend skills and serve as a more detailed complement to my CV (linked in the preview). Beyond simply displaying my work, I used this project as an intentional challenge to push myself in areas of frontend development I hadn't explored deeply before—like implementing dark/light mode, theming, and adding smooth animations. Like many developers, I had previously used a pre-built template for my portfolio, but with this one, I wanted to do things differently: build it completely from scratch, keep the codebase well-organized, and treat it as a space to apply everything I value about good frontend architecture and design.",
        previewLink: "https://drive.google.com/file/d/1m6CVnGhcISp2bxQR0Aqa0X1h24d1QZX_/view?usp=sharing",
        image: thissite,
    },
];
