declare const _default: {
    l<T>(arg: unknown): T;
    templatify: (template: unknown) => {
        args: Record<string, unknown>;
    };
};

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N ? Acc[number] : Enumerate<N, [...Acc, Acc['length']]>;
type IntegerRange<S extends number, E extends number> = Exclude<Enumerate<E>, Enumerate<S>>;

interface RGB {
    r: IntegerRange<0, 255>;
    g: IntegerRange<0, 255>;
    b: IntegerRange<0, 255>;
}
interface RGBA extends RGB {
    a: number;
}
interface HSV {
    h: IntegerRange<0, 300>;
    s: number;
    v: number;
}

declare const CLR_BLACK = "#000000";
declare const CLR_WHITE = "#FFFFFF";
declare const CLR_OFFWHITE = "#CCD5DB";
declare const constructAlphaBackdrop: (radius: number) => HTMLCanvasElement;
declare const constructLinearGradient: (context: CanvasRenderingContext2D, width: number, height: number, color1: string, color2: string, direction?: string) => void;
declare const constructHueGradient: (context: CanvasRenderingContext2D, height: number) => CanvasGradient;
declare const toHex: (value: number) => string;
declare const toDec: (value: string) => number;
declare const rgbToHex: ({ r, g, b }: RGB) => string;
declare const rgbaToHex: ({ r, g, b, a }: RGBA) => string;
declare const hexToRgb: (hex: string) => RGB;
declare const parseRgbString: (value: string) => RGBA;
declare const rgbToHsv: (rgb: RGB) => {
    h: number;
    s: number;
    v: number;
};
declare const parseColor: (color: unknown) => RGBA & HSV;

export { CLR_BLACK, CLR_OFFWHITE, CLR_WHITE, HSV, RGB, RGBA, _default as Utils, constructAlphaBackdrop, constructHueGradient, constructLinearGradient, hexToRgb, parseColor, parseRgbString, rgbToHex, rgbToHsv, rgbaToHex, toDec, toHex };
