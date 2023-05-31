import { ToastContainer } from 'react-toastify'
import useRouterElement from './useRouterElement'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routeElement = useRouterElement()
  return (
    <div>
      {routeElement}
      <ToastContainer autoClose={1000} />
    </div>
  )
}

export default App
