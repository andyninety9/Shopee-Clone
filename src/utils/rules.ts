import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
// export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
//   email: {
//     required: { value: true, message: 'Required Email' },
//     pattern: {
//       value: /^\S+@\S+\.\S+$/,
//       message: 'Invalid email'
//     },
//     minLength: {
//       value: 5,
//       message: 'More than 5 characters'
//     },
//     maxLength: {
//       value: 120,
//       message: 'Less than 160 characters'
//     }
//   },
//   password: {
//     required: { value: true, message: 'Required password' },
//     minLength: {
//       value: 6,
//       message: 'More than 6 characters'
//     },
//     maxLength: {
//       value: 120,
//       message: 'Less than 160 characters'
//     }
//   },
//   confirm_password: {
//     required: { value: true, message: 'Required re-enter password' },
//     validate:
//       typeof getValues === 'function' ? (value) => value === getValues('password') || 'Incorrect Password' : undefined
//   }
// })

export const schema = yup.object({
  email: yup.string().required('Required').email('Invalid email address'),
  password: yup
    .string()
    .required('Required')
    .min(6, 'Password must be at least 8 characters')
    .max(160, 'Password must be less than 160 characters')
    .matches(
      /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])/,
      '1 uppercase, 1 lowercase letter, 1 number, 1 special character.'
    ),
  confirm_password: yup
    .string()
    .required('Required')
    .min(6, 'Password must be at least 8 characters')
    .max(160, 'Password must be less than 160 characters')
    .matches(
      /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])/,
      '1 uppercase, 1 lowercase letter, 1 number, 1 special character.'
    )
    .oneOf([yup.ref('password')], 'Incorrect Password')
})

export type Schema = yup.InferType<typeof schema>
