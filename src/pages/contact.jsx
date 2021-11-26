import React from "react";
import Contact from "../style/contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const ContactPage = () => {

    return (

        <Contact>
            <Contact.Title>DO You have any question?</Contact.Title>
            <Contact.Form>
                <Contact.Label htmlFor="name" >Your name:</Contact.Label>
                <Contact.Input type="text" placeholder="Name" />
                <Contact.Label htmlFor="email" >Your email:</Contact.Label>
                <Contact.Input type="email" placeholder="Email" />
                <Contact.Label htmlFor="email" >Your message</Contact.Label>
                <Contact.Message placeholder="Message" />
                <Contact.Button bg='#0B7189'><FontAwesomeIcon icon={faEnvelope} /> Send message</Contact.Button>
            </Contact.Form>
        </Contact>
    )
}

export default ContactPage;