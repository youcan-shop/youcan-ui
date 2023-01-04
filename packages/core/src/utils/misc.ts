export function uid(prefix: string): string {
  return (
    prefix
    + Date.now().toString(36).substring(4)
    + Math.random().toString(36).substring(2)
  );
}

export function partition<T>(
  predicate: (acc: T, idx?: number, arr?: T[]) => boolean,
) {
  return function (subject: T[]): [T[], T[]] {
    return subject.reduce(
      (acc, val, idx, arr) => {
        acc[predicate(val, idx, arr) ? 0 : 1].push(val);
        return acc;
      },
      [[], []] as [T[], T[]],
    );
  };
}

export function toDataUrl(file: File | Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result as string);
    };

    reader.readAsDataURL(file);
  });
}
