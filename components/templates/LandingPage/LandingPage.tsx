export type Props = {
    title: string;
};

export function LandingPageComponent({ title }: Props) {
    return <h1>{title}</h1>;
}
