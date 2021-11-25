import React from "react";
import SignInBox from '../style/signin';
import { FormsContainer } from "../style/signin/forms";
import SignIn from "../components/signInComponent";
const SignInPage = () => {

    return (
        <SignInBox>
            <FormsContainer>
                <SignIn />
                <SignIn />
            </FormsContainer>
        </SignInBox>
    )
}

export default SignInPage;