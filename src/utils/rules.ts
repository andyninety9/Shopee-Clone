import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: { value: true, message: 'Required Email' },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Invalid email'
    },
    minLength: {
      value: 5,
      message: 'More than 5 characters'
    },
    maxLength: {
      value: 120,
      message: 'Less than 160 characters'
    }
  },
  password: {
    required: { value: true, message: 'Required password' },
    minLength: {
      value: 6,
      message: 'More than 6 characters'
    },
    maxLength: {
      value: 120,
      message: 'Less than 160 characters'
    }
  },
  confirm_password: {
    required: { value: true, message: 'Required re-enter password' },
    validate:
      typeof getValues === 'function' ? (value) => value === getValues('password') || 'Incorrect Password' : undefined
  }
})
