import { Link } from 'react-router-dom'

interface Props {
  title: string
}

export default function RegisterHeader({ title }: Props) {
  return (
    <header className='py-5'>
      <div className='mx-auto max-w-7xl px-4'>
        <nav className='flex items-end'>
          <Link to={'/'}>
            <img className='h-8 items-center lg:h-11' src='/images/Shopee.svg.png' alt='' />
          </Link>
          <div className='ml-4 text-xl font-[400] lg:text-3xl'>{title}</div>
        </nav>
      </div>
    </header>
  )
}
