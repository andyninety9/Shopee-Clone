import { Link } from 'react-router-dom'
import NavHeader from '../NavHeader'
import path from 'src/constants/path'
import SearchIcon from '@mui/icons-material/Search'
import useSearchProducts from 'src/hooks/useSearchProducts'

export default function CartHeader() {
  const { onSubmitSearch, register } = useSearchProducts()
  return (
    <div className='border-b border-b-black/10'>
      <div className='bg-orange text-white'>
        <div className='container'>
          <NavHeader />
        </div>
      </div>
      <div className='bg-white py-6'>
        <div className='container'>
          <nav className='md:flex md:items-end md:justify-between'>
            <Link to={path.home} className='flex flex-shrink-0 items-end'>
              <div>
                <img className='h-8 items-center md:h-11' src='/images/Shopee.svg.png' alt='' />
              </div>
              <div className='mx-4 h-6 w-[1px] bg-orange md:h-8'></div>
              <div className='capitalize text-orange md:text-xl'>Giỏ hàng</div>
            </Link>
            <form className='mt-3 md:mt-0 md:w-[50%]' onSubmit={onSubmitSearch}>
              <div className='flex rounded-sm border-2 border-orange'>
                <input
                  type='text'
                  className='w-full flex-grow border-none bg-transparent px-3 py-1 text-black outline-none'
                  placeholder='Ship đâu cũng ship!'
                  {...register('name')}
                />
                <button className='flex-shrink-0 rounded-sm bg-orange px-8 py-2 hover:opacity-90'>
                  <SearchIcon
                    sx={{
                      color: 'white',
                      height: '20px',
                      width: '20px'
                    }}
                  />
                </button>
              </div>
            </form>
          </nav>
        </div>
      </div>
    </div>
  )
}
