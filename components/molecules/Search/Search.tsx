import { Component } from 'utils';

type Props = {
    placeholder: string;
    value: string;
};

export class SearchComponent extends Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <form
                role="search"
                className="search">
                <label className="search__label">
                    {/* <Icon className="search__icon" name="search" /> */}
                    <input
                        className="search__input"
                        placeholder={this.props.placeholder}
                        value={this.props.value}
                        type="search"
                    />
                </label>
                {/* render-fetched-result-list */}
            </form>
        );
    }
}
