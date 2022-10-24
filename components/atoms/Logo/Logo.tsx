type Props = {
    // src: string,
    companyName: string;
};

export function LogoComponent(props: Props) {
    // if(props.src) return <img className="logo__image" src={props.src} alt={props.companyName} />
    return <h3 className="logo__label">{props.companyName}</h3>;
}
