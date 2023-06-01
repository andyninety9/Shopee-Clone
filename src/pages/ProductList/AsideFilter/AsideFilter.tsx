import TocIcon from '@mui/icons-material/Toc'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { orange } from '@mui/material/colors'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import Input from 'src/components/Input'
import Button from 'src/components/Button'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined'

export default function AsideFilter() {
  return (
    <div className='py-4'>
      <Link to={path.home} className='flex items-center font-bold'>
        <TocIcon
          sx={{
            width: '23px',
            height: '23px',
            marginRight: '12px'
          }}
        />
        Tất cả danh mục
      </Link>
      <div className='my-4 h-[1px] bg-gray-300'></div>
      <ul>
        <li className='py-2 pl-2'>
          <Link to={path.home} className='relative px-2 text-[14px] font-semibold text-orange'>
            <ArrowRightIcon
              sx={{
                fontSize: '20px',
                color: orange[900],
                position: 'absolute',
                top: '1',
                left: '-10px'
              }}
            />
            Thời trang nam
          </Link>
        </li>
        <li className='py-2 pl-2'>
          <Link to={path.home} className='relative px-2 text-[14px] font-medium '>
            Áo khoác
          </Link>
        </li>
        <li className='py-2 pl-2'>
          <Link to={path.home} className='relative px-2 text-[14px] font-medium'>
            Áo vest
          </Link>
        </li>
      </ul>
      <Link to={path.home} className='mt-4 flex items-center text-[14px] font-semibold uppercase'>
        <FilterAltOutlinedIcon
          sx={{
            width: '23px',
            height: '23px',
            marginRight: '12px'
          }}
        />
        Bộ Lọc Tìm Kiếm
      </Link>
      <div className='my-4 h-[1px] bg-gray-300'></div>
      <div className='my-5'>
        <div className='text-[15px]'>Khoảng giá</div>
        <form className='mt-2'>
          <div className='flex items-start'>
            <Input
              placeholder='Từ'
              type='text'
              className='grow'
              name='from'
              classNameInput='p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus: shadow-sm'
            />
            <div className='mx-2 mt-2 shrink-0'>-</div>
            <Input
              placeholder='Đến'
              type='text'
              className='grow'
              name='from'
              classNameInput='p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus: shadow-sm'
            />
          </div>
          <Button className='hover:bg-orange-300 w-full rounded-sm bg-orange p-2 text-[14px] font-medium text-white shadow-sm'>
            ÁP DỤNG
          </Button>
        </form>
      </div>
      <div className='my-4 h-[1px] bg-gray-300'></div>
      <div className='text-sm'>Đánh giá</div>
      <ul className='my-3 ml-3'>
        <li className='py-1'>
          <Link to='' className='flex items-center text-sm'>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <StarOutlinedIcon
                  sx={{
                    color: 'goldenrod',
                    fontSize: '19px',
                    marginRight: '5px'
                  }}
                  key={index}
                />
              ))}
          </Link>
        </li>
        <li className='py-1'>
          <Link to='' className='flex items-center text-sm'>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <StarOutlineOutlinedIcon
                  sx={{
                    color: 'goldenrod',
                    fontSize: '19px',
                    marginRight: '5px'
                  }}
                  key={index}
                />
              ))}
            trở lên
          </Link>
        </li>
      </ul>
      <div className='my-4 h-[1px] bg-gray-300'></div>
      <Button className='hover:bg-orange-500 w-full rounded-sm bg-orange p-3 text-[14px] font-medium text-white shadow-sm'>
        XOÁ TẤT CẢ
      </Button>
    </div>
  )
}
