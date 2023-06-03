import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Input from 'src/components/Input'
import { Schema, schema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { ErrorResponse } from 'src/types/utils.type'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'
import Button from 'src/components/Button'
import authApi from '../../apis/auth.api'

type FormData = Pick<Schema, 'email' | 'password'>
const loginSchema = schema.pick(['email', 'password'])
export default function Login() {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(loginSchema) })
  const navigate = useNavigate()
  const loginAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.LoginAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginAccountMutation.mutate(data, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setProfile(data.data.data.user)
        navigate('/')
        toast.success('Đăng nhập thành công')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<FormData>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData],
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
              className='h-full w-full rounded-md object-cover shadow-sm'
              src='/images/shopee-poster-sale.jpeg'
              alt=''
            />
          </div>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm lg:h-full' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng Nhập</div>
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
              <div className='mt-3'>
                <Button
                  disabled={loginAccountMutation.isLoading}
                  className='flex w-full items-center justify-center rounded-sm bg-orange px-2 py-4 text-center text-sm uppercase text-white opacity-80 hover:opacity-100'
                  isLoading={loginAccountMutation.isLoading}
                >
                  Đăng nhập
                </Button>
              </div>
              <div className='mt-8 flex items-center justify-center '>
                <span className='text-gray-400'>Bạn chưa có tài khoản?</span>
                <Link to='/register' className='ml-[3px] text-orange'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
