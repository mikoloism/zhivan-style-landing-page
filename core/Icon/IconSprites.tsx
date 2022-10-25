import type { IconName } from './icon-repository';
import { Svg } from './Svg';

type IconSpritesRecord = Record<IconName, () => JSX.Element> | {};

type SpriteObject = {
    name: string;
    viewBox: string;
    SvgPath: () => JSX.Element;
};

export class IconSprites {
    private sprites: IconSpritesRecord = {};
    private static instance: null | IconSprites = null;
    private constructor() {}

    public static new(spriteObject?: SpriteObject): IconSprites {
        if (this.instance == null) {
            this.instance = new IconSprites();
        }

        if (spriteObject !== undefined) {
            this.instance.append(spriteObject);
        }

        return this.instance;
    }

    public static Render(): JSX.Element {
        const icons = IconSprites.new();

        return (
            <Svg className="sprites sprites--icons">
                {Object.keys(icons.getSprites()).map((spriteName: string) => {
                    let IconComponent = icons.getSprite(
                        spriteName as IconName
                    )!;

                    return <IconComponent key={spriteName} />;
                })}
            </Svg>
        );
    }

    public append(spriteObject: SpriteObject): void {
        Object.assign(
            this.sprites,
            this.convertObjectToComponent(spriteObject)
        );
    }

    public getSprites(): IconSpritesRecord {
        return this.sprites;
    }

    public getSprite(spriteName: IconName): () => JSX.Element | null {
        return (this.sprites as any)[spriteName] || null;
    }

    private convertObjectToComponent(
        spriteObject: SpriteObject
    ): IconSpritesRecord {
        return {
            [spriteObject.name]: () => (
                <symbol
                    id={spriteObject.name}
                    className="sprites__symbol"
                    viewBox={spriteObject.viewBox}>
                    <title>{`${spriteObject.name} svg icon`}</title>
                    {<spriteObject.SvgPath />}
                </symbol>
            ),
        };
    }
}
