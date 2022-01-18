import React from 'react';
import { Formik, Form, Field } from 'formik';
import { maxLengthCreator, validateEmail } from '../../utils/validators/validators';
import s from '../common/FormsControls/FormsControls.module.css'
import { CustomInput } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

function Login(props) {
    //const Login = (props) => (

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Signup</h1>



        <Formik
            initialValues={{
                password: '',
                email: '',
            }}
            onSubmit={values => {
                props.login(values.email, values.password)
                console.log(values);
            }}


        >
            {({ errors, touched, isValidating }) => (
                <Form>
                    <p><label htmlFor="email">Email:</label>
                        <Field name="email" validate={validateEmail} component={CustomInput} type='text' placeholder={'andrey@gmail.com'} class={(errors.email && touched.email) ? s.error : ''} /> </p>
                    {/* {errors.email && touched.email && <div>{errors.email}</div>} */}

                    <p><label htmlFor="password">Password:</label>
                        <Field name="password" component={CustomInput} validate={maxLengthCreator(5)} /> </p>
                    {/* {errors.password && touched.password && <div>{errors.password}</div>} */}

                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)