import "./profilebanner.scss";
import MyImageContainer from "./MyImageContainer";
import content from "../../../content/content";

export default function ProfileBanner() {
    return (
        <div className="profile-banner">
            <div className="name-and-pic">
                <h1>{content.top_banner.first_name}</h1>
                <MyImageContainer />
                <h1>{content.top_banner.last_name}</h1>
            </div>
            <div className="job-title">
                <h2>{content.top_banner.job_title}</h2>
            </div>
        </div>
    );
}
