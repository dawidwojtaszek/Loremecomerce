import React from "react";
import { Box, Form, Input, Title, Button, Label, SubTitle } from "../style/signin/forms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
const SignIn = () => {

    return (
        <Box>
            <Title>I have allready an account</Title>
            <SubTitle>Sign in with your email and password</SubTitle>
            <Form>
                <Label htmlFor="email" >Email:</Label>
                <Input type="email" placeholder="email" />
                <Label htmlFor="password" >Password:</Label>
                <Input type="password" placeholder="password" />

                <Button type="submit" bg="#0B7189"><FontAwesomeIcon icon={faSignInAlt} /> Sign In</Button>
                <Button type="submit" bg="#4285f4"><FontAwesomeIcon icon={faGoogle} /> Sign In with google</Button>


            </Form>
        </Box>
    )
}

export default SignIn;