export type Class<T> = new (...args: any[]) => T;

export type PartialWithId<T> = Partial<T> & { id: string };
