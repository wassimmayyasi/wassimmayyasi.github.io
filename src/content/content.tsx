import MyIcon from "../assets/images/MyIcon";
import ThemeSvg from "../assets/images/theme-icon.svg?react";

const content = {
    header_footer: {
        name: "",
        github_link: "",
        linkedin_link: "",
        icon: <MyIcon />,
        theme_icon: <ThemeSvg />,
    },
    top_banner: {
        first_name: "",
        last_name: "",
        job_title: "",
    },
    stats: {
        stat1: {
            number: 3,
            stat_title: "Years of Experience",
        },
        stat2: {
            number: 12,
            stat_title: "Projects Completed",
        },
        stat3: {
            number: 200,
            stat_title: "Code Reviews",
        },
    },
    about_me: {
        text: "",
    },
    experiences: {
        beginning_content: "",
        end_content: "",
    },
    contact_me_token: "",
};

export default content;
