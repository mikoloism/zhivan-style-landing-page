import { Component } from 'utils';
import { FlexComponent } from './Flex';
import { GridComponent } from './Grid';
import type { PropsWithFlex, PropsWithGrid } from './types';

type Props = PropsWithFlex | PropsWithGrid;

export class GroupComponent extends Component<Props> {
    public static defaultProps: Props = {
        type: 'flex',
        inlined: false,
        nowrap: false,
    };

    public constructor(props: Props) {
        super(props);
    }

    public render() {
        const { type, ...props } = this.props;
        const DisplayComponent = {
            flex: this.renderFlexComponent,
            grid: this.renderGridComponent,
        }[type];

        return <DisplayComponent {...props} />;
    }

    private renderFlexComponent(props: any) {
        return <FlexComponent {...props} />;
    }

    private renderGridComponent(props: any) {
        return <GridComponent {...props} />;
    }
}
