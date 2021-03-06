import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers'

const ContactForm = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })

    const { name, email, message } = formState

    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            setErrorMessage(isValid ? '' : 'Your email is invalid')
        } else {
            setErrorMessage((!e.target.value.length) ? `${e.target.name} is required.` : '')
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})   
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState)
    }

    return (
        <section>
            <h1 data-testid="h1tag">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Name:</label>
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>        
    )
}

export default ContactForm