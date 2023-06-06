import Footer from 'src/components/Footer'
import RegisterHeader from 'src/components/RegisterHeader'

interface Props {
  children?: React.ReactNode
}
export default function LoginRLayout({ children }: Props) {
  return (
    <div>
      <RegisterHeader title='Đăng nhập' />
      {children}
      <Footer />
    </div>
  )
}
