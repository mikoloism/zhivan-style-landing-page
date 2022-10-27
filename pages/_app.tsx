import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/normalize.css';
import 'styles/globals.scss';

function AppRenderer({ Component: PageComponent, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Zhivan Style Landing Page | MIKOLOISM</title>
            </Head>
            <PageComponent {...pageProps} />
        </>
    );
}

export default AppRenderer;
