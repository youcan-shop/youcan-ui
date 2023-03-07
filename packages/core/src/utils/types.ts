export type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

export type IntegerRange<S extends number, E extends number> = Exclude<Enumerate<E>, Enumerate<S>>;
