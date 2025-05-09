import myImg from "../../../assets/images/me.webp";

export default function MyImageContainer() {
    return (
        <div className="my-pic-container">
            <img src={myImg} loading="lazy" />
        </div>
    );
}
