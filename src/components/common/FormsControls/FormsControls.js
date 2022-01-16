import { ErrorMessage, getIn } from 'formik'
import React from 'react'
import s from './FormsControls.module.css'

export const TextareaMessage = ({ field, form, name, ...props }) => {
    debugger
    //const hasError = `form.touched.${field.name} && form.errors.${field.name}`

    const hasError = form.touched.newMessageText && form.errors.newMessageText

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>

            <div><textarea {...field} {...props} /> </div>
            {hasError && <span>{form.errors.newMessageText}</span>}
        </div>
    )
}

export const TextareaPost = ({ field, form, name, ...props }) => {
    //const hasError = `form.touched.${field.name} && form.errors.${field.name}`

    const hasError = form.touched.newPostText && form.errors.newPostText

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>

            <div><textarea {...field} {...props} /> </div>
            {hasError && <span>{form.errors.newPostText}</span>}
        </div>
    )
}





function getStyles(errors, fieldName) {
    if (getIn(errors, fieldName)) {
        return {
            border: '2px solid red'
        }
    }
}

function getStylesText(errors, fieldName) {
    if (getIn(errors, fieldName)) {
        return {
            color: 'red'
        }
    }
}

export function CustomInput({ field, form: { errors } }) {
    return <div>
        <input {...field} style={getStyles(errors, field.name)} />
        <p style={getStylesText(errors, field.name)}><ErrorMessage name={field.name} /></p>
    </div>
}

