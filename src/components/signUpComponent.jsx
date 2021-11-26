import React from "react";
import { Box, Form, Input, Title, Button, Label, SubTitle } from "../style/signin/forms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
    return (

        <Box>
            <Title>I do not have a account</Title>
            <SubTitle>Sign up with your email and password</SubTitle>
            <Form>
                <Label htmlFor="login" >Login:</Label>
                <Input type="text" placeholder="Login" />
                <Label htmlFor="email" >Email:</Label>
                <Input type="email" placeholder="email" />
                <Label htmlFor="password" >Password:</Label>
                <Input type="password" placeholder="password" />
                <Label htmlFor="password" >Confirm Password:</Label>
                <Input type="password" placeholder="password" />
                <Button type="submit" bg='#0B7189'><FontAwesomeIcon icon={faSignInAlt} /> Sign UP</Button>
            </Form>
        </Box>
    )
}

export default SignUp;