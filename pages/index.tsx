import { LandingPageComponent } from 'components/templates';
import React from 'react';

function getProps() {
    return {
        title: 'Zhivan Style Landing Page | MIKOLOISM',
        navigation: {
            primary: [
                { url: '#', label: 'nav-1' },
                { url: '#', label: 'nav-2' },
                { url: '#', label: 'nav-3' },
                { url: '#', label: 'nav-4' },
                { url: '#', label: 'nav-5' },
                { url: '#', label: 'nav-6' },
            ],
        },
    };
}

export default function LandingPage() {
    return <LandingPageComponent {...getProps()} />;
}

export async function getStaticProps() {
    return { props: {} };
}
