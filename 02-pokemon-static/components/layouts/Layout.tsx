import { FC } from 'react';

import Head from 'next/head';
import { Navbar } from '../ui/Navbar';

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
    // ? esto quiere decir que es opcional
}


export const Layout: FC<LayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content='Victor Ortega' />
                <meta name='description' content={`Informacion sobre el pokemon ${title}`} />
                <meta name='keywords' content={`${title}, pokemon, pokedex`} />
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    )
}
