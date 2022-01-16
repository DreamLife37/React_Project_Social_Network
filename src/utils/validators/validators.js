export const required = value => {
    if (value) return undefined;
    return 'Field is required';
}

export const maxLengthCreator = (maxLength) => value => {
    if (value.length < maxLength) return `Min length is ${maxLength} symbols`;
    return undefined;
}

export function validateEmail(value) {
    let error;
    if (!value) {
        error = 'Field is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

function validateUsername(value) {
    let error;
    if (value === 'admin') {
        error = 'Nice try!';
    }
    return error;
}