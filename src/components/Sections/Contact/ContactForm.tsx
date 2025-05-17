import React from "react";
import { Form, Input, Button, notification } from "antd";
import { RuleObject } from "antd/lib/form";
import { StoreValue } from "rc-field-form/lib/interface";
import "./contact-form.scss";
import { SendOutlined } from "@ant-design/icons";
import content from "../../../content/content";
import { isValidPhoneNumber } from "libphonenumber-js";

interface ContactFormValues {
    email: string;
    phone?: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [form] = Form.useForm<ContactFormValues>();

    const onFinish = async (values: ContactFormValues) => {
        let errorOccur = notification.error({
            message: "Submission failed",
            description: "An unexpected error occurred. Please try again later. Or contact me directly by email",
            placement: "topRight",
            duration: 5,
        });
        try {
            const response = await fetch(`https://formspree.io/f/${content.contact_me_token}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    email: values.email,
                    phone: values.phone,
                    message: values.message,
                }),
            });

            if (response.ok) {
                form.resetFields();
                notification.success({
                    message: "Message sent successfully!",
                    description: "Thank you for reaching out. I'll get back to you as soon as possible.",
                    placement: "topRight",
                    duration: 5,
                });
            } else {
                errorOccur;
            }
        } catch (error) {
            errorOccur;
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Validation Failed:", errorInfo);
    };

    return (
        <Form<ContactFormValues>
            form={form}
            name="contactForm"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            requiredMark={false}
        >
            <Form.Item
                label={
                    <span className="label">
                        Email <span className="required-star">*</span>
                    </span>
                }
                name="email"
                rules={[
                    { required: true, message: "Please enter your email." },
                    { type: "email", message: "Please enter a valid email address." },
                ]}
            >
                <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
                label={<span className="label">Phone</span>}
                name="phone"
                rules={[
                    { required: true, message: "Please enter your phone." },
                    {
                        validator: (_: RuleObject, value: StoreValue) => {
                            if (!value) return Promise.resolve();

                            // Full international format validation
                            const isValid = isValidPhoneNumber(value);

                            if (isValid) return Promise.resolve();

                            return Promise.reject(
                                new Error("Please enter a valid international phone number (e.g., +966512345678)")
                            );
                        },
                    },
                ]}
            >
                <Input placeholder="e.g., +966512345678" />
            </Form.Item>

            <Form.Item
                label={
                    <span className="label">
                        Message <span className="required-star">*</span>
                    </span>
                }
                name="message"
                rules={[
                    { required: true, message: "Please enter your message." },
                    { min: 50, message: "Message must be at least 50 characters." },
                    { max: 1000, message: "Message cannot exceed 1000 characters." },
                ]}
            >
                <Input.TextArea
                    rows={4}
                    autoSize={{ minRows: 4, maxRows: 4 }}
                    placeholder="Enter your message here..."
                    maxLength={1000}
                    showCount={{ formatter: ({ count, maxLength }) => `${count}/${maxLength} characters` }}
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" icon={<SendOutlined />} iconPosition="end">
                    Send
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ContactForm;
