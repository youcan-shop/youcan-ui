export function launder<T>(arg: unknown) { return arg as T; }

type TemplateType<T> = T & { args: Record<string, unknown> };

export const templatify = (template: unknown) => {
  return template as TemplateType<typeof template>;
};
