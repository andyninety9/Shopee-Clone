import { Link } from 'react-router-dom'
import { Product as ProductType } from 'src/types/product.type'
import { formatCurrency, formatNumberToSocialStyle } from 'src/utils/utils'
import ProductRating from 'src/components/ProductRating'

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
            <ProductRating rating={product.rating} />
            <div className='ml-2 text-[11px]'>
              <span>Đã bán</span>
              <span> {formatNumberToSocialStyle(product.sold)}</span>
            </div>
          </div>
          <div className='mt-1 text-[11px]'>Còn {formatNumberToSocialStyle(product.quantity)} sản phẩm</div>
        </div>
      </div>
    </Link>
  )
}
