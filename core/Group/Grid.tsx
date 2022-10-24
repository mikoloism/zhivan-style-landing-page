import { classnames, Component } from 'utils';
import style from './group.module.scss';
import { StyleGenerator } from './StyleFactory';
import type { GridProps } from './types';

type Props = GridProps;

export class GridComponent extends Component<Props> {
    public static defaultProps = {
        inlined: false,
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
        let className = classnames(
            style[`grid`],
            { [style['inline-grid']]: !!this.props.inlined },
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
