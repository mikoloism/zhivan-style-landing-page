import { classnames, Component, PropsWithClassName } from 'utils';
import flexStyle from '../Group/flex.module.scss';
import { StyleGenerator } from '../Group/StyleFactory';
import type { FlexProps } from '../Group/types';
import style from './list.module.scss';

export class ListComponent<T> extends Component<Props<T>> {
    public constructor(props: Props<T>) {
        super(props);
    }

    public render() {
        const className = this.createClassName();
        const { Renderer } = this.props;

        return (
            <ul className={className}>
                {this.props.data.map(($props: DataType<T>, index: number) => {
                    let $key = this.parseKeyProperty<T>({
                        index,
                        value: $props,
                        key: this.props.$key,
                    });

                    return (
                        <Renderer
                            key={$key}
                            {...$props}
                        />
                    );
                })}
            </ul>
        );
    }

    private parseKeyProperty<T>({
        key,
        value,
        index,
    }: ParseKeyProperty<T>): ParseKeyPropertyReturn {
        if (!key) return index;

        if (typeof key === 'string') {
            return (value as Record<string, string | number>)[key];
        }

        if (key instanceof Array) {
            return key[index];
        }

        if (typeof key === 'function' && 'call' in key) {
            return key.call({}, value as any, index as number);
        }

        return index;
    }

    private createClassName(): string {
        const { inlined, direction, nowrap } = this.props;

        let className = classnames(
            style.list,
            flexStyle.flex,
            flexStyle[`flex-${direction}`],
            {
                [flexStyle['flex-nowrap']]: !!nowrap,
                [flexStyle['inline-flex']]: !!inlined,
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

    public static defaultProps: FlexProps = {
        direction: 'row',
        nowrap: false,
        inlined: false,
        'place-items': 'center',
        'place-content': 'center',
    };
}

export function withItem<Props = any>(ItemRenderer: any, className?: string) {
    return function ItemContainer(props: Props) {
        return <li className={className}>{<ItemRenderer {...props} />}</li>;
    };
}

type Props<T> = PropsWithClassName<DataProps<T> & FlexProps> & {
    $key?: KeyType<T>;
    Renderer?: any;
};

type KeyType<T> = string | number | Array<string | number> | KeyCallback<T>;

type KeyCallback<T> = (item: DataType<T>, index: number) => string | number;

type DataType<T extends Record<keyof T, any>> = {
    [key in keyof T]: T[key];
};

type DataProps<T> = { data: Array<DataType<T>> };

type ParseKeyProperty<T> = {
    key: KeyType<T> | undefined;
    value: DataType<T> | undefined;
    index: number;
};

type ParseKeyPropertyReturn = string | number;
