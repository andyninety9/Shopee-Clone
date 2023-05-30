import useRouterElement from './useRouterElement'

function App() {
  const routeElement = useRouterElement()
  return <div>{routeElement}</div>
}

export default App
