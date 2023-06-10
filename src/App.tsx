import { ToastContainer } from 'react-toastify'
import useRouterElement from './useRouterElement'
import 'react-toastify/dist/ReactToastify.css'
import { useContext } from 'react'
import { AppContext } from './contexts/app.context'

function App() {
  const routeElement = useRouterElement()
  // const { reset } = useContext(AppContext)
  return (
    <div>
      {routeElement}
      <ToastContainer autoClose={1000} position='top-center' />
    </div>
  )
}

export default App
