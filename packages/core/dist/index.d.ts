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

declare const index_CLR_BLACK: typeof CLR_BLACK;
declare const index_CLR_WHITE: typeof CLR_WHITE;
declare const index_CLR_OFFWHITE: typeof CLR_OFFWHITE;
declare const index_constructAlphaBackdrop: typeof constructAlphaBackdrop;
declare const index_constructLinearGradient: typeof constructLinearGradient;
declare const index_constructHueGradient: typeof constructHueGradient;
declare const index_toHex: typeof toHex;
declare const index_toDec: typeof toDec;
declare const index_rgbToHex: typeof rgbToHex;
declare const index_rgbaToHex: typeof rgbaToHex;
declare const index_hexToRgb: typeof hexToRgb;
declare const index_parseRgbString: typeof parseRgbString;
declare const index_rgbToHsv: typeof rgbToHsv;
declare const index_parseColor: typeof parseColor;
declare namespace index {
  export {
    index_CLR_BLACK as CLR_BLACK,
    index_CLR_WHITE as CLR_WHITE,
    index_CLR_OFFWHITE as CLR_OFFWHITE,
    index_constructAlphaBackdrop as constructAlphaBackdrop,
    index_constructLinearGradient as constructLinearGradient,
    index_constructHueGradient as constructHueGradient,
    index_toHex as toHex,
    index_toDec as toDec,
    index_rgbToHex as rgbToHex,
    index_rgbaToHex as rgbaToHex,
    index_hexToRgb as hexToRgb,
    index_parseRgbString as parseRgbString,
    index_rgbToHsv as rgbToHsv,
    index_parseColor as parseColor,
  };
}

export { index as Color, _default as Utils };
