export default function CategoryGrid() {
  return (
    <div className='mb-2 w-full rounded-sm bg-white shadow-sm'>
      <div className='items-center border-b-2 p-5 font-medium capitalize text-gray-500'>DANH MỤC</div>
      <div className='mt-2 grid grid-cols-2 gap-3 p-5 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7'>
        <div className='min-w-[120px] max-w-[160px] rounded-lg border border-gray-300 bg-white p-5 text-center'>
          <img
            className='object-cover'
            src='https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn'
            alt=''
          />
          Thời Trang Nam
        </div>
        <div className='min-w-[120px] max-w-[160px] rounded-lg border border-gray-300 bg-white p-5 text-center'>
          <img
            className='object-cover'
            src='https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn'
            alt=''
          />
          Điện thoại & Phụ Kiện
        </div>
        <div className='min-w-[120px] max-w-[160px] rounded-lg border border-gray-300 bg-white p-5 text-center'>
          <img
            className='object-cover'
            src='https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn'
            alt=''
          />
          Đồng Hồ
        </div>
        <div className='min-w-[120px] max-w-[160px] rounded-lg border border-gray-300 bg-white p-5 text-center'>
          <img
            className='object-cover'
            src='https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn'
            alt=''
          />
          Máy Tính & Laptop
        </div>
        <div className='min-w-[120px] max-w-[160px] rounded-lg border border-gray-300 bg-white p-5 text-center'>
          <img
            className='object-cover'
            src='https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn'
            alt=''
          />
          Máy Ảnh & Máy Quay Phim
        </div>
      </div>
    </div>
  )
}
