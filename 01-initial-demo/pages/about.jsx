import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className={'title'} >
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={'description'}>
        Mi primer About en nextjs.
      </p>
    </>
  )
}


AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout childTitle={"About"}>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )

}