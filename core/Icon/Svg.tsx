import { classnames, PropsWithAllTogether } from 'utils';

type Props = { scale: string };

export const DEFAULT_SVG_ICON_PROPS = { scale: 'scale-[0.7]' };

export const withSvg = (SvgPath: any) => {
    return function SvgWrapper({ scale }: Props = DEFAULT_SVG_ICON_PROPS) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                className={classnames('transform', scale)}>
                <SvgPath />
            </svg>
        );
    };
};

export function Svg(props: PropsWithAllTogether) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}>
            {props.children}
        </svg>
    );
}
