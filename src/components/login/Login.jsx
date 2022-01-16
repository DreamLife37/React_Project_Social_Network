import React from 'react';
import { Formik, Form, Field } from 'formik';
import { maxLengthCreator, validateEmail } from '../../utils/validators/validators';
import s from '../common/FormsControls/FormsControls.module.css'
import { CustomInput, TextareaLogin } from '../common/FormsControls/FormsControls';

const Login = () => (
    <div>
        <h1>Signup</h1>
        <Formik
            initialValues={{
                password: '',
                email: '',
            }}
            onSubmit={values => {
                
                console.log(values);
            }}
        >
            {({ errors, touched, isValidating }) => (
                <Form>
                    <p><label htmlFor="email">Email:</label>
                        <Field name="email" validate={validateEmail} component={CustomInput} type='text' placeholder={'andrey@gmail.com'} class={(errors.email && touched.email) ? s.error : ''} /> </p>
                    {/* {errors.email && touched.email && <div>{errors.email}</div>} */}

                    <p><label htmlFor="password">Password:</label>
                        <Field name="password" type='password' component={CustomInput} validate={maxLengthCreator(5)} /> </p>
                    {/* {errors.password && touched.password && <div>{errors.password}</div>} */}

                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);

export default Login