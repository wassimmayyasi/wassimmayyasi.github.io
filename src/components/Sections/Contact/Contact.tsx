import Section from "../../Section/Section";
import ContactMePic from "../../../assets/images/contact-me.svg?react";
import "./contact.scss";
import ContactForm from "./ContactForm";
import { contactInfo } from "../../../content/contact";

export default function Contact() {
    return (
        <Section title="Contact Me">
            <div className="contact-me">
                <p className="title">Interested in working together?</p>
                <div className="form-and-details">
                    <ContactForm />
                    <div className="details">
                        <ContactMePic />
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
