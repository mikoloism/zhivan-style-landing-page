import type { PropsWithAllTogether } from 'utils';

export type GapX = number | string;
export type GapY = number | string;
export type PropsWithGap = {
    gapx?: GapX;
    gapy?: GapY;
};

type PlaceAlignAllTogether = 'center' | 'start' | 'end' | 'stretch';
export type PlaceItems = PlaceAlignAllTogether;
export type PlaceContent = PlaceAlignAllTogether | 'between' | 'around';
export type PropsWithPlaceAlign = {
    'place-items'?: PlaceItems;
    'place-content'?: PlaceContent;
};

export type StyleProps = PropsWithAllTogether &
    PropsWithGap &
    PropsWithPlaceAlign & { inlined: boolean };

export type FlexProps = StyleProps & {
    nowrap: boolean;
    direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
};

export type GridProps = StyleProps;

export type PropsWithFlex = { type: 'flex' } & FlexProps;
export type PropsWithGrid = { type: 'grid' } & GridProps;
