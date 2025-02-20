import { EnvironmentFilled, MailFilled, PhoneFilled } from "@ant-design/icons";
import Section from "../../Section/Section";
import image from "../../../assets/images/contact-me.svg";
import "./contact.scss";
import ContactForm from "./ContactForm";

export default function Contact() {
    const contactInfo = [
        {
            name: "Phone number",
            icon: <PhoneFilled />,
            info: "0550605856",
        },
        {
            name: "Email",
            icon: <MailFilled />,
            info: "wassim.mayyasi@gmail.com",
        },
        {
            icon: <EnvironmentFilled />,
            info: "Saudi Arabia - Riyadh",
        },
    ];
    return (
        <Section title="Contact Me">
            <div className="contact-me">
                <p className="title">Interested in working together?</p>
                <div className="form-and-details">
                    <ContactForm />
                    <div className="details">
                        <img src={image} />
                        <div className="contact-info">
                            {contactInfo.map((item, index) => (
                                <div
                                    key={index}
                                    title={item.name ? `Copy ${item.name}` : ""}
                                    className={`specific-info ${item.name && "copiable"}`}
                                    onClick={() => {
                                        if (item.name) {
                                            navigator.clipboard.writeText(item.info);
                                        }
                                    }}
                                >
                                    {item.icon}
                                    <p>{item.info}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
