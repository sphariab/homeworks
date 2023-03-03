import * as yup from 'yup';

const nameMaxErrorMessage = 'Must be 15 characters or less';
const usernameMaxErrorMessage = 'Must be 20 characters or less';
const requiredErrorMessage = 'This field is required';
const phoneErrorMessage = 'Invalid phone number';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export default yup.object().shape({
  name: yup.string()
    .max(15, nameMaxErrorMessage)
    .required(requiredErrorMessage),
  username: yup.string()
    .max(20, usernameMaxErrorMessage)
    .required(requiredErrorMessage),
  phone: yup.string()
    .matches(phoneRegExp, phoneErrorMessage)
    .required(requiredErrorMessage),
})