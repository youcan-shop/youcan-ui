export declare const css: <Composers extends (string | import("@stitches/core/types/util").Function | {
    [name: string]: unknown;
})[], CSS = import("@stitches/core/types/css-util").CSS<{
    bp1: "(min-width: 480px)";
}, {
    colors: {
        gray400: string;
        gray500: string;
    };
}, import("@stitches/core/types/config").DefaultThemeMap, {
    marginX: (value: Number) => {
        marginLeft: Number;
        marginRight: Number;
    };
}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/core/types/util").Function ? Composers[K] : import("@stitches/core/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/core/types/util").String | import("@stitches/core/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@stitches/core/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/core/types/util").String | import("@stitches/core/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@stitches/core/types/util").WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@stitches/core/types/styled-component").CssComponent<import("@stitches/core/types/styled-component").StyledComponentType<Composers>, import("@stitches/core/types/styled-component").StyledComponentProps<Composers>, {
    bp1: "(min-width: 480px)";
}, CSS>, globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? import("@stitches/core/types/css").AtRule.FontFace | import("@stitches/core/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/core/types/css-util").CSS<{
        bp1: "(min-width: 480px)";
    }, {
        colors: {
            gray400: string;
            gray500: string;
        };
    }, import("@stitches/core/types/config").DefaultThemeMap, {
        marginX: (value: Number) => {
            marginLeft: Number;
            marginRight: Number;
        };
    }>;
} : K extends `@property ${string}` ? import("@stitches/core/types/css").AtRule.Property : import("@stitches/core/types/css-util").CSS<{
    bp1: "(min-width: 480px)";
}, {
    colors: {
        gray400: string;
        gray500: string;
    };
}, import("@stitches/core/types/config").DefaultThemeMap, {
    marginX: (value: Number) => {
        marginLeft: Number;
        marginRight: Number;
    };
}>; })[]) => () => string, keyframes: (style: {
    [offset: string]: import("@stitches/core/types/css-util").CSS<{
        bp1: "(min-width: 480px)";
    }, {
        colors: {
            gray400: string;
            gray500: string;
        };
    }, import("@stitches/core/types/config").DefaultThemeMap, {
        marginX: (value: Number) => {
            marginLeft: Number;
            marginRight: Number;
        };
    }>;
}) => {
    (): string;
    name: string;
}, getCssText: () => string, theme: string & {
    className: string;
    selector: string;
} & {
    colors: {
        gray400: import("@stitches/core/types/theme").Token<"gray400", string, "colors", "">;
        gray500: import("@stitches/core/types/theme").Token<"gray500", string, "colors", "">;
    };
}, createTheme: <Argument0 extends string | ({
    colors?: {
        gray400?: string | number | boolean | undefined;
        gray500?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
}), Argument1 extends string | ({
    colors?: {
        gray400?: string | number | boolean | undefined;
        gray500?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
})>(nameOrScalesArg0: Argument0, nameOrScalesArg1?: Argument1 | undefined) => string & {
    className: string;
    selector: string;
} & (Argument0 extends string ? import("@stitches/core/types/stitches").ThemeTokens<Argument1, ""> : import("@stitches/core/types/stitches").ThemeTokens<Argument0, "">), config: {
    prefix: "";
    media: {
        bp1: "(min-width: 480px)";
    };
    theme: {
        colors: {
            gray400: string;
            gray500: string;
        };
    };
    themeMap: import("@stitches/core/types/config").DefaultThemeMap;
    utils: {
        marginX: (value: Number) => {
            marginLeft: Number;
            marginRight: Number;
        };
    };
};
