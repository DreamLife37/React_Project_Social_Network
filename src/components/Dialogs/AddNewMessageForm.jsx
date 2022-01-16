import React from 'react';
import { Formik, Form, Field } from 'formik';
import { required } from '../../utils/validators/validators';
import { TextareaMessage } from '../common/FormsControls/FormsControls';
import s from '../common/FormsControls/FormsControls.module.css'


function AddNewMessageForm(props) {

    const onSubmit = (
        (values, { setSubmitting }) => {
            setSubmitting(false);
            props.onAddMessageClick(values.newMessageText)
        }
    )

    return <div>
        <Formik

            initialValues={{
                newMessageText: '',
            }}
            onSubmit={onSubmit}
        >
            {({ errors, touched, isValidating, isSubmitting }) => (
                <Form>
                    <p><label htmlFor="newMessageText">New Message:</label>
                        <Field name="newMessageText" validate={required} component={TextareaMessage} placeholder={'Enter your message'} className={(errors.newMessageText && touched.newMessageText) ? s.error : ''} /> </p>
                    {/*  {errors.newMessageText && touched.newMessageText && <div>{errors.newMessageText}</div>} */}

                    <button type="submit" disabled={isValidating}>Send</button>
                </Form>
            )}
        </Formik>
    </div>
};

export default AddNewMessageForm

