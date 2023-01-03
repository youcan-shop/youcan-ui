type TemplateType<T> = T & { args: Record<string, unknown> };

export const templatify = (template: unknown) => {
  return template as TemplateType<typeof template>;
};

export type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

export type IntegerRange<S extends number, E extends number> = Exclude<Enumerate<E>, Enumerate<S>>;

export function l<T>(arg: unknown): T {
  return arg as T;
}
