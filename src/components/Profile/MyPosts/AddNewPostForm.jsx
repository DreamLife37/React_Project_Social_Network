import React from 'react';
import { Formik, Form, Field } from 'formik';
import { required } from '../../../utils/validators/validators';
import { TextareaPost } from '../../common/FormsControls/FormsControls';

function AddNewPostForm(props) {

    const onSubmit = (
        (values, { setSubmitting }) => {
            setSubmitting(false);
            props.onAddPost(values.newPostText)
        }
    )

    return <div>
        <Formik

            initialValues={{
                newPostText: '',
            }}
            onSubmit={onSubmit}
        >
            {({ errors, touched, isValidating, isSubmitting }) => (
                <Form>
                    <p><label htmlFor="newPostText">New Post:</label>
                        <Field name="newPostText" validate={required} placeholder={'Enter your post'} component={TextareaPost} /> </p>
                    {/*  {errors.newPostText && touched.newPostText && <div>{errors.newPostText}</div>} */}

                    <button type="submit" disabled={isValidating}>Send</button>
                </Form>
            )}
        </Formik>
    </div>
};

export default AddNewPostForm