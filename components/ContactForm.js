import axios from "axios";
import { useState } from "react"

export default function ContactForm() {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [formStatus, setFormStatus] = useState('');

    async function handleSubmit(ev) {
        ev.preventDefault();

        setFormStatus('Submitting...');

        const data = {
            name,
            number,
            email,
            description,
        };

        try {
            await axios.post('/api/sendEmail', data);
            setFormStatus('Congratulations on taking the first step to increasing your online presence!');
        } catch (error) {
            setFormStatus('There was a problem submitting your information. Please try again!')
            console.log('Issue sending email: ' + error.message);
        }


        // setFormData({
        //     name: '',
        //     number: '',
        //     email: '',
        //     description: '',
        // })
    };

    return (
        <div className="flex flex-col gap-2 w-full">
            <form onSubmit={handleSubmit}>
                <div>
                    <label
                        id="nameLabel"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        aria-labelledby="nameLabel"
                        value={name}
                        onChange={(ev) => setName(ev.target.value)}
                        required
                    />
                </div>
                {/* Name */}

                <div>
                    <label
                        id="phoneLabel"
                        htmlFor="phone"
                    >
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your number"
                        aria-labelledby="phoneLabel"
                        value={number}
                        onChange={(ev) => setNumber(ev.target.value)} required
                    />
                </div>
                {/* Phone Number */}

                <div>
                    <label
                        id="emailLabel"
                        htmlFor="email"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        aria-labelledby="emailLabel"
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                        required
                    />
                </div>
                {/* Email Address */}

                <div>
                    <label
                        id="descriptionLabel"
                        htmlFor="description"
                    >
                        Brief Description Of Project
                    </label>
                    <textarea
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Enter a brief description of the project"
                        aria-labelledby="descriptionLabel"
                        value={description}
                        onChange={(ev) => setDescription(ev.target.value)}
                        required
                    />
                </div>
                {/* Description of the project */}

                <div>
                    <button
                        type="submit"
                        className="btn btn-submit"
                    >
                        Submit
                    </button>
                </div>
                {/* Submit Button */}
            </form>
            {formStatus && <p>{formStatus}</p>}
        </div>
    )
}
