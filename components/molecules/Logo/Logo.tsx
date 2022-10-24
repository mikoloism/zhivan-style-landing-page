import { Logo } from 'components/atoms/Logo';

type Props = {
    homePageUrl: string;
    companyName: string;
};

export function LogoComponent(props: Props) {
    return (
        <div className="logo">
            {/* a is overlay and hidden */}
            <a
                href={props.homePageUrl}
                className="logo__link"
                rel="home">
                click here to navigate to home page
            </a>
            <Logo companyName={props.companyName} />
        </div>
    );
}
