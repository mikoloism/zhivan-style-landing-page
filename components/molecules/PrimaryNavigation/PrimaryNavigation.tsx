import { Component, PropsWithChildren } from 'utils';

type Props = {
    items: Array<ItemsProps>;
};

type ItemsProps = {
    url: string;
    label: string;
};

export class PrimaryNavigation extends Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <this.NavigationContainer>
                {this.props.items.map((item: ItemsProps) => (
                    <this.NavigationItem
                        key={item.url}
                        url={item.url}
                        label={item.label}
                    />
                ))}
            </this.NavigationContainer>
        );
    }

    private NavigationContainer(props: PropsWithChildren) {
        return (
            <nav
                className="navigation navigation__primary"
                role="navigation">
                {/* TODO : replacing by `<List />` */}
                <ul className="navigation__list">{props.children}</ul>
            </nav>
        );
    }

    private NavigationItem(props: ItemsProps) {
        return (
            <li className="navigation__item">
                {/* TODO : replacing by `<Link />` */}
                <a
                    data-href={props.url}
                    className="navigation__link">
                    {props.label}
                </a>
            </li>
        );
    }
}
