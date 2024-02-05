// Verfijnde generieke utility types die beter omgaan met de TypeScript vereisten
export type NonNullableEdges<T> =
	NonNullable<T> extends { edges: infer E } ? (E extends Array<infer U> ? U : never) : never;
export type NonNullableNodes<T> =
	NonNullable<T> extends { nodes: infer N } ? (N extends Array<infer V> ? V : never) : never;