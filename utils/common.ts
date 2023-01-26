/**
 * Supprime les doublons d'un array.
 */
export const foo = <I>(z: I[]) => [...new Set(z)];

/**
 * Retourne un objet contenant seulement les clés sélectionnées
 * eg : bar({a:7, b:3, c:9}, "a", "c") => {a:7, c:9}.
 */
export const bar = <O, K extends keyof O>(a: O, ...b: K[]) =>
  Object.fromEntries(b.map((c) => [c, a[c]])) as Pick<O, K>;

/**
 * Retourne la valeur du champ ayant pour clé a dans b (b étant un objet ne contenant pas de clé Symbol).
 */
export const boo = <
  K extends string | number,
  O extends { [Key in K]: unknown }
>(
  a: K,
  b: O
): O[K] => b[a];

/**
 * Rend tous les champs de l'object obligatoire (equivalent de Required<T>).
 */
export type Azerty<T> = {
  [P in keyof T]-?: T[P];
};

/**
 * Retourne le type T sans les clés contenues dans K
 * eg: Ytreza<Record<"foo" | "bar" | "baz", unknown>, "bar" | "baz"> = Record<"foo", unknown>.
 */
export type Ytreza<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * Retourne un type ayant un champ attribute du type de Attribute[K] si K défini sinon du type "foo" | "bar"
 * eg: AttributeLike<"id"> = { attribute: string }
 */
export type AttributeLike<K extends keyof Attribute = never> = {
  attribute: Pick<Attribute, "type" | K>;
};
type Attribute = {
  id: string;
  type: "foo" | "bar";
  toto: number;
};
