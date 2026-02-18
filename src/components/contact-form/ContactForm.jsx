import './ContactForm.css';
import { useState } from 'react';
import { toast } from "react-toastify";

const ContactForm = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("access_key", "31814c20-9c9b-4d76-b3b3-6fd0eecbc3f7");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Success!");
                toast.success("Message Sent Successfully");
                event.target.reset();
            } else {
                setResult("Error");
                toast.error("Something Went Wrong");
            }

        } catch (error) {
            toast.error("Network Error");
        }
    };

    return (
        <div className="contact-form">
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Name" name="Name" required />
                <input type="email" placeholder="E-mail" name="Email" required />
                <input type="text" placeholder="Subject" name="Subject" />
                <textarea name="Message" placeholder="Hello, I am interested in..." required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default ContactForm;