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
        end_date: "present",
        responsibilities: [
            "Developed a scalable hiring platform with a React.js frontend and a Django/PostgreSQL backend.",
            "Managed AWS infrastructure with CI/CD via GitHub Actions.",
            "Built microservices using FastAPI for a modular architecture.",
            "Introduced serverless architecture with a FastAPI-based LLM on AWS Lambda for scalable AI workloads. and more stuff ;3",
        ],
    },
];
