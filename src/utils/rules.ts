import * as yup from 'yup'
// eslint-disable-next-line import/named
import { AnyObject } from 'yup'

// type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

function testPriceMinMax(this: yup.TestContext<AnyObject>) {
  const { price_min, price_max } = this.parent as {
    price_min: string
    price_max: string
  }
  if (price_min !== '' && price_max !== '') {
    return Number([price_max]) >= Number(price_min)
  }
  return price_min !== '' || price_max !== ''
}

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
    .oneOf([yup.ref('password')], 'Incorrect Password'),
  price_min: yup.string().test({
    name: 'price-not-allowed',
    message: 'Khoảng giá không phù hợp',
    test: testPriceMinMax
  }),
  price_max: yup.string().test({
    name: 'price-not-allowed',
    message: 'Khoảng giá không phù hợp',
    test: testPriceMinMax
  }),
  name: yup.string().trim().required()
})

export const userSchema = yup.object({
  name: yup.string().max(160, 'Less than 160 characters'),
  phone: yup.string().max(20, 'Less than 20 characters'),
  address: yup.string().max(160, 'Less than 160 characters'),
  avatar: yup.string().max(1000, 'Less than 1000 characters'),
  date_of_birth: yup.date().max(new Date(), 'Your D.O.B invalid'),
  password: schema.fields['password'],
  new_password: schema.fields['password'],
  confirm_password: schema.fields['confirm_password']
})

export type UserSchema = yup.InferType<typeof userSchema>

export type Schema = yup.InferType<typeof schema>
