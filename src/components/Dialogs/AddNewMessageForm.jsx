import React from 'react';
import { Field, Form, Formik } from 'formik';

function AddNewMessageForm(props) {

    const onSubmit = (
        (values, { setSubmitting }) => {
            setSubmitting(false);
            props.onAddMessageClick(values.newMessageText)
        }
    )

    return (<div>
        <Formik
            initialValues={{ newMessageText: '' }}

            validate={values => {
                const errors = {};
                if (!values.newMessageText) {
                    errors.newMessageText = 'Обязательно';
                } else if (values.newMessageText.length < 3) {
                    errors.newMessageText = 'Введите больше символов';
                }
                return errors;
            }}

            onSubmit={onSubmit}
        >
            {({ isSubmitting, errors, touched }) => (
                <Form>
                    <Field type="textarea" name="newMessageText" />
                    {touched.newMessageText && errors.newMessageText && <p>{errors.newMessageText}</p>}
                    <button type="submit" disabled={isSubmitting}>
                        Send
                    </button>
                </Form>
            )}
        </Formik>
    </div>
    )
}

export default AddNewMessageForm