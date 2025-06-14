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
            number: 3,
            stat_title: "Years of Experience",
        },
        stat2: {
            number: 15,
            stat_title: "Projects Completed",
        },
        stat3: {
            number: 550,
            stat_title: "Code Reviews",
        },
    },
    about_me: {
        text: "I'm a full-stack engineer with experience building scalable web applications using Django, React, and AWS. At Scalers, I've worked across product, infrastructure, and data, leading projects involving microservices, event-driven systems, and integrations with tools like Auth0, Metabase, and Slack. I enjoy working at the intersection of product and engineering, especially where technical decisions directly improve user experience. Alongside backend architecture and cloud deployments, I'm passionate about internal tools, data pipelines, and creating systems that help teams move faster. I care about mentorship, clear documentation, and building with curiosity and care.\n\nOutside of this field, I enjoy running, painting, playing video games, and traveling. :3",
    },
    experiences: {
        beginning_content: "Where It Began",
        end_content: "Always Curious, Always Building",
    },
    contact_me_token: "mldbzjvw",
};

export default content;
