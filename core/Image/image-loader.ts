const BASE_IMAGE_PATH: string = `/zhivan-style-landing-page/assets/images`;

export function loadImage({ src }: any) {
    return `${BASE_IMAGE_PATH}${src.replace(`${BASE_IMAGE_PATH}/`, '')}`;
}
