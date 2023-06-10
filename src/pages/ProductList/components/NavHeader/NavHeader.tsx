import LanguageIcon from '@mui/icons-material/Language'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { grey } from '@mui/material/colors'
import Avatar from '@mui/material/Avatar'
import Popover from 'src/components/Popover/Popover'
import { Fragment, useContext } from 'react'
import { stringAvatar } from 'src/utils/utils'
import { AppContext } from 'src/contexts/app.context'
import path from 'src/constants/path'
import { useNavigate } from 'react-router-dom'
import authApi from 'src/apis/auth.api'
import { queryClient } from 'src/main'
import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query'
import { purchasesStatus } from 'src/constants/purchase'

export default function NavHeader() {
  const { isAuthenticated, setIsAuthenticated, setProfile, profile } = useContext(AppContext)
  const navigate = useNavigate()

  const logoutMutation = useMutation({
    mutationFn: authApi.LogoutAccount,
    onSuccess: () => {
      setIsAuthenticated(false)
      setProfile(null)
      queryClient.removeQueries({ queryKey: ['purchase', { status: purchasesStatus.inCart }] })
      navigate('/')
      toast.success('Đăng xuất thành công')
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }
  return (
    <div className='flex justify-end'>
      <Popover
        renderPopover={
          <div className='relative rounded-sm border border-gray-200 bg-white shadow-md'>
            <div className='flex flex-col px-3 py-2'>
              <button className='px-3 py-2 text-[12px] hover:text-orange'>Vietnamese</button>
              <button className='mt-2 px-3 py-2 text-[12px] hover:text-orange'>English</button>
            </div>
          </div>
        }
        className='flex cursor-pointer items-center py-1 text-[12px] text-white  hover:text-gray-300'
      >
        <LanguageIcon
          sx={{
            color: 'white',
            hover: {
              color: grey[300]
            }
          }}
        />
        <span className='mx-1'>Vietnamese</span>
        <KeyboardArrowDownIcon
          sx={{
            color: 'white',
            hover: {
              color: grey[300]
            }
          }}
        />
      </Popover>
      <Popover
        className='ml-6 flex cursor-pointer items-center py-1 text-[12px] text-white hover:text-gray-300'
        renderPopover={
          <div className='relative rounded-sm border border-gray-200 bg-white shadow-md'>
            <div className='flex flex-col px-3 py-2'>
              {isAuthenticated ? (
                <Fragment>
                  <button className='px-3 py-2 text-[12px] hover:text-orange' onClick={() => navigate(path.profile)}>
                    Tài khoản của tôi
                  </button>
                  <button className='mt-2 px-3 py-2 text-[12px] hover:text-orange'>Đơn mua</button>
                  <button className='mt-2 px-3 py-2 text-[12px] hover:text-orange' onClick={handleLogout}>
                    Đăng xuất
                  </button>
                </Fragment>
              ) : (
                <Fragment>
                  <button
                    className='mt-2 px-3 py-2 text-[12px] hover:text-orange'
                    onClick={() => navigate(path.register)}
                  >
                    Đăng ký
                  </button>
                  <button className='mt-2 px-3 py-2 text-[12px] hover:text-orange' onClick={() => navigate(path.login)}>
                    Đăng nhập
                  </button>
                </Fragment>
              )}
            </div>
          </div>
        }
      >
        {profile ? (
          <Fragment>
            <Avatar {...stringAvatar(`${profile?.email}`)} src='' alt='' />
            <span>{profile?.email}</span>
          </Fragment>
        ) : (
          <Avatar
            sx={{
              width: '25px',
              height: '25px',
              marginRight: '8px',
              flexShrink: '0'
            }}
          />
        )}
      </Popover>
    </div>
  )
}
