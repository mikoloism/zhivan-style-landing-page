import { classnames, Component, Image, PropsWithClassName } from 'utils';
import { loadImage } from './image-loader';
import style from './image.module.scss';

export class ImageComponent extends Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        const className = this.createClassName();

        return (
            <figure className={className}>
                <Image
                    src={this.props.src}
                    alt={this.props.alt}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                    className={this.props.imageClassName ?? ''}
                    loader={loadImage}
                    priority
                />
            </figure>
        );
    }
    private createClassName(): string {
        return classnames(style['image-wrapper'], this.props.className);
    }
}

type Props = PropsWithClassName<{
    src: string;
    alt: string;
    imageClassName?: string;
}>;
