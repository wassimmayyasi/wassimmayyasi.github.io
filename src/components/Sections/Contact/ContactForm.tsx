import React from "react";
import { Form, Input, Button } from "antd";
import { RuleObject } from "antd/lib/form";
import { StoreValue } from "rc-field-form/lib/interface";
import "./contact-form.scss";
import { SendOutlined } from "@ant-design/icons";

interface ContactFormValues {
    email: string;
    phone?: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [form] = Form.useForm<ContactFormValues>();

    const onFinish = (values: ContactFormValues) => {
        console.log("Form submitted with:", values);
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
                    {
                        validator: (_: RuleObject, value: StoreValue) => {
                            if (!value) {
                                return Promise.resolve();
                            }
                            const regex = /^\+(?:[0-9] ?){7,15}[0-9]$/;
                            if (regex.test(value)) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error("Please enter a valid international phone number"));
                        },
                    },
                ]}
            >
                <Input placeholder="e.g., +9664567890" />
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
