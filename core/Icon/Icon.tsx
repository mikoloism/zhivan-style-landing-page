import { Sprite } from 'core';
import { Component } from 'utils';

export class IconComponent extends Component<Props> {
    public static defaultProps = {
        category: false,
    };

    public constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <Sprite
                load={!this.props.category ? 'icons' : 'category'}
                name={this.props.icon}
            />
        );
    }
}

type Props = IconProps | CategoryProps;

type IconProps = {
    category: false;
    icon: IconName;
};

type CategoryProps = {
    category: true;
    icon: CategoryName;
};

export type IconName =
    | 'arrow-left'
    | 'arrow-right'
    | 'cart'
    | 'chevron-top'
    | 'search';

type CategoryName =
    | 'socks'
    | 'cap'
    | 'boots'
    | 'shoes'
    | 'skirt'
    | 'pants'
    | 'shirts'
    | 'shorts'
    | 'coats'
    | 'jumper';
