import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const login = yup.object().shape({
  mobileNumber: yup
    .string()
    .required('Phone Number is Required')
    .matches(phoneRegExp, 'Please enter the correct number.'),
});
