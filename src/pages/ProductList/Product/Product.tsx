import { Link } from 'react-router-dom'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import { Product as ProductType } from 'src/types/product.type'
import { formatCurrency, formatNumberToSocialStyle } from 'src/utils/utils'

interface Props {
  product: ProductType
}

export default function Product({ product }: Props) {
  return (
    <Link to=''>
      <div className='overflow-hidden rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[0.04rem] hover:shadow-md'>
        <div className='relative w-full pt-[100%] '>
          <img src={product.image} alt='' className='absolute top-0 h-full w-full  bg-white object-cover' />
        </div>
        <div className='overflow-hidden p-2'>
          <div className='min-h-[2rem] text-xs line-clamp-2'>{product.name}</div>
          <div className='mt-3 flex items-center'>
            <div className='max-w-[50%] truncate text-gray-500 line-through'>
              <span>{formatCurrency(product.price_before_discount)}</span>
              <span className='text-xs'>₫</span>
            </div>
            <div className='ml-1 truncate text-orange'>
              <span>{formatCurrency(product.price)}</span>
              <span className='text-xs'>₫</span>
            </div>
          </div>
          <div className='mt-3 flex items-center justify-start'>
            <div className='flex items-end text-[11px]'>
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <StarOutlinedIcon
                    sx={{
                      color: 'goldenrod',
                      fontSize: '13px',
                      marginRight: '5px'
                    }}
                    key={index}
                  />
                ))}
              <div className='relative'>
                <div
                  className='absolute left-0 top-0 h-full overflow-hidden'
                  style={{
                    width: '50%'
                  }}
                >
                  <StarOutlinedIcon
                    sx={{
                      color: 'goldenrod',
                      fontSize: '13px',
                      marginRight: '5px',
                      zIndex: '20'
                    }}
                  />
                </div>
                <StarOutlinedIcon
                  sx={{
                    color: 'gray',
                    fontSize: '13px',
                    marginRight: '5px',
                    zIndex: '20'
                  }}
                />
              </div>
              Đã bán {formatNumberToSocialStyle(product.sold)}
            </div>
          </div>
          <div className='mt-1 text-[11px]'>Còn {formatNumberToSocialStyle(product.quantity)} sản phẩm</div>
        </div>
      </div>
    </Link>
  )
}
