import { Component, Image } from 'utils';

type Props = {};

export class ImageComponent extends Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        return <Image />;
    }
}
