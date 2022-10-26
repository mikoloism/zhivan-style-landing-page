import { Sprite } from 'core';
import { Component } from 'utils';

export type IconName =
    | 'arrow-left'
    | 'arrow-right'
    | 'cart'
    | 'chevron-top'
    | 'search';

type Props = { icon: IconName };

export class IconComponent extends Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <Sprite
                load="icons"
                name={this.props.icon}
            />
        );
    }
}
