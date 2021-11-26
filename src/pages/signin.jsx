import React from "react";
import SignInBox from '../style/signin';
import { FormsContainer } from "../style/signin/forms";
import SignIn from "../components/signInComponent";
import SignUp from "../components/signUpComponent";
const SignInPage = () => {

    return (
        <SignInBox>
            <FormsContainer>
                <SignIn />
                <SignUp />
            </FormsContainer>
        </SignInBox>
    )
}

export default SignInPage;