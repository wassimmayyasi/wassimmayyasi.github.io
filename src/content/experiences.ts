interface Experiences {
    job_title: string;
    company_name: string;
    start_date: string;
    end_date: string;
    responsibilities: string[];
}
// Just copy paste the entire block if you need to add experiences
// The design supports exactly 3 experiences, so please add exactly 3
export const experiences: Experiences[] = [
    {
        job_title: "Student Assistant (Requirement Engineering)",
        company_name: "Vrije Universiteit Amsterdam",
        start_date: "10/2020",
        end_date: "01/2021",
        responsibilities: [
            "Designed exercise sheets that aid in making appropriate decisions in a software project",
            "Conducted online sessions to solve the exercise sheets",
            "Posed as a stakeholder to prepare students how to communicate with such characters",
            "Graded large-scale assignments that cover several stages of a software project's lifecycle",
        ],
    },
    {
        job_title: "Student Assistant (Software Design)",
        company_name: "Vrije Universiteit Amsterdam",
        start_date: "01/2021",
        end_date: "04/2021",
        responsibilities: [
            "Recorded weekly videos to explain various software design patterns & principles",
            "Created numerous large UML diagrams and code samples examples for the videos",
            "Conducted weekly question hour online sessions to provide further guidance for students",
        ],
    },
    {
        job_title: "Senior Software Engineer",
        company_name: "Scalers",
        start_date: "08/2022",
        end_date: "08/2025",
        responsibilities: [
            "Built and launched the company's core hiring platform from scratch as the first engineering hire, using React with TypeScript (frontend) and Django (backend), delivering the MVP to production in under 3 months.",
            "Migrated frontend codebase to TypeScript, improving code reliability, maintainability, and developer productivity.",
            "Designed and implemented RESTful APIs and responsive user interfaces, integrating with external systems to support features like interview scheduling and OTP verification.",
            "Set up and managed cloud infrastructure on AWS, handling deployments, monitoring, and ensuring production stability.",
            "Helped establish agile workflows (sprints, planning, retrospectives), contributing to a more structured and predictable development process.",
            "Promoted to Engineering Lead, supporting the growth of the engineering team by mentoring new hires, conducting interviews, and guiding project execution.",
        ],
    },
    {
        job_title: "Senior Software Engineer",
        company_name: "Malaa Technologies",
        start_date: "09/2025",
        end_date: "present",
        responsibilities: [
            "Architected and migrated complex core workflows to Temporal, achieving 100% system visibility and distributed tracking while significantly reducing failures across multiple microservices.",
            "Decoupled and optimized legacy backend architecture within a high-transaction monorepo, aggressively refactoring bottlenecks to improve system scalability and maintainability.",
            "Collaborated cross-functionally with Product teams to architect robust backend APIs, directly translating technical performance improvements into a seamless, high-quality user experience.",
            "Empowered the Operations team by building internal tools and telemetry that accelerated customer issue resolution, turning complex data trails into easily actionable insights."
        ],
    },
];
