import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'
import LoginLayout from './layouts/LoginLayout'
import MainLayout from './layouts/MainLayout'
import Profile from './pages/Profile'

const isAuthenticated = false
function ProtectedRoutes() {
  // const isAuthenticated = true
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}
function RejectedRoutes() {
  // const isAuthenticated = true
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

//Set index true cho trang chủ!!!!
export default function useRouterElement() {
  const routeElements = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '',
      element: <ProtectedRoutes />,
      children: [
        {
          path: 'profile',
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoutes />,
      children: [
        {
          path: '/login',
          element: (
            <LoginLayout>
              <Login />
            </LoginLayout>
          )
        },
        {
          path: '/register',
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    }
  ])
  return routeElements
}
