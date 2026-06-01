import MyIcon from "../assets/images/MyIcon";
import ThemeSvg from "../assets/images/theme-icon.svg?react";

const content = {
    header_footer: {
        name: "Wassim Mayyasi",
        // If you keep the following empty, it will not show in footer and header
        github_link: "https://github.com/wassimmayyasi",
        linkedin_link: "https://www.linkedin.com/in/wassim-mayyasi/",
        icon: <MyIcon />,
        theme_icon: <ThemeSvg />,
    },
    top_banner: {
        first_name: "Wassim",
        last_name: "Mayyasi",
        job_title: "Senior Software Engineer",
    },
    stats: {
        // You can change the following accordingly, but make sure not to change
        // the names of the fields, only change content (after the colon ':')
        stat1: {
            number: 4,
            stat_title: "Years of Experience",
        },
        stat2: {
            number: 500000,
            stat_title: "Daily Workflows Orchestrated",
        },
        stat3: {
            number: 100,
            stat_title: "Workflow Visibility",
        },
    },
    about_me: {
        text: "I am a backend-focused Senior Software Engineer who loves making complex systems clean, scalable, and predictable. Currently working in the fast-paced world of fintech, my day-to-day involves diving into distributed microservices within a massive monorepo to refactor legacy bottlenecks and optimize performance.\n\nOne of my favorite recent milestones was introducing Temporal to our stack, giving us a highly monitored, visually clear way to orchestrate intricate workflows. For me, senior engineering isn't just about the backend architecture; it’s about the people it serves. I work closely with product teams to ensure our technical decisions translate into a stellar user experience, and I partner with operations to ensure system hitches are diagnosed and resolved instantly.\n\nI’m passionate about technical mentorship, elegant documentation, and building internal tools that help teams move faster.",
    },
    experiences: {
        beginning_content: "Where It Began",
        end_content: "Always Curious, Always Building",
    },
    contact_me_token: "mldbzjvw",
};

export default content;
