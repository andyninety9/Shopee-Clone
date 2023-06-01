import React from 'react'
import { Link } from 'react-router-dom'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import zIndex from '@mui/material/styles/zIndex'

export default function Product() {
  return (
    <Link to=''>
      <div className='overflow-hidden rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[0.04rem] hover:shadow-md'>
        <div className='relative w-full pt-[100%] '>
          <img
            src='https://images.unsplash.com/photo-1685446983943-81ffb3073581?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=60'
            alt=''
            className='absolute top-0 h-full w-full  bg-white object-cover'
          />
        </div>
        <div className='overflow-hidden p-2'>
          <div className='min-h-[2rem] text-xs line-clamp-2'>
            Quần đùi nam thể thao quần short hàng xuất cao cấp phong cách trẻ trung năng động T80
          </div>
          <div className='mt-3 flex items-center'>
            <div className='max-w-[50%] truncate text-gray-500 line-through'>₫40.000</div>
            <div className='ml-1 truncate text-orange'>
              <span className='text-xs'>₫</span>
              <span>20.000</span>
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
              Đã bán 2,6k
            </div>
          </div>
          <div className='mt-1 text-[11px]'>TP.Hồ Chí Minh</div>
        </div>
      </div>
    </Link>
  )
}
