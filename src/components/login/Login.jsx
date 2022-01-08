import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

const Login = () => {

    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательно')
    })

    return <div>
        {/* <h1>LOGIN</h1>
        <div>
            <input placeholder={"Login"} />
        </div>
        <div>
            <input placeholder={"Password"} />
        </div>
        <div>
            <input type={"checkbox"} /> remember me
        </div> */}
        <Formik
            initialValues={{
                name: '',
                password: ''
            }}
            onSubmit={(values) => { console.log(values) }}
            validationSchema={validationsSchema}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, dirty, isValid }) => (
                <div>
                    <p>
                        <label htmlFor={'Name'}>Login</label>
                        <input
                            type={'text'}
                            name={'name'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                    </p>
                    {touched.name && errors.name && <p>{errors.name}</p>}
                    <p>
                        <label htmlFor={'Password'}>Password</label>
                        <input
                            type={'password'}
                            name={'password'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                    </p>
                    {touched.password && errors.password && <p>{errors.password}</p>}
                    <button
                        disabled={!isValid && !dirty}
                        onClick={handleSubmit}
                        type={'submit'}

                    >Login</button>
                </div>
            )}
        </Formik>
    </div>
}

export default Login;