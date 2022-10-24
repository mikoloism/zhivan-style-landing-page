import { Component } from 'utils';

type Props = {
    profileUrl: string;
    avatarImageSrc: string;
    profileDisplayName: string;
};

export class ProfileComponent extends Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <div className="profile">
                {/* <Link href={profileUrl} overlay>click here to see profile page</Link> */}
                {/* <Image src={avatarImageSrc} /> */}
                {/* <Text type="strong">{profileDisplayName}</Text> */}
            </div>
        );
    }
}
