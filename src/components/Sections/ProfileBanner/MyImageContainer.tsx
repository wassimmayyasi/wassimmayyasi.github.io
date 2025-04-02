import myImg from "../../../assets/images/me.png";

export default function MyImageContainer() {
    return (
        <div className="my-pic-container">
            <img src={myImg} />
        </div>
    );
}
