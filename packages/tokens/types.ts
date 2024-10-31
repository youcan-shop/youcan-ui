export interface DesignToken {
  $value: any
  $type: string
  $extension?: {
    easing?: string
  }
}

export interface TokenObject {
  [key: string]: TokenObject | DesignToken
}

export interface AnimationToken extends DesignToken {
  $value: string
  $type: 'duration'
  $extension: {
    easing: string
  }
}

export interface ColorToken extends DesignToken {
  $value: string
  $type: 'color'
}

export interface RadiusToken extends DesignToken {
  $value: number
  $type: 'number'
}

export interface ShadowValue {
  color: string
  $type: 'dropShadow'
  x: number
  y: number
  blur: number
  spread: number
}

export interface ShadowToken extends DesignToken {
  $value: ShadowValue | ShadowValue[]
  $type: 'boxShadow'
}

export interface SpacingToken extends DesignToken {
  $value: number
  $type: 'number'
}

export interface TypographyToken extends DesignToken {
  $value: string | number
  $type: 'fontFamilies' | 'lineHeights' | 'fontWeights' | 'fontSize'
}

// interface SemanticColorToken extends DesignToken {
//   $value: string
//   $type: 'color'
// }

// interface SemanticColors {
//   [key: string]: {
//     [shade: string]: SemanticColorToken
//   }
// }

export interface PresetYouCanOptions {
  prefix?: string
  colorPrefix?: string
}
