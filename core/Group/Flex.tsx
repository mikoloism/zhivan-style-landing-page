import { classnames, Component } from 'utils';
import style from './flex.module.scss';
import { StyleGenerator } from './StyleFactory';
import type { FlexProps } from './types';

type Props = FlexProps;

export class FlexComponent extends Component<Props> {
    public static defaultProps = {
        inlined: false,
        nowrap: false,
    };

    public constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <section className={this.createClassName()}>
                {this.props.children}
            </section>
        );
    }

    private createClassName(): string {
        const { inlined, direction, nowrap } = this.props;

        let className = classnames(
            style[`flex`],
            style[`place-center`],
            {
                [style['flex-nowrap']]: !!nowrap,
                [style['inline-flex']]: !!inlined,
                [style[`flex-${direction}`]]: !!direction,
            },
            StyleGenerator.generate(
                this.props.gapx,
                this.props.gapy,
                this.props['place-items'],
                this.props['place-content'],
                this.props.className
            )
        );

        return className;
    }
}
