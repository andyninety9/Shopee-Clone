import Button from '../Button'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined'

export default function CategoryGrid() {
  return (
    <div className='mb-5 w-full rounded-sm bg-gradient-PinkRed shadow-md'>
      <div className='items-center border-b-2 p-5 font-medium capitalize text-white'>CÓ THỂ BẠN QUAN TÂM</div>
      <div className='relative mt-2 grid w-full flex-nowrap gap-3 p-5 px-[50px]'>
        <Button className='absolute left-0 h-full min-w-fit cursor-pointer rounded-br-sm rounded-tr-sm bg-black/20 hover:bg-black/10'>
          <ArrowCircleLeftOutlinedIcon
            sx={{
              fontSize: '42px',
              color: 'white'
            }}
          />
        </Button>
        <div className='flex w-full gap-3 overflow-x-scroll '>
          <div className='min-w-[120px] max-w-[160px] rounded-lg border border-gray-300 bg-white p-5 text-center shadow-sm'>
            <img
              className='object-cover'
              src='https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn'
              alt=''
            />
            Thời Trang Nam
          </div>
          <div className='min-w-[120px] max-w-[160px] rounded-lg border border-gray-300 bg-white p-5 text-center shadow-sm'>
            <img
              className='object-cover'
              src='https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn'
              alt=''
            />
            Điện thoại & Phụ Kiện
          </div>
          <div className='min-w-[120px] max-w-[160px] rounded-lg border border-gray-300 bg-white p-5 text-center shadow-sm'>
            <img
              className='object-cover'
              src='https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn'
              alt=''
            />
            Đồng Hồ
          </div>
          <div className='min-w-[120px] max-w-[160px] rounded-lg border border-gray-300 bg-white p-5 text-center shadow-sm'>
            <img
              className='object-cover'
              src='https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn'
              alt=''
            />
            Máy Tính & Laptop
          </div>
          <div className='min-w-[120px] max-w-[160px] rounded-lg border border-gray-300 bg-white p-5 text-center shadow-sm'>
            <img
              className='object-cover'
              src='https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn'
              alt=''
            />
            Máy Ảnh & Máy Quay Phim
          </div>
        </div>
        <Button className='absolute right-0 h-full min-w-fit cursor-pointer rounded-bl-sm rounded-tl-sm bg-black/20 hover:bg-black/10'>
          <ArrowCircleRightOutlinedIcon
            sx={{
              fontSize: '42px',
              color: 'white'
            }}
          />
        </Button>
      </div>
    </div>
  )
}
