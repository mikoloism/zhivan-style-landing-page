import type { PropsWithAllTogether, PropsWithOnClick } from 'utils';

type Props = PropsWithAllTogether<PropsWithOnClick>;

export function ButtonComponent({ children, ...props }: Props) {
    return (
        <button
            type="button"
            {...props}>
            {children}
        </button>
    );
}
