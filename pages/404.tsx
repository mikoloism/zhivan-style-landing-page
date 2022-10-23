import Link from 'next/link';

export default function Error404() {
    return (
        <section>
            <h4>404 | page not found</h4>
            <p>
                <Link href="/">
                    <a>I will take you home</a>
                </Link>
            </p>
        </section>
    );
}

export async function getStaticProps() {
    return { props: {} };
}
