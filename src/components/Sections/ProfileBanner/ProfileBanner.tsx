import "./profilebanner.scss";
import MyImageContainer from "./MyImageContainer";

export default function ProfileBanner() {
    return (
        <div className="profile-banner">
            <div className="name-and-pic">
                <h1>Wassim</h1>
                <MyImageContainer />
                <h1>Mayyasi</h1>
            </div>
            <div className="job-title">
                <h2>Senior Software Engineer</h2>
            </div>
        </div>
    );
}
