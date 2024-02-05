// Verfijnde generieke utility types die beter omgaan met de TypeScript vereisten
export type NonNullableEdges<T> =
	NonNullable<T> extends { edges: infer E } ? (E extends Array<infer U> ? U : never) : never;
export type NonNullableNodes<T> =
	NonNullable<T> extends { nodes: infer N } ? (N extends Array<infer V> ? V : never) : never;

export type ValuesOf<T> = T[keyof T];
export type Maybe<T> = T | null;
export type Nullable<T> = T | undefined;
export type NullableArray<T> = T[] | undefined;
export type NullableObject<T> = T | undefined;
export type NullableString = string | undefined;
export type NullableNumber = number | undefined;
export type NullableBoolean = boolean | undefined;
export type NullableDate = Date | undefined;
