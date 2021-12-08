import React from "react";
import SignInBox from '../style/signin';
import { FormsContainer } from "../style/signin/forms";
import SignIn from "../components/signInComponent";
import SignUp from "../components/signUpComponent";
import { Helmet } from "react-helmet";

const SignInPage = () => {

    return (
        <SignInBox>
            <Helmet>
                <title>Sign in | Lorem Ecomerce</title>
            </Helmet>
            <FormsContainer>
                <SignIn />
                <SignUp />
            </FormsContainer>
        </SignInBox>
    )
}

export default SignInPage;