import { LandingPageComponent } from 'components/templates';
import React from 'react';

function getProps() {
    return {
        title: 'Zhivan Style Landing Page | MIKOLOISM',
    };
}

export default function LandingPage() {
    return <LandingPageComponent {...getProps()} />;
}

export async function getStaticProps() {
    return { props: {} };
}
