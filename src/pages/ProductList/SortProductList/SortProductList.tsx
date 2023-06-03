import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'
import { QueryConfig } from '../ProductList'
import { sortBy, order as orderConstant } from 'src/constants/product'
import classNames from 'classnames'
import { ProductListConfig } from 'src/types/product.type'
import { createSearchParams, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'

interface Props {
  queryConfig: QueryConfig
  pageSize: number
}
export default function SortProductList({ queryConfig, pageSize }: Props) {
  const { sort_by = sortBy.createdAt, order } = queryConfig
  const navigate = useNavigate()
  const isActiveSortBy = (sortByValue: Exclude<ProductListConfig['sort_by'], undefined>) => {
    return sort_by === sortByValue
  }
  const handleSort = (sortByValue: Exclude<ProductListConfig['sort_by'], undefined>) => {
    navigate({
      pathname: path.home,
      search: createSearchParams({
        ...queryConfig,
        sort_by: sortByValue
      }).toString()
    })
  }

  const handlePriceOrder = (orderValue) => {
    
  }
  return (
    <div className='bg-gray-300/40 px-3 py-4'>
      <div className='flex flex-wrap items-center justify-center gap-2 lg:justify-between'>
        <div className='flex flex-wrap items-center gap-2'>
          <div className='text-[14px]'>Sắp xếp theo</div>
          <button
            className={classNames('h-8 px-4 text-center text-sm capitalize shadow-sm', {
              'bg-orange text-white hover:bg-orange/80': isActiveSortBy(sortBy.view),
              'bg-white text-black hover:bg-slate-100': !isActiveSortBy(sortBy.view)
            })}
            onClick={() => handleSort(sortBy.view)}
          >
            Phổ biến
          </button>
          <button
            className={classNames('h-8 px-4 text-center text-sm capitalize shadow-sm', {
              'bg-orange text-white hover:bg-orange/80': isActiveSortBy(sortBy.createdAt),
              'bg-white text-black hover:bg-slate-100': !isActiveSortBy(sortBy.createdAt)
            })}
            onClick={() => handleSort(sortBy.createdAt)}
          >
            Mới nhất
          </button>
          <button
            className={classNames('h-8 px-4 text-center text-sm capitalize shadow-sm', {
              'bg-orange text-white hover:bg-orange/80': isActiveSortBy(sortBy.sold),
              'bg-white text-black hover:bg-slate-100': !isActiveSortBy(sortBy.sold)
            })}
            onClick={() => handleSort(sortBy.sold)}
          >
            Bán Chạy
          </button>
          <select
            className={classNames('h-8 bg-white px-4 text-left text-sm capitalize outline-none ', {
              'bg-orange text-white hover:bg-orange/80': isActiveSortBy(sortBy.price),
              'bg-white text-black hover:bg-slate-100': !isActiveSortBy(sortBy.price)
            })}
            value={order || ''}
            onChange={}
          >
            <option value='' disabled>
              Giá
            </option>
            <option value={orderConstant.asc}>Giá: Thấp đến cao</option>
            <option value={orderConstant.desc}>Giá: Cao đến thấp</option>
          </select>
        </div>
        <div className='mt-1 flex items-center'>
          <div className=''>
            <span className='text-orange'>1</span>
            <span className=''>/2</span>
          </div>
          <div className='ml-2'>
            <button className='h-8 cursor-not-allowed rounded-bl-sm rounded-tl-sm bg-white/60 px-3 shadow-sm hover:bg-slate-100'>
              <ChevronLeftOutlinedIcon
                sx={{
                  fontSize: '18px'
                }}
              />
            </button>
            <button className='h-8 cursor-not-allowed rounded-br-sm rounded-tr-sm bg-white/60 px-3 shadow-sm hover:bg-slate-100'>
              <ChevronRightOutlinedIcon
                sx={{
                  fontSize: '18px'
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
