type TemplateType<T> = T & { args: Record<string, unknown> };

export const templatify = (template: unknown) => {
  return template as TemplateType<typeof template>;
};

export function l<T>(arg: unknown): T {
  return arg as T;
}
