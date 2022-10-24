// TODO : below optionality
// * import 'organisms/header.module.scss';
// * import './header.module.scss';
import { Component } from 'utils';

type Props = {
    // TODO :
    // navigation-props, title-props, searchbox-placeholder, shopping-cart, profile-props,
};

export class Header extends Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <header role="banner">
                {/* 1. title-atom(<Text />) */}
                {/* 2. searchbox-atom */}
                {/* 3. shopping-cart-atom(<Link <Icon />/>) */}
                {/* 4. profile-box-molecule */}
                {/* 5. navigation-molecule(<List />) */}
            </header>
        );
    }
}
