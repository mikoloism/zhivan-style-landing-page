import type { AppProps } from 'next/app';
import 'styles/normalize.css';
import 'styles/globals.css';
import Head from 'next/head';

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
