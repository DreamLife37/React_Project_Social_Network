import React from 'react';
import { Field, Form, Formik } from 'formik';



 function AddNewPostForm(props) {

    const onSubmit = (
        (values, { setSubmitting }) => {
            setSubmitting(false);
            props.onAddPost(values.newPostText)
        }
    )

    return <div>
        <Formik
            initialValues={{ newPostText: '' }}

            validate={values => {
                const errors = {};
                if (!values.newPostText) {
                    errors.newPostText = 'Обязательно';
                } else if (values.newPostText.length < 3) {
                    errors.newPostText = 'Введите больше символов';
                }
                return errors;
            }}

            onSubmit={onSubmit}
        >
            {({ isSubmitting, errors, touched }) => (
                <Form>
                    <Field type="text" name="newPostText" />
                    {touched.newPostText && errors.newPostText && <p>{errors.newPostText}</p>}
                    <button type="submit" disabled={isSubmitting}>
                        Send
                    </button>
                </Form>
            )}
        </Formik>
    </div>
} 

export default AddNewPostForm 