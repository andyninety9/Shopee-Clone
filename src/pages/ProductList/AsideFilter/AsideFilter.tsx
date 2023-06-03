import TocIcon from '@mui/icons-material/Toc'
import { Link, createSearchParams } from 'react-router-dom'
import path from 'src/constants/path'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { orange } from '@mui/material/colors'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import Input from 'src/components/Input'
import Button from 'src/components/Button'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined'
import { QueryConfig } from '../ProductList'
import { Category } from 'src/types/category.type'
import classNames from 'classnames'

interface Props {
  queryConfig: QueryConfig
  categories: Category[]
}

export default function AsideFilter({ queryConfig, categories }: Props) {
  const { category } = queryConfig
  console.log(category, categories)
  return (
    <div className='py-4'>
      <Link
        to={path.home}
        className={classNames('flex items-center font-bold', {
          'text-orange': !category
        })}
      >
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
        {categories.map((categoryItem) => {
          const isActive = category === categoryItem._id
          return (
            <li className='py-2 pl-2' key={categoryItem._id}>
              <Link
                to={{
                  pathname: path.home,
                  search: createSearchParams({
                    ...queryConfig,
                    category: categoryItem._id
                  }).toString()
                }}
                className={classNames('relative items-center px-2 text-[14px] font-medium', {
                  'items-center font-semibold text-orange': isActive
                })}
              >
                {isActive && (
                  <ArrowRightIcon
                    sx={{
                      fontSize: '20px',
                      color: orange[900],
                      position: 'absolute',
                      top: '1',
                      left: '-10px'
                    }}
                  />
                )}
                {categoryItem.name}
              </Link>
            </li>
          )
        })}
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
                    color: 'gold',
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
                    color: 'gold',
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
