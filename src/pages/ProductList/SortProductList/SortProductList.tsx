import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'

export default function SortProductList() {
  return (
    <div className='bg-gray-300/40 px-3 py-4'>
      <div className='flex flex-wrap items-center justify-center gap-2 lg:justify-between'>
        <div className='flex flex-wrap items-center gap-2'>
          <div className='text-[14px]'>Sắp xếp theo</div>
          <button className='h-8 bg-orange px-4 text-sm capitalize text-white shadow-sm hover:bg-orange/80'>
            Phổ biến
          </button>
          <button className='h-8 bg-white px-4 text-sm capitalize text-black shadow-sm hover:bg-slate-100'>
            Mới nhất
          </button>
          <button className='h-8 bg-white px-4 text-sm capitalize text-black shadow-sm hover:bg-slate-100'>
            Bán Chạy
          </button>
          <select className='h-8 bg-white px-4 text-left text-sm capitalize text-black outline-none hover:bg-slate-100'>
            <option value='' disabled>
              Giá
            </option>
            <option value='price:asc'>Giá: Thấp đến cao</option>
            <option value='price:desc'>Giá: Cao đến thấp</option>
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
