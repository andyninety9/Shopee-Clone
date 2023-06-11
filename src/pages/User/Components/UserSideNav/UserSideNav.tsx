import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import EditIcon from '@mui/icons-material/Edit'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

export default function UserSideNav() {
  return (
    <div className=''>
      <div className='flex items-center border-b border-b-gray-200 py-4'>
        <Link to={path.profile} className='h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-black/10'>
          <img
            src='https://images.unsplash.com/photo-1686174099917-325c70c29206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
            alt=''
            className='h-full w-full object-cover'
          />
        </Link>
        <div className='flex-grow pl-4'>
          <div className='mb-1 truncate font-semibold text-gray-600'>
            Mai Anh Duy
            <Link to={path.profile} className='flex items-center font-light capitalize text-gray-500'>
              <EditIcon
                sx={{
                  fontSize: '18px'
                }}
              />
              Sửa hồ sơ
            </Link>
          </div>
        </div>
      </div>
      <div className='mt-7'>
        <Link to={path.profile} className='flex items-center capitalize text-orange transition-colors mb-5'>
          <AccountCircleOutlinedIcon
            sx={{
              marginRight: '12px',
              fontSize: '22px',
              color: '#272727'
            }}
          />
          Tài khoản của tôi
        </Link>
        <Link to={path.changePassword} className='flex items-center capitalize text-gray-600 transition-colors mb-5'>
          <VpnKeyOutlinedIcon
            sx={{
              marginRight: '12px',
              fontSize: '22px',
              color: '#272727'
            }}
          />
          Đổi mật khẩu
        </Link>
        <Link to={path.historyPurchase} className='flex items-center capitalize text-gray-600 transition-colors'>
          <CategoryOutlinedIcon
            sx={{
              marginRight: '12px',
              fontSize: '22px',
              color: '#272727'
            }}
          />
          Đơn mua
        </Link>
      </div>
    </div>
  )
}
