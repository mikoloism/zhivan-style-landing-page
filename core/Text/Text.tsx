import {
    classnames,
    Component,
    createReactElement,
    PropsWithAllTogether,
    PropsWithChildren,
    PropsWithClassName,
} from 'utils';
import style from './text.module.scss';

export class TextComponent extends Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        return this.generateTextElement(this.props.tag, {
            className: this.createClassName(),
            children: this.props.children,
        });
    }

    private generateTextElement(
        tagName: TagName,
        { className, children }: PropsWithAllTogether
    ) {
        return createReactElement(tagName, { className }, children);
    }

    private createClassName(): string {
        return classnames(
            style[`text-${this.props.size}`],
            style[`weight-${this.props.weight}`],
            this.props.className
        );
    }

    public static defaultProps: Omit<Props, 'children'> = {
        tag: 'span',
        size: 'md',
        weight: 'medium',
    };
}

type Props = PropsWithClassName<Required<PropsWithChildren>> & {
    tag: TagName;
    size: TextSize;
    weight: TextWeight;
};

type TagName = HeadingTagName | StandardTagName;
type HeadingTagName = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type StandardTagName = 'span' | 'p' | 'strong' | 'em';

type TextSize =
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl';

type TextWeight = 'light' | 'regular' | 'medium' | 'bold' | 'heavy' | 'fat';
