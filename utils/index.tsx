import type { MouseEvent } from 'react';

export { default as classnames } from 'classnames';
export { default as Image } from 'next/image';
export { default as Link } from 'next/link';
export { Component } from 'react';

export type PropsWithClassName<T extends any = {}> = T & { className?: string };
export type PropsWithChildren<T extends any = {}> = T & React.PropsWithChildren;
export type PropsWithAllTogether<T extends any = {}> = T & PropsWithClassName & PropsWithChildren;
export type PropsWithOnClick<T extends any = {}> = T & { onClick(event: MouseEvent): void; };
