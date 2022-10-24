import { Component } from 'utils';

type SectionItems = {};

type Props = {
    title: {
        en: string;
        pr: string;
    };

    action: {
        label: string;
        icon: string;
        href: string;
    };

    items: Array<SectionItems>;

    // hint : to make polymorphism
    CardComponent: any;

    // TODO : replace by `PropsWithChildren`
    children: any;
};

export class SectionComponent extends Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <section>
                {this.props?.children ?? <></>}
                {
                    // TODO : use (items.map(cardComponent))
                    this.props.CardComponent
                }
            </section>
        );
    }
}
