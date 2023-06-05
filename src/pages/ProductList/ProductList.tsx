import React, { useState } from 'react'
import AsideFilter from './AsideFilter'
import SortProductList from './SortProductList'
import Product from './Product/Product'
import { useQuery } from '@tanstack/react-query'
import useQueryParams from 'src/hooks/useQueryParams'
import productApi from 'src/apis/product.api'
import Pagination from 'src/components/Pagination'
import { ProductListConfig } from 'src/types/product.type'
import { isUndefined, omitBy } from 'lodash'
import categoryApi from 'src/apis/category.api'

export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}

export default function ProductList() {
  const queryParams: QueryConfig = useQueryParams()
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || '1',
      limit: queryParams.limit || '15',
      sort_by: queryParams.sort_by,
      exclude: queryParams.exclude,
      name: queryParams.name,
      price_max: queryParams.price_max,
      price_min: queryParams.price_min,
      order: queryParams.order,
      rating_filter: queryParams.rating_filter,
      category: queryParams.category
    },
    isUndefined
  )
  const { data: productsData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig as ProductListConfig)
    },
    keepPreviousData: true
  })
  const { data: categoriesData } = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return categoryApi.getCategories()
    },
    keepPreviousData: true
  })

  return (
    <div className='bg-gray-200 py-6'>
      <div className='container'>
        {productsData && (
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-3'>
              <AsideFilter queryConfig={queryConfig} categories={categoriesData?.data.data || []} />
            </div>
            <div className='col-span-9'>
              <div className='mb-2 w-full bg-white shadow-sm'>
                <div className='items-center border-b-2 p-5 font-medium capitalize text-gray-500'>DANH MỤC</div>
                <div className='mt-6 grid grid-cols-2 gap-3 p-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                  <div className='rounded-lg border border-gray-300 bg-white p-5 text-center'>
                    <img
                      className='object-cover'
                      src='https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn'
                      alt=''
                    />
                    Thời Trang Nam
                  </div>
                  <div className='rounded-lg border border-gray-300 bg-white p-5 text-center'>
                    <img
                      className='object-cover'
                      src='https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn'
                      alt=''
                    />
                    Điện thoại & Phụ Kiện
                  </div>
                  <div className='rounded-lg border border-gray-300 bg-white p-5 text-center'>
                    <img
                      className='object-cover'
                      src='https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn'
                      alt=''
                    />
                    Đồng Hồ
                  </div>
                  <div className='rounded-lg border border-gray-300 bg-white p-5 text-center'>
                    <img
                      className='object-cover'
                      src='https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn'
                      alt=''
                    />
                    Máy Tính & Laptop
                  </div>
                  <div className='rounded-lg border border-gray-300 bg-white p-5 text-center'>
                    <img
                      className='object-cover'
                      src='https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn'
                      alt=''
                    />
                    Máy Ảnh & Máy Quay Phim
                  </div>
                </div>
              </div>
              <SortProductList queryConfig={queryConfig} pageSize={productsData.data.data.pagination.page_size} />
              <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {productsData.data.data.products.map((product) => (
                  <div className='col-span-1' key={product._id}>
                    <Product product={product} />
                  </div>
                ))}
              </div>
              <Pagination queryConfig={queryConfig} pageSize={productsData.data.data.pagination.page_size} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
