import { classnames } from 'utils';
import style from './group.module.scss';
import type { GapX, GapY, PlaceContent, PlaceItems } from './types';

export class StyleGenerator {
    public static generate(
        gapx?: GapX,
        gapy?: GapY,
        placeItems?: PlaceItems,
        placeContent?: PlaceContent,
        className?: any
    ): string {
        return classnames(
            {
                [style[`gap-x-${gapx}`]]: !!gapx,
                [style[`gap-y-${gapy}`]]: !!gapy,
                [style[`place-items-${placeItems}`]]: !!placeItems,
                [style[`place-content-${placeContent}`]]: !!placeContent,
            },
            className
        );
    }
}
