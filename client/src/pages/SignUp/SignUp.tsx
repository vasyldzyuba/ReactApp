import React from 'react';
import {Formik, Form} from 'formik';
import {object, string} from 'yup';
import {Input, Checkbox, Button} from "semantic-ui-react";
import './SignUp.css'
import {connect} from "react-redux";
import {signUp} from "../../store/actions/auth";
import {ISignUp} from "../../models/credential";
import {History} from 'history';

const validationSchema = object({
    name: string().required(),
    email: string().required(),
    password: string().required(),
});

const initialValues = {email: "", name: "", password: ""};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        onSignUp: (credential: ISignUp) => {
            dispatch(signUp(credential))
        }
    }
};
const connector = connect(null, mapDispatchToProps);

type Props = {
    history: History,
    onSignUp: (credentials: ISignUp) => void
}
const SignUp = ({onSignUp, history}: Props) => {
    const handleSignUp = async (credential: ISignUp) => {
        await onSignUp(credential);
        history.push("/signin");
    };
    return (
        <div className="modalContentUp">
            <div className="headerPopUp">
                <h4>Sign Up and Start Learning!</h4>
            </div>
            <hr/>
            <div>
                <Formik initialValues={initialValues} onSubmit={handleSignUp} validationSchema={validationSchema}>
                    {({values, handleChange, isValid}) =>
                        <Form className="fieldsUp">
                            <Input name="name" placeholder="Full Name"
                                   value={values.name} onChange={handleChange}/>
                            <Input type="email" name="email" placeholder="Email"
                                   value={values.email} onChange={handleChange}/>
                            <Input type="password" name="password" placeholder="Password"
                                   value={values.password} onChange={handleChange}/>
                            <div className="emailRec">
                                <Checkbox/>
                                <p className="emailRecText">
                                    Yes! I want to get the most out of SoftServe by receiving emails with
                                    exclusive learning tips!
                                </p>
                            </div>
                            <Button type="submit" className="submitBtn"
                                    disabled={!isValid}>Submit</Button>
                        </Form>
                    }
                </Formik>
                <p className="termsPrivacy">
                    By signing up, you agree to our <a href={"#"}>Terms of Use</a> and
                    <a href={"#"}> Privacy Policy</a>.
                </p>
                <hr/>
                <p className="logExAc">Already have an account? <a href={"#"}>Log In</a></p>
            </div>
        </div>

    )
};

export default connector(SignUp);
