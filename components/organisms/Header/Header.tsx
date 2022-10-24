import { Logo, PrimaryNavigation, Profile, Search } from 'molecules';
import { Component } from 'utils';
import './header.module.scss';

// TODO : replacing by `navigation-props-type`
type Props = {
    navigation: {
        items: Array<any>;
    };
    profile: {
        avatarImageSrc: string;
        profileUrl: string;
        profileDisplayName: string;
    };
    brand: {
        homePageUrl: string;
        companyName: string;
    };
    search: {
        placeholder: string;
        value: string;
    };
};

export class HeaderComponent extends Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <header role="banner">
                <Logo {...this.props.brand} />
                <Search {...this.props.search} />
                <Profile {...this.props.profile} />
                <PrimaryNavigation {...this.props.navigation} />
                {/* 5. shopping-cart-atom(<Link <Icon />/>) */}
            </header>
        );
    }
}
