import Footer from 'src/components/Footer'
import CartHeader from 'src/pages/ProductList/components/CartHeader'

interface Props {
  children?: React.ReactNode
}
export default function CartLayout({ children }: Props) {
  return (
    <div>
      <CartHeader />
      {children}
      <Footer />
    </div>
  )
}
