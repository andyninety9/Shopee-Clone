import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Input from 'src/components/Input'
import { Schema, schema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { registerAccount } from 'src/apis/auth.api'
import { omit } from 'lodash'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { ErrorResponse } from 'src/types/utils.type'
import { toast } from 'react-toastify'
import { AppContext } from 'src/contexts/app.context'
import { useContext } from 'react'
import Button from 'src/components/Button'

export default function Register() {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Schema>({ resolver: yupResolver(schema) })
  const navigate = useNavigate()
  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<Schema, 'confirm_password'>) => registerAccount(body)
  })
  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setProfile(data.data.data.user)
        navigate('/')
        toast.success('Đăng nhập thành công')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<Schema, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<Schema, 'confirm_password'>, {
                message: formError[key as keyof Omit<Schema, 'confirm_password'>],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })
  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-2 lg:grid-cols-5 lg:py-12 lg:pr-10'>
          <div className='mb-5 h-[200px] w-full lg:col-span-3 lg:col-start-1 lg:h-full lg:pr-5'>
            <img
              className='h-full w-full rounded-md object-cover object-right shadow-sm'
              src='/images/shopee-sale.jpg'
              alt=''
            />
          </div>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm lg:h-full' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng ký</div>
              <Input
                type='text'
                name='email'
                errorMessage={errors?.email?.message}
                placeholder='Email'
                className='mt-8'
                register={register}
              />
              <Input
                autoComplete='on'
                type='password'
                name='password'
                errorMessage={errors?.password?.message}
                placeholder='Password'
                className='mt-3'
                register={register}
              />
              <Input
                autoComplete='on'
                type='password'
                name='confirm_password'
                errorMessage={errors?.confirm_password?.message}
                placeholder='Re-enter your password'
                className='mt-3'
                register={register}
              />
              <div className='mt-3'>
                {/* <button className='w-full rounded-sm bg-orange px-2 py-4 text-center text-sm uppercase text-white opacity-80 hover:opacity-100'>
                  Đăng ký
                </button> */}
                <Button
                  disabled={registerAccountMutation.isLoading}
                  className='flex w-full items-center justify-center rounded-sm bg-orange px-2 py-4 text-center text-sm uppercase text-white opacity-80 hover:opacity-100'
                  isLoading={registerAccountMutation.isLoading}
                >
                  Đăng ký
                </Button>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>Bạn đã có tài khoản?</span>
                <Link to='/login' className='ml-[3px] text-orange'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
