import React from "react";
import { Box, Form, Input, Title, Button, Label } from "../style/signin/forms";

const SignIn = () => {

    return (
        <Box>
            <Title>Sign in to your acount</Title>
            <Form>
                <Label for="email" >Email:</Label>
                <Input type="email" placeholder="email" />
                <Label for="password" >Password:</Label>
                <Input type="password" placeholder="password" />
                <Button type="submit">Login</Button>
            </Form>
        </Box>
    )
}

export default SignIn;