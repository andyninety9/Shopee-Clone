import { useMutation, useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import productApi from 'src/apis/product.api'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ProductRating from 'src/components/ProductRating'
import { formatCurrency, formatNumberToSocialStyle, getIdFromNameId, rateSale } from 'src/utils/utils'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import DOMPurify from 'dompurify'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Product as ProductType, ProductListConfig } from 'src/types/product.type'
import Product from '../ProductList/components/Product'
import QuantityController from 'src/components/QuantityController'
import purchaseApi from 'src/apis/purchase.type'

export default function ProductDetail() {
  const [buyCount, setBuyCount] = useState(1)
  const { nameId } = useParams()
  const id = getIdFromNameId(nameId as string)
  const { data: productDetailData } = useQuery({
    queryKey: ['product', id],
    queryFn: () => productApi.getProductDetail(id as string)
  })
  const [currentIndexImages, setCurrentIndexImages] = useState([0, 5])
  const [activeImage, setActiveImage] = useState('')
  const product = productDetailData?.data.data
  const imageRef = useRef<HTMLImageElement>(null)
  const currentImages = useMemo(
    () => (product ? product.images.slice(...currentIndexImages) : []),
    [product, currentIndexImages]
  )
  const queryConfig: ProductListConfig = { limit: 20, page: 1, category: product?.category._id }
  const { data: productsData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig)
    },
    enabled: Boolean(product),
    staleTime: 3 * 60 * 1000
  })

  const addToCardMutation = useMutation(purchaseApi.addToCart)

  useEffect(() => {
    if (product && product.images.length > 0) {
      setActiveImage(product.images[0])
    }
  }, [product])

  const next = () => {
    if (currentIndexImages[1] < (product as ProductType)?.images.length) {
      setCurrentIndexImages((prev) => [prev[0] + 1, prev[1] + 1])
    }
  }

  const prev = () => {
    if (currentIndexImages[0] > 0) {
      setCurrentIndexImages((prev) => [prev[0] - 1, prev[1] - 1])
    }
  }

  const chooseActive = (img: string) => {
    setActiveImage(img)
  }

  const handleZoom = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const image = imageRef.current as HTMLImageElement
    const { naturalHeight, naturalWidth } = image
    //Cách 1: Lấy offsetX và offsetY đơn giản khi chúng ta đã xử lý được bubble event
    const { offsetX, offsetY } = event.nativeEvent

    // Cách 2: lấy offsetX và offsetY khi chúng ta không xử lý được bubble event
    const top = offsetY * (1 - naturalHeight / rect.height)
    const left = offsetX * (1 - naturalWidth / rect.width)
    image.style.width = naturalWidth + 'px'
    image.style.height = naturalHeight + 'px'
    image.style.maxWidth = 'unset'
    image.style.top = top + 'px'
    image.style.left = left + 'px'

    //Event Bubble sử dụng pointer-events-none để ngăn chặn
  }

  const handleRemoveZoom = () => {
    imageRef.current?.removeAttribute('style')
  }

  const handleBuyCount = (value: number) => {
    setBuyCount(value)
  }

  const addToCart = () => {
    addToCardMutation.mutate({ buy_count: buyCount, product_id: product?._id as string })
  }

  if (!product) return null
  return (
    <div className='bg-gray-200 py-6'>
      <div className='container'>
        <div className='bg-white p-4 shadow'>
          <div className='grid grid-cols-12 gap-9'>
            <div className='col-span-5'>
              <div
                className='relative w-full cursor-zoom-in overflow-hidden pt-[100%] shadow'
                onMouseMove={handleZoom}
                onMouseLeave={handleRemoveZoom}
              >
                <img
                  src={activeImage}
                  alt={product.name}
                  className='pointer-events-none absolute left-0 top-0 h-full w-full bg-white object-cover'
                  ref={imageRef}
                />
                <div className='relative mt-4 grid grid-cols-5 gap-1'>
                  <button
                    className='absolute left-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white'
                    onClick={prev}
                  >
                    <ArrowBackIosIcon
                      sx={{
                        height: '20px',
                        width: '20px'
                      }}
                    />
                  </button>
                  {currentImages.map((img, index) => {
                    const isActive = img === activeImage
                    return (
                      <div className='relative w-full pt-[100%]' key={img} onMouseEnter={() => chooseActive(img)}>
                        <img
                          src={img}
                          alt={product.name}
                          className='absolute left-0 top-0 h-full w-full bg-white object-cover'
                          //   ref={imageRef}
                        />
                        {isActive && <div className='absolute inset-0 border-2 border-orange'></div>}
                      </div>
                    )
                  })}
                  <button
                    className='absolute right-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white'
                    onClick={next}
                  >
                    <ArrowForwardIosIcon
                      sx={{
                        height: '20px',
                        width: '20px'
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className='col-span-7'>
              <h1 className='text-xl font-medium uppercase'>{product.name}</h1>
              <div className='mt-8 flex items-center'>
                <div className='flex items-center'>
                  <span className='mr-1 border-b-orange text-[18px] text-orange'>{product.rating}</span>
                  <ProductRating
                    rating={product.rating}
                    activeClassname={{
                      color: 'orangered',
                      fontSize: '18px',
                      marginRight: '2px',
                      zIndex: '20'
                    }}
                    nonActiveClassname={{
                      color: 'gray',
                      fontSize: '18px',
                      marginRight: '2px',
                      zIndex: '20'
                    }}
                  />
                </div>
                <div className='mx-3 h-[15px] w-[1px] bg-black/70'></div>
                <div className='flex items-center gap-1'>
                  Đã bán:
                  <span>{formatNumberToSocialStyle(product.sold)}</span>
                </div>
                <div className='mx-3 h-[15px] w-[1px] bg-black/70'></div>
                <div className='flex items-center gap-1'>
                  Số lượng:
                  <span>{formatNumberToSocialStyle(product.quantity)}</span>
                </div>
              </div>
              <div className='mt-8 flex items-center bg-gray-50 px-5 py-4'>
                <div className='text-gray-500 line-through'>₫{formatCurrency(product.price_before_discount)}</div>
                <div className='ml-3 text-3xl font-medium text-orange'>₫{formatCurrency(product.price)}</div>
                <div className='ml-4 rounded-sm bg-orange px-1 py-[2px] text-xs font-semibold uppercase text-white'>
                  {rateSale(product.price_before_discount, product.price)} giảm
                </div>
              </div>
              <div className='mt-8 flex items-center'>
                <div className='capitalize text-gray-500'>Số lượng</div>
                <QuantityController
                  onDecrease={handleBuyCount}
                  onIncrease={handleBuyCount}
                  onType={handleBuyCount}
                  value={buyCount}
                  max={product.quantity}
                />
              </div>
              <div className='mt-8 flex items-center gap-4'>
                <button
                  className='flex h-12 items-center justify-center rounded-sm border border-orange bg-orange/10 px-5 capitalize text-orange shadow-sm hover:bg-orange/5'
                  onClick={addToCart}
                >
                  <AddShoppingCartIcon
                    sx={{
                      marginRight: '10px'
                    }}
                  />
                  Thêm vào giỏ hàng
                </button>
                <button className='flex h-12 items-center justify-center rounded-sm bg-orange px-5 capitalize text-white shadow-sm hover:bg-orange/90'>
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <div className='container'>
          <div className='mt-8 bg-white p-4 shadow'>
            <div className='rounded bg-gray-50 p-4 text-lg capitalize text-slate-700'>Mô tả sản phẩm</div>
            <div className='mx-4 mb-4 mt-12 text-sm leading-loose'>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(product.description)
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <div className='container'>
          <div className='w-full bg-gradient-PinkRed p-3 px-6 text-lg font-medium uppercase text-white shadow-sm'>
            Có thể bạn quan tâm
          </div>
          {productsData && (
            <div className='mt-2 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
              {productsData.data.data.products.map((product) => (
                <div className='col-span-1' key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
