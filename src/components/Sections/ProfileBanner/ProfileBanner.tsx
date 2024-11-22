import picture from "../../../assets/images/Group 3.svg";
import "./profilebanner.scss";

export default function ProfileBanner() {
    return (
        <div className="profile-banner">
            <div className="name-and-pic">
                <h1>Wassim</h1>
                <img src={picture} />
                <h1>Mayyasi</h1>
            </div>
            <div className="job-title">
                <h2>Senior Software Engineer</h2>
            </div>
        </div>
    );
}
