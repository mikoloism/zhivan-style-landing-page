import { Component } from 'utils';

export class Sprite extends Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        const symbolPath = this.generatePathToSymbol();

        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                role="img">
                <use
                    href={symbolPath}
                    xlinkHref={symbolPath}
                />
            </svg>
        );
    }

    private generatePathToSymbol() {
        return `/zhivan-style-landing-page/assets/${this.props.load}-sprites.svg#${this.props.name}`;
    }
}

type Props = {
    //* file-name
    load: string;

    //* path-name
    name: string;
};
