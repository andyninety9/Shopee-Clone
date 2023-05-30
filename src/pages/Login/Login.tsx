import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from 'src/components/Input'
import { Schema, getRules } from 'src/utils/rules'
import { schema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Schema>({ resolver: yupResolver(schema) })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-2 lg:grid-cols-5 lg:py-12 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit}>
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
                <button
                  type='submit'
                  className='w-full rounded-sm bg-orange px-2 py-4 text-center text-sm uppercase text-white opacity-80 hover:opacity-100'
                >
                  Đăng nhập
                </button>
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