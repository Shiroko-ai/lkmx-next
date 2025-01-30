import Link from 'next/link'
import CenterContainer from './components/containers/CenterContainer'
import Button from './components/ui/Button'

export default function NotFound() {
  return (
    <div>
      <CenterContainer>
        <div className=''>
      <h2 className='text-4xl font-bold'>No se encontró la página que estás buscando</h2>
      <p className='my-5 text-2xl text-slate-400'>Por favor, visita una de las páginas existentes</p>
      <Link href="/">
      <Button type='button'>
        Volver al inicio
      </Button>
      </Link>
      </div>
      </CenterContainer>
    </div>
  )
}
