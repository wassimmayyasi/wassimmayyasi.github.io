export interface ExperiencesType {
    job_title: string;
    company_name: string;
    start_date: string;
    end_date: string;
    description: string;
}

export const my_experiences: Array<ExperiencesType> = [
    {
        job_title: "Full-Stack Developer",
        company_name: "Scalers",
        start_date: "08/2022",
        end_date: "present",
        description: "",
    },
    {
        job_title: "Student Assistant (Software Design)",
        company_name: "Vrije Universiteit Amsterdam",
        start_date: "01/2021",
        end_date: "04/2021",
        description: "",
    },
    {
        job_title: "Student Assistant (Requirement Eng)",
        company_name: "Vrije Universiteit Amsterdam",
        start_date: "10/2020",
        end_date: "01/2021",
        description: "",
    },
];
