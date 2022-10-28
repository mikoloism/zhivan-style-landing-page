import { classnames, Component, Link, PropsWithAllTogether } from 'utils';
import style from './link.module.scss';

export class LinkComponent extends Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <Link
                href={this.props.href}
                {...this.normalizeAttributes()}>
                <a
                    className={this.createClassName()}
                    {...this.normalizeAttributes()}>
                    {this.props.children}
                </a>
            </Link>
        );
    }

    /* private normalizeChildren() {
        if (this.props.navigation) return this.props.children;

        return <strong>{this.props.children}</strong>;
    } */

    private createClassName(): string {
        return classnames(
            { [style['link--overlay']]: this.props.overlay },
            this.props.className
        );
    }

    private normalizeAttributes() {
        const RELATIVE_ATTRIBUTES = { rel: 'noopener' };
        const INTERNAL_ATTRIBUTES = { rel: 'noopener nofollow' };
        const EXTERNAL_ATTRIBUTES = {
            target: '_blank',
            rel: 'noopener nofollow',
        };

        let { href } = this.props;

        if (href.startsWith('#')) {
            return INTERNAL_ATTRIBUTES;
        }

        if (href.startsWith('/')) {
            return RELATIVE_ATTRIBUTES;
        }

        if (href.startsWith('https://') || href.startsWith('http://')) {
            return EXTERNAL_ATTRIBUTES;
        }

        return EXTERNAL_ATTRIBUTES;
    }

    public static defaultProps = {
        overlay: false,
    };
}

type Props = PropsWithAllTogether<{
    href: string;
    overlay: boolean;
}>;
