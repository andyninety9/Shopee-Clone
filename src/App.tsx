import { ToastContainer } from 'react-toastify'
import useRouterElement from './useRouterElement'
import 'react-toastify/dist/ReactToastify.css'
import { useContext, useEffect } from 'react'
import { AppContext } from './contexts/app.context'
import { LocalStorageEventTarget } from './utils/auth'

function App() {
  const routeElement = useRouterElement()
  const { reset } = useContext(AppContext)
  useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearLS', () => {
      reset()
    })
    return () => {
      LocalStorageEventTarget.removeEventListener('clearLS', reset)
    }
  }, [reset])
  return (
    <div>
      {routeElement}
      <ToastContainer autoClose={1000} position='top-center' />
    </div>
  )
}

export default App
