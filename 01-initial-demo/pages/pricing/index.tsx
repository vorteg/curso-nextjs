import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function PricingPage() {
    return (
        <MainLayout childTitle={"Pricing"}>
            <h1>Pricing Page</h1>
            <h1 className={'title'}>
                Ir a<Link href="/"> Home</Link>
            </h1>

            <p className={'description'}>
                Aqui se vende esto .i.
            </p>
        </MainLayout>
    )
}