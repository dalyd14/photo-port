import React, { useState } from 'react'

const ContactForm = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })

    const { name, email, message } = formState

    const handleChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState)
    }

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" defaultValue={name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" defaultValue={email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Name:</label>
                        <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>        
    )
}

export default ContactForm