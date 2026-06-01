// import project images here, sample import:
import udacity from "../assets/images/udacity.png";
import udacity_data_eng from "../assets/images/udacity-data-eng.png";
import scalers from "../assets/images/scalers.png";
import thissite from "../assets/images/thissite.png";
import malaa from "../assets/images/malaa.png";

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
        title: "Malaa Technologies ~ Personal Finance Manager",
        skills: ["Temporal", "CockroachDB", "Python", "Docker", "KSAOB APIs"],
        description:
            "Malaa Technologies is a fintech company that provides a mobile app for users to manage and keep track of their personal finances. I was part of the team that handled the backend for the app, using Temporal to orchestrate and regularly syncronize the data with each bank using KSAOB APIs.",
        previewLink: "https://www.malaatechnologies.com",
        image: malaa,
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
        title: "[Udacity] Data Engineering with AWS",
        skills: ["Cassandra", "ETL", "ELT", "Redshift", "Apache Spark", "AWS Glue", "Apache Airflow", "Data Pipelines"],
        description:
            "Completed a comprehensive program focused on building scalable, cloud-based data infrastructure using AWS. Gained hands-on experience in designing relational and NoSQL data models, building ETL pipelines with PostgreSQL and Apache Cassandra, and leveraging Apache Spark for big data processing and data lake management. Developed production-grade data workflows using Apache Airflow, integrating AWS tools like S3 and Redshift to automate, monitor, and maintain complex data pipelines. This course strengthened my understanding of cloud data engineering, workflow orchestration, and scalable data architecture.",
        previewLink: "https://www.udacity.com/certificate/e/be0adf44-98ed-11ef-9f59-67a0409430be",
        image: udacity_data_eng,
    },
    {
        title: "Scalers Hiring Platform",
        skills: ["React", "Django", "PSQL", "CSS", "MUI", "AWS EB", "AWS RDS"],
        description:
            "Scalers is a hiring platform that helps companies find talent in specialized fields, currently focusing on Sales, Marketing, and Accounting. Each job creation flow is tailored to its field, gathering specific details to build an Ideal Candidate Profile (ICP). Using this ICP, the platform automatically matches relevant candidates to the job. Recruiters can then review and manage these candidates through Scalers' integrated ATS, which includes features like matching reasons (more on this below), interview scheduling, and offer management—all designed to streamline the hiring process.",
        previewLink: "https://hired.withscalers.com",
        image: scalers,
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
