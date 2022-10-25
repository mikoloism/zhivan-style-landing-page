import { Component } from 'utils';
import type { IconName } from './icon-repository';

type Props = { icon: IconName };

export class IconComponent extends Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64">
                <use xlinkHref={`#${this.props.icon}`}></use>
            </svg>
        );
    }
}
