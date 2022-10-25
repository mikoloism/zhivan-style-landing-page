import { IconSprites } from './IconSprites';

export type IconName = 'cart' | 'chevron-left' | 'chevron-right' | 'search';

IconSprites.new({
    name: 'cart',
    viewBox: '0 0 19.5 20',
    SvgPath: () => (
        <g
            stroke="#dfad8a"
            strokeWidth="1.5"
            transform="translate(-2.25 -1.75)">
            <path
                d="M15.773,9.305V6.273a3.781,3.781,0,0,0-7.562-.017V9.305"
                fill="none"
                stroke="inherit"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="inherit"
            />
            <path
                d="M16.742,21H7.258A4.256,4.256,0,0,1,3,16.745V11.229A4.256,4.256,0,0,1,7.258,6.974h9.484A4.256,4.256,0,0,1,21,11.229v5.516A4.256,4.256,0,0,1,16.742,21Z"
                fill="none"
                stroke="inherit"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="inherit"
                fillRule="evenodd"
            />
        </g>
    ),
});

IconSprites.new({
    name: 'chevron-left',
    viewBox: '0 0 72 60',
    SvgPath: () => (
        <g
            stroke="#dfad8a"
            strokeWidth="2"
            transform="translate(-1649 -3618)">
            <g transform="translate(1667.75 3632.75)">
                <path
                    d="M4.25,12.274H35.777"
                    transform="translate(0 2.979)"
                    fill="none"
                    stroke="inherit"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="inherit"
                />
                <path
                    d="M13.292,24.257l-9.042-9,9.042-9"
                    transform="translate(0 0)"
                    fill="none"
                    stroke="inherit"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="inherit"
                />
            </g>
        </g>
    ),
});

IconSprites.new({
    name: 'chevron-right',
    viewBox: '0 0 72 60',
    SvgPath: () => (
        <g
            stroke="#dfad8a"
            strokeWidth="2"
            transform="translate(17.473 21)">
            <path
                d="M35.777,12.274H4.25"
                transform="translate(-4.25 -3.27)"
                fill="none"
                stroke="inherit"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="inherit"
            />
            <path
                d="M4.25,24.257l9.042-9-9.042-9"
                transform="translate(18.236 -6.25)"
                fill="none"
                stroke="inherit"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="inherit"
            />
        </g>
    ),
});

IconSprites.new({
    name: 'search',
    viewBox: '0 0 20.575 21.033',
    SvgPath: () => (
        <g
            stroke="#dfad8a"
            strokeWidth="1.5"
            id="Search"
            transform="translate(0.75 0.75)">
            <circle
                cx="8.989"
                cy="8.989"
                r="8.989"
                transform="translate(0 0)"
                fill="none"
                stroke="inherit"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="inherit"
            />
            <path
                d="M18.018,18.485,21.542,22"
                transform="translate(-2.778 -2.778)"
                fill="none"
                stroke="inherit"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="inherit"
            />
        </g>
    ),
});

export { IconSprites };
