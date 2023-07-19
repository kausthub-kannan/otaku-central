
/**
 * Client
**/

import * as runtime from './runtime/data-proxy';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type bucketPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "bucket"
  objects: {
    users: usersPayload<ExtArgs>
    wiki: wikiPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    user_id: string
    wiki_id: string | null
    completed: boolean | null
    ongoing: boolean | null
    dropped: boolean | null
  }, ExtArgs["result"]["bucket"]>
  composites: {}
}

/**
 * Model bucket
 * 
 */
export type bucket = runtime.Types.DefaultSelection<bucketPayload>
export type chroniclePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "chronicle"
  objects: {
    users: usersPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    chronicle_id: string
    texts: string | null
    likes: number | null
    writer_id: string | null
  }, ExtArgs["result"]["chronicle"]>
  composites: {}
}

/**
 * Model chronicle
 * 
 */
export type chronicle = runtime.Types.DefaultSelection<chroniclePayload>
export type merchPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "merch"
  objects: {
    users: usersPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    merch_id: string
    req_nani: number | null
    rating: number | null
    description: string | null
    merch: string | null
    seller_id: string | null
    image: string | null
    avalibility_status: boolean | null
  }, ExtArgs["result"]["merch"]>
  composites: {}
}

/**
 * Model merch
 * 
 */
export type merch = runtime.Types.DefaultSelection<merchPayload>
export type nexusPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "nexus"
  objects: {
    users: usersPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    nexus_id: string
    user_id: string | null
    reply_to: string | null
    comment: string | null
    upvotes: number | null
    chronicle_id: string | null
  }, ExtArgs["result"]["nexus"]>
  composites: {}
}

/**
 * Model nexus
 * 
 */
export type nexus = runtime.Types.DefaultSelection<nexusPayload>
export type quizzesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "quizzes"
  objects: {
    wiki: wikiPayload<ExtArgs> | null
    users: usersPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    quiz_id: string
    mod_id: string | null
    difficulty_lvl: number | null
    created_date: Date | null
    anime_name: string | null
  }, ExtArgs["result"]["quizzes"]>
  composites: {}
}

/**
 * Model quizzes
 * 
 */
export type quizzes = runtime.Types.DefaultSelection<quizzesPayload>
export type seasonPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "season"
  objects: {
    wiki: wikiPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    season_number: number
    wiki_id: string | null
    summary: string | null
    poster: string | null
    episode_list: number | null
  }, ExtArgs["result"]["season"]>
  composites: {}
}

/**
 * Model season
 * 
 */
export type season = runtime.Types.DefaultSelection<seasonPayload>
export type usersPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "users"
  objects: {
    bucket: bucketPayload<ExtArgs> | null
    chronicle: chroniclePayload<ExtArgs>[]
    merch: merchPayload<ExtArgs>[]
    nexus: nexusPayload<ExtArgs>[]
    quizzes: quizzesPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    email_id: string
    guild: string
    user_id: string
    username: string | null
    joined_date: Date | null
    nani: number | null
    avatar: number | null
  }, ExtArgs["result"]["users"]>
  composites: {}
}

/**
 * Model users
 * 
 */
export type users = runtime.Types.DefaultSelection<usersPayload>
export type wikiPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "wiki"
  objects: {
    bucket: bucketPayload<ExtArgs>[]
    quizzes: quizzesPayload<ExtArgs>[]
    season: seasonPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    wiki_id: string
    anime_name: string | null
    poster: string | null
    summary: string | null
    status: boolean | null
    rating: number | null
  }, ExtArgs["result"]["wiki"]>
  composites: {}
}

/**
 * Model wiki
 * 
 */
export type wiki = runtime.Types.DefaultSelection<wikiPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Buckets
 * const buckets = await prisma.bucket.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Buckets
   * const buckets = await prisma.bucket.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.bucket`: Exposes CRUD operations for the **bucket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buckets
    * const buckets = await prisma.bucket.findMany()
    * ```
    */
  get bucket(): Prisma.bucketDelegate<ExtArgs>;

  /**
   * `prisma.chronicle`: Exposes CRUD operations for the **chronicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chronicles
    * const chronicles = await prisma.chronicle.findMany()
    * ```
    */
  get chronicle(): Prisma.chronicleDelegate<ExtArgs>;

  /**
   * `prisma.merch`: Exposes CRUD operations for the **merch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Merches
    * const merches = await prisma.merch.findMany()
    * ```
    */
  get merch(): Prisma.merchDelegate<ExtArgs>;

  /**
   * `prisma.nexus`: Exposes CRUD operations for the **nexus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nexuses
    * const nexuses = await prisma.nexus.findMany()
    * ```
    */
  get nexus(): Prisma.nexusDelegate<ExtArgs>;

  /**
   * `prisma.quizzes`: Exposes CRUD operations for the **quizzes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quizzes.findMany()
    * ```
    */
  get quizzes(): Prisma.quizzesDelegate<ExtArgs>;

  /**
   * `prisma.season`: Exposes CRUD operations for the **season** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seasons
    * const seasons = await prisma.season.findMany()
    * ```
    */
  get season(): Prisma.seasonDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.wiki`: Exposes CRUD operations for the **wiki** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wikis
    * const wikis = await prisma.wiki.findMany()
    * ```
    */
  get wiki(): Prisma.wikiDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 5.0.0
   * Query Engine version: 6b0aef69b7cdfc787f822ecd7cdc76d5f1991584
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    bucket: 'bucket',
    chronicle: 'chronicle',
    merch: 'merch',
    nexus: 'nexus',
    quizzes: 'quizzes',
    season: 'season',
    users: 'users',
    wiki: 'wiki'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'bucket' | 'chronicle' | 'merch' | 'nexus' | 'quizzes' | 'season' | 'users' | 'wiki'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      bucket: {
        payload: bucketPayload<ExtArgs>
        fields: Prisma.bucketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bucketFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<bucketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bucketFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<bucketPayload>
          }
          findFirst: {
            args: Prisma.bucketFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<bucketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bucketFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<bucketPayload>
          }
          findMany: {
            args: Prisma.bucketFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<bucketPayload>[]
          }
          create: {
            args: Prisma.bucketCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<bucketPayload>
          }
          createMany: {
            args: Prisma.bucketCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.bucketDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<bucketPayload>
          }
          update: {
            args: Prisma.bucketUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<bucketPayload>
          }
          deleteMany: {
            args: Prisma.bucketDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.bucketUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.bucketUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<bucketPayload>
          }
          aggregate: {
            args: Prisma.BucketAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBucket>
          }
          groupBy: {
            args: Prisma.bucketGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BucketGroupByOutputType>[]
          }
          count: {
            args: Prisma.bucketCountArgs<ExtArgs>,
            result: $Utils.Optional<BucketCountAggregateOutputType> | number
          }
        }
      }
      chronicle: {
        payload: chroniclePayload<ExtArgs>
        fields: Prisma.chronicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chronicleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<chroniclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chronicleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<chroniclePayload>
          }
          findFirst: {
            args: Prisma.chronicleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<chroniclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chronicleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<chroniclePayload>
          }
          findMany: {
            args: Prisma.chronicleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<chroniclePayload>[]
          }
          create: {
            args: Prisma.chronicleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<chroniclePayload>
          }
          createMany: {
            args: Prisma.chronicleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.chronicleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<chroniclePayload>
          }
          update: {
            args: Prisma.chronicleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<chroniclePayload>
          }
          deleteMany: {
            args: Prisma.chronicleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.chronicleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.chronicleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<chroniclePayload>
          }
          aggregate: {
            args: Prisma.ChronicleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChronicle>
          }
          groupBy: {
            args: Prisma.chronicleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChronicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.chronicleCountArgs<ExtArgs>,
            result: $Utils.Optional<ChronicleCountAggregateOutputType> | number
          }
        }
      }
      merch: {
        payload: merchPayload<ExtArgs>
        fields: Prisma.merchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.merchFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<merchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.merchFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<merchPayload>
          }
          findFirst: {
            args: Prisma.merchFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<merchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.merchFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<merchPayload>
          }
          findMany: {
            args: Prisma.merchFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<merchPayload>[]
          }
          create: {
            args: Prisma.merchCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<merchPayload>
          }
          createMany: {
            args: Prisma.merchCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.merchDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<merchPayload>
          }
          update: {
            args: Prisma.merchUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<merchPayload>
          }
          deleteMany: {
            args: Prisma.merchDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.merchUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.merchUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<merchPayload>
          }
          aggregate: {
            args: Prisma.MerchAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMerch>
          }
          groupBy: {
            args: Prisma.merchGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MerchGroupByOutputType>[]
          }
          count: {
            args: Prisma.merchCountArgs<ExtArgs>,
            result: $Utils.Optional<MerchCountAggregateOutputType> | number
          }
        }
      }
      nexus: {
        payload: nexusPayload<ExtArgs>
        fields: Prisma.nexusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.nexusFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<nexusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.nexusFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<nexusPayload>
          }
          findFirst: {
            args: Prisma.nexusFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<nexusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.nexusFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<nexusPayload>
          }
          findMany: {
            args: Prisma.nexusFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<nexusPayload>[]
          }
          create: {
            args: Prisma.nexusCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<nexusPayload>
          }
          createMany: {
            args: Prisma.nexusCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.nexusDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<nexusPayload>
          }
          update: {
            args: Prisma.nexusUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<nexusPayload>
          }
          deleteMany: {
            args: Prisma.nexusDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.nexusUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.nexusUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<nexusPayload>
          }
          aggregate: {
            args: Prisma.NexusAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNexus>
          }
          groupBy: {
            args: Prisma.nexusGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NexusGroupByOutputType>[]
          }
          count: {
            args: Prisma.nexusCountArgs<ExtArgs>,
            result: $Utils.Optional<NexusCountAggregateOutputType> | number
          }
        }
      }
      quizzes: {
        payload: quizzesPayload<ExtArgs>
        fields: Prisma.quizzesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.quizzesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<quizzesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.quizzesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<quizzesPayload>
          }
          findFirst: {
            args: Prisma.quizzesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<quizzesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.quizzesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<quizzesPayload>
          }
          findMany: {
            args: Prisma.quizzesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<quizzesPayload>[]
          }
          create: {
            args: Prisma.quizzesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<quizzesPayload>
          }
          createMany: {
            args: Prisma.quizzesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.quizzesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<quizzesPayload>
          }
          update: {
            args: Prisma.quizzesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<quizzesPayload>
          }
          deleteMany: {
            args: Prisma.quizzesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.quizzesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.quizzesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<quizzesPayload>
          }
          aggregate: {
            args: Prisma.QuizzesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQuizzes>
          }
          groupBy: {
            args: Prisma.quizzesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<QuizzesGroupByOutputType>[]
          }
          count: {
            args: Prisma.quizzesCountArgs<ExtArgs>,
            result: $Utils.Optional<QuizzesCountAggregateOutputType> | number
          }
        }
      }
      season: {
        payload: seasonPayload<ExtArgs>
        fields: Prisma.seasonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.seasonFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<seasonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.seasonFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<seasonPayload>
          }
          findFirst: {
            args: Prisma.seasonFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<seasonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.seasonFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<seasonPayload>
          }
          findMany: {
            args: Prisma.seasonFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<seasonPayload>[]
          }
          create: {
            args: Prisma.seasonCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<seasonPayload>
          }
          createMany: {
            args: Prisma.seasonCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.seasonDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<seasonPayload>
          }
          update: {
            args: Prisma.seasonUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<seasonPayload>
          }
          deleteMany: {
            args: Prisma.seasonDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.seasonUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.seasonUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<seasonPayload>
          }
          aggregate: {
            args: Prisma.SeasonAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSeason>
          }
          groupBy: {
            args: Prisma.seasonGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SeasonGroupByOutputType>[]
          }
          count: {
            args: Prisma.seasonCountArgs<ExtArgs>,
            result: $Utils.Optional<SeasonCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      wiki: {
        payload: wikiPayload<ExtArgs>
        fields: Prisma.wikiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.wikiFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<wikiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.wikiFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<wikiPayload>
          }
          findFirst: {
            args: Prisma.wikiFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<wikiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.wikiFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<wikiPayload>
          }
          findMany: {
            args: Prisma.wikiFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<wikiPayload>[]
          }
          create: {
            args: Prisma.wikiCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<wikiPayload>
          }
          createMany: {
            args: Prisma.wikiCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.wikiDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<wikiPayload>
          }
          update: {
            args: Prisma.wikiUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<wikiPayload>
          }
          deleteMany: {
            args: Prisma.wikiDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.wikiUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.wikiUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<wikiPayload>
          }
          aggregate: {
            args: Prisma.WikiAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWiki>
          }
          groupBy: {
            args: Prisma.wikiGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WikiGroupByOutputType>[]
          }
          count: {
            args: Prisma.wikiCountArgs<ExtArgs>,
            result: $Utils.Optional<WikiCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */


  export type UsersCountOutputType = {
    chronicle: number
    merch: number
    nexus: number
    quizzes: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    chronicle?: boolean | UsersCountOutputTypeCountChronicleArgs
    merch?: boolean | UsersCountOutputTypeCountMerchArgs
    nexus?: boolean | UsersCountOutputTypeCountNexusArgs
    quizzes?: boolean | UsersCountOutputTypeCountQuizzesArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountChronicleArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: chronicleWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMerchArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: merchWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNexusArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: nexusWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: quizzesWhereInput
  }



  /**
   * Count Type WikiCountOutputType
   */


  export type WikiCountOutputType = {
    bucket: number
    quizzes: number
    season: number
  }

  export type WikiCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    bucket?: boolean | WikiCountOutputTypeCountBucketArgs
    quizzes?: boolean | WikiCountOutputTypeCountQuizzesArgs
    season?: boolean | WikiCountOutputTypeCountSeasonArgs
  }

  // Custom InputTypes

  /**
   * WikiCountOutputType without action
   */
  export type WikiCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WikiCountOutputType
     */
    select?: WikiCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WikiCountOutputType without action
   */
  export type WikiCountOutputTypeCountBucketArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: bucketWhereInput
  }


  /**
   * WikiCountOutputType without action
   */
  export type WikiCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: quizzesWhereInput
  }


  /**
   * WikiCountOutputType without action
   */
  export type WikiCountOutputTypeCountSeasonArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: seasonWhereInput
  }



  /**
   * Models
   */

  /**
   * Model bucket
   */


  export type AggregateBucket = {
    _count: BucketCountAggregateOutputType | null
    _min: BucketMinAggregateOutputType | null
    _max: BucketMaxAggregateOutputType | null
  }

  export type BucketMinAggregateOutputType = {
    user_id: string | null
    wiki_id: string | null
    completed: boolean | null
    ongoing: boolean | null
    dropped: boolean | null
  }

  export type BucketMaxAggregateOutputType = {
    user_id: string | null
    wiki_id: string | null
    completed: boolean | null
    ongoing: boolean | null
    dropped: boolean | null
  }

  export type BucketCountAggregateOutputType = {
    user_id: number
    wiki_id: number
    completed: number
    ongoing: number
    dropped: number
    _all: number
  }


  export type BucketMinAggregateInputType = {
    user_id?: true
    wiki_id?: true
    completed?: true
    ongoing?: true
    dropped?: true
  }

  export type BucketMaxAggregateInputType = {
    user_id?: true
    wiki_id?: true
    completed?: true
    ongoing?: true
    dropped?: true
  }

  export type BucketCountAggregateInputType = {
    user_id?: true
    wiki_id?: true
    completed?: true
    ongoing?: true
    dropped?: true
    _all?: true
  }

  export type BucketAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which bucket to aggregate.
     */
    where?: bucketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buckets to fetch.
     */
    orderBy?: bucketOrderByWithRelationInput | bucketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bucketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buckets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buckets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned buckets
    **/
    _count?: true | BucketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BucketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BucketMaxAggregateInputType
  }

  export type GetBucketAggregateType<T extends BucketAggregateArgs> = {
        [P in keyof T & keyof AggregateBucket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBucket[P]>
      : GetScalarType<T[P], AggregateBucket[P]>
  }




  export type bucketGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: bucketWhereInput
    orderBy?: bucketOrderByWithAggregationInput | bucketOrderByWithAggregationInput[]
    by: BucketScalarFieldEnum[] | BucketScalarFieldEnum
    having?: bucketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BucketCountAggregateInputType | true
    _min?: BucketMinAggregateInputType
    _max?: BucketMaxAggregateInputType
  }


  export type BucketGroupByOutputType = {
    user_id: string
    wiki_id: string | null
    completed: boolean | null
    ongoing: boolean | null
    dropped: boolean | null
    _count: BucketCountAggregateOutputType | null
    _min: BucketMinAggregateOutputType | null
    _max: BucketMaxAggregateOutputType | null
  }

  type GetBucketGroupByPayload<T extends bucketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BucketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BucketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BucketGroupByOutputType[P]>
            : GetScalarType<T[P], BucketGroupByOutputType[P]>
        }
      >
    >


  export type bucketSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    wiki_id?: boolean
    completed?: boolean
    ongoing?: boolean
    dropped?: boolean
    users?: boolean | usersArgs<ExtArgs>
    wiki?: boolean | bucket$wikiArgs<ExtArgs>
  }, ExtArgs["result"]["bucket"]>

  export type bucketSelectScalar = {
    user_id?: boolean
    wiki_id?: boolean
    completed?: boolean
    ongoing?: boolean
    dropped?: boolean
  }

  export type bucketInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    users?: boolean | usersArgs<ExtArgs>
    wiki?: boolean | bucket$wikiArgs<ExtArgs>
  }


  type bucketGetPayload<S extends boolean | null | undefined | bucketArgs> = $Types.GetResult<bucketPayload, S>

  type bucketCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<bucketFindManyArgs, 'select' | 'include'> & {
      select?: BucketCountAggregateInputType | true
    }

  export interface bucketDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bucket'], meta: { name: 'bucket' } }
    /**
     * Find zero or one Bucket that matches the filter.
     * @param {bucketFindUniqueArgs} args - Arguments to find a Bucket
     * @example
     * // Get one Bucket
     * const bucket = await prisma.bucket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends bucketFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, bucketFindUniqueArgs<ExtArgs>>
    ): Prisma__bucketClient<$Types.GetResult<bucketPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bucket that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {bucketFindUniqueOrThrowArgs} args - Arguments to find a Bucket
     * @example
     * // Get one Bucket
     * const bucket = await prisma.bucket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends bucketFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bucketFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__bucketClient<$Types.GetResult<bucketPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bucket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bucketFindFirstArgs} args - Arguments to find a Bucket
     * @example
     * // Get one Bucket
     * const bucket = await prisma.bucket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends bucketFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, bucketFindFirstArgs<ExtArgs>>
    ): Prisma__bucketClient<$Types.GetResult<bucketPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bucket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bucketFindFirstOrThrowArgs} args - Arguments to find a Bucket
     * @example
     * // Get one Bucket
     * const bucket = await prisma.bucket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends bucketFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bucketFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__bucketClient<$Types.GetResult<bucketPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Buckets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bucketFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buckets
     * const buckets = await prisma.bucket.findMany()
     * 
     * // Get first 10 Buckets
     * const buckets = await prisma.bucket.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const bucketWithUser_idOnly = await prisma.bucket.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends bucketFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bucketFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<bucketPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bucket.
     * @param {bucketCreateArgs} args - Arguments to create a Bucket.
     * @example
     * // Create one Bucket
     * const Bucket = await prisma.bucket.create({
     *   data: {
     *     // ... data to create a Bucket
     *   }
     * })
     * 
    **/
    create<T extends bucketCreateArgs<ExtArgs>>(
      args: SelectSubset<T, bucketCreateArgs<ExtArgs>>
    ): Prisma__bucketClient<$Types.GetResult<bucketPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Buckets.
     *     @param {bucketCreateManyArgs} args - Arguments to create many Buckets.
     *     @example
     *     // Create many Buckets
     *     const bucket = await prisma.bucket.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends bucketCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bucketCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bucket.
     * @param {bucketDeleteArgs} args - Arguments to delete one Bucket.
     * @example
     * // Delete one Bucket
     * const Bucket = await prisma.bucket.delete({
     *   where: {
     *     // ... filter to delete one Bucket
     *   }
     * })
     * 
    **/
    delete<T extends bucketDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, bucketDeleteArgs<ExtArgs>>
    ): Prisma__bucketClient<$Types.GetResult<bucketPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bucket.
     * @param {bucketUpdateArgs} args - Arguments to update one Bucket.
     * @example
     * // Update one Bucket
     * const bucket = await prisma.bucket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends bucketUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, bucketUpdateArgs<ExtArgs>>
    ): Prisma__bucketClient<$Types.GetResult<bucketPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Buckets.
     * @param {bucketDeleteManyArgs} args - Arguments to filter Buckets to delete.
     * @example
     * // Delete a few Buckets
     * const { count } = await prisma.bucket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends bucketDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bucketDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buckets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bucketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buckets
     * const bucket = await prisma.bucket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends bucketUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, bucketUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bucket.
     * @param {bucketUpsertArgs} args - Arguments to update or create a Bucket.
     * @example
     * // Update or create a Bucket
     * const bucket = await prisma.bucket.upsert({
     *   create: {
     *     // ... data to create a Bucket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bucket we want to update
     *   }
     * })
    **/
    upsert<T extends bucketUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, bucketUpsertArgs<ExtArgs>>
    ): Prisma__bucketClient<$Types.GetResult<bucketPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Buckets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bucketCountArgs} args - Arguments to filter Buckets to count.
     * @example
     * // Count the number of Buckets
     * const count = await prisma.bucket.count({
     *   where: {
     *     // ... the filter for the Buckets we want to count
     *   }
     * })
    **/
    count<T extends bucketCountArgs>(
      args?: Subset<T, bucketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BucketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bucket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BucketAggregateArgs>(args: Subset<T, BucketAggregateArgs>): Prisma.PrismaPromise<GetBucketAggregateType<T>>

    /**
     * Group by Bucket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bucketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bucketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bucketGroupByArgs['orderBy'] }
        : { orderBy?: bucketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bucketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBucketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bucket model
   */
  readonly fields: bucketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bucket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__bucketClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    users<T extends usersArgs<ExtArgs> = {}>(args?: Subset<T, usersArgs<ExtArgs>>): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    wiki<T extends bucket$wikiArgs<ExtArgs> = {}>(args?: Subset<T, bucket$wikiArgs<ExtArgs>>): Prisma__wikiClient<$Types.GetResult<wikiPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the bucket model
   */ 
  interface bucketFieldRefs {
    readonly user_id: FieldRef<"bucket", 'String'>
    readonly wiki_id: FieldRef<"bucket", 'String'>
    readonly completed: FieldRef<"bucket", 'Boolean'>
    readonly ongoing: FieldRef<"bucket", 'Boolean'>
    readonly dropped: FieldRef<"bucket", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * bucket findUnique
   */
  export type bucketFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bucket
     */
    select?: bucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bucketInclude<ExtArgs> | null
    /**
     * Filter, which bucket to fetch.
     */
    where: bucketWhereUniqueInput
  }


  /**
   * bucket findUniqueOrThrow
   */
  export type bucketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bucket
     */
    select?: bucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bucketInclude<ExtArgs> | null
    /**
     * Filter, which bucket to fetch.
     */
    where: bucketWhereUniqueInput
  }


  /**
   * bucket findFirst
   */
  export type bucketFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bucket
     */
    select?: bucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bucketInclude<ExtArgs> | null
    /**
     * Filter, which bucket to fetch.
     */
    where?: bucketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buckets to fetch.
     */
    orderBy?: bucketOrderByWithRelationInput | bucketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for buckets.
     */
    cursor?: bucketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buckets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buckets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of buckets.
     */
    distinct?: BucketScalarFieldEnum | BucketScalarFieldEnum[]
  }


  /**
   * bucket findFirstOrThrow
   */
  export type bucketFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bucket
     */
    select?: bucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bucketInclude<ExtArgs> | null
    /**
     * Filter, which bucket to fetch.
     */
    where?: bucketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buckets to fetch.
     */
    orderBy?: bucketOrderByWithRelationInput | bucketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for buckets.
     */
    cursor?: bucketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buckets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buckets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of buckets.
     */
    distinct?: BucketScalarFieldEnum | BucketScalarFieldEnum[]
  }


  /**
   * bucket findMany
   */
  export type bucketFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bucket
     */
    select?: bucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bucketInclude<ExtArgs> | null
    /**
     * Filter, which buckets to fetch.
     */
    where?: bucketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buckets to fetch.
     */
    orderBy?: bucketOrderByWithRelationInput | bucketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing buckets.
     */
    cursor?: bucketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buckets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buckets.
     */
    skip?: number
    distinct?: BucketScalarFieldEnum | BucketScalarFieldEnum[]
  }


  /**
   * bucket create
   */
  export type bucketCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bucket
     */
    select?: bucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bucketInclude<ExtArgs> | null
    /**
     * The data needed to create a bucket.
     */
    data: XOR<bucketCreateInput, bucketUncheckedCreateInput>
  }


  /**
   * bucket createMany
   */
  export type bucketCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many buckets.
     */
    data: bucketCreateManyInput | bucketCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * bucket update
   */
  export type bucketUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bucket
     */
    select?: bucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bucketInclude<ExtArgs> | null
    /**
     * The data needed to update a bucket.
     */
    data: XOR<bucketUpdateInput, bucketUncheckedUpdateInput>
    /**
     * Choose, which bucket to update.
     */
    where: bucketWhereUniqueInput
  }


  /**
   * bucket updateMany
   */
  export type bucketUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update buckets.
     */
    data: XOR<bucketUpdateManyMutationInput, bucketUncheckedUpdateManyInput>
    /**
     * Filter which buckets to update
     */
    where?: bucketWhereInput
  }


  /**
   * bucket upsert
   */
  export type bucketUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bucket
     */
    select?: bucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bucketInclude<ExtArgs> | null
    /**
     * The filter to search for the bucket to update in case it exists.
     */
    where: bucketWhereUniqueInput
    /**
     * In case the bucket found by the `where` argument doesn't exist, create a new bucket with this data.
     */
    create: XOR<bucketCreateInput, bucketUncheckedCreateInput>
    /**
     * In case the bucket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bucketUpdateInput, bucketUncheckedUpdateInput>
  }


  /**
   * bucket delete
   */
  export type bucketDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bucket
     */
    select?: bucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bucketInclude<ExtArgs> | null
    /**
     * Filter which bucket to delete.
     */
    where: bucketWhereUniqueInput
  }


  /**
   * bucket deleteMany
   */
  export type bucketDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which buckets to delete
     */
    where?: bucketWhereInput
  }


  /**
   * bucket.wiki
   */
  export type bucket$wikiArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wiki
     */
    select?: wikiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wikiInclude<ExtArgs> | null
    where?: wikiWhereInput
  }


  /**
   * bucket without action
   */
  export type bucketArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bucket
     */
    select?: bucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bucketInclude<ExtArgs> | null
  }



  /**
   * Model chronicle
   */


  export type AggregateChronicle = {
    _count: ChronicleCountAggregateOutputType | null
    _avg: ChronicleAvgAggregateOutputType | null
    _sum: ChronicleSumAggregateOutputType | null
    _min: ChronicleMinAggregateOutputType | null
    _max: ChronicleMaxAggregateOutputType | null
  }

  export type ChronicleAvgAggregateOutputType = {
    likes: number | null
  }

  export type ChronicleSumAggregateOutputType = {
    likes: number | null
  }

  export type ChronicleMinAggregateOutputType = {
    chronicle_id: string | null
    texts: string | null
    likes: number | null
    writer_id: string | null
  }

  export type ChronicleMaxAggregateOutputType = {
    chronicle_id: string | null
    texts: string | null
    likes: number | null
    writer_id: string | null
  }

  export type ChronicleCountAggregateOutputType = {
    chronicle_id: number
    texts: number
    likes: number
    writer_id: number
    _all: number
  }


  export type ChronicleAvgAggregateInputType = {
    likes?: true
  }

  export type ChronicleSumAggregateInputType = {
    likes?: true
  }

  export type ChronicleMinAggregateInputType = {
    chronicle_id?: true
    texts?: true
    likes?: true
    writer_id?: true
  }

  export type ChronicleMaxAggregateInputType = {
    chronicle_id?: true
    texts?: true
    likes?: true
    writer_id?: true
  }

  export type ChronicleCountAggregateInputType = {
    chronicle_id?: true
    texts?: true
    likes?: true
    writer_id?: true
    _all?: true
  }

  export type ChronicleAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which chronicle to aggregate.
     */
    where?: chronicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chronicles to fetch.
     */
    orderBy?: chronicleOrderByWithRelationInput | chronicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chronicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chronicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chronicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chronicles
    **/
    _count?: true | ChronicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChronicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChronicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChronicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChronicleMaxAggregateInputType
  }

  export type GetChronicleAggregateType<T extends ChronicleAggregateArgs> = {
        [P in keyof T & keyof AggregateChronicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChronicle[P]>
      : GetScalarType<T[P], AggregateChronicle[P]>
  }




  export type chronicleGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: chronicleWhereInput
    orderBy?: chronicleOrderByWithAggregationInput | chronicleOrderByWithAggregationInput[]
    by: ChronicleScalarFieldEnum[] | ChronicleScalarFieldEnum
    having?: chronicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChronicleCountAggregateInputType | true
    _avg?: ChronicleAvgAggregateInputType
    _sum?: ChronicleSumAggregateInputType
    _min?: ChronicleMinAggregateInputType
    _max?: ChronicleMaxAggregateInputType
  }


  export type ChronicleGroupByOutputType = {
    chronicle_id: string
    texts: string | null
    likes: number | null
    writer_id: string | null
    _count: ChronicleCountAggregateOutputType | null
    _avg: ChronicleAvgAggregateOutputType | null
    _sum: ChronicleSumAggregateOutputType | null
    _min: ChronicleMinAggregateOutputType | null
    _max: ChronicleMaxAggregateOutputType | null
  }

  type GetChronicleGroupByPayload<T extends chronicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChronicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChronicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChronicleGroupByOutputType[P]>
            : GetScalarType<T[P], ChronicleGroupByOutputType[P]>
        }
      >
    >


  export type chronicleSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chronicle_id?: boolean
    texts?: boolean
    likes?: boolean
    writer_id?: boolean
    users?: boolean | chronicle$usersArgs<ExtArgs>
  }, ExtArgs["result"]["chronicle"]>

  export type chronicleSelectScalar = {
    chronicle_id?: boolean
    texts?: boolean
    likes?: boolean
    writer_id?: boolean
  }

  export type chronicleInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    users?: boolean | chronicle$usersArgs<ExtArgs>
  }


  type chronicleGetPayload<S extends boolean | null | undefined | chronicleArgs> = $Types.GetResult<chroniclePayload, S>

  type chronicleCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<chronicleFindManyArgs, 'select' | 'include'> & {
      select?: ChronicleCountAggregateInputType | true
    }

  export interface chronicleDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chronicle'], meta: { name: 'chronicle' } }
    /**
     * Find zero or one Chronicle that matches the filter.
     * @param {chronicleFindUniqueArgs} args - Arguments to find a Chronicle
     * @example
     * // Get one Chronicle
     * const chronicle = await prisma.chronicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends chronicleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, chronicleFindUniqueArgs<ExtArgs>>
    ): Prisma__chronicleClient<$Types.GetResult<chroniclePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Chronicle that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {chronicleFindUniqueOrThrowArgs} args - Arguments to find a Chronicle
     * @example
     * // Get one Chronicle
     * const chronicle = await prisma.chronicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends chronicleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, chronicleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__chronicleClient<$Types.GetResult<chroniclePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Chronicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chronicleFindFirstArgs} args - Arguments to find a Chronicle
     * @example
     * // Get one Chronicle
     * const chronicle = await prisma.chronicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends chronicleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, chronicleFindFirstArgs<ExtArgs>>
    ): Prisma__chronicleClient<$Types.GetResult<chroniclePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Chronicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chronicleFindFirstOrThrowArgs} args - Arguments to find a Chronicle
     * @example
     * // Get one Chronicle
     * const chronicle = await prisma.chronicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends chronicleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, chronicleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__chronicleClient<$Types.GetResult<chroniclePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Chronicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chronicleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chronicles
     * const chronicles = await prisma.chronicle.findMany()
     * 
     * // Get first 10 Chronicles
     * const chronicles = await prisma.chronicle.findMany({ take: 10 })
     * 
     * // Only select the `chronicle_id`
     * const chronicleWithChronicle_idOnly = await prisma.chronicle.findMany({ select: { chronicle_id: true } })
     * 
    **/
    findMany<T extends chronicleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, chronicleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<chroniclePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Chronicle.
     * @param {chronicleCreateArgs} args - Arguments to create a Chronicle.
     * @example
     * // Create one Chronicle
     * const Chronicle = await prisma.chronicle.create({
     *   data: {
     *     // ... data to create a Chronicle
     *   }
     * })
     * 
    **/
    create<T extends chronicleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, chronicleCreateArgs<ExtArgs>>
    ): Prisma__chronicleClient<$Types.GetResult<chroniclePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Chronicles.
     *     @param {chronicleCreateManyArgs} args - Arguments to create many Chronicles.
     *     @example
     *     // Create many Chronicles
     *     const chronicle = await prisma.chronicle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends chronicleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, chronicleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chronicle.
     * @param {chronicleDeleteArgs} args - Arguments to delete one Chronicle.
     * @example
     * // Delete one Chronicle
     * const Chronicle = await prisma.chronicle.delete({
     *   where: {
     *     // ... filter to delete one Chronicle
     *   }
     * })
     * 
    **/
    delete<T extends chronicleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, chronicleDeleteArgs<ExtArgs>>
    ): Prisma__chronicleClient<$Types.GetResult<chroniclePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Chronicle.
     * @param {chronicleUpdateArgs} args - Arguments to update one Chronicle.
     * @example
     * // Update one Chronicle
     * const chronicle = await prisma.chronicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends chronicleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, chronicleUpdateArgs<ExtArgs>>
    ): Prisma__chronicleClient<$Types.GetResult<chroniclePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Chronicles.
     * @param {chronicleDeleteManyArgs} args - Arguments to filter Chronicles to delete.
     * @example
     * // Delete a few Chronicles
     * const { count } = await prisma.chronicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends chronicleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, chronicleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chronicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chronicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chronicles
     * const chronicle = await prisma.chronicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends chronicleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, chronicleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chronicle.
     * @param {chronicleUpsertArgs} args - Arguments to update or create a Chronicle.
     * @example
     * // Update or create a Chronicle
     * const chronicle = await prisma.chronicle.upsert({
     *   create: {
     *     // ... data to create a Chronicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chronicle we want to update
     *   }
     * })
    **/
    upsert<T extends chronicleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, chronicleUpsertArgs<ExtArgs>>
    ): Prisma__chronicleClient<$Types.GetResult<chroniclePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Chronicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chronicleCountArgs} args - Arguments to filter Chronicles to count.
     * @example
     * // Count the number of Chronicles
     * const count = await prisma.chronicle.count({
     *   where: {
     *     // ... the filter for the Chronicles we want to count
     *   }
     * })
    **/
    count<T extends chronicleCountArgs>(
      args?: Subset<T, chronicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChronicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chronicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChronicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChronicleAggregateArgs>(args: Subset<T, ChronicleAggregateArgs>): Prisma.PrismaPromise<GetChronicleAggregateType<T>>

    /**
     * Group by Chronicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chronicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends chronicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chronicleGroupByArgs['orderBy'] }
        : { orderBy?: chronicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chronicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChronicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chronicle model
   */
  readonly fields: chronicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chronicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__chronicleClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    users<T extends chronicle$usersArgs<ExtArgs> = {}>(args?: Subset<T, chronicle$usersArgs<ExtArgs>>): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the chronicle model
   */ 
  interface chronicleFieldRefs {
    readonly chronicle_id: FieldRef<"chronicle", 'String'>
    readonly texts: FieldRef<"chronicle", 'String'>
    readonly likes: FieldRef<"chronicle", 'Int'>
    readonly writer_id: FieldRef<"chronicle", 'String'>
  }
    

  // Custom InputTypes

  /**
   * chronicle findUnique
   */
  export type chronicleFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chronicle
     */
    select?: chronicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chronicleInclude<ExtArgs> | null
    /**
     * Filter, which chronicle to fetch.
     */
    where: chronicleWhereUniqueInput
  }


  /**
   * chronicle findUniqueOrThrow
   */
  export type chronicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chronicle
     */
    select?: chronicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chronicleInclude<ExtArgs> | null
    /**
     * Filter, which chronicle to fetch.
     */
    where: chronicleWhereUniqueInput
  }


  /**
   * chronicle findFirst
   */
  export type chronicleFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chronicle
     */
    select?: chronicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chronicleInclude<ExtArgs> | null
    /**
     * Filter, which chronicle to fetch.
     */
    where?: chronicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chronicles to fetch.
     */
    orderBy?: chronicleOrderByWithRelationInput | chronicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chronicles.
     */
    cursor?: chronicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chronicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chronicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chronicles.
     */
    distinct?: ChronicleScalarFieldEnum | ChronicleScalarFieldEnum[]
  }


  /**
   * chronicle findFirstOrThrow
   */
  export type chronicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chronicle
     */
    select?: chronicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chronicleInclude<ExtArgs> | null
    /**
     * Filter, which chronicle to fetch.
     */
    where?: chronicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chronicles to fetch.
     */
    orderBy?: chronicleOrderByWithRelationInput | chronicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chronicles.
     */
    cursor?: chronicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chronicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chronicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chronicles.
     */
    distinct?: ChronicleScalarFieldEnum | ChronicleScalarFieldEnum[]
  }


  /**
   * chronicle findMany
   */
  export type chronicleFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chronicle
     */
    select?: chronicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chronicleInclude<ExtArgs> | null
    /**
     * Filter, which chronicles to fetch.
     */
    where?: chronicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chronicles to fetch.
     */
    orderBy?: chronicleOrderByWithRelationInput | chronicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chronicles.
     */
    cursor?: chronicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chronicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chronicles.
     */
    skip?: number
    distinct?: ChronicleScalarFieldEnum | ChronicleScalarFieldEnum[]
  }


  /**
   * chronicle create
   */
  export type chronicleCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chronicle
     */
    select?: chronicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chronicleInclude<ExtArgs> | null
    /**
     * The data needed to create a chronicle.
     */
    data: XOR<chronicleCreateInput, chronicleUncheckedCreateInput>
  }


  /**
   * chronicle createMany
   */
  export type chronicleCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chronicles.
     */
    data: chronicleCreateManyInput | chronicleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * chronicle update
   */
  export type chronicleUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chronicle
     */
    select?: chronicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chronicleInclude<ExtArgs> | null
    /**
     * The data needed to update a chronicle.
     */
    data: XOR<chronicleUpdateInput, chronicleUncheckedUpdateInput>
    /**
     * Choose, which chronicle to update.
     */
    where: chronicleWhereUniqueInput
  }


  /**
   * chronicle updateMany
   */
  export type chronicleUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chronicles.
     */
    data: XOR<chronicleUpdateManyMutationInput, chronicleUncheckedUpdateManyInput>
    /**
     * Filter which chronicles to update
     */
    where?: chronicleWhereInput
  }


  /**
   * chronicle upsert
   */
  export type chronicleUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chronicle
     */
    select?: chronicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chronicleInclude<ExtArgs> | null
    /**
     * The filter to search for the chronicle to update in case it exists.
     */
    where: chronicleWhereUniqueInput
    /**
     * In case the chronicle found by the `where` argument doesn't exist, create a new chronicle with this data.
     */
    create: XOR<chronicleCreateInput, chronicleUncheckedCreateInput>
    /**
     * In case the chronicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chronicleUpdateInput, chronicleUncheckedUpdateInput>
  }


  /**
   * chronicle delete
   */
  export type chronicleDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chronicle
     */
    select?: chronicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chronicleInclude<ExtArgs> | null
    /**
     * Filter which chronicle to delete.
     */
    where: chronicleWhereUniqueInput
  }


  /**
   * chronicle deleteMany
   */
  export type chronicleDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which chronicles to delete
     */
    where?: chronicleWhereInput
  }


  /**
   * chronicle.users
   */
  export type chronicle$usersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * chronicle without action
   */
  export type chronicleArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chronicle
     */
    select?: chronicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chronicleInclude<ExtArgs> | null
  }



  /**
   * Model merch
   */


  export type AggregateMerch = {
    _count: MerchCountAggregateOutputType | null
    _avg: MerchAvgAggregateOutputType | null
    _sum: MerchSumAggregateOutputType | null
    _min: MerchMinAggregateOutputType | null
    _max: MerchMaxAggregateOutputType | null
  }

  export type MerchAvgAggregateOutputType = {
    req_nani: number | null
    rating: number | null
  }

  export type MerchSumAggregateOutputType = {
    req_nani: number | null
    rating: number | null
  }

  export type MerchMinAggregateOutputType = {
    merch_id: string | null
    req_nani: number | null
    rating: number | null
    description: string | null
    merch: string | null
    seller_id: string | null
    image: string | null
    avalibility_status: boolean | null
  }

  export type MerchMaxAggregateOutputType = {
    merch_id: string | null
    req_nani: number | null
    rating: number | null
    description: string | null
    merch: string | null
    seller_id: string | null
    image: string | null
    avalibility_status: boolean | null
  }

  export type MerchCountAggregateOutputType = {
    merch_id: number
    req_nani: number
    rating: number
    description: number
    merch: number
    seller_id: number
    image: number
    avalibility_status: number
    _all: number
  }


  export type MerchAvgAggregateInputType = {
    req_nani?: true
    rating?: true
  }

  export type MerchSumAggregateInputType = {
    req_nani?: true
    rating?: true
  }

  export type MerchMinAggregateInputType = {
    merch_id?: true
    req_nani?: true
    rating?: true
    description?: true
    merch?: true
    seller_id?: true
    image?: true
    avalibility_status?: true
  }

  export type MerchMaxAggregateInputType = {
    merch_id?: true
    req_nani?: true
    rating?: true
    description?: true
    merch?: true
    seller_id?: true
    image?: true
    avalibility_status?: true
  }

  export type MerchCountAggregateInputType = {
    merch_id?: true
    req_nani?: true
    rating?: true
    description?: true
    merch?: true
    seller_id?: true
    image?: true
    avalibility_status?: true
    _all?: true
  }

  export type MerchAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which merch to aggregate.
     */
    where?: merchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of merches to fetch.
     */
    orderBy?: merchOrderByWithRelationInput | merchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: merchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` merches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` merches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned merches
    **/
    _count?: true | MerchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MerchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MerchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MerchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MerchMaxAggregateInputType
  }

  export type GetMerchAggregateType<T extends MerchAggregateArgs> = {
        [P in keyof T & keyof AggregateMerch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMerch[P]>
      : GetScalarType<T[P], AggregateMerch[P]>
  }




  export type merchGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: merchWhereInput
    orderBy?: merchOrderByWithAggregationInput | merchOrderByWithAggregationInput[]
    by: MerchScalarFieldEnum[] | MerchScalarFieldEnum
    having?: merchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MerchCountAggregateInputType | true
    _avg?: MerchAvgAggregateInputType
    _sum?: MerchSumAggregateInputType
    _min?: MerchMinAggregateInputType
    _max?: MerchMaxAggregateInputType
  }


  export type MerchGroupByOutputType = {
    merch_id: string
    req_nani: number | null
    rating: number | null
    description: string | null
    merch: string | null
    seller_id: string | null
    image: string | null
    avalibility_status: boolean | null
    _count: MerchCountAggregateOutputType | null
    _avg: MerchAvgAggregateOutputType | null
    _sum: MerchSumAggregateOutputType | null
    _min: MerchMinAggregateOutputType | null
    _max: MerchMaxAggregateOutputType | null
  }

  type GetMerchGroupByPayload<T extends merchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MerchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MerchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MerchGroupByOutputType[P]>
            : GetScalarType<T[P], MerchGroupByOutputType[P]>
        }
      >
    >


  export type merchSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    merch_id?: boolean
    req_nani?: boolean
    rating?: boolean
    description?: boolean
    merch?: boolean
    seller_id?: boolean
    image?: boolean
    avalibility_status?: boolean
    users?: boolean | merch$usersArgs<ExtArgs>
  }, ExtArgs["result"]["merch"]>

  export type merchSelectScalar = {
    merch_id?: boolean
    req_nani?: boolean
    rating?: boolean
    description?: boolean
    merch?: boolean
    seller_id?: boolean
    image?: boolean
    avalibility_status?: boolean
  }

  export type merchInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    users?: boolean | merch$usersArgs<ExtArgs>
  }


  type merchGetPayload<S extends boolean | null | undefined | merchArgs> = $Types.GetResult<merchPayload, S>

  type merchCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<merchFindManyArgs, 'select' | 'include'> & {
      select?: MerchCountAggregateInputType | true
    }

  export interface merchDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['merch'], meta: { name: 'merch' } }
    /**
     * Find zero or one Merch that matches the filter.
     * @param {merchFindUniqueArgs} args - Arguments to find a Merch
     * @example
     * // Get one Merch
     * const merch = await prisma.merch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends merchFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, merchFindUniqueArgs<ExtArgs>>
    ): Prisma__merchClient<$Types.GetResult<merchPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Merch that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {merchFindUniqueOrThrowArgs} args - Arguments to find a Merch
     * @example
     * // Get one Merch
     * const merch = await prisma.merch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends merchFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, merchFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__merchClient<$Types.GetResult<merchPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Merch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchFindFirstArgs} args - Arguments to find a Merch
     * @example
     * // Get one Merch
     * const merch = await prisma.merch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends merchFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, merchFindFirstArgs<ExtArgs>>
    ): Prisma__merchClient<$Types.GetResult<merchPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Merch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchFindFirstOrThrowArgs} args - Arguments to find a Merch
     * @example
     * // Get one Merch
     * const merch = await prisma.merch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends merchFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, merchFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__merchClient<$Types.GetResult<merchPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Merches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Merches
     * const merches = await prisma.merch.findMany()
     * 
     * // Get first 10 Merches
     * const merches = await prisma.merch.findMany({ take: 10 })
     * 
     * // Only select the `merch_id`
     * const merchWithMerch_idOnly = await prisma.merch.findMany({ select: { merch_id: true } })
     * 
    **/
    findMany<T extends merchFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, merchFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<merchPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Merch.
     * @param {merchCreateArgs} args - Arguments to create a Merch.
     * @example
     * // Create one Merch
     * const Merch = await prisma.merch.create({
     *   data: {
     *     // ... data to create a Merch
     *   }
     * })
     * 
    **/
    create<T extends merchCreateArgs<ExtArgs>>(
      args: SelectSubset<T, merchCreateArgs<ExtArgs>>
    ): Prisma__merchClient<$Types.GetResult<merchPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Merches.
     *     @param {merchCreateManyArgs} args - Arguments to create many Merches.
     *     @example
     *     // Create many Merches
     *     const merch = await prisma.merch.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends merchCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, merchCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Merch.
     * @param {merchDeleteArgs} args - Arguments to delete one Merch.
     * @example
     * // Delete one Merch
     * const Merch = await prisma.merch.delete({
     *   where: {
     *     // ... filter to delete one Merch
     *   }
     * })
     * 
    **/
    delete<T extends merchDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, merchDeleteArgs<ExtArgs>>
    ): Prisma__merchClient<$Types.GetResult<merchPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Merch.
     * @param {merchUpdateArgs} args - Arguments to update one Merch.
     * @example
     * // Update one Merch
     * const merch = await prisma.merch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends merchUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, merchUpdateArgs<ExtArgs>>
    ): Prisma__merchClient<$Types.GetResult<merchPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Merches.
     * @param {merchDeleteManyArgs} args - Arguments to filter Merches to delete.
     * @example
     * // Delete a few Merches
     * const { count } = await prisma.merch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends merchDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, merchDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Merches
     * const merch = await prisma.merch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends merchUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, merchUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Merch.
     * @param {merchUpsertArgs} args - Arguments to update or create a Merch.
     * @example
     * // Update or create a Merch
     * const merch = await prisma.merch.upsert({
     *   create: {
     *     // ... data to create a Merch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Merch we want to update
     *   }
     * })
    **/
    upsert<T extends merchUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, merchUpsertArgs<ExtArgs>>
    ): Prisma__merchClient<$Types.GetResult<merchPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Merches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchCountArgs} args - Arguments to filter Merches to count.
     * @example
     * // Count the number of Merches
     * const count = await prisma.merch.count({
     *   where: {
     *     // ... the filter for the Merches we want to count
     *   }
     * })
    **/
    count<T extends merchCountArgs>(
      args?: Subset<T, merchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MerchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Merch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MerchAggregateArgs>(args: Subset<T, MerchAggregateArgs>): Prisma.PrismaPromise<GetMerchAggregateType<T>>

    /**
     * Group by Merch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends merchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: merchGroupByArgs['orderBy'] }
        : { orderBy?: merchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, merchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the merch model
   */
  readonly fields: merchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for merch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__merchClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    users<T extends merch$usersArgs<ExtArgs> = {}>(args?: Subset<T, merch$usersArgs<ExtArgs>>): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the merch model
   */ 
  interface merchFieldRefs {
    readonly merch_id: FieldRef<"merch", 'String'>
    readonly req_nani: FieldRef<"merch", 'Int'>
    readonly rating: FieldRef<"merch", 'Int'>
    readonly description: FieldRef<"merch", 'String'>
    readonly merch: FieldRef<"merch", 'String'>
    readonly seller_id: FieldRef<"merch", 'String'>
    readonly image: FieldRef<"merch", 'String'>
    readonly avalibility_status: FieldRef<"merch", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * merch findUnique
   */
  export type merchFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merch
     */
    select?: merchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: merchInclude<ExtArgs> | null
    /**
     * Filter, which merch to fetch.
     */
    where: merchWhereUniqueInput
  }


  /**
   * merch findUniqueOrThrow
   */
  export type merchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merch
     */
    select?: merchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: merchInclude<ExtArgs> | null
    /**
     * Filter, which merch to fetch.
     */
    where: merchWhereUniqueInput
  }


  /**
   * merch findFirst
   */
  export type merchFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merch
     */
    select?: merchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: merchInclude<ExtArgs> | null
    /**
     * Filter, which merch to fetch.
     */
    where?: merchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of merches to fetch.
     */
    orderBy?: merchOrderByWithRelationInput | merchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for merches.
     */
    cursor?: merchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` merches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` merches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of merches.
     */
    distinct?: MerchScalarFieldEnum | MerchScalarFieldEnum[]
  }


  /**
   * merch findFirstOrThrow
   */
  export type merchFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merch
     */
    select?: merchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: merchInclude<ExtArgs> | null
    /**
     * Filter, which merch to fetch.
     */
    where?: merchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of merches to fetch.
     */
    orderBy?: merchOrderByWithRelationInput | merchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for merches.
     */
    cursor?: merchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` merches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` merches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of merches.
     */
    distinct?: MerchScalarFieldEnum | MerchScalarFieldEnum[]
  }


  /**
   * merch findMany
   */
  export type merchFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merch
     */
    select?: merchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: merchInclude<ExtArgs> | null
    /**
     * Filter, which merches to fetch.
     */
    where?: merchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of merches to fetch.
     */
    orderBy?: merchOrderByWithRelationInput | merchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing merches.
     */
    cursor?: merchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` merches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` merches.
     */
    skip?: number
    distinct?: MerchScalarFieldEnum | MerchScalarFieldEnum[]
  }


  /**
   * merch create
   */
  export type merchCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merch
     */
    select?: merchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: merchInclude<ExtArgs> | null
    /**
     * The data needed to create a merch.
     */
    data: XOR<merchCreateInput, merchUncheckedCreateInput>
  }


  /**
   * merch createMany
   */
  export type merchCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many merches.
     */
    data: merchCreateManyInput | merchCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * merch update
   */
  export type merchUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merch
     */
    select?: merchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: merchInclude<ExtArgs> | null
    /**
     * The data needed to update a merch.
     */
    data: XOR<merchUpdateInput, merchUncheckedUpdateInput>
    /**
     * Choose, which merch to update.
     */
    where: merchWhereUniqueInput
  }


  /**
   * merch updateMany
   */
  export type merchUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update merches.
     */
    data: XOR<merchUpdateManyMutationInput, merchUncheckedUpdateManyInput>
    /**
     * Filter which merches to update
     */
    where?: merchWhereInput
  }


  /**
   * merch upsert
   */
  export type merchUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merch
     */
    select?: merchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: merchInclude<ExtArgs> | null
    /**
     * The filter to search for the merch to update in case it exists.
     */
    where: merchWhereUniqueInput
    /**
     * In case the merch found by the `where` argument doesn't exist, create a new merch with this data.
     */
    create: XOR<merchCreateInput, merchUncheckedCreateInput>
    /**
     * In case the merch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<merchUpdateInput, merchUncheckedUpdateInput>
  }


  /**
   * merch delete
   */
  export type merchDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merch
     */
    select?: merchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: merchInclude<ExtArgs> | null
    /**
     * Filter which merch to delete.
     */
    where: merchWhereUniqueInput
  }


  /**
   * merch deleteMany
   */
  export type merchDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which merches to delete
     */
    where?: merchWhereInput
  }


  /**
   * merch.users
   */
  export type merch$usersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * merch without action
   */
  export type merchArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merch
     */
    select?: merchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: merchInclude<ExtArgs> | null
  }



  /**
   * Model nexus
   */


  export type AggregateNexus = {
    _count: NexusCountAggregateOutputType | null
    _avg: NexusAvgAggregateOutputType | null
    _sum: NexusSumAggregateOutputType | null
    _min: NexusMinAggregateOutputType | null
    _max: NexusMaxAggregateOutputType | null
  }

  export type NexusAvgAggregateOutputType = {
    upvotes: number | null
  }

  export type NexusSumAggregateOutputType = {
    upvotes: number | null
  }

  export type NexusMinAggregateOutputType = {
    nexus_id: string | null
    user_id: string | null
    reply_to: string | null
    comment: string | null
    upvotes: number | null
    chronicle_id: string | null
  }

  export type NexusMaxAggregateOutputType = {
    nexus_id: string | null
    user_id: string | null
    reply_to: string | null
    comment: string | null
    upvotes: number | null
    chronicle_id: string | null
  }

  export type NexusCountAggregateOutputType = {
    nexus_id: number
    user_id: number
    reply_to: number
    comment: number
    upvotes: number
    chronicle_id: number
    _all: number
  }


  export type NexusAvgAggregateInputType = {
    upvotes?: true
  }

  export type NexusSumAggregateInputType = {
    upvotes?: true
  }

  export type NexusMinAggregateInputType = {
    nexus_id?: true
    user_id?: true
    reply_to?: true
    comment?: true
    upvotes?: true
    chronicle_id?: true
  }

  export type NexusMaxAggregateInputType = {
    nexus_id?: true
    user_id?: true
    reply_to?: true
    comment?: true
    upvotes?: true
    chronicle_id?: true
  }

  export type NexusCountAggregateInputType = {
    nexus_id?: true
    user_id?: true
    reply_to?: true
    comment?: true
    upvotes?: true
    chronicle_id?: true
    _all?: true
  }

  export type NexusAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which nexus to aggregate.
     */
    where?: nexusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nexuses to fetch.
     */
    orderBy?: nexusOrderByWithRelationInput | nexusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: nexusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nexuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nexuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned nexuses
    **/
    _count?: true | NexusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NexusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NexusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NexusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NexusMaxAggregateInputType
  }

  export type GetNexusAggregateType<T extends NexusAggregateArgs> = {
        [P in keyof T & keyof AggregateNexus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNexus[P]>
      : GetScalarType<T[P], AggregateNexus[P]>
  }




  export type nexusGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: nexusWhereInput
    orderBy?: nexusOrderByWithAggregationInput | nexusOrderByWithAggregationInput[]
    by: NexusScalarFieldEnum[] | NexusScalarFieldEnum
    having?: nexusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NexusCountAggregateInputType | true
    _avg?: NexusAvgAggregateInputType
    _sum?: NexusSumAggregateInputType
    _min?: NexusMinAggregateInputType
    _max?: NexusMaxAggregateInputType
  }


  export type NexusGroupByOutputType = {
    nexus_id: string
    user_id: string | null
    reply_to: string | null
    comment: string | null
    upvotes: number | null
    chronicle_id: string | null
    _count: NexusCountAggregateOutputType | null
    _avg: NexusAvgAggregateOutputType | null
    _sum: NexusSumAggregateOutputType | null
    _min: NexusMinAggregateOutputType | null
    _max: NexusMaxAggregateOutputType | null
  }

  type GetNexusGroupByPayload<T extends nexusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NexusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NexusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NexusGroupByOutputType[P]>
            : GetScalarType<T[P], NexusGroupByOutputType[P]>
        }
      >
    >


  export type nexusSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nexus_id?: boolean
    user_id?: boolean
    reply_to?: boolean
    comment?: boolean
    upvotes?: boolean
    chronicle_id?: boolean
    users?: boolean | nexus$usersArgs<ExtArgs>
  }, ExtArgs["result"]["nexus"]>

  export type nexusSelectScalar = {
    nexus_id?: boolean
    user_id?: boolean
    reply_to?: boolean
    comment?: boolean
    upvotes?: boolean
    chronicle_id?: boolean
  }

  export type nexusInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    users?: boolean | nexus$usersArgs<ExtArgs>
  }


  type nexusGetPayload<S extends boolean | null | undefined | nexusArgs> = $Types.GetResult<nexusPayload, S>

  type nexusCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<nexusFindManyArgs, 'select' | 'include'> & {
      select?: NexusCountAggregateInputType | true
    }

  export interface nexusDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['nexus'], meta: { name: 'nexus' } }
    /**
     * Find zero or one Nexus that matches the filter.
     * @param {nexusFindUniqueArgs} args - Arguments to find a Nexus
     * @example
     * // Get one Nexus
     * const nexus = await prisma.nexus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends nexusFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, nexusFindUniqueArgs<ExtArgs>>
    ): Prisma__nexusClient<$Types.GetResult<nexusPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Nexus that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {nexusFindUniqueOrThrowArgs} args - Arguments to find a Nexus
     * @example
     * // Get one Nexus
     * const nexus = await prisma.nexus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends nexusFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, nexusFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__nexusClient<$Types.GetResult<nexusPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Nexus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nexusFindFirstArgs} args - Arguments to find a Nexus
     * @example
     * // Get one Nexus
     * const nexus = await prisma.nexus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends nexusFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, nexusFindFirstArgs<ExtArgs>>
    ): Prisma__nexusClient<$Types.GetResult<nexusPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Nexus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nexusFindFirstOrThrowArgs} args - Arguments to find a Nexus
     * @example
     * // Get one Nexus
     * const nexus = await prisma.nexus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends nexusFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, nexusFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__nexusClient<$Types.GetResult<nexusPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Nexuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nexusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nexuses
     * const nexuses = await prisma.nexus.findMany()
     * 
     * // Get first 10 Nexuses
     * const nexuses = await prisma.nexus.findMany({ take: 10 })
     * 
     * // Only select the `nexus_id`
     * const nexusWithNexus_idOnly = await prisma.nexus.findMany({ select: { nexus_id: true } })
     * 
    **/
    findMany<T extends nexusFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, nexusFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<nexusPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Nexus.
     * @param {nexusCreateArgs} args - Arguments to create a Nexus.
     * @example
     * // Create one Nexus
     * const Nexus = await prisma.nexus.create({
     *   data: {
     *     // ... data to create a Nexus
     *   }
     * })
     * 
    **/
    create<T extends nexusCreateArgs<ExtArgs>>(
      args: SelectSubset<T, nexusCreateArgs<ExtArgs>>
    ): Prisma__nexusClient<$Types.GetResult<nexusPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Nexuses.
     *     @param {nexusCreateManyArgs} args - Arguments to create many Nexuses.
     *     @example
     *     // Create many Nexuses
     *     const nexus = await prisma.nexus.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends nexusCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, nexusCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Nexus.
     * @param {nexusDeleteArgs} args - Arguments to delete one Nexus.
     * @example
     * // Delete one Nexus
     * const Nexus = await prisma.nexus.delete({
     *   where: {
     *     // ... filter to delete one Nexus
     *   }
     * })
     * 
    **/
    delete<T extends nexusDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, nexusDeleteArgs<ExtArgs>>
    ): Prisma__nexusClient<$Types.GetResult<nexusPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Nexus.
     * @param {nexusUpdateArgs} args - Arguments to update one Nexus.
     * @example
     * // Update one Nexus
     * const nexus = await prisma.nexus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends nexusUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, nexusUpdateArgs<ExtArgs>>
    ): Prisma__nexusClient<$Types.GetResult<nexusPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Nexuses.
     * @param {nexusDeleteManyArgs} args - Arguments to filter Nexuses to delete.
     * @example
     * // Delete a few Nexuses
     * const { count } = await prisma.nexus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends nexusDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, nexusDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nexuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nexusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nexuses
     * const nexus = await prisma.nexus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends nexusUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, nexusUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Nexus.
     * @param {nexusUpsertArgs} args - Arguments to update or create a Nexus.
     * @example
     * // Update or create a Nexus
     * const nexus = await prisma.nexus.upsert({
     *   create: {
     *     // ... data to create a Nexus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nexus we want to update
     *   }
     * })
    **/
    upsert<T extends nexusUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, nexusUpsertArgs<ExtArgs>>
    ): Prisma__nexusClient<$Types.GetResult<nexusPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Nexuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nexusCountArgs} args - Arguments to filter Nexuses to count.
     * @example
     * // Count the number of Nexuses
     * const count = await prisma.nexus.count({
     *   where: {
     *     // ... the filter for the Nexuses we want to count
     *   }
     * })
    **/
    count<T extends nexusCountArgs>(
      args?: Subset<T, nexusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NexusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nexus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NexusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NexusAggregateArgs>(args: Subset<T, NexusAggregateArgs>): Prisma.PrismaPromise<GetNexusAggregateType<T>>

    /**
     * Group by Nexus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nexusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends nexusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: nexusGroupByArgs['orderBy'] }
        : { orderBy?: nexusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, nexusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNexusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the nexus model
   */
  readonly fields: nexusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for nexus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__nexusClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    users<T extends nexus$usersArgs<ExtArgs> = {}>(args?: Subset<T, nexus$usersArgs<ExtArgs>>): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the nexus model
   */ 
  interface nexusFieldRefs {
    readonly nexus_id: FieldRef<"nexus", 'String'>
    readonly user_id: FieldRef<"nexus", 'String'>
    readonly reply_to: FieldRef<"nexus", 'String'>
    readonly comment: FieldRef<"nexus", 'String'>
    readonly upvotes: FieldRef<"nexus", 'Int'>
    readonly chronicle_id: FieldRef<"nexus", 'String'>
  }
    

  // Custom InputTypes

  /**
   * nexus findUnique
   */
  export type nexusFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexus
     */
    select?: nexusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nexusInclude<ExtArgs> | null
    /**
     * Filter, which nexus to fetch.
     */
    where: nexusWhereUniqueInput
  }


  /**
   * nexus findUniqueOrThrow
   */
  export type nexusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexus
     */
    select?: nexusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nexusInclude<ExtArgs> | null
    /**
     * Filter, which nexus to fetch.
     */
    where: nexusWhereUniqueInput
  }


  /**
   * nexus findFirst
   */
  export type nexusFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexus
     */
    select?: nexusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nexusInclude<ExtArgs> | null
    /**
     * Filter, which nexus to fetch.
     */
    where?: nexusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nexuses to fetch.
     */
    orderBy?: nexusOrderByWithRelationInput | nexusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nexuses.
     */
    cursor?: nexusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nexuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nexuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nexuses.
     */
    distinct?: NexusScalarFieldEnum | NexusScalarFieldEnum[]
  }


  /**
   * nexus findFirstOrThrow
   */
  export type nexusFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexus
     */
    select?: nexusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nexusInclude<ExtArgs> | null
    /**
     * Filter, which nexus to fetch.
     */
    where?: nexusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nexuses to fetch.
     */
    orderBy?: nexusOrderByWithRelationInput | nexusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nexuses.
     */
    cursor?: nexusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nexuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nexuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nexuses.
     */
    distinct?: NexusScalarFieldEnum | NexusScalarFieldEnum[]
  }


  /**
   * nexus findMany
   */
  export type nexusFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexus
     */
    select?: nexusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nexusInclude<ExtArgs> | null
    /**
     * Filter, which nexuses to fetch.
     */
    where?: nexusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nexuses to fetch.
     */
    orderBy?: nexusOrderByWithRelationInput | nexusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing nexuses.
     */
    cursor?: nexusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nexuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nexuses.
     */
    skip?: number
    distinct?: NexusScalarFieldEnum | NexusScalarFieldEnum[]
  }


  /**
   * nexus create
   */
  export type nexusCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexus
     */
    select?: nexusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nexusInclude<ExtArgs> | null
    /**
     * The data needed to create a nexus.
     */
    data: XOR<nexusCreateInput, nexusUncheckedCreateInput>
  }


  /**
   * nexus createMany
   */
  export type nexusCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many nexuses.
     */
    data: nexusCreateManyInput | nexusCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * nexus update
   */
  export type nexusUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexus
     */
    select?: nexusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nexusInclude<ExtArgs> | null
    /**
     * The data needed to update a nexus.
     */
    data: XOR<nexusUpdateInput, nexusUncheckedUpdateInput>
    /**
     * Choose, which nexus to update.
     */
    where: nexusWhereUniqueInput
  }


  /**
   * nexus updateMany
   */
  export type nexusUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update nexuses.
     */
    data: XOR<nexusUpdateManyMutationInput, nexusUncheckedUpdateManyInput>
    /**
     * Filter which nexuses to update
     */
    where?: nexusWhereInput
  }


  /**
   * nexus upsert
   */
  export type nexusUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexus
     */
    select?: nexusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nexusInclude<ExtArgs> | null
    /**
     * The filter to search for the nexus to update in case it exists.
     */
    where: nexusWhereUniqueInput
    /**
     * In case the nexus found by the `where` argument doesn't exist, create a new nexus with this data.
     */
    create: XOR<nexusCreateInput, nexusUncheckedCreateInput>
    /**
     * In case the nexus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<nexusUpdateInput, nexusUncheckedUpdateInput>
  }


  /**
   * nexus delete
   */
  export type nexusDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexus
     */
    select?: nexusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nexusInclude<ExtArgs> | null
    /**
     * Filter which nexus to delete.
     */
    where: nexusWhereUniqueInput
  }


  /**
   * nexus deleteMany
   */
  export type nexusDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which nexuses to delete
     */
    where?: nexusWhereInput
  }


  /**
   * nexus.users
   */
  export type nexus$usersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * nexus without action
   */
  export type nexusArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexus
     */
    select?: nexusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nexusInclude<ExtArgs> | null
  }



  /**
   * Model quizzes
   */


  export type AggregateQuizzes = {
    _count: QuizzesCountAggregateOutputType | null
    _avg: QuizzesAvgAggregateOutputType | null
    _sum: QuizzesSumAggregateOutputType | null
    _min: QuizzesMinAggregateOutputType | null
    _max: QuizzesMaxAggregateOutputType | null
  }

  export type QuizzesAvgAggregateOutputType = {
    difficulty_lvl: number | null
  }

  export type QuizzesSumAggregateOutputType = {
    difficulty_lvl: number | null
  }

  export type QuizzesMinAggregateOutputType = {
    quiz_id: string | null
    mod_id: string | null
    difficulty_lvl: number | null
    created_date: Date | null
    anime_name: string | null
  }

  export type QuizzesMaxAggregateOutputType = {
    quiz_id: string | null
    mod_id: string | null
    difficulty_lvl: number | null
    created_date: Date | null
    anime_name: string | null
  }

  export type QuizzesCountAggregateOutputType = {
    quiz_id: number
    mod_id: number
    difficulty_lvl: number
    created_date: number
    anime_name: number
    _all: number
  }


  export type QuizzesAvgAggregateInputType = {
    difficulty_lvl?: true
  }

  export type QuizzesSumAggregateInputType = {
    difficulty_lvl?: true
  }

  export type QuizzesMinAggregateInputType = {
    quiz_id?: true
    mod_id?: true
    difficulty_lvl?: true
    created_date?: true
    anime_name?: true
  }

  export type QuizzesMaxAggregateInputType = {
    quiz_id?: true
    mod_id?: true
    difficulty_lvl?: true
    created_date?: true
    anime_name?: true
  }

  export type QuizzesCountAggregateInputType = {
    quiz_id?: true
    mod_id?: true
    difficulty_lvl?: true
    created_date?: true
    anime_name?: true
    _all?: true
  }

  export type QuizzesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which quizzes to aggregate.
     */
    where?: quizzesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quizzes to fetch.
     */
    orderBy?: quizzesOrderByWithRelationInput | quizzesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: quizzesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned quizzes
    **/
    _count?: true | QuizzesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizzesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizzesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizzesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizzesMaxAggregateInputType
  }

  export type GetQuizzesAggregateType<T extends QuizzesAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizzes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizzes[P]>
      : GetScalarType<T[P], AggregateQuizzes[P]>
  }




  export type quizzesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: quizzesWhereInput
    orderBy?: quizzesOrderByWithAggregationInput | quizzesOrderByWithAggregationInput[]
    by: QuizzesScalarFieldEnum[] | QuizzesScalarFieldEnum
    having?: quizzesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizzesCountAggregateInputType | true
    _avg?: QuizzesAvgAggregateInputType
    _sum?: QuizzesSumAggregateInputType
    _min?: QuizzesMinAggregateInputType
    _max?: QuizzesMaxAggregateInputType
  }


  export type QuizzesGroupByOutputType = {
    quiz_id: string
    mod_id: string | null
    difficulty_lvl: number | null
    created_date: Date | null
    anime_name: string | null
    _count: QuizzesCountAggregateOutputType | null
    _avg: QuizzesAvgAggregateOutputType | null
    _sum: QuizzesSumAggregateOutputType | null
    _min: QuizzesMinAggregateOutputType | null
    _max: QuizzesMaxAggregateOutputType | null
  }

  type GetQuizzesGroupByPayload<T extends quizzesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizzesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizzesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizzesGroupByOutputType[P]>
            : GetScalarType<T[P], QuizzesGroupByOutputType[P]>
        }
      >
    >


  export type quizzesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    quiz_id?: boolean
    mod_id?: boolean
    difficulty_lvl?: boolean
    created_date?: boolean
    anime_name?: boolean
    wiki?: boolean | quizzes$wikiArgs<ExtArgs>
    users?: boolean | quizzes$usersArgs<ExtArgs>
  }, ExtArgs["result"]["quizzes"]>

  export type quizzesSelectScalar = {
    quiz_id?: boolean
    mod_id?: boolean
    difficulty_lvl?: boolean
    created_date?: boolean
    anime_name?: boolean
  }

  export type quizzesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    wiki?: boolean | quizzes$wikiArgs<ExtArgs>
    users?: boolean | quizzes$usersArgs<ExtArgs>
  }


  type quizzesGetPayload<S extends boolean | null | undefined | quizzesArgs> = $Types.GetResult<quizzesPayload, S>

  type quizzesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<quizzesFindManyArgs, 'select' | 'include'> & {
      select?: QuizzesCountAggregateInputType | true
    }

  export interface quizzesDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['quizzes'], meta: { name: 'quizzes' } }
    /**
     * Find zero or one Quizzes that matches the filter.
     * @param {quizzesFindUniqueArgs} args - Arguments to find a Quizzes
     * @example
     * // Get one Quizzes
     * const quizzes = await prisma.quizzes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends quizzesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, quizzesFindUniqueArgs<ExtArgs>>
    ): Prisma__quizzesClient<$Types.GetResult<quizzesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Quizzes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {quizzesFindUniqueOrThrowArgs} args - Arguments to find a Quizzes
     * @example
     * // Get one Quizzes
     * const quizzes = await prisma.quizzes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends quizzesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, quizzesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__quizzesClient<$Types.GetResult<quizzesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quizzesFindFirstArgs} args - Arguments to find a Quizzes
     * @example
     * // Get one Quizzes
     * const quizzes = await prisma.quizzes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends quizzesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, quizzesFindFirstArgs<ExtArgs>>
    ): Prisma__quizzesClient<$Types.GetResult<quizzesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Quizzes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quizzesFindFirstOrThrowArgs} args - Arguments to find a Quizzes
     * @example
     * // Get one Quizzes
     * const quizzes = await prisma.quizzes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends quizzesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, quizzesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__quizzesClient<$Types.GetResult<quizzesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quizzesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quizzes.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quizzes.findMany({ take: 10 })
     * 
     * // Only select the `quiz_id`
     * const quizzesWithQuiz_idOnly = await prisma.quizzes.findMany({ select: { quiz_id: true } })
     * 
    **/
    findMany<T extends quizzesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, quizzesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<quizzesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Quizzes.
     * @param {quizzesCreateArgs} args - Arguments to create a Quizzes.
     * @example
     * // Create one Quizzes
     * const Quizzes = await prisma.quizzes.create({
     *   data: {
     *     // ... data to create a Quizzes
     *   }
     * })
     * 
    **/
    create<T extends quizzesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, quizzesCreateArgs<ExtArgs>>
    ): Prisma__quizzesClient<$Types.GetResult<quizzesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Quizzes.
     *     @param {quizzesCreateManyArgs} args - Arguments to create many Quizzes.
     *     @example
     *     // Create many Quizzes
     *     const quizzes = await prisma.quizzes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends quizzesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, quizzesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quizzes.
     * @param {quizzesDeleteArgs} args - Arguments to delete one Quizzes.
     * @example
     * // Delete one Quizzes
     * const Quizzes = await prisma.quizzes.delete({
     *   where: {
     *     // ... filter to delete one Quizzes
     *   }
     * })
     * 
    **/
    delete<T extends quizzesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, quizzesDeleteArgs<ExtArgs>>
    ): Prisma__quizzesClient<$Types.GetResult<quizzesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Quizzes.
     * @param {quizzesUpdateArgs} args - Arguments to update one Quizzes.
     * @example
     * // Update one Quizzes
     * const quizzes = await prisma.quizzes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends quizzesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, quizzesUpdateArgs<ExtArgs>>
    ): Prisma__quizzesClient<$Types.GetResult<quizzesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Quizzes.
     * @param {quizzesDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quizzes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends quizzesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, quizzesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quizzesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quizzes = await prisma.quizzes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends quizzesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, quizzesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quizzes.
     * @param {quizzesUpsertArgs} args - Arguments to update or create a Quizzes.
     * @example
     * // Update or create a Quizzes
     * const quizzes = await prisma.quizzes.upsert({
     *   create: {
     *     // ... data to create a Quizzes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quizzes we want to update
     *   }
     * })
    **/
    upsert<T extends quizzesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, quizzesUpsertArgs<ExtArgs>>
    ): Prisma__quizzesClient<$Types.GetResult<quizzesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quizzesCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quizzes.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends quizzesCountArgs>(
      args?: Subset<T, quizzesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizzesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizzesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuizzesAggregateArgs>(args: Subset<T, QuizzesAggregateArgs>): Prisma.PrismaPromise<GetQuizzesAggregateType<T>>

    /**
     * Group by Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quizzesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends quizzesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: quizzesGroupByArgs['orderBy'] }
        : { orderBy?: quizzesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, quizzesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizzesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the quizzes model
   */
  readonly fields: quizzesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for quizzes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__quizzesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    wiki<T extends quizzes$wikiArgs<ExtArgs> = {}>(args?: Subset<T, quizzes$wikiArgs<ExtArgs>>): Prisma__wikiClient<$Types.GetResult<wikiPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    users<T extends quizzes$usersArgs<ExtArgs> = {}>(args?: Subset<T, quizzes$usersArgs<ExtArgs>>): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the quizzes model
   */ 
  interface quizzesFieldRefs {
    readonly quiz_id: FieldRef<"quizzes", 'String'>
    readonly mod_id: FieldRef<"quizzes", 'String'>
    readonly difficulty_lvl: FieldRef<"quizzes", 'Int'>
    readonly created_date: FieldRef<"quizzes", 'DateTime'>
    readonly anime_name: FieldRef<"quizzes", 'String'>
  }
    

  // Custom InputTypes

  /**
   * quizzes findUnique
   */
  export type quizzesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizzesInclude<ExtArgs> | null
    /**
     * Filter, which quizzes to fetch.
     */
    where: quizzesWhereUniqueInput
  }


  /**
   * quizzes findUniqueOrThrow
   */
  export type quizzesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizzesInclude<ExtArgs> | null
    /**
     * Filter, which quizzes to fetch.
     */
    where: quizzesWhereUniqueInput
  }


  /**
   * quizzes findFirst
   */
  export type quizzesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizzesInclude<ExtArgs> | null
    /**
     * Filter, which quizzes to fetch.
     */
    where?: quizzesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quizzes to fetch.
     */
    orderBy?: quizzesOrderByWithRelationInput | quizzesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quizzes.
     */
    cursor?: quizzesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quizzes.
     */
    distinct?: QuizzesScalarFieldEnum | QuizzesScalarFieldEnum[]
  }


  /**
   * quizzes findFirstOrThrow
   */
  export type quizzesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizzesInclude<ExtArgs> | null
    /**
     * Filter, which quizzes to fetch.
     */
    where?: quizzesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quizzes to fetch.
     */
    orderBy?: quizzesOrderByWithRelationInput | quizzesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quizzes.
     */
    cursor?: quizzesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quizzes.
     */
    distinct?: QuizzesScalarFieldEnum | QuizzesScalarFieldEnum[]
  }


  /**
   * quizzes findMany
   */
  export type quizzesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizzesInclude<ExtArgs> | null
    /**
     * Filter, which quizzes to fetch.
     */
    where?: quizzesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quizzes to fetch.
     */
    orderBy?: quizzesOrderByWithRelationInput | quizzesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing quizzes.
     */
    cursor?: quizzesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quizzes.
     */
    skip?: number
    distinct?: QuizzesScalarFieldEnum | QuizzesScalarFieldEnum[]
  }


  /**
   * quizzes create
   */
  export type quizzesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizzesInclude<ExtArgs> | null
    /**
     * The data needed to create a quizzes.
     */
    data: XOR<quizzesCreateInput, quizzesUncheckedCreateInput>
  }


  /**
   * quizzes createMany
   */
  export type quizzesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many quizzes.
     */
    data: quizzesCreateManyInput | quizzesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * quizzes update
   */
  export type quizzesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizzesInclude<ExtArgs> | null
    /**
     * The data needed to update a quizzes.
     */
    data: XOR<quizzesUpdateInput, quizzesUncheckedUpdateInput>
    /**
     * Choose, which quizzes to update.
     */
    where: quizzesWhereUniqueInput
  }


  /**
   * quizzes updateMany
   */
  export type quizzesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update quizzes.
     */
    data: XOR<quizzesUpdateManyMutationInput, quizzesUncheckedUpdateManyInput>
    /**
     * Filter which quizzes to update
     */
    where?: quizzesWhereInput
  }


  /**
   * quizzes upsert
   */
  export type quizzesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizzesInclude<ExtArgs> | null
    /**
     * The filter to search for the quizzes to update in case it exists.
     */
    where: quizzesWhereUniqueInput
    /**
     * In case the quizzes found by the `where` argument doesn't exist, create a new quizzes with this data.
     */
    create: XOR<quizzesCreateInput, quizzesUncheckedCreateInput>
    /**
     * In case the quizzes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<quizzesUpdateInput, quizzesUncheckedUpdateInput>
  }


  /**
   * quizzes delete
   */
  export type quizzesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizzesInclude<ExtArgs> | null
    /**
     * Filter which quizzes to delete.
     */
    where: quizzesWhereUniqueInput
  }


  /**
   * quizzes deleteMany
   */
  export type quizzesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which quizzes to delete
     */
    where?: quizzesWhereInput
  }


  /**
   * quizzes.wiki
   */
  export type quizzes$wikiArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wiki
     */
    select?: wikiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wikiInclude<ExtArgs> | null
    where?: wikiWhereInput
  }


  /**
   * quizzes.users
   */
  export type quizzes$usersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * quizzes without action
   */
  export type quizzesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizzesInclude<ExtArgs> | null
  }



  /**
   * Model season
   */


  export type AggregateSeason = {
    _count: SeasonCountAggregateOutputType | null
    _avg: SeasonAvgAggregateOutputType | null
    _sum: SeasonSumAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  export type SeasonAvgAggregateOutputType = {
    season_number: number | null
    episode_list: number | null
  }

  export type SeasonSumAggregateOutputType = {
    season_number: number | null
    episode_list: number | null
  }

  export type SeasonMinAggregateOutputType = {
    season_number: number | null
    wiki_id: string | null
    summary: string | null
    poster: string | null
    episode_list: number | null
  }

  export type SeasonMaxAggregateOutputType = {
    season_number: number | null
    wiki_id: string | null
    summary: string | null
    poster: string | null
    episode_list: number | null
  }

  export type SeasonCountAggregateOutputType = {
    season_number: number
    wiki_id: number
    summary: number
    poster: number
    episode_list: number
    _all: number
  }


  export type SeasonAvgAggregateInputType = {
    season_number?: true
    episode_list?: true
  }

  export type SeasonSumAggregateInputType = {
    season_number?: true
    episode_list?: true
  }

  export type SeasonMinAggregateInputType = {
    season_number?: true
    wiki_id?: true
    summary?: true
    poster?: true
    episode_list?: true
  }

  export type SeasonMaxAggregateInputType = {
    season_number?: true
    wiki_id?: true
    summary?: true
    poster?: true
    episode_list?: true
  }

  export type SeasonCountAggregateInputType = {
    season_number?: true
    wiki_id?: true
    summary?: true
    poster?: true
    episode_list?: true
    _all?: true
  }

  export type SeasonAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which season to aggregate.
     */
    where?: seasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seasons to fetch.
     */
    orderBy?: seasonOrderByWithRelationInput | seasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: seasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned seasons
    **/
    _count?: true | SeasonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeasonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeasonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeasonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeasonMaxAggregateInputType
  }

  export type GetSeasonAggregateType<T extends SeasonAggregateArgs> = {
        [P in keyof T & keyof AggregateSeason]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeason[P]>
      : GetScalarType<T[P], AggregateSeason[P]>
  }




  export type seasonGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: seasonWhereInput
    orderBy?: seasonOrderByWithAggregationInput | seasonOrderByWithAggregationInput[]
    by: SeasonScalarFieldEnum[] | SeasonScalarFieldEnum
    having?: seasonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeasonCountAggregateInputType | true
    _avg?: SeasonAvgAggregateInputType
    _sum?: SeasonSumAggregateInputType
    _min?: SeasonMinAggregateInputType
    _max?: SeasonMaxAggregateInputType
  }


  export type SeasonGroupByOutputType = {
    season_number: number
    wiki_id: string | null
    summary: string | null
    poster: string | null
    episode_list: number | null
    _count: SeasonCountAggregateOutputType | null
    _avg: SeasonAvgAggregateOutputType | null
    _sum: SeasonSumAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  type GetSeasonGroupByPayload<T extends seasonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeasonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeasonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeasonGroupByOutputType[P]>
            : GetScalarType<T[P], SeasonGroupByOutputType[P]>
        }
      >
    >


  export type seasonSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    season_number?: boolean
    wiki_id?: boolean
    summary?: boolean
    poster?: boolean
    episode_list?: boolean
    wiki?: boolean | season$wikiArgs<ExtArgs>
  }, ExtArgs["result"]["season"]>

  export type seasonSelectScalar = {
    season_number?: boolean
    wiki_id?: boolean
    summary?: boolean
    poster?: boolean
    episode_list?: boolean
  }

  export type seasonInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    wiki?: boolean | season$wikiArgs<ExtArgs>
  }


  type seasonGetPayload<S extends boolean | null | undefined | seasonArgs> = $Types.GetResult<seasonPayload, S>

  type seasonCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<seasonFindManyArgs, 'select' | 'include'> & {
      select?: SeasonCountAggregateInputType | true
    }

  export interface seasonDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['season'], meta: { name: 'season' } }
    /**
     * Find zero or one Season that matches the filter.
     * @param {seasonFindUniqueArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends seasonFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, seasonFindUniqueArgs<ExtArgs>>
    ): Prisma__seasonClient<$Types.GetResult<seasonPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Season that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {seasonFindUniqueOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends seasonFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, seasonFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__seasonClient<$Types.GetResult<seasonPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Season that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seasonFindFirstArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends seasonFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, seasonFindFirstArgs<ExtArgs>>
    ): Prisma__seasonClient<$Types.GetResult<seasonPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Season that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seasonFindFirstOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends seasonFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, seasonFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__seasonClient<$Types.GetResult<seasonPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Seasons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seasonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seasons
     * const seasons = await prisma.season.findMany()
     * 
     * // Get first 10 Seasons
     * const seasons = await prisma.season.findMany({ take: 10 })
     * 
     * // Only select the `season_number`
     * const seasonWithSeason_numberOnly = await prisma.season.findMany({ select: { season_number: true } })
     * 
    **/
    findMany<T extends seasonFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, seasonFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<seasonPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Season.
     * @param {seasonCreateArgs} args - Arguments to create a Season.
     * @example
     * // Create one Season
     * const Season = await prisma.season.create({
     *   data: {
     *     // ... data to create a Season
     *   }
     * })
     * 
    **/
    create<T extends seasonCreateArgs<ExtArgs>>(
      args: SelectSubset<T, seasonCreateArgs<ExtArgs>>
    ): Prisma__seasonClient<$Types.GetResult<seasonPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Seasons.
     *     @param {seasonCreateManyArgs} args - Arguments to create many Seasons.
     *     @example
     *     // Create many Seasons
     *     const season = await prisma.season.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends seasonCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, seasonCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Season.
     * @param {seasonDeleteArgs} args - Arguments to delete one Season.
     * @example
     * // Delete one Season
     * const Season = await prisma.season.delete({
     *   where: {
     *     // ... filter to delete one Season
     *   }
     * })
     * 
    **/
    delete<T extends seasonDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, seasonDeleteArgs<ExtArgs>>
    ): Prisma__seasonClient<$Types.GetResult<seasonPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Season.
     * @param {seasonUpdateArgs} args - Arguments to update one Season.
     * @example
     * // Update one Season
     * const season = await prisma.season.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends seasonUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, seasonUpdateArgs<ExtArgs>>
    ): Prisma__seasonClient<$Types.GetResult<seasonPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Seasons.
     * @param {seasonDeleteManyArgs} args - Arguments to filter Seasons to delete.
     * @example
     * // Delete a few Seasons
     * const { count } = await prisma.season.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends seasonDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, seasonDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seasonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seasons
     * const season = await prisma.season.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends seasonUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, seasonUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Season.
     * @param {seasonUpsertArgs} args - Arguments to update or create a Season.
     * @example
     * // Update or create a Season
     * const season = await prisma.season.upsert({
     *   create: {
     *     // ... data to create a Season
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Season we want to update
     *   }
     * })
    **/
    upsert<T extends seasonUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, seasonUpsertArgs<ExtArgs>>
    ): Prisma__seasonClient<$Types.GetResult<seasonPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seasonCountArgs} args - Arguments to filter Seasons to count.
     * @example
     * // Count the number of Seasons
     * const count = await prisma.season.count({
     *   where: {
     *     // ... the filter for the Seasons we want to count
     *   }
     * })
    **/
    count<T extends seasonCountArgs>(
      args?: Subset<T, seasonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeasonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeasonAggregateArgs>(args: Subset<T, SeasonAggregateArgs>): Prisma.PrismaPromise<GetSeasonAggregateType<T>>

    /**
     * Group by Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seasonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends seasonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: seasonGroupByArgs['orderBy'] }
        : { orderBy?: seasonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, seasonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeasonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the season model
   */
  readonly fields: seasonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for season.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__seasonClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    wiki<T extends season$wikiArgs<ExtArgs> = {}>(args?: Subset<T, season$wikiArgs<ExtArgs>>): Prisma__wikiClient<$Types.GetResult<wikiPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the season model
   */ 
  interface seasonFieldRefs {
    readonly season_number: FieldRef<"season", 'Int'>
    readonly wiki_id: FieldRef<"season", 'String'>
    readonly summary: FieldRef<"season", 'String'>
    readonly poster: FieldRef<"season", 'String'>
    readonly episode_list: FieldRef<"season", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * season findUnique
   */
  export type seasonFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seasonInclude<ExtArgs> | null
    /**
     * Filter, which season to fetch.
     */
    where: seasonWhereUniqueInput
  }


  /**
   * season findUniqueOrThrow
   */
  export type seasonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seasonInclude<ExtArgs> | null
    /**
     * Filter, which season to fetch.
     */
    where: seasonWhereUniqueInput
  }


  /**
   * season findFirst
   */
  export type seasonFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seasonInclude<ExtArgs> | null
    /**
     * Filter, which season to fetch.
     */
    where?: seasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seasons to fetch.
     */
    orderBy?: seasonOrderByWithRelationInput | seasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seasons.
     */
    cursor?: seasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seasons.
     */
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }


  /**
   * season findFirstOrThrow
   */
  export type seasonFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seasonInclude<ExtArgs> | null
    /**
     * Filter, which season to fetch.
     */
    where?: seasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seasons to fetch.
     */
    orderBy?: seasonOrderByWithRelationInput | seasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seasons.
     */
    cursor?: seasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seasons.
     */
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }


  /**
   * season findMany
   */
  export type seasonFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seasonInclude<ExtArgs> | null
    /**
     * Filter, which seasons to fetch.
     */
    where?: seasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seasons to fetch.
     */
    orderBy?: seasonOrderByWithRelationInput | seasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing seasons.
     */
    cursor?: seasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seasons.
     */
    skip?: number
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }


  /**
   * season create
   */
  export type seasonCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seasonInclude<ExtArgs> | null
    /**
     * The data needed to create a season.
     */
    data: XOR<seasonCreateInput, seasonUncheckedCreateInput>
  }


  /**
   * season createMany
   */
  export type seasonCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many seasons.
     */
    data: seasonCreateManyInput | seasonCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * season update
   */
  export type seasonUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seasonInclude<ExtArgs> | null
    /**
     * The data needed to update a season.
     */
    data: XOR<seasonUpdateInput, seasonUncheckedUpdateInput>
    /**
     * Choose, which season to update.
     */
    where: seasonWhereUniqueInput
  }


  /**
   * season updateMany
   */
  export type seasonUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update seasons.
     */
    data: XOR<seasonUpdateManyMutationInput, seasonUncheckedUpdateManyInput>
    /**
     * Filter which seasons to update
     */
    where?: seasonWhereInput
  }


  /**
   * season upsert
   */
  export type seasonUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seasonInclude<ExtArgs> | null
    /**
     * The filter to search for the season to update in case it exists.
     */
    where: seasonWhereUniqueInput
    /**
     * In case the season found by the `where` argument doesn't exist, create a new season with this data.
     */
    create: XOR<seasonCreateInput, seasonUncheckedCreateInput>
    /**
     * In case the season was found with the provided `where` argument, update it with this data.
     */
    update: XOR<seasonUpdateInput, seasonUncheckedUpdateInput>
  }


  /**
   * season delete
   */
  export type seasonDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seasonInclude<ExtArgs> | null
    /**
     * Filter which season to delete.
     */
    where: seasonWhereUniqueInput
  }


  /**
   * season deleteMany
   */
  export type seasonDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which seasons to delete
     */
    where?: seasonWhereInput
  }


  /**
   * season.wiki
   */
  export type season$wikiArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wiki
     */
    select?: wikiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wikiInclude<ExtArgs> | null
    where?: wikiWhereInput
  }


  /**
   * season without action
   */
  export type seasonArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seasonInclude<ExtArgs> | null
  }



  /**
   * Model users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    nani: number | null
    avatar: number | null
  }

  export type UsersSumAggregateOutputType = {
    nani: number | null
    avatar: number | null
  }

  export type UsersMinAggregateOutputType = {
    email_id: string | null
    guild: string | null
    user_id: string | null
    username: string | null
    joined_date: Date | null
    nani: number | null
    avatar: number | null
  }

  export type UsersMaxAggregateOutputType = {
    email_id: string | null
    guild: string | null
    user_id: string | null
    username: string | null
    joined_date: Date | null
    nani: number | null
    avatar: number | null
  }

  export type UsersCountAggregateOutputType = {
    email_id: number
    guild: number
    user_id: number
    username: number
    joined_date: number
    nani: number
    avatar: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    nani?: true
    avatar?: true
  }

  export type UsersSumAggregateInputType = {
    nani?: true
    avatar?: true
  }

  export type UsersMinAggregateInputType = {
    email_id?: true
    guild?: true
    user_id?: true
    username?: true
    joined_date?: true
    nani?: true
    avatar?: true
  }

  export type UsersMaxAggregateInputType = {
    email_id?: true
    guild?: true
    user_id?: true
    username?: true
    joined_date?: true
    nani?: true
    avatar?: true
  }

  export type UsersCountAggregateInputType = {
    email_id?: true
    guild?: true
    user_id?: true
    username?: true
    joined_date?: true
    nani?: true
    avatar?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    email_id: string
    guild: string
    user_id: string
    username: string | null
    joined_date: Date | null
    nani: number | null
    avatar: number | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email_id?: boolean
    guild?: boolean
    user_id?: boolean
    username?: boolean
    joined_date?: boolean
    nani?: boolean
    avatar?: boolean
    bucket?: boolean | users$bucketArgs<ExtArgs>
    chronicle?: boolean | users$chronicleArgs<ExtArgs>
    merch?: boolean | users$merchArgs<ExtArgs>
    nexus?: boolean | users$nexusArgs<ExtArgs>
    quizzes?: boolean | users$quizzesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    email_id?: boolean
    guild?: boolean
    user_id?: boolean
    username?: boolean
    joined_date?: boolean
    nani?: boolean
    avatar?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    bucket?: boolean | users$bucketArgs<ExtArgs>
    chronicle?: boolean | users$chronicleArgs<ExtArgs>
    merch?: boolean | users$merchArgs<ExtArgs>
    nexus?: boolean | users$nexusArgs<ExtArgs>
    quizzes?: boolean | users$quizzesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeArgs<ExtArgs>
  }


  type usersGetPayload<S extends boolean | null | undefined | usersArgs> = $Types.GetResult<usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `email_id`
     * const usersWithEmail_idOnly = await prisma.users.findMany({ select: { email_id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Types.GetResult<usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    bucket<T extends users$bucketArgs<ExtArgs> = {}>(args?: Subset<T, users$bucketArgs<ExtArgs>>): Prisma__bucketClient<$Types.GetResult<bucketPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    chronicle<T extends users$chronicleArgs<ExtArgs> = {}>(args?: Subset<T, users$chronicleArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<chroniclePayload<ExtArgs>, T, 'findMany'>| Null>;

    merch<T extends users$merchArgs<ExtArgs> = {}>(args?: Subset<T, users$merchArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<merchPayload<ExtArgs>, T, 'findMany'>| Null>;

    nexus<T extends users$nexusArgs<ExtArgs> = {}>(args?: Subset<T, users$nexusArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<nexusPayload<ExtArgs>, T, 'findMany'>| Null>;

    quizzes<T extends users$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, users$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<quizzesPayload<ExtArgs>, T, 'findMany'>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly email_id: FieldRef<"users", 'String'>
    readonly guild: FieldRef<"users", 'String'>
    readonly user_id: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly joined_date: FieldRef<"users", 'DateTime'>
    readonly nani: FieldRef<"users", 'Int'>
    readonly avatar: FieldRef<"users", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.bucket
   */
  export type users$bucketArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bucket
     */
    select?: bucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bucketInclude<ExtArgs> | null
    where?: bucketWhereInput
  }


  /**
   * users.chronicle
   */
  export type users$chronicleArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chronicle
     */
    select?: chronicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chronicleInclude<ExtArgs> | null
    where?: chronicleWhereInput
    orderBy?: chronicleOrderByWithRelationInput | chronicleOrderByWithRelationInput[]
    cursor?: chronicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChronicleScalarFieldEnum | ChronicleScalarFieldEnum[]
  }


  /**
   * users.merch
   */
  export type users$merchArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merch
     */
    select?: merchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: merchInclude<ExtArgs> | null
    where?: merchWhereInput
    orderBy?: merchOrderByWithRelationInput | merchOrderByWithRelationInput[]
    cursor?: merchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MerchScalarFieldEnum | MerchScalarFieldEnum[]
  }


  /**
   * users.nexus
   */
  export type users$nexusArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nexus
     */
    select?: nexusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: nexusInclude<ExtArgs> | null
    where?: nexusWhereInput
    orderBy?: nexusOrderByWithRelationInput | nexusOrderByWithRelationInput[]
    cursor?: nexusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NexusScalarFieldEnum | NexusScalarFieldEnum[]
  }


  /**
   * users.quizzes
   */
  export type users$quizzesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizzesInclude<ExtArgs> | null
    where?: quizzesWhereInput
    orderBy?: quizzesOrderByWithRelationInput | quizzesOrderByWithRelationInput[]
    cursor?: quizzesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizzesScalarFieldEnum | QuizzesScalarFieldEnum[]
  }


  /**
   * users without action
   */
  export type usersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
  }



  /**
   * Model wiki
   */


  export type AggregateWiki = {
    _count: WikiCountAggregateOutputType | null
    _avg: WikiAvgAggregateOutputType | null
    _sum: WikiSumAggregateOutputType | null
    _min: WikiMinAggregateOutputType | null
    _max: WikiMaxAggregateOutputType | null
  }

  export type WikiAvgAggregateOutputType = {
    rating: number | null
  }

  export type WikiSumAggregateOutputType = {
    rating: number | null
  }

  export type WikiMinAggregateOutputType = {
    wiki_id: string | null
    anime_name: string | null
    poster: string | null
    summary: string | null
    status: boolean | null
    rating: number | null
  }

  export type WikiMaxAggregateOutputType = {
    wiki_id: string | null
    anime_name: string | null
    poster: string | null
    summary: string | null
    status: boolean | null
    rating: number | null
  }

  export type WikiCountAggregateOutputType = {
    wiki_id: number
    anime_name: number
    poster: number
    summary: number
    status: number
    rating: number
    _all: number
  }


  export type WikiAvgAggregateInputType = {
    rating?: true
  }

  export type WikiSumAggregateInputType = {
    rating?: true
  }

  export type WikiMinAggregateInputType = {
    wiki_id?: true
    anime_name?: true
    poster?: true
    summary?: true
    status?: true
    rating?: true
  }

  export type WikiMaxAggregateInputType = {
    wiki_id?: true
    anime_name?: true
    poster?: true
    summary?: true
    status?: true
    rating?: true
  }

  export type WikiCountAggregateInputType = {
    wiki_id?: true
    anime_name?: true
    poster?: true
    summary?: true
    status?: true
    rating?: true
    _all?: true
  }

  export type WikiAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which wiki to aggregate.
     */
    where?: wikiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wikis to fetch.
     */
    orderBy?: wikiOrderByWithRelationInput | wikiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: wikiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wikis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wikis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wikis
    **/
    _count?: true | WikiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WikiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WikiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WikiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WikiMaxAggregateInputType
  }

  export type GetWikiAggregateType<T extends WikiAggregateArgs> = {
        [P in keyof T & keyof AggregateWiki]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWiki[P]>
      : GetScalarType<T[P], AggregateWiki[P]>
  }




  export type wikiGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: wikiWhereInput
    orderBy?: wikiOrderByWithAggregationInput | wikiOrderByWithAggregationInput[]
    by: WikiScalarFieldEnum[] | WikiScalarFieldEnum
    having?: wikiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WikiCountAggregateInputType | true
    _avg?: WikiAvgAggregateInputType
    _sum?: WikiSumAggregateInputType
    _min?: WikiMinAggregateInputType
    _max?: WikiMaxAggregateInputType
  }


  export type WikiGroupByOutputType = {
    wiki_id: string
    anime_name: string | null
    poster: string | null
    summary: string | null
    status: boolean | null
    rating: number | null
    _count: WikiCountAggregateOutputType | null
    _avg: WikiAvgAggregateOutputType | null
    _sum: WikiSumAggregateOutputType | null
    _min: WikiMinAggregateOutputType | null
    _max: WikiMaxAggregateOutputType | null
  }

  type GetWikiGroupByPayload<T extends wikiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WikiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WikiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WikiGroupByOutputType[P]>
            : GetScalarType<T[P], WikiGroupByOutputType[P]>
        }
      >
    >


  export type wikiSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wiki_id?: boolean
    anime_name?: boolean
    poster?: boolean
    summary?: boolean
    status?: boolean
    rating?: boolean
    bucket?: boolean | wiki$bucketArgs<ExtArgs>
    quizzes?: boolean | wiki$quizzesArgs<ExtArgs>
    season?: boolean | wiki$seasonArgs<ExtArgs>
    _count?: boolean | WikiCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["wiki"]>

  export type wikiSelectScalar = {
    wiki_id?: boolean
    anime_name?: boolean
    poster?: boolean
    summary?: boolean
    status?: boolean
    rating?: boolean
  }

  export type wikiInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    bucket?: boolean | wiki$bucketArgs<ExtArgs>
    quizzes?: boolean | wiki$quizzesArgs<ExtArgs>
    season?: boolean | wiki$seasonArgs<ExtArgs>
    _count?: boolean | WikiCountOutputTypeArgs<ExtArgs>
  }


  type wikiGetPayload<S extends boolean | null | undefined | wikiArgs> = $Types.GetResult<wikiPayload, S>

  type wikiCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<wikiFindManyArgs, 'select' | 'include'> & {
      select?: WikiCountAggregateInputType | true
    }

  export interface wikiDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['wiki'], meta: { name: 'wiki' } }
    /**
     * Find zero or one Wiki that matches the filter.
     * @param {wikiFindUniqueArgs} args - Arguments to find a Wiki
     * @example
     * // Get one Wiki
     * const wiki = await prisma.wiki.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends wikiFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, wikiFindUniqueArgs<ExtArgs>>
    ): Prisma__wikiClient<$Types.GetResult<wikiPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Wiki that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {wikiFindUniqueOrThrowArgs} args - Arguments to find a Wiki
     * @example
     * // Get one Wiki
     * const wiki = await prisma.wiki.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends wikiFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, wikiFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__wikiClient<$Types.GetResult<wikiPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Wiki that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wikiFindFirstArgs} args - Arguments to find a Wiki
     * @example
     * // Get one Wiki
     * const wiki = await prisma.wiki.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends wikiFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, wikiFindFirstArgs<ExtArgs>>
    ): Prisma__wikiClient<$Types.GetResult<wikiPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Wiki that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wikiFindFirstOrThrowArgs} args - Arguments to find a Wiki
     * @example
     * // Get one Wiki
     * const wiki = await prisma.wiki.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends wikiFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, wikiFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__wikiClient<$Types.GetResult<wikiPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Wikis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wikiFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wikis
     * const wikis = await prisma.wiki.findMany()
     * 
     * // Get first 10 Wikis
     * const wikis = await prisma.wiki.findMany({ take: 10 })
     * 
     * // Only select the `wiki_id`
     * const wikiWithWiki_idOnly = await prisma.wiki.findMany({ select: { wiki_id: true } })
     * 
    **/
    findMany<T extends wikiFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, wikiFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<wikiPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Wiki.
     * @param {wikiCreateArgs} args - Arguments to create a Wiki.
     * @example
     * // Create one Wiki
     * const Wiki = await prisma.wiki.create({
     *   data: {
     *     // ... data to create a Wiki
     *   }
     * })
     * 
    **/
    create<T extends wikiCreateArgs<ExtArgs>>(
      args: SelectSubset<T, wikiCreateArgs<ExtArgs>>
    ): Prisma__wikiClient<$Types.GetResult<wikiPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Wikis.
     *     @param {wikiCreateManyArgs} args - Arguments to create many Wikis.
     *     @example
     *     // Create many Wikis
     *     const wiki = await prisma.wiki.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends wikiCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, wikiCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Wiki.
     * @param {wikiDeleteArgs} args - Arguments to delete one Wiki.
     * @example
     * // Delete one Wiki
     * const Wiki = await prisma.wiki.delete({
     *   where: {
     *     // ... filter to delete one Wiki
     *   }
     * })
     * 
    **/
    delete<T extends wikiDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, wikiDeleteArgs<ExtArgs>>
    ): Prisma__wikiClient<$Types.GetResult<wikiPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Wiki.
     * @param {wikiUpdateArgs} args - Arguments to update one Wiki.
     * @example
     * // Update one Wiki
     * const wiki = await prisma.wiki.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends wikiUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, wikiUpdateArgs<ExtArgs>>
    ): Prisma__wikiClient<$Types.GetResult<wikiPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Wikis.
     * @param {wikiDeleteManyArgs} args - Arguments to filter Wikis to delete.
     * @example
     * // Delete a few Wikis
     * const { count } = await prisma.wiki.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends wikiDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, wikiDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wikis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wikiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wikis
     * const wiki = await prisma.wiki.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends wikiUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, wikiUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wiki.
     * @param {wikiUpsertArgs} args - Arguments to update or create a Wiki.
     * @example
     * // Update or create a Wiki
     * const wiki = await prisma.wiki.upsert({
     *   create: {
     *     // ... data to create a Wiki
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wiki we want to update
     *   }
     * })
    **/
    upsert<T extends wikiUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, wikiUpsertArgs<ExtArgs>>
    ): Prisma__wikiClient<$Types.GetResult<wikiPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Wikis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wikiCountArgs} args - Arguments to filter Wikis to count.
     * @example
     * // Count the number of Wikis
     * const count = await prisma.wiki.count({
     *   where: {
     *     // ... the filter for the Wikis we want to count
     *   }
     * })
    **/
    count<T extends wikiCountArgs>(
      args?: Subset<T, wikiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WikiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wiki.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WikiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WikiAggregateArgs>(args: Subset<T, WikiAggregateArgs>): Prisma.PrismaPromise<GetWikiAggregateType<T>>

    /**
     * Group by Wiki.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wikiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends wikiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: wikiGroupByArgs['orderBy'] }
        : { orderBy?: wikiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, wikiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWikiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the wiki model
   */
  readonly fields: wikiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for wiki.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__wikiClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    bucket<T extends wiki$bucketArgs<ExtArgs> = {}>(args?: Subset<T, wiki$bucketArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<bucketPayload<ExtArgs>, T, 'findMany'>| Null>;

    quizzes<T extends wiki$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, wiki$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<quizzesPayload<ExtArgs>, T, 'findMany'>| Null>;

    season<T extends wiki$seasonArgs<ExtArgs> = {}>(args?: Subset<T, wiki$seasonArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<seasonPayload<ExtArgs>, T, 'findMany'>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the wiki model
   */ 
  interface wikiFieldRefs {
    readonly wiki_id: FieldRef<"wiki", 'String'>
    readonly anime_name: FieldRef<"wiki", 'String'>
    readonly poster: FieldRef<"wiki", 'String'>
    readonly summary: FieldRef<"wiki", 'String'>
    readonly status: FieldRef<"wiki", 'Boolean'>
    readonly rating: FieldRef<"wiki", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * wiki findUnique
   */
  export type wikiFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wiki
     */
    select?: wikiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wikiInclude<ExtArgs> | null
    /**
     * Filter, which wiki to fetch.
     */
    where: wikiWhereUniqueInput
  }


  /**
   * wiki findUniqueOrThrow
   */
  export type wikiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wiki
     */
    select?: wikiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wikiInclude<ExtArgs> | null
    /**
     * Filter, which wiki to fetch.
     */
    where: wikiWhereUniqueInput
  }


  /**
   * wiki findFirst
   */
  export type wikiFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wiki
     */
    select?: wikiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wikiInclude<ExtArgs> | null
    /**
     * Filter, which wiki to fetch.
     */
    where?: wikiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wikis to fetch.
     */
    orderBy?: wikiOrderByWithRelationInput | wikiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wikis.
     */
    cursor?: wikiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wikis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wikis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wikis.
     */
    distinct?: WikiScalarFieldEnum | WikiScalarFieldEnum[]
  }


  /**
   * wiki findFirstOrThrow
   */
  export type wikiFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wiki
     */
    select?: wikiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wikiInclude<ExtArgs> | null
    /**
     * Filter, which wiki to fetch.
     */
    where?: wikiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wikis to fetch.
     */
    orderBy?: wikiOrderByWithRelationInput | wikiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wikis.
     */
    cursor?: wikiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wikis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wikis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wikis.
     */
    distinct?: WikiScalarFieldEnum | WikiScalarFieldEnum[]
  }


  /**
   * wiki findMany
   */
  export type wikiFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wiki
     */
    select?: wikiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wikiInclude<ExtArgs> | null
    /**
     * Filter, which wikis to fetch.
     */
    where?: wikiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wikis to fetch.
     */
    orderBy?: wikiOrderByWithRelationInput | wikiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wikis.
     */
    cursor?: wikiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wikis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wikis.
     */
    skip?: number
    distinct?: WikiScalarFieldEnum | WikiScalarFieldEnum[]
  }


  /**
   * wiki create
   */
  export type wikiCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wiki
     */
    select?: wikiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wikiInclude<ExtArgs> | null
    /**
     * The data needed to create a wiki.
     */
    data: XOR<wikiCreateInput, wikiUncheckedCreateInput>
  }


  /**
   * wiki createMany
   */
  export type wikiCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many wikis.
     */
    data: wikiCreateManyInput | wikiCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * wiki update
   */
  export type wikiUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wiki
     */
    select?: wikiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wikiInclude<ExtArgs> | null
    /**
     * The data needed to update a wiki.
     */
    data: XOR<wikiUpdateInput, wikiUncheckedUpdateInput>
    /**
     * Choose, which wiki to update.
     */
    where: wikiWhereUniqueInput
  }


  /**
   * wiki updateMany
   */
  export type wikiUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update wikis.
     */
    data: XOR<wikiUpdateManyMutationInput, wikiUncheckedUpdateManyInput>
    /**
     * Filter which wikis to update
     */
    where?: wikiWhereInput
  }


  /**
   * wiki upsert
   */
  export type wikiUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wiki
     */
    select?: wikiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wikiInclude<ExtArgs> | null
    /**
     * The filter to search for the wiki to update in case it exists.
     */
    where: wikiWhereUniqueInput
    /**
     * In case the wiki found by the `where` argument doesn't exist, create a new wiki with this data.
     */
    create: XOR<wikiCreateInput, wikiUncheckedCreateInput>
    /**
     * In case the wiki was found with the provided `where` argument, update it with this data.
     */
    update: XOR<wikiUpdateInput, wikiUncheckedUpdateInput>
  }


  /**
   * wiki delete
   */
  export type wikiDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wiki
     */
    select?: wikiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wikiInclude<ExtArgs> | null
    /**
     * Filter which wiki to delete.
     */
    where: wikiWhereUniqueInput
  }


  /**
   * wiki deleteMany
   */
  export type wikiDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which wikis to delete
     */
    where?: wikiWhereInput
  }


  /**
   * wiki.bucket
   */
  export type wiki$bucketArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bucket
     */
    select?: bucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bucketInclude<ExtArgs> | null
    where?: bucketWhereInput
    orderBy?: bucketOrderByWithRelationInput | bucketOrderByWithRelationInput[]
    cursor?: bucketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BucketScalarFieldEnum | BucketScalarFieldEnum[]
  }


  /**
   * wiki.quizzes
   */
  export type wiki$quizzesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quizzes
     */
    select?: quizzesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quizzesInclude<ExtArgs> | null
    where?: quizzesWhereInput
    orderBy?: quizzesOrderByWithRelationInput | quizzesOrderByWithRelationInput[]
    cursor?: quizzesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizzesScalarFieldEnum | QuizzesScalarFieldEnum[]
  }


  /**
   * wiki.season
   */
  export type wiki$seasonArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season
     */
    select?: seasonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: seasonInclude<ExtArgs> | null
    where?: seasonWhereInput
    orderBy?: seasonOrderByWithRelationInput | seasonOrderByWithRelationInput[]
    cursor?: seasonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }


  /**
   * wiki without action
   */
  export type wikiArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wiki
     */
    select?: wikiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: wikiInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BucketScalarFieldEnum: {
    user_id: 'user_id',
    wiki_id: 'wiki_id',
    completed: 'completed',
    ongoing: 'ongoing',
    dropped: 'dropped'
  };

  export type BucketScalarFieldEnum = (typeof BucketScalarFieldEnum)[keyof typeof BucketScalarFieldEnum]


  export const ChronicleScalarFieldEnum: {
    chronicle_id: 'chronicle_id',
    texts: 'texts',
    likes: 'likes',
    writer_id: 'writer_id'
  };

  export type ChronicleScalarFieldEnum = (typeof ChronicleScalarFieldEnum)[keyof typeof ChronicleScalarFieldEnum]


  export const MerchScalarFieldEnum: {
    merch_id: 'merch_id',
    req_nani: 'req_nani',
    rating: 'rating',
    description: 'description',
    merch: 'merch',
    seller_id: 'seller_id',
    image: 'image',
    avalibility_status: 'avalibility_status'
  };

  export type MerchScalarFieldEnum = (typeof MerchScalarFieldEnum)[keyof typeof MerchScalarFieldEnum]


  export const NexusScalarFieldEnum: {
    nexus_id: 'nexus_id',
    user_id: 'user_id',
    reply_to: 'reply_to',
    comment: 'comment',
    upvotes: 'upvotes',
    chronicle_id: 'chronicle_id'
  };

  export type NexusScalarFieldEnum = (typeof NexusScalarFieldEnum)[keyof typeof NexusScalarFieldEnum]


  export const QuizzesScalarFieldEnum: {
    quiz_id: 'quiz_id',
    mod_id: 'mod_id',
    difficulty_lvl: 'difficulty_lvl',
    created_date: 'created_date',
    anime_name: 'anime_name'
  };

  export type QuizzesScalarFieldEnum = (typeof QuizzesScalarFieldEnum)[keyof typeof QuizzesScalarFieldEnum]


  export const SeasonScalarFieldEnum: {
    season_number: 'season_number',
    wiki_id: 'wiki_id',
    summary: 'summary',
    poster: 'poster',
    episode_list: 'episode_list'
  };

  export type SeasonScalarFieldEnum = (typeof SeasonScalarFieldEnum)[keyof typeof SeasonScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    email_id: 'email_id',
    guild: 'guild',
    user_id: 'user_id',
    username: 'username',
    joined_date: 'joined_date',
    nani: 'nani',
    avatar: 'avatar'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const WikiScalarFieldEnum: {
    wiki_id: 'wiki_id',
    anime_name: 'anime_name',
    poster: 'poster',
    summary: 'summary',
    status: 'status',
    rating: 'rating'
  };

  export type WikiScalarFieldEnum = (typeof WikiScalarFieldEnum)[keyof typeof WikiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type bucketWhereInput = {
    AND?: bucketWhereInput | bucketWhereInput[]
    OR?: bucketWhereInput[]
    NOT?: bucketWhereInput | bucketWhereInput[]
    user_id?: StringFilter<"bucket"> | string
    wiki_id?: StringNullableFilter<"bucket"> | string | null
    completed?: BoolNullableFilter<"bucket"> | boolean | null
    ongoing?: BoolNullableFilter<"bucket"> | boolean | null
    dropped?: BoolNullableFilter<"bucket"> | boolean | null
    users?: XOR<UsersRelationFilter, usersWhereInput>
    wiki?: XOR<WikiNullableRelationFilter, wikiWhereInput> | null
  }

  export type bucketOrderByWithRelationInput = {
    user_id?: SortOrder
    wiki_id?: SortOrderInput | SortOrder
    completed?: SortOrderInput | SortOrder
    ongoing?: SortOrderInput | SortOrder
    dropped?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    wiki?: wikiOrderByWithRelationInput
  }

  export type bucketWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: bucketWhereInput | bucketWhereInput[]
    OR?: bucketWhereInput[]
    NOT?: bucketWhereInput | bucketWhereInput[]
    wiki_id?: StringNullableFilter<"bucket"> | string | null
    completed?: BoolNullableFilter<"bucket"> | boolean | null
    ongoing?: BoolNullableFilter<"bucket"> | boolean | null
    dropped?: BoolNullableFilter<"bucket"> | boolean | null
    users?: XOR<UsersRelationFilter, usersWhereInput>
    wiki?: XOR<WikiNullableRelationFilter, wikiWhereInput> | null
  }, "user_id">

  export type bucketOrderByWithAggregationInput = {
    user_id?: SortOrder
    wiki_id?: SortOrderInput | SortOrder
    completed?: SortOrderInput | SortOrder
    ongoing?: SortOrderInput | SortOrder
    dropped?: SortOrderInput | SortOrder
    _count?: bucketCountOrderByAggregateInput
    _max?: bucketMaxOrderByAggregateInput
    _min?: bucketMinOrderByAggregateInput
  }

  export type bucketScalarWhereWithAggregatesInput = {
    AND?: bucketScalarWhereWithAggregatesInput | bucketScalarWhereWithAggregatesInput[]
    OR?: bucketScalarWhereWithAggregatesInput[]
    NOT?: bucketScalarWhereWithAggregatesInput | bucketScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"bucket"> | string
    wiki_id?: StringNullableWithAggregatesFilter<"bucket"> | string | null
    completed?: BoolNullableWithAggregatesFilter<"bucket"> | boolean | null
    ongoing?: BoolNullableWithAggregatesFilter<"bucket"> | boolean | null
    dropped?: BoolNullableWithAggregatesFilter<"bucket"> | boolean | null
  }

  export type chronicleWhereInput = {
    AND?: chronicleWhereInput | chronicleWhereInput[]
    OR?: chronicleWhereInput[]
    NOT?: chronicleWhereInput | chronicleWhereInput[]
    chronicle_id?: StringFilter<"chronicle"> | string
    texts?: StringNullableFilter<"chronicle"> | string | null
    likes?: IntNullableFilter<"chronicle"> | number | null
    writer_id?: StringNullableFilter<"chronicle"> | string | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type chronicleOrderByWithRelationInput = {
    chronicle_id?: SortOrder
    texts?: SortOrderInput | SortOrder
    likes?: SortOrderInput | SortOrder
    writer_id?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type chronicleWhereUniqueInput = Prisma.AtLeast<{
    chronicle_id?: string
    AND?: chronicleWhereInput | chronicleWhereInput[]
    OR?: chronicleWhereInput[]
    NOT?: chronicleWhereInput | chronicleWhereInput[]
    texts?: StringNullableFilter<"chronicle"> | string | null
    likes?: IntNullableFilter<"chronicle"> | number | null
    writer_id?: StringNullableFilter<"chronicle"> | string | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "chronicle_id">

  export type chronicleOrderByWithAggregationInput = {
    chronicle_id?: SortOrder
    texts?: SortOrderInput | SortOrder
    likes?: SortOrderInput | SortOrder
    writer_id?: SortOrderInput | SortOrder
    _count?: chronicleCountOrderByAggregateInput
    _avg?: chronicleAvgOrderByAggregateInput
    _max?: chronicleMaxOrderByAggregateInput
    _min?: chronicleMinOrderByAggregateInput
    _sum?: chronicleSumOrderByAggregateInput
  }

  export type chronicleScalarWhereWithAggregatesInput = {
    AND?: chronicleScalarWhereWithAggregatesInput | chronicleScalarWhereWithAggregatesInput[]
    OR?: chronicleScalarWhereWithAggregatesInput[]
    NOT?: chronicleScalarWhereWithAggregatesInput | chronicleScalarWhereWithAggregatesInput[]
    chronicle_id?: StringWithAggregatesFilter<"chronicle"> | string
    texts?: StringNullableWithAggregatesFilter<"chronicle"> | string | null
    likes?: IntNullableWithAggregatesFilter<"chronicle"> | number | null
    writer_id?: StringNullableWithAggregatesFilter<"chronicle"> | string | null
  }

  export type merchWhereInput = {
    AND?: merchWhereInput | merchWhereInput[]
    OR?: merchWhereInput[]
    NOT?: merchWhereInput | merchWhereInput[]
    merch_id?: StringFilter<"merch"> | string
    req_nani?: IntNullableFilter<"merch"> | number | null
    rating?: IntNullableFilter<"merch"> | number | null
    description?: StringNullableFilter<"merch"> | string | null
    merch?: StringNullableFilter<"merch"> | string | null
    seller_id?: StringNullableFilter<"merch"> | string | null
    image?: StringNullableFilter<"merch"> | string | null
    avalibility_status?: BoolNullableFilter<"merch"> | boolean | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type merchOrderByWithRelationInput = {
    merch_id?: SortOrder
    req_nani?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    merch?: SortOrderInput | SortOrder
    seller_id?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    avalibility_status?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type merchWhereUniqueInput = Prisma.AtLeast<{
    merch_id?: string
    AND?: merchWhereInput | merchWhereInput[]
    OR?: merchWhereInput[]
    NOT?: merchWhereInput | merchWhereInput[]
    req_nani?: IntNullableFilter<"merch"> | number | null
    rating?: IntNullableFilter<"merch"> | number | null
    description?: StringNullableFilter<"merch"> | string | null
    merch?: StringNullableFilter<"merch"> | string | null
    seller_id?: StringNullableFilter<"merch"> | string | null
    image?: StringNullableFilter<"merch"> | string | null
    avalibility_status?: BoolNullableFilter<"merch"> | boolean | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "merch_id">

  export type merchOrderByWithAggregationInput = {
    merch_id?: SortOrder
    req_nani?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    merch?: SortOrderInput | SortOrder
    seller_id?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    avalibility_status?: SortOrderInput | SortOrder
    _count?: merchCountOrderByAggregateInput
    _avg?: merchAvgOrderByAggregateInput
    _max?: merchMaxOrderByAggregateInput
    _min?: merchMinOrderByAggregateInput
    _sum?: merchSumOrderByAggregateInput
  }

  export type merchScalarWhereWithAggregatesInput = {
    AND?: merchScalarWhereWithAggregatesInput | merchScalarWhereWithAggregatesInput[]
    OR?: merchScalarWhereWithAggregatesInput[]
    NOT?: merchScalarWhereWithAggregatesInput | merchScalarWhereWithAggregatesInput[]
    merch_id?: StringWithAggregatesFilter<"merch"> | string
    req_nani?: IntNullableWithAggregatesFilter<"merch"> | number | null
    rating?: IntNullableWithAggregatesFilter<"merch"> | number | null
    description?: StringNullableWithAggregatesFilter<"merch"> | string | null
    merch?: StringNullableWithAggregatesFilter<"merch"> | string | null
    seller_id?: StringNullableWithAggregatesFilter<"merch"> | string | null
    image?: StringNullableWithAggregatesFilter<"merch"> | string | null
    avalibility_status?: BoolNullableWithAggregatesFilter<"merch"> | boolean | null
  }

  export type nexusWhereInput = {
    AND?: nexusWhereInput | nexusWhereInput[]
    OR?: nexusWhereInput[]
    NOT?: nexusWhereInput | nexusWhereInput[]
    nexus_id?: StringFilter<"nexus"> | string
    user_id?: StringNullableFilter<"nexus"> | string | null
    reply_to?: StringNullableFilter<"nexus"> | string | null
    comment?: StringNullableFilter<"nexus"> | string | null
    upvotes?: IntNullableFilter<"nexus"> | number | null
    chronicle_id?: StringNullableFilter<"nexus"> | string | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type nexusOrderByWithRelationInput = {
    nexus_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    reply_to?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    upvotes?: SortOrderInput | SortOrder
    chronicle_id?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type nexusWhereUniqueInput = Prisma.AtLeast<{
    nexus_id?: string
    AND?: nexusWhereInput | nexusWhereInput[]
    OR?: nexusWhereInput[]
    NOT?: nexusWhereInput | nexusWhereInput[]
    user_id?: StringNullableFilter<"nexus"> | string | null
    reply_to?: StringNullableFilter<"nexus"> | string | null
    comment?: StringNullableFilter<"nexus"> | string | null
    upvotes?: IntNullableFilter<"nexus"> | number | null
    chronicle_id?: StringNullableFilter<"nexus"> | string | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "nexus_id">

  export type nexusOrderByWithAggregationInput = {
    nexus_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    reply_to?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    upvotes?: SortOrderInput | SortOrder
    chronicle_id?: SortOrderInput | SortOrder
    _count?: nexusCountOrderByAggregateInput
    _avg?: nexusAvgOrderByAggregateInput
    _max?: nexusMaxOrderByAggregateInput
    _min?: nexusMinOrderByAggregateInput
    _sum?: nexusSumOrderByAggregateInput
  }

  export type nexusScalarWhereWithAggregatesInput = {
    AND?: nexusScalarWhereWithAggregatesInput | nexusScalarWhereWithAggregatesInput[]
    OR?: nexusScalarWhereWithAggregatesInput[]
    NOT?: nexusScalarWhereWithAggregatesInput | nexusScalarWhereWithAggregatesInput[]
    nexus_id?: StringWithAggregatesFilter<"nexus"> | string
    user_id?: StringNullableWithAggregatesFilter<"nexus"> | string | null
    reply_to?: StringNullableWithAggregatesFilter<"nexus"> | string | null
    comment?: StringNullableWithAggregatesFilter<"nexus"> | string | null
    upvotes?: IntNullableWithAggregatesFilter<"nexus"> | number | null
    chronicle_id?: StringNullableWithAggregatesFilter<"nexus"> | string | null
  }

  export type quizzesWhereInput = {
    AND?: quizzesWhereInput | quizzesWhereInput[]
    OR?: quizzesWhereInput[]
    NOT?: quizzesWhereInput | quizzesWhereInput[]
    quiz_id?: StringFilter<"quizzes"> | string
    mod_id?: StringNullableFilter<"quizzes"> | string | null
    difficulty_lvl?: IntNullableFilter<"quizzes"> | number | null
    created_date?: DateTimeNullableFilter<"quizzes"> | Date | string | null
    anime_name?: StringNullableFilter<"quizzes"> | string | null
    wiki?: XOR<WikiNullableRelationFilter, wikiWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type quizzesOrderByWithRelationInput = {
    quiz_id?: SortOrder
    mod_id?: SortOrderInput | SortOrder
    difficulty_lvl?: SortOrderInput | SortOrder
    created_date?: SortOrderInput | SortOrder
    anime_name?: SortOrderInput | SortOrder
    wiki?: wikiOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type quizzesWhereUniqueInput = Prisma.AtLeast<{
    quiz_id?: string
    AND?: quizzesWhereInput | quizzesWhereInput[]
    OR?: quizzesWhereInput[]
    NOT?: quizzesWhereInput | quizzesWhereInput[]
    mod_id?: StringNullableFilter<"quizzes"> | string | null
    difficulty_lvl?: IntNullableFilter<"quizzes"> | number | null
    created_date?: DateTimeNullableFilter<"quizzes"> | Date | string | null
    anime_name?: StringNullableFilter<"quizzes"> | string | null
    wiki?: XOR<WikiNullableRelationFilter, wikiWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "quiz_id">

  export type quizzesOrderByWithAggregationInput = {
    quiz_id?: SortOrder
    mod_id?: SortOrderInput | SortOrder
    difficulty_lvl?: SortOrderInput | SortOrder
    created_date?: SortOrderInput | SortOrder
    anime_name?: SortOrderInput | SortOrder
    _count?: quizzesCountOrderByAggregateInput
    _avg?: quizzesAvgOrderByAggregateInput
    _max?: quizzesMaxOrderByAggregateInput
    _min?: quizzesMinOrderByAggregateInput
    _sum?: quizzesSumOrderByAggregateInput
  }

  export type quizzesScalarWhereWithAggregatesInput = {
    AND?: quizzesScalarWhereWithAggregatesInput | quizzesScalarWhereWithAggregatesInput[]
    OR?: quizzesScalarWhereWithAggregatesInput[]
    NOT?: quizzesScalarWhereWithAggregatesInput | quizzesScalarWhereWithAggregatesInput[]
    quiz_id?: StringWithAggregatesFilter<"quizzes"> | string
    mod_id?: StringNullableWithAggregatesFilter<"quizzes"> | string | null
    difficulty_lvl?: IntNullableWithAggregatesFilter<"quizzes"> | number | null
    created_date?: DateTimeNullableWithAggregatesFilter<"quizzes"> | Date | string | null
    anime_name?: StringNullableWithAggregatesFilter<"quizzes"> | string | null
  }

  export type seasonWhereInput = {
    AND?: seasonWhereInput | seasonWhereInput[]
    OR?: seasonWhereInput[]
    NOT?: seasonWhereInput | seasonWhereInput[]
    season_number?: IntFilter<"season"> | number
    wiki_id?: StringNullableFilter<"season"> | string | null
    summary?: StringNullableFilter<"season"> | string | null
    poster?: StringNullableFilter<"season"> | string | null
    episode_list?: IntNullableFilter<"season"> | number | null
    wiki?: XOR<WikiNullableRelationFilter, wikiWhereInput> | null
  }

  export type seasonOrderByWithRelationInput = {
    season_number?: SortOrder
    wiki_id?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    poster?: SortOrderInput | SortOrder
    episode_list?: SortOrderInput | SortOrder
    wiki?: wikiOrderByWithRelationInput
  }

  export type seasonWhereUniqueInput = Prisma.AtLeast<{
    season_number?: number
    AND?: seasonWhereInput | seasonWhereInput[]
    OR?: seasonWhereInput[]
    NOT?: seasonWhereInput | seasonWhereInput[]
    wiki_id?: StringNullableFilter<"season"> | string | null
    summary?: StringNullableFilter<"season"> | string | null
    poster?: StringNullableFilter<"season"> | string | null
    episode_list?: IntNullableFilter<"season"> | number | null
    wiki?: XOR<WikiNullableRelationFilter, wikiWhereInput> | null
  }, "season_number">

  export type seasonOrderByWithAggregationInput = {
    season_number?: SortOrder
    wiki_id?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    poster?: SortOrderInput | SortOrder
    episode_list?: SortOrderInput | SortOrder
    _count?: seasonCountOrderByAggregateInput
    _avg?: seasonAvgOrderByAggregateInput
    _max?: seasonMaxOrderByAggregateInput
    _min?: seasonMinOrderByAggregateInput
    _sum?: seasonSumOrderByAggregateInput
  }

  export type seasonScalarWhereWithAggregatesInput = {
    AND?: seasonScalarWhereWithAggregatesInput | seasonScalarWhereWithAggregatesInput[]
    OR?: seasonScalarWhereWithAggregatesInput[]
    NOT?: seasonScalarWhereWithAggregatesInput | seasonScalarWhereWithAggregatesInput[]
    season_number?: IntWithAggregatesFilter<"season"> | number
    wiki_id?: StringNullableWithAggregatesFilter<"season"> | string | null
    summary?: StringNullableWithAggregatesFilter<"season"> | string | null
    poster?: StringNullableWithAggregatesFilter<"season"> | string | null
    episode_list?: IntNullableWithAggregatesFilter<"season"> | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    email_id?: StringFilter<"users"> | string
    guild?: StringFilter<"users"> | string
    user_id?: StringFilter<"users"> | string
    username?: StringNullableFilter<"users"> | string | null
    joined_date?: DateTimeNullableFilter<"users"> | Date | string | null
    nani?: IntNullableFilter<"users"> | number | null
    avatar?: IntNullableFilter<"users"> | number | null
    bucket?: XOR<BucketNullableRelationFilter, bucketWhereInput> | null
    chronicle?: ChronicleListRelationFilter
    merch?: MerchListRelationFilter
    nexus?: NexusListRelationFilter
    quizzes?: QuizzesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    email_id?: SortOrder
    guild?: SortOrder
    user_id?: SortOrder
    username?: SortOrderInput | SortOrder
    joined_date?: SortOrderInput | SortOrder
    nani?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    bucket?: bucketOrderByWithRelationInput
    chronicle?: chronicleOrderByRelationAggregateInput
    merch?: merchOrderByRelationAggregateInput
    nexus?: nexusOrderByRelationAggregateInput
    quizzes?: quizzesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    email_id?: StringFilter<"users"> | string
    guild?: StringFilter<"users"> | string
    username?: StringNullableFilter<"users"> | string | null
    joined_date?: DateTimeNullableFilter<"users"> | Date | string | null
    nani?: IntNullableFilter<"users"> | number | null
    avatar?: IntNullableFilter<"users"> | number | null
    bucket?: XOR<BucketNullableRelationFilter, bucketWhereInput> | null
    chronicle?: ChronicleListRelationFilter
    merch?: MerchListRelationFilter
    nexus?: NexusListRelationFilter
    quizzes?: QuizzesListRelationFilter
  }, "user_id">

  export type usersOrderByWithAggregationInput = {
    email_id?: SortOrder
    guild?: SortOrder
    user_id?: SortOrder
    username?: SortOrderInput | SortOrder
    joined_date?: SortOrderInput | SortOrder
    nani?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    email_id?: StringWithAggregatesFilter<"users"> | string
    guild?: StringWithAggregatesFilter<"users"> | string
    user_id?: StringWithAggregatesFilter<"users"> | string
    username?: StringNullableWithAggregatesFilter<"users"> | string | null
    joined_date?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    nani?: IntNullableWithAggregatesFilter<"users"> | number | null
    avatar?: IntNullableWithAggregatesFilter<"users"> | number | null
  }

  export type wikiWhereInput = {
    AND?: wikiWhereInput | wikiWhereInput[]
    OR?: wikiWhereInput[]
    NOT?: wikiWhereInput | wikiWhereInput[]
    wiki_id?: StringFilter<"wiki"> | string
    anime_name?: StringNullableFilter<"wiki"> | string | null
    poster?: StringNullableFilter<"wiki"> | string | null
    summary?: StringNullableFilter<"wiki"> | string | null
    status?: BoolNullableFilter<"wiki"> | boolean | null
    rating?: IntNullableFilter<"wiki"> | number | null
    bucket?: BucketListRelationFilter
    quizzes?: QuizzesListRelationFilter
    season?: SeasonListRelationFilter
  }

  export type wikiOrderByWithRelationInput = {
    wiki_id?: SortOrder
    anime_name?: SortOrderInput | SortOrder
    poster?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    bucket?: bucketOrderByRelationAggregateInput
    quizzes?: quizzesOrderByRelationAggregateInput
    season?: seasonOrderByRelationAggregateInput
  }

  export type wikiWhereUniqueInput = Prisma.AtLeast<{
    wiki_id?: string
    anime_name?: string
    AND?: wikiWhereInput | wikiWhereInput[]
    OR?: wikiWhereInput[]
    NOT?: wikiWhereInput | wikiWhereInput[]
    poster?: StringNullableFilter<"wiki"> | string | null
    summary?: StringNullableFilter<"wiki"> | string | null
    status?: BoolNullableFilter<"wiki"> | boolean | null
    rating?: IntNullableFilter<"wiki"> | number | null
    bucket?: BucketListRelationFilter
    quizzes?: QuizzesListRelationFilter
    season?: SeasonListRelationFilter
  }, "wiki_id" | "anime_name">

  export type wikiOrderByWithAggregationInput = {
    wiki_id?: SortOrder
    anime_name?: SortOrderInput | SortOrder
    poster?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    _count?: wikiCountOrderByAggregateInput
    _avg?: wikiAvgOrderByAggregateInput
    _max?: wikiMaxOrderByAggregateInput
    _min?: wikiMinOrderByAggregateInput
    _sum?: wikiSumOrderByAggregateInput
  }

  export type wikiScalarWhereWithAggregatesInput = {
    AND?: wikiScalarWhereWithAggregatesInput | wikiScalarWhereWithAggregatesInput[]
    OR?: wikiScalarWhereWithAggregatesInput[]
    NOT?: wikiScalarWhereWithAggregatesInput | wikiScalarWhereWithAggregatesInput[]
    wiki_id?: StringWithAggregatesFilter<"wiki"> | string
    anime_name?: StringNullableWithAggregatesFilter<"wiki"> | string | null
    poster?: StringNullableWithAggregatesFilter<"wiki"> | string | null
    summary?: StringNullableWithAggregatesFilter<"wiki"> | string | null
    status?: BoolNullableWithAggregatesFilter<"wiki"> | boolean | null
    rating?: IntNullableWithAggregatesFilter<"wiki"> | number | null
  }

  export type bucketCreateInput = {
    completed?: boolean | null
    ongoing?: boolean | null
    dropped?: boolean | null
    users: usersCreateNestedOneWithoutBucketInput
    wiki?: wikiCreateNestedOneWithoutBucketInput
  }

  export type bucketUncheckedCreateInput = {
    user_id: string
    wiki_id?: string | null
    completed?: boolean | null
    ongoing?: boolean | null
    dropped?: boolean | null
  }

  export type bucketUpdateInput = {
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ongoing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dropped?: NullableBoolFieldUpdateOperationsInput | boolean | null
    users?: usersUpdateOneRequiredWithoutBucketNestedInput
    wiki?: wikiUpdateOneWithoutBucketNestedInput
  }

  export type bucketUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    wiki_id?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ongoing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dropped?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type bucketCreateManyInput = {
    user_id: string
    wiki_id?: string | null
    completed?: boolean | null
    ongoing?: boolean | null
    dropped?: boolean | null
  }

  export type bucketUpdateManyMutationInput = {
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ongoing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dropped?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type bucketUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    wiki_id?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ongoing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dropped?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type chronicleCreateInput = {
    chronicle_id: string
    texts?: string | null
    likes?: number | null
    users?: usersCreateNestedOneWithoutChronicleInput
  }

  export type chronicleUncheckedCreateInput = {
    chronicle_id: string
    texts?: string | null
    likes?: number | null
    writer_id?: string | null
  }

  export type chronicleUpdateInput = {
    chronicle_id?: StringFieldUpdateOperationsInput | string
    texts?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    users?: usersUpdateOneWithoutChronicleNestedInput
  }

  export type chronicleUncheckedUpdateInput = {
    chronicle_id?: StringFieldUpdateOperationsInput | string
    texts?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    writer_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type chronicleCreateManyInput = {
    chronicle_id: string
    texts?: string | null
    likes?: number | null
    writer_id?: string | null
  }

  export type chronicleUpdateManyMutationInput = {
    chronicle_id?: StringFieldUpdateOperationsInput | string
    texts?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type chronicleUncheckedUpdateManyInput = {
    chronicle_id?: StringFieldUpdateOperationsInput | string
    texts?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    writer_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type merchCreateInput = {
    merch_id: string
    req_nani?: number | null
    rating?: number | null
    description?: string | null
    merch?: string | null
    image?: string | null
    avalibility_status?: boolean | null
    users?: usersCreateNestedOneWithoutMerchInput
  }

  export type merchUncheckedCreateInput = {
    merch_id: string
    req_nani?: number | null
    rating?: number | null
    description?: string | null
    merch?: string | null
    seller_id?: string | null
    image?: string | null
    avalibility_status?: boolean | null
  }

  export type merchUpdateInput = {
    merch_id?: StringFieldUpdateOperationsInput | string
    req_nani?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    merch?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avalibility_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    users?: usersUpdateOneWithoutMerchNestedInput
  }

  export type merchUncheckedUpdateInput = {
    merch_id?: StringFieldUpdateOperationsInput | string
    req_nani?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    merch?: NullableStringFieldUpdateOperationsInput | string | null
    seller_id?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avalibility_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type merchCreateManyInput = {
    merch_id: string
    req_nani?: number | null
    rating?: number | null
    description?: string | null
    merch?: string | null
    seller_id?: string | null
    image?: string | null
    avalibility_status?: boolean | null
  }

  export type merchUpdateManyMutationInput = {
    merch_id?: StringFieldUpdateOperationsInput | string
    req_nani?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    merch?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avalibility_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type merchUncheckedUpdateManyInput = {
    merch_id?: StringFieldUpdateOperationsInput | string
    req_nani?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    merch?: NullableStringFieldUpdateOperationsInput | string | null
    seller_id?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avalibility_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type nexusCreateInput = {
    nexus_id: string
    reply_to?: string | null
    comment?: string | null
    upvotes?: number | null
    chronicle_id?: string | null
    users?: usersCreateNestedOneWithoutNexusInput
  }

  export type nexusUncheckedCreateInput = {
    nexus_id: string
    user_id?: string | null
    reply_to?: string | null
    comment?: string | null
    upvotes?: number | null
    chronicle_id?: string | null
  }

  export type nexusUpdateInput = {
    nexus_id?: StringFieldUpdateOperationsInput | string
    reply_to?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    chronicle_id?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutNexusNestedInput
  }

  export type nexusUncheckedUpdateInput = {
    nexus_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    reply_to?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    chronicle_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type nexusCreateManyInput = {
    nexus_id: string
    user_id?: string | null
    reply_to?: string | null
    comment?: string | null
    upvotes?: number | null
    chronicle_id?: string | null
  }

  export type nexusUpdateManyMutationInput = {
    nexus_id?: StringFieldUpdateOperationsInput | string
    reply_to?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    chronicle_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type nexusUncheckedUpdateManyInput = {
    nexus_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    reply_to?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    chronicle_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type quizzesCreateInput = {
    quiz_id: string
    difficulty_lvl?: number | null
    created_date?: Date | string | null
    wiki?: wikiCreateNestedOneWithoutQuizzesInput
    users?: usersCreateNestedOneWithoutQuizzesInput
  }

  export type quizzesUncheckedCreateInput = {
    quiz_id: string
    mod_id?: string | null
    difficulty_lvl?: number | null
    created_date?: Date | string | null
    anime_name?: string | null
  }

  export type quizzesUpdateInput = {
    quiz_id?: StringFieldUpdateOperationsInput | string
    difficulty_lvl?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wiki?: wikiUpdateOneWithoutQuizzesNestedInput
    users?: usersUpdateOneWithoutQuizzesNestedInput
  }

  export type quizzesUncheckedUpdateInput = {
    quiz_id?: StringFieldUpdateOperationsInput | string
    mod_id?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty_lvl?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anime_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type quizzesCreateManyInput = {
    quiz_id: string
    mod_id?: string | null
    difficulty_lvl?: number | null
    created_date?: Date | string | null
    anime_name?: string | null
  }

  export type quizzesUpdateManyMutationInput = {
    quiz_id?: StringFieldUpdateOperationsInput | string
    difficulty_lvl?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quizzesUncheckedUpdateManyInput = {
    quiz_id?: StringFieldUpdateOperationsInput | string
    mod_id?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty_lvl?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anime_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type seasonCreateInput = {
    season_number: number
    summary?: string | null
    poster?: string | null
    episode_list?: number | null
    wiki?: wikiCreateNestedOneWithoutSeasonInput
  }

  export type seasonUncheckedCreateInput = {
    season_number: number
    wiki_id?: string | null
    summary?: string | null
    poster?: string | null
    episode_list?: number | null
  }

  export type seasonUpdateInput = {
    season_number?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    episode_list?: NullableIntFieldUpdateOperationsInput | number | null
    wiki?: wikiUpdateOneWithoutSeasonNestedInput
  }

  export type seasonUncheckedUpdateInput = {
    season_number?: IntFieldUpdateOperationsInput | number
    wiki_id?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    episode_list?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type seasonCreateManyInput = {
    season_number: number
    wiki_id?: string | null
    summary?: string | null
    poster?: string | null
    episode_list?: number | null
  }

  export type seasonUpdateManyMutationInput = {
    season_number?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    episode_list?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type seasonUncheckedUpdateManyInput = {
    season_number?: IntFieldUpdateOperationsInput | number
    wiki_id?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    episode_list?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateInput = {
    email_id: string
    guild: string
    user_id: string
    username?: string | null
    joined_date?: Date | string | null
    nani?: number | null
    avatar?: number | null
    bucket?: bucketCreateNestedOneWithoutUsersInput
    chronicle?: chronicleCreateNestedManyWithoutUsersInput
    merch?: merchCreateNestedManyWithoutUsersInput
    nexus?: nexusCreateNestedManyWithoutUsersInput
    quizzes?: quizzesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    email_id: string
    guild: string
    user_id: string
    username?: string | null
    joined_date?: Date | string | null
    nani?: number | null
    avatar?: number | null
    bucket?: bucketUncheckedCreateNestedOneWithoutUsersInput
    chronicle?: chronicleUncheckedCreateNestedManyWithoutUsersInput
    merch?: merchUncheckedCreateNestedManyWithoutUsersInput
    nexus?: nexusUncheckedCreateNestedManyWithoutUsersInput
    quizzes?: quizzesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email_id?: StringFieldUpdateOperationsInput | string
    guild?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    joined_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nani?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: bucketUpdateOneWithoutUsersNestedInput
    chronicle?: chronicleUpdateManyWithoutUsersNestedInput
    merch?: merchUpdateManyWithoutUsersNestedInput
    nexus?: nexusUpdateManyWithoutUsersNestedInput
    quizzes?: quizzesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    email_id?: StringFieldUpdateOperationsInput | string
    guild?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    joined_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nani?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: bucketUncheckedUpdateOneWithoutUsersNestedInput
    chronicle?: chronicleUncheckedUpdateManyWithoutUsersNestedInput
    merch?: merchUncheckedUpdateManyWithoutUsersNestedInput
    nexus?: nexusUncheckedUpdateManyWithoutUsersNestedInput
    quizzes?: quizzesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    email_id: string
    guild: string
    user_id: string
    username?: string | null
    joined_date?: Date | string | null
    nani?: number | null
    avatar?: number | null
  }

  export type usersUpdateManyMutationInput = {
    email_id?: StringFieldUpdateOperationsInput | string
    guild?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    joined_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nani?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersUncheckedUpdateManyInput = {
    email_id?: StringFieldUpdateOperationsInput | string
    guild?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    joined_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nani?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type wikiCreateInput = {
    wiki_id: string
    anime_name?: string | null
    poster?: string | null
    summary?: string | null
    status?: boolean | null
    rating?: number | null
    bucket?: bucketCreateNestedManyWithoutWikiInput
    quizzes?: quizzesCreateNestedManyWithoutWikiInput
    season?: seasonCreateNestedManyWithoutWikiInput
  }

  export type wikiUncheckedCreateInput = {
    wiki_id: string
    anime_name?: string | null
    poster?: string | null
    summary?: string | null
    status?: boolean | null
    rating?: number | null
    bucket?: bucketUncheckedCreateNestedManyWithoutWikiInput
    quizzes?: quizzesUncheckedCreateNestedManyWithoutWikiInput
    season?: seasonUncheckedCreateNestedManyWithoutWikiInput
  }

  export type wikiUpdateInput = {
    wiki_id?: StringFieldUpdateOperationsInput | string
    anime_name?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: bucketUpdateManyWithoutWikiNestedInput
    quizzes?: quizzesUpdateManyWithoutWikiNestedInput
    season?: seasonUpdateManyWithoutWikiNestedInput
  }

  export type wikiUncheckedUpdateInput = {
    wiki_id?: StringFieldUpdateOperationsInput | string
    anime_name?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: bucketUncheckedUpdateManyWithoutWikiNestedInput
    quizzes?: quizzesUncheckedUpdateManyWithoutWikiNestedInput
    season?: seasonUncheckedUpdateManyWithoutWikiNestedInput
  }

  export type wikiCreateManyInput = {
    wiki_id: string
    anime_name?: string | null
    poster?: string | null
    summary?: string | null
    status?: boolean | null
    rating?: number | null
  }

  export type wikiUpdateManyMutationInput = {
    wiki_id?: StringFieldUpdateOperationsInput | string
    anime_name?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type wikiUncheckedUpdateManyInput = {
    wiki_id?: StringFieldUpdateOperationsInput | string
    anime_name?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type WikiNullableRelationFilter = {
    is?: wikiWhereInput | null
    isNot?: wikiWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type bucketCountOrderByAggregateInput = {
    user_id?: SortOrder
    wiki_id?: SortOrder
    completed?: SortOrder
    ongoing?: SortOrder
    dropped?: SortOrder
  }

  export type bucketMaxOrderByAggregateInput = {
    user_id?: SortOrder
    wiki_id?: SortOrder
    completed?: SortOrder
    ongoing?: SortOrder
    dropped?: SortOrder
  }

  export type bucketMinOrderByAggregateInput = {
    user_id?: SortOrder
    wiki_id?: SortOrder
    completed?: SortOrder
    ongoing?: SortOrder
    dropped?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsersNullableRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type chronicleCountOrderByAggregateInput = {
    chronicle_id?: SortOrder
    texts?: SortOrder
    likes?: SortOrder
    writer_id?: SortOrder
  }

  export type chronicleAvgOrderByAggregateInput = {
    likes?: SortOrder
  }

  export type chronicleMaxOrderByAggregateInput = {
    chronicle_id?: SortOrder
    texts?: SortOrder
    likes?: SortOrder
    writer_id?: SortOrder
  }

  export type chronicleMinOrderByAggregateInput = {
    chronicle_id?: SortOrder
    texts?: SortOrder
    likes?: SortOrder
    writer_id?: SortOrder
  }

  export type chronicleSumOrderByAggregateInput = {
    likes?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type merchCountOrderByAggregateInput = {
    merch_id?: SortOrder
    req_nani?: SortOrder
    rating?: SortOrder
    description?: SortOrder
    merch?: SortOrder
    seller_id?: SortOrder
    image?: SortOrder
    avalibility_status?: SortOrder
  }

  export type merchAvgOrderByAggregateInput = {
    req_nani?: SortOrder
    rating?: SortOrder
  }

  export type merchMaxOrderByAggregateInput = {
    merch_id?: SortOrder
    req_nani?: SortOrder
    rating?: SortOrder
    description?: SortOrder
    merch?: SortOrder
    seller_id?: SortOrder
    image?: SortOrder
    avalibility_status?: SortOrder
  }

  export type merchMinOrderByAggregateInput = {
    merch_id?: SortOrder
    req_nani?: SortOrder
    rating?: SortOrder
    description?: SortOrder
    merch?: SortOrder
    seller_id?: SortOrder
    image?: SortOrder
    avalibility_status?: SortOrder
  }

  export type merchSumOrderByAggregateInput = {
    req_nani?: SortOrder
    rating?: SortOrder
  }

  export type nexusCountOrderByAggregateInput = {
    nexus_id?: SortOrder
    user_id?: SortOrder
    reply_to?: SortOrder
    comment?: SortOrder
    upvotes?: SortOrder
    chronicle_id?: SortOrder
  }

  export type nexusAvgOrderByAggregateInput = {
    upvotes?: SortOrder
  }

  export type nexusMaxOrderByAggregateInput = {
    nexus_id?: SortOrder
    user_id?: SortOrder
    reply_to?: SortOrder
    comment?: SortOrder
    upvotes?: SortOrder
    chronicle_id?: SortOrder
  }

  export type nexusMinOrderByAggregateInput = {
    nexus_id?: SortOrder
    user_id?: SortOrder
    reply_to?: SortOrder
    comment?: SortOrder
    upvotes?: SortOrder
    chronicle_id?: SortOrder
  }

  export type nexusSumOrderByAggregateInput = {
    upvotes?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type quizzesCountOrderByAggregateInput = {
    quiz_id?: SortOrder
    mod_id?: SortOrder
    difficulty_lvl?: SortOrder
    created_date?: SortOrder
    anime_name?: SortOrder
  }

  export type quizzesAvgOrderByAggregateInput = {
    difficulty_lvl?: SortOrder
  }

  export type quizzesMaxOrderByAggregateInput = {
    quiz_id?: SortOrder
    mod_id?: SortOrder
    difficulty_lvl?: SortOrder
    created_date?: SortOrder
    anime_name?: SortOrder
  }

  export type quizzesMinOrderByAggregateInput = {
    quiz_id?: SortOrder
    mod_id?: SortOrder
    difficulty_lvl?: SortOrder
    created_date?: SortOrder
    anime_name?: SortOrder
  }

  export type quizzesSumOrderByAggregateInput = {
    difficulty_lvl?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type seasonCountOrderByAggregateInput = {
    season_number?: SortOrder
    wiki_id?: SortOrder
    summary?: SortOrder
    poster?: SortOrder
    episode_list?: SortOrder
  }

  export type seasonAvgOrderByAggregateInput = {
    season_number?: SortOrder
    episode_list?: SortOrder
  }

  export type seasonMaxOrderByAggregateInput = {
    season_number?: SortOrder
    wiki_id?: SortOrder
    summary?: SortOrder
    poster?: SortOrder
    episode_list?: SortOrder
  }

  export type seasonMinOrderByAggregateInput = {
    season_number?: SortOrder
    wiki_id?: SortOrder
    summary?: SortOrder
    poster?: SortOrder
    episode_list?: SortOrder
  }

  export type seasonSumOrderByAggregateInput = {
    season_number?: SortOrder
    episode_list?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BucketNullableRelationFilter = {
    is?: bucketWhereInput | null
    isNot?: bucketWhereInput | null
  }

  export type ChronicleListRelationFilter = {
    every?: chronicleWhereInput
    some?: chronicleWhereInput
    none?: chronicleWhereInput
  }

  export type MerchListRelationFilter = {
    every?: merchWhereInput
    some?: merchWhereInput
    none?: merchWhereInput
  }

  export type NexusListRelationFilter = {
    every?: nexusWhereInput
    some?: nexusWhereInput
    none?: nexusWhereInput
  }

  export type QuizzesListRelationFilter = {
    every?: quizzesWhereInput
    some?: quizzesWhereInput
    none?: quizzesWhereInput
  }

  export type chronicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type merchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type nexusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type quizzesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    email_id?: SortOrder
    guild?: SortOrder
    user_id?: SortOrder
    username?: SortOrder
    joined_date?: SortOrder
    nani?: SortOrder
    avatar?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    nani?: SortOrder
    avatar?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    email_id?: SortOrder
    guild?: SortOrder
    user_id?: SortOrder
    username?: SortOrder
    joined_date?: SortOrder
    nani?: SortOrder
    avatar?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    email_id?: SortOrder
    guild?: SortOrder
    user_id?: SortOrder
    username?: SortOrder
    joined_date?: SortOrder
    nani?: SortOrder
    avatar?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    nani?: SortOrder
    avatar?: SortOrder
  }

  export type BucketListRelationFilter = {
    every?: bucketWhereInput
    some?: bucketWhereInput
    none?: bucketWhereInput
  }

  export type SeasonListRelationFilter = {
    every?: seasonWhereInput
    some?: seasonWhereInput
    none?: seasonWhereInput
  }

  export type bucketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type seasonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type wikiCountOrderByAggregateInput = {
    wiki_id?: SortOrder
    anime_name?: SortOrder
    poster?: SortOrder
    summary?: SortOrder
    status?: SortOrder
    rating?: SortOrder
  }

  export type wikiAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type wikiMaxOrderByAggregateInput = {
    wiki_id?: SortOrder
    anime_name?: SortOrder
    poster?: SortOrder
    summary?: SortOrder
    status?: SortOrder
    rating?: SortOrder
  }

  export type wikiMinOrderByAggregateInput = {
    wiki_id?: SortOrder
    anime_name?: SortOrder
    poster?: SortOrder
    summary?: SortOrder
    status?: SortOrder
    rating?: SortOrder
  }

  export type wikiSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type usersCreateNestedOneWithoutBucketInput = {
    create?: XOR<usersCreateWithoutBucketInput, usersUncheckedCreateWithoutBucketInput>
    connectOrCreate?: usersCreateOrConnectWithoutBucketInput
    connect?: usersWhereUniqueInput
  }

  export type wikiCreateNestedOneWithoutBucketInput = {
    create?: XOR<wikiCreateWithoutBucketInput, wikiUncheckedCreateWithoutBucketInput>
    connectOrCreate?: wikiCreateOrConnectWithoutBucketInput
    connect?: wikiWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type usersUpdateOneRequiredWithoutBucketNestedInput = {
    create?: XOR<usersCreateWithoutBucketInput, usersUncheckedCreateWithoutBucketInput>
    connectOrCreate?: usersCreateOrConnectWithoutBucketInput
    upsert?: usersUpsertWithoutBucketInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBucketInput, usersUpdateWithoutBucketInput>, usersUncheckedUpdateWithoutBucketInput>
  }

  export type wikiUpdateOneWithoutBucketNestedInput = {
    create?: XOR<wikiCreateWithoutBucketInput, wikiUncheckedCreateWithoutBucketInput>
    connectOrCreate?: wikiCreateOrConnectWithoutBucketInput
    upsert?: wikiUpsertWithoutBucketInput
    disconnect?: wikiWhereInput | boolean
    delete?: wikiWhereInput | boolean
    connect?: wikiWhereUniqueInput
    update?: XOR<XOR<wikiUpdateToOneWithWhereWithoutBucketInput, wikiUpdateWithoutBucketInput>, wikiUncheckedUpdateWithoutBucketInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersCreateNestedOneWithoutChronicleInput = {
    create?: XOR<usersCreateWithoutChronicleInput, usersUncheckedCreateWithoutChronicleInput>
    connectOrCreate?: usersCreateOrConnectWithoutChronicleInput
    connect?: usersWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneWithoutChronicleNestedInput = {
    create?: XOR<usersCreateWithoutChronicleInput, usersUncheckedCreateWithoutChronicleInput>
    connectOrCreate?: usersCreateOrConnectWithoutChronicleInput
    upsert?: usersUpsertWithoutChronicleInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutChronicleInput, usersUpdateWithoutChronicleInput>, usersUncheckedUpdateWithoutChronicleInput>
  }

  export type usersCreateNestedOneWithoutMerchInput = {
    create?: XOR<usersCreateWithoutMerchInput, usersUncheckedCreateWithoutMerchInput>
    connectOrCreate?: usersCreateOrConnectWithoutMerchInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutMerchNestedInput = {
    create?: XOR<usersCreateWithoutMerchInput, usersUncheckedCreateWithoutMerchInput>
    connectOrCreate?: usersCreateOrConnectWithoutMerchInput
    upsert?: usersUpsertWithoutMerchInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMerchInput, usersUpdateWithoutMerchInput>, usersUncheckedUpdateWithoutMerchInput>
  }

  export type usersCreateNestedOneWithoutNexusInput = {
    create?: XOR<usersCreateWithoutNexusInput, usersUncheckedCreateWithoutNexusInput>
    connectOrCreate?: usersCreateOrConnectWithoutNexusInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutNexusNestedInput = {
    create?: XOR<usersCreateWithoutNexusInput, usersUncheckedCreateWithoutNexusInput>
    connectOrCreate?: usersCreateOrConnectWithoutNexusInput
    upsert?: usersUpsertWithoutNexusInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutNexusInput, usersUpdateWithoutNexusInput>, usersUncheckedUpdateWithoutNexusInput>
  }

  export type wikiCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<wikiCreateWithoutQuizzesInput, wikiUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: wikiCreateOrConnectWithoutQuizzesInput
    connect?: wikiWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<usersCreateWithoutQuizzesInput, usersUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: usersCreateOrConnectWithoutQuizzesInput
    connect?: usersWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type wikiUpdateOneWithoutQuizzesNestedInput = {
    create?: XOR<wikiCreateWithoutQuizzesInput, wikiUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: wikiCreateOrConnectWithoutQuizzesInput
    upsert?: wikiUpsertWithoutQuizzesInput
    disconnect?: wikiWhereInput | boolean
    delete?: wikiWhereInput | boolean
    connect?: wikiWhereUniqueInput
    update?: XOR<XOR<wikiUpdateToOneWithWhereWithoutQuizzesInput, wikiUpdateWithoutQuizzesInput>, wikiUncheckedUpdateWithoutQuizzesInput>
  }

  export type usersUpdateOneWithoutQuizzesNestedInput = {
    create?: XOR<usersCreateWithoutQuizzesInput, usersUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: usersCreateOrConnectWithoutQuizzesInput
    upsert?: usersUpsertWithoutQuizzesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutQuizzesInput, usersUpdateWithoutQuizzesInput>, usersUncheckedUpdateWithoutQuizzesInput>
  }

  export type wikiCreateNestedOneWithoutSeasonInput = {
    create?: XOR<wikiCreateWithoutSeasonInput, wikiUncheckedCreateWithoutSeasonInput>
    connectOrCreate?: wikiCreateOrConnectWithoutSeasonInput
    connect?: wikiWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type wikiUpdateOneWithoutSeasonNestedInput = {
    create?: XOR<wikiCreateWithoutSeasonInput, wikiUncheckedCreateWithoutSeasonInput>
    connectOrCreate?: wikiCreateOrConnectWithoutSeasonInput
    upsert?: wikiUpsertWithoutSeasonInput
    disconnect?: wikiWhereInput | boolean
    delete?: wikiWhereInput | boolean
    connect?: wikiWhereUniqueInput
    update?: XOR<XOR<wikiUpdateToOneWithWhereWithoutSeasonInput, wikiUpdateWithoutSeasonInput>, wikiUncheckedUpdateWithoutSeasonInput>
  }

  export type bucketCreateNestedOneWithoutUsersInput = {
    create?: XOR<bucketCreateWithoutUsersInput, bucketUncheckedCreateWithoutUsersInput>
    connectOrCreate?: bucketCreateOrConnectWithoutUsersInput
    connect?: bucketWhereUniqueInput
  }

  export type chronicleCreateNestedManyWithoutUsersInput = {
    create?: XOR<chronicleCreateWithoutUsersInput, chronicleUncheckedCreateWithoutUsersInput> | chronicleCreateWithoutUsersInput[] | chronicleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chronicleCreateOrConnectWithoutUsersInput | chronicleCreateOrConnectWithoutUsersInput[]
    createMany?: chronicleCreateManyUsersInputEnvelope
    connect?: chronicleWhereUniqueInput | chronicleWhereUniqueInput[]
  }

  export type merchCreateNestedManyWithoutUsersInput = {
    create?: XOR<merchCreateWithoutUsersInput, merchUncheckedCreateWithoutUsersInput> | merchCreateWithoutUsersInput[] | merchUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: merchCreateOrConnectWithoutUsersInput | merchCreateOrConnectWithoutUsersInput[]
    createMany?: merchCreateManyUsersInputEnvelope
    connect?: merchWhereUniqueInput | merchWhereUniqueInput[]
  }

  export type nexusCreateNestedManyWithoutUsersInput = {
    create?: XOR<nexusCreateWithoutUsersInput, nexusUncheckedCreateWithoutUsersInput> | nexusCreateWithoutUsersInput[] | nexusUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: nexusCreateOrConnectWithoutUsersInput | nexusCreateOrConnectWithoutUsersInput[]
    createMany?: nexusCreateManyUsersInputEnvelope
    connect?: nexusWhereUniqueInput | nexusWhereUniqueInput[]
  }

  export type quizzesCreateNestedManyWithoutUsersInput = {
    create?: XOR<quizzesCreateWithoutUsersInput, quizzesUncheckedCreateWithoutUsersInput> | quizzesCreateWithoutUsersInput[] | quizzesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: quizzesCreateOrConnectWithoutUsersInput | quizzesCreateOrConnectWithoutUsersInput[]
    createMany?: quizzesCreateManyUsersInputEnvelope
    connect?: quizzesWhereUniqueInput | quizzesWhereUniqueInput[]
  }

  export type bucketUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<bucketCreateWithoutUsersInput, bucketUncheckedCreateWithoutUsersInput>
    connectOrCreate?: bucketCreateOrConnectWithoutUsersInput
    connect?: bucketWhereUniqueInput
  }

  export type chronicleUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<chronicleCreateWithoutUsersInput, chronicleUncheckedCreateWithoutUsersInput> | chronicleCreateWithoutUsersInput[] | chronicleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chronicleCreateOrConnectWithoutUsersInput | chronicleCreateOrConnectWithoutUsersInput[]
    createMany?: chronicleCreateManyUsersInputEnvelope
    connect?: chronicleWhereUniqueInput | chronicleWhereUniqueInput[]
  }

  export type merchUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<merchCreateWithoutUsersInput, merchUncheckedCreateWithoutUsersInput> | merchCreateWithoutUsersInput[] | merchUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: merchCreateOrConnectWithoutUsersInput | merchCreateOrConnectWithoutUsersInput[]
    createMany?: merchCreateManyUsersInputEnvelope
    connect?: merchWhereUniqueInput | merchWhereUniqueInput[]
  }

  export type nexusUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<nexusCreateWithoutUsersInput, nexusUncheckedCreateWithoutUsersInput> | nexusCreateWithoutUsersInput[] | nexusUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: nexusCreateOrConnectWithoutUsersInput | nexusCreateOrConnectWithoutUsersInput[]
    createMany?: nexusCreateManyUsersInputEnvelope
    connect?: nexusWhereUniqueInput | nexusWhereUniqueInput[]
  }

  export type quizzesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<quizzesCreateWithoutUsersInput, quizzesUncheckedCreateWithoutUsersInput> | quizzesCreateWithoutUsersInput[] | quizzesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: quizzesCreateOrConnectWithoutUsersInput | quizzesCreateOrConnectWithoutUsersInput[]
    createMany?: quizzesCreateManyUsersInputEnvelope
    connect?: quizzesWhereUniqueInput | quizzesWhereUniqueInput[]
  }

  export type bucketUpdateOneWithoutUsersNestedInput = {
    create?: XOR<bucketCreateWithoutUsersInput, bucketUncheckedCreateWithoutUsersInput>
    connectOrCreate?: bucketCreateOrConnectWithoutUsersInput
    upsert?: bucketUpsertWithoutUsersInput
    disconnect?: bucketWhereInput | boolean
    delete?: bucketWhereInput | boolean
    connect?: bucketWhereUniqueInput
    update?: XOR<XOR<bucketUpdateToOneWithWhereWithoutUsersInput, bucketUpdateWithoutUsersInput>, bucketUncheckedUpdateWithoutUsersInput>
  }

  export type chronicleUpdateManyWithoutUsersNestedInput = {
    create?: XOR<chronicleCreateWithoutUsersInput, chronicleUncheckedCreateWithoutUsersInput> | chronicleCreateWithoutUsersInput[] | chronicleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chronicleCreateOrConnectWithoutUsersInput | chronicleCreateOrConnectWithoutUsersInput[]
    upsert?: chronicleUpsertWithWhereUniqueWithoutUsersInput | chronicleUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: chronicleCreateManyUsersInputEnvelope
    set?: chronicleWhereUniqueInput | chronicleWhereUniqueInput[]
    disconnect?: chronicleWhereUniqueInput | chronicleWhereUniqueInput[]
    delete?: chronicleWhereUniqueInput | chronicleWhereUniqueInput[]
    connect?: chronicleWhereUniqueInput | chronicleWhereUniqueInput[]
    update?: chronicleUpdateWithWhereUniqueWithoutUsersInput | chronicleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: chronicleUpdateManyWithWhereWithoutUsersInput | chronicleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: chronicleScalarWhereInput | chronicleScalarWhereInput[]
  }

  export type merchUpdateManyWithoutUsersNestedInput = {
    create?: XOR<merchCreateWithoutUsersInput, merchUncheckedCreateWithoutUsersInput> | merchCreateWithoutUsersInput[] | merchUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: merchCreateOrConnectWithoutUsersInput | merchCreateOrConnectWithoutUsersInput[]
    upsert?: merchUpsertWithWhereUniqueWithoutUsersInput | merchUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: merchCreateManyUsersInputEnvelope
    set?: merchWhereUniqueInput | merchWhereUniqueInput[]
    disconnect?: merchWhereUniqueInput | merchWhereUniqueInput[]
    delete?: merchWhereUniqueInput | merchWhereUniqueInput[]
    connect?: merchWhereUniqueInput | merchWhereUniqueInput[]
    update?: merchUpdateWithWhereUniqueWithoutUsersInput | merchUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: merchUpdateManyWithWhereWithoutUsersInput | merchUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: merchScalarWhereInput | merchScalarWhereInput[]
  }

  export type nexusUpdateManyWithoutUsersNestedInput = {
    create?: XOR<nexusCreateWithoutUsersInput, nexusUncheckedCreateWithoutUsersInput> | nexusCreateWithoutUsersInput[] | nexusUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: nexusCreateOrConnectWithoutUsersInput | nexusCreateOrConnectWithoutUsersInput[]
    upsert?: nexusUpsertWithWhereUniqueWithoutUsersInput | nexusUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: nexusCreateManyUsersInputEnvelope
    set?: nexusWhereUniqueInput | nexusWhereUniqueInput[]
    disconnect?: nexusWhereUniqueInput | nexusWhereUniqueInput[]
    delete?: nexusWhereUniqueInput | nexusWhereUniqueInput[]
    connect?: nexusWhereUniqueInput | nexusWhereUniqueInput[]
    update?: nexusUpdateWithWhereUniqueWithoutUsersInput | nexusUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: nexusUpdateManyWithWhereWithoutUsersInput | nexusUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: nexusScalarWhereInput | nexusScalarWhereInput[]
  }

  export type quizzesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<quizzesCreateWithoutUsersInput, quizzesUncheckedCreateWithoutUsersInput> | quizzesCreateWithoutUsersInput[] | quizzesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: quizzesCreateOrConnectWithoutUsersInput | quizzesCreateOrConnectWithoutUsersInput[]
    upsert?: quizzesUpsertWithWhereUniqueWithoutUsersInput | quizzesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: quizzesCreateManyUsersInputEnvelope
    set?: quizzesWhereUniqueInput | quizzesWhereUniqueInput[]
    disconnect?: quizzesWhereUniqueInput | quizzesWhereUniqueInput[]
    delete?: quizzesWhereUniqueInput | quizzesWhereUniqueInput[]
    connect?: quizzesWhereUniqueInput | quizzesWhereUniqueInput[]
    update?: quizzesUpdateWithWhereUniqueWithoutUsersInput | quizzesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: quizzesUpdateManyWithWhereWithoutUsersInput | quizzesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: quizzesScalarWhereInput | quizzesScalarWhereInput[]
  }

  export type bucketUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<bucketCreateWithoutUsersInput, bucketUncheckedCreateWithoutUsersInput>
    connectOrCreate?: bucketCreateOrConnectWithoutUsersInput
    upsert?: bucketUpsertWithoutUsersInput
    disconnect?: bucketWhereInput | boolean
    delete?: bucketWhereInput | boolean
    connect?: bucketWhereUniqueInput
    update?: XOR<XOR<bucketUpdateToOneWithWhereWithoutUsersInput, bucketUpdateWithoutUsersInput>, bucketUncheckedUpdateWithoutUsersInput>
  }

  export type chronicleUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<chronicleCreateWithoutUsersInput, chronicleUncheckedCreateWithoutUsersInput> | chronicleCreateWithoutUsersInput[] | chronicleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: chronicleCreateOrConnectWithoutUsersInput | chronicleCreateOrConnectWithoutUsersInput[]
    upsert?: chronicleUpsertWithWhereUniqueWithoutUsersInput | chronicleUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: chronicleCreateManyUsersInputEnvelope
    set?: chronicleWhereUniqueInput | chronicleWhereUniqueInput[]
    disconnect?: chronicleWhereUniqueInput | chronicleWhereUniqueInput[]
    delete?: chronicleWhereUniqueInput | chronicleWhereUniqueInput[]
    connect?: chronicleWhereUniqueInput | chronicleWhereUniqueInput[]
    update?: chronicleUpdateWithWhereUniqueWithoutUsersInput | chronicleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: chronicleUpdateManyWithWhereWithoutUsersInput | chronicleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: chronicleScalarWhereInput | chronicleScalarWhereInput[]
  }

  export type merchUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<merchCreateWithoutUsersInput, merchUncheckedCreateWithoutUsersInput> | merchCreateWithoutUsersInput[] | merchUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: merchCreateOrConnectWithoutUsersInput | merchCreateOrConnectWithoutUsersInput[]
    upsert?: merchUpsertWithWhereUniqueWithoutUsersInput | merchUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: merchCreateManyUsersInputEnvelope
    set?: merchWhereUniqueInput | merchWhereUniqueInput[]
    disconnect?: merchWhereUniqueInput | merchWhereUniqueInput[]
    delete?: merchWhereUniqueInput | merchWhereUniqueInput[]
    connect?: merchWhereUniqueInput | merchWhereUniqueInput[]
    update?: merchUpdateWithWhereUniqueWithoutUsersInput | merchUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: merchUpdateManyWithWhereWithoutUsersInput | merchUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: merchScalarWhereInput | merchScalarWhereInput[]
  }

  export type nexusUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<nexusCreateWithoutUsersInput, nexusUncheckedCreateWithoutUsersInput> | nexusCreateWithoutUsersInput[] | nexusUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: nexusCreateOrConnectWithoutUsersInput | nexusCreateOrConnectWithoutUsersInput[]
    upsert?: nexusUpsertWithWhereUniqueWithoutUsersInput | nexusUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: nexusCreateManyUsersInputEnvelope
    set?: nexusWhereUniqueInput | nexusWhereUniqueInput[]
    disconnect?: nexusWhereUniqueInput | nexusWhereUniqueInput[]
    delete?: nexusWhereUniqueInput | nexusWhereUniqueInput[]
    connect?: nexusWhereUniqueInput | nexusWhereUniqueInput[]
    update?: nexusUpdateWithWhereUniqueWithoutUsersInput | nexusUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: nexusUpdateManyWithWhereWithoutUsersInput | nexusUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: nexusScalarWhereInput | nexusScalarWhereInput[]
  }

  export type quizzesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<quizzesCreateWithoutUsersInput, quizzesUncheckedCreateWithoutUsersInput> | quizzesCreateWithoutUsersInput[] | quizzesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: quizzesCreateOrConnectWithoutUsersInput | quizzesCreateOrConnectWithoutUsersInput[]
    upsert?: quizzesUpsertWithWhereUniqueWithoutUsersInput | quizzesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: quizzesCreateManyUsersInputEnvelope
    set?: quizzesWhereUniqueInput | quizzesWhereUniqueInput[]
    disconnect?: quizzesWhereUniqueInput | quizzesWhereUniqueInput[]
    delete?: quizzesWhereUniqueInput | quizzesWhereUniqueInput[]
    connect?: quizzesWhereUniqueInput | quizzesWhereUniqueInput[]
    update?: quizzesUpdateWithWhereUniqueWithoutUsersInput | quizzesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: quizzesUpdateManyWithWhereWithoutUsersInput | quizzesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: quizzesScalarWhereInput | quizzesScalarWhereInput[]
  }

  export type bucketCreateNestedManyWithoutWikiInput = {
    create?: XOR<bucketCreateWithoutWikiInput, bucketUncheckedCreateWithoutWikiInput> | bucketCreateWithoutWikiInput[] | bucketUncheckedCreateWithoutWikiInput[]
    connectOrCreate?: bucketCreateOrConnectWithoutWikiInput | bucketCreateOrConnectWithoutWikiInput[]
    createMany?: bucketCreateManyWikiInputEnvelope
    connect?: bucketWhereUniqueInput | bucketWhereUniqueInput[]
  }

  export type quizzesCreateNestedManyWithoutWikiInput = {
    create?: XOR<quizzesCreateWithoutWikiInput, quizzesUncheckedCreateWithoutWikiInput> | quizzesCreateWithoutWikiInput[] | quizzesUncheckedCreateWithoutWikiInput[]
    connectOrCreate?: quizzesCreateOrConnectWithoutWikiInput | quizzesCreateOrConnectWithoutWikiInput[]
    createMany?: quizzesCreateManyWikiInputEnvelope
    connect?: quizzesWhereUniqueInput | quizzesWhereUniqueInput[]
  }

  export type seasonCreateNestedManyWithoutWikiInput = {
    create?: XOR<seasonCreateWithoutWikiInput, seasonUncheckedCreateWithoutWikiInput> | seasonCreateWithoutWikiInput[] | seasonUncheckedCreateWithoutWikiInput[]
    connectOrCreate?: seasonCreateOrConnectWithoutWikiInput | seasonCreateOrConnectWithoutWikiInput[]
    createMany?: seasonCreateManyWikiInputEnvelope
    connect?: seasonWhereUniqueInput | seasonWhereUniqueInput[]
  }

  export type bucketUncheckedCreateNestedManyWithoutWikiInput = {
    create?: XOR<bucketCreateWithoutWikiInput, bucketUncheckedCreateWithoutWikiInput> | bucketCreateWithoutWikiInput[] | bucketUncheckedCreateWithoutWikiInput[]
    connectOrCreate?: bucketCreateOrConnectWithoutWikiInput | bucketCreateOrConnectWithoutWikiInput[]
    createMany?: bucketCreateManyWikiInputEnvelope
    connect?: bucketWhereUniqueInput | bucketWhereUniqueInput[]
  }

  export type quizzesUncheckedCreateNestedManyWithoutWikiInput = {
    create?: XOR<quizzesCreateWithoutWikiInput, quizzesUncheckedCreateWithoutWikiInput> | quizzesCreateWithoutWikiInput[] | quizzesUncheckedCreateWithoutWikiInput[]
    connectOrCreate?: quizzesCreateOrConnectWithoutWikiInput | quizzesCreateOrConnectWithoutWikiInput[]
    createMany?: quizzesCreateManyWikiInputEnvelope
    connect?: quizzesWhereUniqueInput | quizzesWhereUniqueInput[]
  }

  export type seasonUncheckedCreateNestedManyWithoutWikiInput = {
    create?: XOR<seasonCreateWithoutWikiInput, seasonUncheckedCreateWithoutWikiInput> | seasonCreateWithoutWikiInput[] | seasonUncheckedCreateWithoutWikiInput[]
    connectOrCreate?: seasonCreateOrConnectWithoutWikiInput | seasonCreateOrConnectWithoutWikiInput[]
    createMany?: seasonCreateManyWikiInputEnvelope
    connect?: seasonWhereUniqueInput | seasonWhereUniqueInput[]
  }

  export type bucketUpdateManyWithoutWikiNestedInput = {
    create?: XOR<bucketCreateWithoutWikiInput, bucketUncheckedCreateWithoutWikiInput> | bucketCreateWithoutWikiInput[] | bucketUncheckedCreateWithoutWikiInput[]
    connectOrCreate?: bucketCreateOrConnectWithoutWikiInput | bucketCreateOrConnectWithoutWikiInput[]
    upsert?: bucketUpsertWithWhereUniqueWithoutWikiInput | bucketUpsertWithWhereUniqueWithoutWikiInput[]
    createMany?: bucketCreateManyWikiInputEnvelope
    set?: bucketWhereUniqueInput | bucketWhereUniqueInput[]
    disconnect?: bucketWhereUniqueInput | bucketWhereUniqueInput[]
    delete?: bucketWhereUniqueInput | bucketWhereUniqueInput[]
    connect?: bucketWhereUniqueInput | bucketWhereUniqueInput[]
    update?: bucketUpdateWithWhereUniqueWithoutWikiInput | bucketUpdateWithWhereUniqueWithoutWikiInput[]
    updateMany?: bucketUpdateManyWithWhereWithoutWikiInput | bucketUpdateManyWithWhereWithoutWikiInput[]
    deleteMany?: bucketScalarWhereInput | bucketScalarWhereInput[]
  }

  export type quizzesUpdateManyWithoutWikiNestedInput = {
    create?: XOR<quizzesCreateWithoutWikiInput, quizzesUncheckedCreateWithoutWikiInput> | quizzesCreateWithoutWikiInput[] | quizzesUncheckedCreateWithoutWikiInput[]
    connectOrCreate?: quizzesCreateOrConnectWithoutWikiInput | quizzesCreateOrConnectWithoutWikiInput[]
    upsert?: quizzesUpsertWithWhereUniqueWithoutWikiInput | quizzesUpsertWithWhereUniqueWithoutWikiInput[]
    createMany?: quizzesCreateManyWikiInputEnvelope
    set?: quizzesWhereUniqueInput | quizzesWhereUniqueInput[]
    disconnect?: quizzesWhereUniqueInput | quizzesWhereUniqueInput[]
    delete?: quizzesWhereUniqueInput | quizzesWhereUniqueInput[]
    connect?: quizzesWhereUniqueInput | quizzesWhereUniqueInput[]
    update?: quizzesUpdateWithWhereUniqueWithoutWikiInput | quizzesUpdateWithWhereUniqueWithoutWikiInput[]
    updateMany?: quizzesUpdateManyWithWhereWithoutWikiInput | quizzesUpdateManyWithWhereWithoutWikiInput[]
    deleteMany?: quizzesScalarWhereInput | quizzesScalarWhereInput[]
  }

  export type seasonUpdateManyWithoutWikiNestedInput = {
    create?: XOR<seasonCreateWithoutWikiInput, seasonUncheckedCreateWithoutWikiInput> | seasonCreateWithoutWikiInput[] | seasonUncheckedCreateWithoutWikiInput[]
    connectOrCreate?: seasonCreateOrConnectWithoutWikiInput | seasonCreateOrConnectWithoutWikiInput[]
    upsert?: seasonUpsertWithWhereUniqueWithoutWikiInput | seasonUpsertWithWhereUniqueWithoutWikiInput[]
    createMany?: seasonCreateManyWikiInputEnvelope
    set?: seasonWhereUniqueInput | seasonWhereUniqueInput[]
    disconnect?: seasonWhereUniqueInput | seasonWhereUniqueInput[]
    delete?: seasonWhereUniqueInput | seasonWhereUniqueInput[]
    connect?: seasonWhereUniqueInput | seasonWhereUniqueInput[]
    update?: seasonUpdateWithWhereUniqueWithoutWikiInput | seasonUpdateWithWhereUniqueWithoutWikiInput[]
    updateMany?: seasonUpdateManyWithWhereWithoutWikiInput | seasonUpdateManyWithWhereWithoutWikiInput[]
    deleteMany?: seasonScalarWhereInput | seasonScalarWhereInput[]
  }

  export type bucketUncheckedUpdateManyWithoutWikiNestedInput = {
    create?: XOR<bucketCreateWithoutWikiInput, bucketUncheckedCreateWithoutWikiInput> | bucketCreateWithoutWikiInput[] | bucketUncheckedCreateWithoutWikiInput[]
    connectOrCreate?: bucketCreateOrConnectWithoutWikiInput | bucketCreateOrConnectWithoutWikiInput[]
    upsert?: bucketUpsertWithWhereUniqueWithoutWikiInput | bucketUpsertWithWhereUniqueWithoutWikiInput[]
    createMany?: bucketCreateManyWikiInputEnvelope
    set?: bucketWhereUniqueInput | bucketWhereUniqueInput[]
    disconnect?: bucketWhereUniqueInput | bucketWhereUniqueInput[]
    delete?: bucketWhereUniqueInput | bucketWhereUniqueInput[]
    connect?: bucketWhereUniqueInput | bucketWhereUniqueInput[]
    update?: bucketUpdateWithWhereUniqueWithoutWikiInput | bucketUpdateWithWhereUniqueWithoutWikiInput[]
    updateMany?: bucketUpdateManyWithWhereWithoutWikiInput | bucketUpdateManyWithWhereWithoutWikiInput[]
    deleteMany?: bucketScalarWhereInput | bucketScalarWhereInput[]
  }

  export type quizzesUncheckedUpdateManyWithoutWikiNestedInput = {
    create?: XOR<quizzesCreateWithoutWikiInput, quizzesUncheckedCreateWithoutWikiInput> | quizzesCreateWithoutWikiInput[] | quizzesUncheckedCreateWithoutWikiInput[]
    connectOrCreate?: quizzesCreateOrConnectWithoutWikiInput | quizzesCreateOrConnectWithoutWikiInput[]
    upsert?: quizzesUpsertWithWhereUniqueWithoutWikiInput | quizzesUpsertWithWhereUniqueWithoutWikiInput[]
    createMany?: quizzesCreateManyWikiInputEnvelope
    set?: quizzesWhereUniqueInput | quizzesWhereUniqueInput[]
    disconnect?: quizzesWhereUniqueInput | quizzesWhereUniqueInput[]
    delete?: quizzesWhereUniqueInput | quizzesWhereUniqueInput[]
    connect?: quizzesWhereUniqueInput | quizzesWhereUniqueInput[]
    update?: quizzesUpdateWithWhereUniqueWithoutWikiInput | quizzesUpdateWithWhereUniqueWithoutWikiInput[]
    updateMany?: quizzesUpdateManyWithWhereWithoutWikiInput | quizzesUpdateManyWithWhereWithoutWikiInput[]
    deleteMany?: quizzesScalarWhereInput | quizzesScalarWhereInput[]
  }

  export type seasonUncheckedUpdateManyWithoutWikiNestedInput = {
    create?: XOR<seasonCreateWithoutWikiInput, seasonUncheckedCreateWithoutWikiInput> | seasonCreateWithoutWikiInput[] | seasonUncheckedCreateWithoutWikiInput[]
    connectOrCreate?: seasonCreateOrConnectWithoutWikiInput | seasonCreateOrConnectWithoutWikiInput[]
    upsert?: seasonUpsertWithWhereUniqueWithoutWikiInput | seasonUpsertWithWhereUniqueWithoutWikiInput[]
    createMany?: seasonCreateManyWikiInputEnvelope
    set?: seasonWhereUniqueInput | seasonWhereUniqueInput[]
    disconnect?: seasonWhereUniqueInput | seasonWhereUniqueInput[]
    delete?: seasonWhereUniqueInput | seasonWhereUniqueInput[]
    connect?: seasonWhereUniqueInput | seasonWhereUniqueInput[]
    update?: seasonUpdateWithWhereUniqueWithoutWikiInput | seasonUpdateWithWhereUniqueWithoutWikiInput[]
    updateMany?: seasonUpdateManyWithWhereWithoutWikiInput | seasonUpdateManyWithWhereWithoutWikiInput[]
    deleteMany?: seasonScalarWhereInput | seasonScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type usersCreateWithoutBucketInput = {
    email_id: string
    guild: string
    user_id: string
    username?: string | null
    joined_date?: Date | string | null
    nani?: number | null
    avatar?: number | null
    chronicle?: chronicleCreateNestedManyWithoutUsersInput
    merch?: merchCreateNestedManyWithoutUsersInput
    nexus?: nexusCreateNestedManyWithoutUsersInput
    quizzes?: quizzesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutBucketInput = {
    email_id: string
    guild: string
    user_id: string
    username?: string | null
    joined_date?: Date | string | null
    nani?: number | null
    avatar?: number | null
    chronicle?: chronicleUncheckedCreateNestedManyWithoutUsersInput
    merch?: merchUncheckedCreateNestedManyWithoutUsersInput
    nexus?: nexusUncheckedCreateNestedManyWithoutUsersInput
    quizzes?: quizzesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutBucketInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBucketInput, usersUncheckedCreateWithoutBucketInput>
  }

  export type wikiCreateWithoutBucketInput = {
    wiki_id: string
    anime_name?: string | null
    poster?: string | null
    summary?: string | null
    status?: boolean | null
    rating?: number | null
    quizzes?: quizzesCreateNestedManyWithoutWikiInput
    season?: seasonCreateNestedManyWithoutWikiInput
  }

  export type wikiUncheckedCreateWithoutBucketInput = {
    wiki_id: string
    anime_name?: string | null
    poster?: string | null
    summary?: string | null
    status?: boolean | null
    rating?: number | null
    quizzes?: quizzesUncheckedCreateNestedManyWithoutWikiInput
    season?: seasonUncheckedCreateNestedManyWithoutWikiInput
  }

  export type wikiCreateOrConnectWithoutBucketInput = {
    where: wikiWhereUniqueInput
    create: XOR<wikiCreateWithoutBucketInput, wikiUncheckedCreateWithoutBucketInput>
  }

  export type usersUpsertWithoutBucketInput = {
    update: XOR<usersUpdateWithoutBucketInput, usersUncheckedUpdateWithoutBucketInput>
    create: XOR<usersCreateWithoutBucketInput, usersUncheckedCreateWithoutBucketInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBucketInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBucketInput, usersUncheckedUpdateWithoutBucketInput>
  }

  export type usersUpdateWithoutBucketInput = {
    email_id?: StringFieldUpdateOperationsInput | string
    guild?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    joined_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nani?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableIntFieldUpdateOperationsInput | number | null
    chronicle?: chronicleUpdateManyWithoutUsersNestedInput
    merch?: merchUpdateManyWithoutUsersNestedInput
    nexus?: nexusUpdateManyWithoutUsersNestedInput
    quizzes?: quizzesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutBucketInput = {
    email_id?: StringFieldUpdateOperationsInput | string
    guild?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    joined_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nani?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableIntFieldUpdateOperationsInput | number | null
    chronicle?: chronicleUncheckedUpdateManyWithoutUsersNestedInput
    merch?: merchUncheckedUpdateManyWithoutUsersNestedInput
    nexus?: nexusUncheckedUpdateManyWithoutUsersNestedInput
    quizzes?: quizzesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type wikiUpsertWithoutBucketInput = {
    update: XOR<wikiUpdateWithoutBucketInput, wikiUncheckedUpdateWithoutBucketInput>
    create: XOR<wikiCreateWithoutBucketInput, wikiUncheckedCreateWithoutBucketInput>
    where?: wikiWhereInput
  }

  export type wikiUpdateToOneWithWhereWithoutBucketInput = {
    where?: wikiWhereInput
    data: XOR<wikiUpdateWithoutBucketInput, wikiUncheckedUpdateWithoutBucketInput>
  }

  export type wikiUpdateWithoutBucketInput = {
    wiki_id?: StringFieldUpdateOperationsInput | string
    anime_name?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    quizzes?: quizzesUpdateManyWithoutWikiNestedInput
    season?: seasonUpdateManyWithoutWikiNestedInput
  }

  export type wikiUncheckedUpdateWithoutBucketInput = {
    wiki_id?: StringFieldUpdateOperationsInput | string
    anime_name?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    quizzes?: quizzesUncheckedUpdateManyWithoutWikiNestedInput
    season?: seasonUncheckedUpdateManyWithoutWikiNestedInput
  }

  export type usersCreateWithoutChronicleInput = {
    email_id: string
    guild: string
    user_id: string
    username?: string | null
    joined_date?: Date | string | null
    nani?: number | null
    avatar?: number | null
    bucket?: bucketCreateNestedOneWithoutUsersInput
    merch?: merchCreateNestedManyWithoutUsersInput
    nexus?: nexusCreateNestedManyWithoutUsersInput
    quizzes?: quizzesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutChronicleInput = {
    email_id: string
    guild: string
    user_id: string
    username?: string | null
    joined_date?: Date | string | null
    nani?: number | null
    avatar?: number | null
    bucket?: bucketUncheckedCreateNestedOneWithoutUsersInput
    merch?: merchUncheckedCreateNestedManyWithoutUsersInput
    nexus?: nexusUncheckedCreateNestedManyWithoutUsersInput
    quizzes?: quizzesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutChronicleInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutChronicleInput, usersUncheckedCreateWithoutChronicleInput>
  }

  export type usersUpsertWithoutChronicleInput = {
    update: XOR<usersUpdateWithoutChronicleInput, usersUncheckedUpdateWithoutChronicleInput>
    create: XOR<usersCreateWithoutChronicleInput, usersUncheckedCreateWithoutChronicleInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutChronicleInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutChronicleInput, usersUncheckedUpdateWithoutChronicleInput>
  }

  export type usersUpdateWithoutChronicleInput = {
    email_id?: StringFieldUpdateOperationsInput | string
    guild?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    joined_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nani?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: bucketUpdateOneWithoutUsersNestedInput
    merch?: merchUpdateManyWithoutUsersNestedInput
    nexus?: nexusUpdateManyWithoutUsersNestedInput
    quizzes?: quizzesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutChronicleInput = {
    email_id?: StringFieldUpdateOperationsInput | string
    guild?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    joined_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nani?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: bucketUncheckedUpdateOneWithoutUsersNestedInput
    merch?: merchUncheckedUpdateManyWithoutUsersNestedInput
    nexus?: nexusUncheckedUpdateManyWithoutUsersNestedInput
    quizzes?: quizzesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutMerchInput = {
    email_id: string
    guild: string
    user_id: string
    username?: string | null
    joined_date?: Date | string | null
    nani?: number | null
    avatar?: number | null
    bucket?: bucketCreateNestedOneWithoutUsersInput
    chronicle?: chronicleCreateNestedManyWithoutUsersInput
    nexus?: nexusCreateNestedManyWithoutUsersInput
    quizzes?: quizzesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutMerchInput = {
    email_id: string
    guild: string
    user_id: string
    username?: string | null
    joined_date?: Date | string | null
    nani?: number | null
    avatar?: number | null
    bucket?: bucketUncheckedCreateNestedOneWithoutUsersInput
    chronicle?: chronicleUncheckedCreateNestedManyWithoutUsersInput
    nexus?: nexusUncheckedCreateNestedManyWithoutUsersInput
    quizzes?: quizzesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutMerchInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMerchInput, usersUncheckedCreateWithoutMerchInput>
  }

  export type usersUpsertWithoutMerchInput = {
    update: XOR<usersUpdateWithoutMerchInput, usersUncheckedUpdateWithoutMerchInput>
    create: XOR<usersCreateWithoutMerchInput, usersUncheckedCreateWithoutMerchInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMerchInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMerchInput, usersUncheckedUpdateWithoutMerchInput>
  }

  export type usersUpdateWithoutMerchInput = {
    email_id?: StringFieldUpdateOperationsInput | string
    guild?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    joined_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nani?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: bucketUpdateOneWithoutUsersNestedInput
    chronicle?: chronicleUpdateManyWithoutUsersNestedInput
    nexus?: nexusUpdateManyWithoutUsersNestedInput
    quizzes?: quizzesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutMerchInput = {
    email_id?: StringFieldUpdateOperationsInput | string
    guild?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    joined_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nani?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: bucketUncheckedUpdateOneWithoutUsersNestedInput
    chronicle?: chronicleUncheckedUpdateManyWithoutUsersNestedInput
    nexus?: nexusUncheckedUpdateManyWithoutUsersNestedInput
    quizzes?: quizzesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutNexusInput = {
    email_id: string
    guild: string
    user_id: string
    username?: string | null
    joined_date?: Date | string | null
    nani?: number | null
    avatar?: number | null
    bucket?: bucketCreateNestedOneWithoutUsersInput
    chronicle?: chronicleCreateNestedManyWithoutUsersInput
    merch?: merchCreateNestedManyWithoutUsersInput
    quizzes?: quizzesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutNexusInput = {
    email_id: string
    guild: string
    user_id: string
    username?: string | null
    joined_date?: Date | string | null
    nani?: number | null
    avatar?: number | null
    bucket?: bucketUncheckedCreateNestedOneWithoutUsersInput
    chronicle?: chronicleUncheckedCreateNestedManyWithoutUsersInput
    merch?: merchUncheckedCreateNestedManyWithoutUsersInput
    quizzes?: quizzesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutNexusInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutNexusInput, usersUncheckedCreateWithoutNexusInput>
  }

  export type usersUpsertWithoutNexusInput = {
    update: XOR<usersUpdateWithoutNexusInput, usersUncheckedUpdateWithoutNexusInput>
    create: XOR<usersCreateWithoutNexusInput, usersUncheckedCreateWithoutNexusInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutNexusInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutNexusInput, usersUncheckedUpdateWithoutNexusInput>
  }

  export type usersUpdateWithoutNexusInput = {
    email_id?: StringFieldUpdateOperationsInput | string
    guild?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    joined_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nani?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: bucketUpdateOneWithoutUsersNestedInput
    chronicle?: chronicleUpdateManyWithoutUsersNestedInput
    merch?: merchUpdateManyWithoutUsersNestedInput
    quizzes?: quizzesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutNexusInput = {
    email_id?: StringFieldUpdateOperationsInput | string
    guild?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    joined_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nani?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: bucketUncheckedUpdateOneWithoutUsersNestedInput
    chronicle?: chronicleUncheckedUpdateManyWithoutUsersNestedInput
    merch?: merchUncheckedUpdateManyWithoutUsersNestedInput
    quizzes?: quizzesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type wikiCreateWithoutQuizzesInput = {
    wiki_id: string
    anime_name?: string | null
    poster?: string | null
    summary?: string | null
    status?: boolean | null
    rating?: number | null
    bucket?: bucketCreateNestedManyWithoutWikiInput
    season?: seasonCreateNestedManyWithoutWikiInput
  }

  export type wikiUncheckedCreateWithoutQuizzesInput = {
    wiki_id: string
    anime_name?: string | null
    poster?: string | null
    summary?: string | null
    status?: boolean | null
    rating?: number | null
    bucket?: bucketUncheckedCreateNestedManyWithoutWikiInput
    season?: seasonUncheckedCreateNestedManyWithoutWikiInput
  }

  export type wikiCreateOrConnectWithoutQuizzesInput = {
    where: wikiWhereUniqueInput
    create: XOR<wikiCreateWithoutQuizzesInput, wikiUncheckedCreateWithoutQuizzesInput>
  }

  export type usersCreateWithoutQuizzesInput = {
    email_id: string
    guild: string
    user_id: string
    username?: string | null
    joined_date?: Date | string | null
    nani?: number | null
    avatar?: number | null
    bucket?: bucketCreateNestedOneWithoutUsersInput
    chronicle?: chronicleCreateNestedManyWithoutUsersInput
    merch?: merchCreateNestedManyWithoutUsersInput
    nexus?: nexusCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutQuizzesInput = {
    email_id: string
    guild: string
    user_id: string
    username?: string | null
    joined_date?: Date | string | null
    nani?: number | null
    avatar?: number | null
    bucket?: bucketUncheckedCreateNestedOneWithoutUsersInput
    chronicle?: chronicleUncheckedCreateNestedManyWithoutUsersInput
    merch?: merchUncheckedCreateNestedManyWithoutUsersInput
    nexus?: nexusUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutQuizzesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutQuizzesInput, usersUncheckedCreateWithoutQuizzesInput>
  }

  export type wikiUpsertWithoutQuizzesInput = {
    update: XOR<wikiUpdateWithoutQuizzesInput, wikiUncheckedUpdateWithoutQuizzesInput>
    create: XOR<wikiCreateWithoutQuizzesInput, wikiUncheckedCreateWithoutQuizzesInput>
    where?: wikiWhereInput
  }

  export type wikiUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: wikiWhereInput
    data: XOR<wikiUpdateWithoutQuizzesInput, wikiUncheckedUpdateWithoutQuizzesInput>
  }

  export type wikiUpdateWithoutQuizzesInput = {
    wiki_id?: StringFieldUpdateOperationsInput | string
    anime_name?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: bucketUpdateManyWithoutWikiNestedInput
    season?: seasonUpdateManyWithoutWikiNestedInput
  }

  export type wikiUncheckedUpdateWithoutQuizzesInput = {
    wiki_id?: StringFieldUpdateOperationsInput | string
    anime_name?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: bucketUncheckedUpdateManyWithoutWikiNestedInput
    season?: seasonUncheckedUpdateManyWithoutWikiNestedInput
  }

  export type usersUpsertWithoutQuizzesInput = {
    update: XOR<usersUpdateWithoutQuizzesInput, usersUncheckedUpdateWithoutQuizzesInput>
    create: XOR<usersCreateWithoutQuizzesInput, usersUncheckedCreateWithoutQuizzesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutQuizzesInput, usersUncheckedUpdateWithoutQuizzesInput>
  }

  export type usersUpdateWithoutQuizzesInput = {
    email_id?: StringFieldUpdateOperationsInput | string
    guild?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    joined_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nani?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: bucketUpdateOneWithoutUsersNestedInput
    chronicle?: chronicleUpdateManyWithoutUsersNestedInput
    merch?: merchUpdateManyWithoutUsersNestedInput
    nexus?: nexusUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutQuizzesInput = {
    email_id?: StringFieldUpdateOperationsInput | string
    guild?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    joined_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nani?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: bucketUncheckedUpdateOneWithoutUsersNestedInput
    chronicle?: chronicleUncheckedUpdateManyWithoutUsersNestedInput
    merch?: merchUncheckedUpdateManyWithoutUsersNestedInput
    nexus?: nexusUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type wikiCreateWithoutSeasonInput = {
    wiki_id: string
    anime_name?: string | null
    poster?: string | null
    summary?: string | null
    status?: boolean | null
    rating?: number | null
    bucket?: bucketCreateNestedManyWithoutWikiInput
    quizzes?: quizzesCreateNestedManyWithoutWikiInput
  }

  export type wikiUncheckedCreateWithoutSeasonInput = {
    wiki_id: string
    anime_name?: string | null
    poster?: string | null
    summary?: string | null
    status?: boolean | null
    rating?: number | null
    bucket?: bucketUncheckedCreateNestedManyWithoutWikiInput
    quizzes?: quizzesUncheckedCreateNestedManyWithoutWikiInput
  }

  export type wikiCreateOrConnectWithoutSeasonInput = {
    where: wikiWhereUniqueInput
    create: XOR<wikiCreateWithoutSeasonInput, wikiUncheckedCreateWithoutSeasonInput>
  }

  export type wikiUpsertWithoutSeasonInput = {
    update: XOR<wikiUpdateWithoutSeasonInput, wikiUncheckedUpdateWithoutSeasonInput>
    create: XOR<wikiCreateWithoutSeasonInput, wikiUncheckedCreateWithoutSeasonInput>
    where?: wikiWhereInput
  }

  export type wikiUpdateToOneWithWhereWithoutSeasonInput = {
    where?: wikiWhereInput
    data: XOR<wikiUpdateWithoutSeasonInput, wikiUncheckedUpdateWithoutSeasonInput>
  }

  export type wikiUpdateWithoutSeasonInput = {
    wiki_id?: StringFieldUpdateOperationsInput | string
    anime_name?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: bucketUpdateManyWithoutWikiNestedInput
    quizzes?: quizzesUpdateManyWithoutWikiNestedInput
  }

  export type wikiUncheckedUpdateWithoutSeasonInput = {
    wiki_id?: StringFieldUpdateOperationsInput | string
    anime_name?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    bucket?: bucketUncheckedUpdateManyWithoutWikiNestedInput
    quizzes?: quizzesUncheckedUpdateManyWithoutWikiNestedInput
  }

  export type bucketCreateWithoutUsersInput = {
    completed?: boolean | null
    ongoing?: boolean | null
    dropped?: boolean | null
    wiki?: wikiCreateNestedOneWithoutBucketInput
  }

  export type bucketUncheckedCreateWithoutUsersInput = {
    wiki_id?: string | null
    completed?: boolean | null
    ongoing?: boolean | null
    dropped?: boolean | null
  }

  export type bucketCreateOrConnectWithoutUsersInput = {
    where: bucketWhereUniqueInput
    create: XOR<bucketCreateWithoutUsersInput, bucketUncheckedCreateWithoutUsersInput>
  }

  export type chronicleCreateWithoutUsersInput = {
    chronicle_id: string
    texts?: string | null
    likes?: number | null
  }

  export type chronicleUncheckedCreateWithoutUsersInput = {
    chronicle_id: string
    texts?: string | null
    likes?: number | null
  }

  export type chronicleCreateOrConnectWithoutUsersInput = {
    where: chronicleWhereUniqueInput
    create: XOR<chronicleCreateWithoutUsersInput, chronicleUncheckedCreateWithoutUsersInput>
  }

  export type chronicleCreateManyUsersInputEnvelope = {
    data: chronicleCreateManyUsersInput | chronicleCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type merchCreateWithoutUsersInput = {
    merch_id: string
    req_nani?: number | null
    rating?: number | null
    description?: string | null
    merch?: string | null
    image?: string | null
    avalibility_status?: boolean | null
  }

  export type merchUncheckedCreateWithoutUsersInput = {
    merch_id: string
    req_nani?: number | null
    rating?: number | null
    description?: string | null
    merch?: string | null
    image?: string | null
    avalibility_status?: boolean | null
  }

  export type merchCreateOrConnectWithoutUsersInput = {
    where: merchWhereUniqueInput
    create: XOR<merchCreateWithoutUsersInput, merchUncheckedCreateWithoutUsersInput>
  }

  export type merchCreateManyUsersInputEnvelope = {
    data: merchCreateManyUsersInput | merchCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type nexusCreateWithoutUsersInput = {
    nexus_id: string
    reply_to?: string | null
    comment?: string | null
    upvotes?: number | null
    chronicle_id?: string | null
  }

  export type nexusUncheckedCreateWithoutUsersInput = {
    nexus_id: string
    reply_to?: string | null
    comment?: string | null
    upvotes?: number | null
    chronicle_id?: string | null
  }

  export type nexusCreateOrConnectWithoutUsersInput = {
    where: nexusWhereUniqueInput
    create: XOR<nexusCreateWithoutUsersInput, nexusUncheckedCreateWithoutUsersInput>
  }

  export type nexusCreateManyUsersInputEnvelope = {
    data: nexusCreateManyUsersInput | nexusCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type quizzesCreateWithoutUsersInput = {
    quiz_id: string
    difficulty_lvl?: number | null
    created_date?: Date | string | null
    wiki?: wikiCreateNestedOneWithoutQuizzesInput
  }

  export type quizzesUncheckedCreateWithoutUsersInput = {
    quiz_id: string
    difficulty_lvl?: number | null
    created_date?: Date | string | null
    anime_name?: string | null
  }

  export type quizzesCreateOrConnectWithoutUsersInput = {
    where: quizzesWhereUniqueInput
    create: XOR<quizzesCreateWithoutUsersInput, quizzesUncheckedCreateWithoutUsersInput>
  }

  export type quizzesCreateManyUsersInputEnvelope = {
    data: quizzesCreateManyUsersInput | quizzesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type bucketUpsertWithoutUsersInput = {
    update: XOR<bucketUpdateWithoutUsersInput, bucketUncheckedUpdateWithoutUsersInput>
    create: XOR<bucketCreateWithoutUsersInput, bucketUncheckedCreateWithoutUsersInput>
    where?: bucketWhereInput
  }

  export type bucketUpdateToOneWithWhereWithoutUsersInput = {
    where?: bucketWhereInput
    data: XOR<bucketUpdateWithoutUsersInput, bucketUncheckedUpdateWithoutUsersInput>
  }

  export type bucketUpdateWithoutUsersInput = {
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ongoing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dropped?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wiki?: wikiUpdateOneWithoutBucketNestedInput
  }

  export type bucketUncheckedUpdateWithoutUsersInput = {
    wiki_id?: NullableStringFieldUpdateOperationsInput | string | null
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ongoing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dropped?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type chronicleUpsertWithWhereUniqueWithoutUsersInput = {
    where: chronicleWhereUniqueInput
    update: XOR<chronicleUpdateWithoutUsersInput, chronicleUncheckedUpdateWithoutUsersInput>
    create: XOR<chronicleCreateWithoutUsersInput, chronicleUncheckedCreateWithoutUsersInput>
  }

  export type chronicleUpdateWithWhereUniqueWithoutUsersInput = {
    where: chronicleWhereUniqueInput
    data: XOR<chronicleUpdateWithoutUsersInput, chronicleUncheckedUpdateWithoutUsersInput>
  }

  export type chronicleUpdateManyWithWhereWithoutUsersInput = {
    where: chronicleScalarWhereInput
    data: XOR<chronicleUpdateManyMutationInput, chronicleUncheckedUpdateManyWithoutUsersInput>
  }

  export type chronicleScalarWhereInput = {
    AND?: chronicleScalarWhereInput | chronicleScalarWhereInput[]
    OR?: chronicleScalarWhereInput[]
    NOT?: chronicleScalarWhereInput | chronicleScalarWhereInput[]
    chronicle_id?: StringFilter<"chronicle"> | string
    texts?: StringNullableFilter<"chronicle"> | string | null
    likes?: IntNullableFilter<"chronicle"> | number | null
    writer_id?: StringNullableFilter<"chronicle"> | string | null
  }

  export type merchUpsertWithWhereUniqueWithoutUsersInput = {
    where: merchWhereUniqueInput
    update: XOR<merchUpdateWithoutUsersInput, merchUncheckedUpdateWithoutUsersInput>
    create: XOR<merchCreateWithoutUsersInput, merchUncheckedCreateWithoutUsersInput>
  }

  export type merchUpdateWithWhereUniqueWithoutUsersInput = {
    where: merchWhereUniqueInput
    data: XOR<merchUpdateWithoutUsersInput, merchUncheckedUpdateWithoutUsersInput>
  }

  export type merchUpdateManyWithWhereWithoutUsersInput = {
    where: merchScalarWhereInput
    data: XOR<merchUpdateManyMutationInput, merchUncheckedUpdateManyWithoutUsersInput>
  }

  export type merchScalarWhereInput = {
    AND?: merchScalarWhereInput | merchScalarWhereInput[]
    OR?: merchScalarWhereInput[]
    NOT?: merchScalarWhereInput | merchScalarWhereInput[]
    merch_id?: StringFilter<"merch"> | string
    req_nani?: IntNullableFilter<"merch"> | number | null
    rating?: IntNullableFilter<"merch"> | number | null
    description?: StringNullableFilter<"merch"> | string | null
    merch?: StringNullableFilter<"merch"> | string | null
    seller_id?: StringNullableFilter<"merch"> | string | null
    image?: StringNullableFilter<"merch"> | string | null
    avalibility_status?: BoolNullableFilter<"merch"> | boolean | null
  }

  export type nexusUpsertWithWhereUniqueWithoutUsersInput = {
    where: nexusWhereUniqueInput
    update: XOR<nexusUpdateWithoutUsersInput, nexusUncheckedUpdateWithoutUsersInput>
    create: XOR<nexusCreateWithoutUsersInput, nexusUncheckedCreateWithoutUsersInput>
  }

  export type nexusUpdateWithWhereUniqueWithoutUsersInput = {
    where: nexusWhereUniqueInput
    data: XOR<nexusUpdateWithoutUsersInput, nexusUncheckedUpdateWithoutUsersInput>
  }

  export type nexusUpdateManyWithWhereWithoutUsersInput = {
    where: nexusScalarWhereInput
    data: XOR<nexusUpdateManyMutationInput, nexusUncheckedUpdateManyWithoutUsersInput>
  }

  export type nexusScalarWhereInput = {
    AND?: nexusScalarWhereInput | nexusScalarWhereInput[]
    OR?: nexusScalarWhereInput[]
    NOT?: nexusScalarWhereInput | nexusScalarWhereInput[]
    nexus_id?: StringFilter<"nexus"> | string
    user_id?: StringNullableFilter<"nexus"> | string | null
    reply_to?: StringNullableFilter<"nexus"> | string | null
    comment?: StringNullableFilter<"nexus"> | string | null
    upvotes?: IntNullableFilter<"nexus"> | number | null
    chronicle_id?: StringNullableFilter<"nexus"> | string | null
  }

  export type quizzesUpsertWithWhereUniqueWithoutUsersInput = {
    where: quizzesWhereUniqueInput
    update: XOR<quizzesUpdateWithoutUsersInput, quizzesUncheckedUpdateWithoutUsersInput>
    create: XOR<quizzesCreateWithoutUsersInput, quizzesUncheckedCreateWithoutUsersInput>
  }

  export type quizzesUpdateWithWhereUniqueWithoutUsersInput = {
    where: quizzesWhereUniqueInput
    data: XOR<quizzesUpdateWithoutUsersInput, quizzesUncheckedUpdateWithoutUsersInput>
  }

  export type quizzesUpdateManyWithWhereWithoutUsersInput = {
    where: quizzesScalarWhereInput
    data: XOR<quizzesUpdateManyMutationInput, quizzesUncheckedUpdateManyWithoutUsersInput>
  }

  export type quizzesScalarWhereInput = {
    AND?: quizzesScalarWhereInput | quizzesScalarWhereInput[]
    OR?: quizzesScalarWhereInput[]
    NOT?: quizzesScalarWhereInput | quizzesScalarWhereInput[]
    quiz_id?: StringFilter<"quizzes"> | string
    mod_id?: StringNullableFilter<"quizzes"> | string | null
    difficulty_lvl?: IntNullableFilter<"quizzes"> | number | null
    created_date?: DateTimeNullableFilter<"quizzes"> | Date | string | null
    anime_name?: StringNullableFilter<"quizzes"> | string | null
  }

  export type bucketCreateWithoutWikiInput = {
    completed?: boolean | null
    ongoing?: boolean | null
    dropped?: boolean | null
    users: usersCreateNestedOneWithoutBucketInput
  }

  export type bucketUncheckedCreateWithoutWikiInput = {
    user_id: string
    completed?: boolean | null
    ongoing?: boolean | null
    dropped?: boolean | null
  }

  export type bucketCreateOrConnectWithoutWikiInput = {
    where: bucketWhereUniqueInput
    create: XOR<bucketCreateWithoutWikiInput, bucketUncheckedCreateWithoutWikiInput>
  }

  export type bucketCreateManyWikiInputEnvelope = {
    data: bucketCreateManyWikiInput | bucketCreateManyWikiInput[]
    skipDuplicates?: boolean
  }

  export type quizzesCreateWithoutWikiInput = {
    quiz_id: string
    difficulty_lvl?: number | null
    created_date?: Date | string | null
    users?: usersCreateNestedOneWithoutQuizzesInput
  }

  export type quizzesUncheckedCreateWithoutWikiInput = {
    quiz_id: string
    mod_id?: string | null
    difficulty_lvl?: number | null
    created_date?: Date | string | null
  }

  export type quizzesCreateOrConnectWithoutWikiInput = {
    where: quizzesWhereUniqueInput
    create: XOR<quizzesCreateWithoutWikiInput, quizzesUncheckedCreateWithoutWikiInput>
  }

  export type quizzesCreateManyWikiInputEnvelope = {
    data: quizzesCreateManyWikiInput | quizzesCreateManyWikiInput[]
    skipDuplicates?: boolean
  }

  export type seasonCreateWithoutWikiInput = {
    season_number: number
    summary?: string | null
    poster?: string | null
    episode_list?: number | null
  }

  export type seasonUncheckedCreateWithoutWikiInput = {
    season_number: number
    summary?: string | null
    poster?: string | null
    episode_list?: number | null
  }

  export type seasonCreateOrConnectWithoutWikiInput = {
    where: seasonWhereUniqueInput
    create: XOR<seasonCreateWithoutWikiInput, seasonUncheckedCreateWithoutWikiInput>
  }

  export type seasonCreateManyWikiInputEnvelope = {
    data: seasonCreateManyWikiInput | seasonCreateManyWikiInput[]
    skipDuplicates?: boolean
  }

  export type bucketUpsertWithWhereUniqueWithoutWikiInput = {
    where: bucketWhereUniqueInput
    update: XOR<bucketUpdateWithoutWikiInput, bucketUncheckedUpdateWithoutWikiInput>
    create: XOR<bucketCreateWithoutWikiInput, bucketUncheckedCreateWithoutWikiInput>
  }

  export type bucketUpdateWithWhereUniqueWithoutWikiInput = {
    where: bucketWhereUniqueInput
    data: XOR<bucketUpdateWithoutWikiInput, bucketUncheckedUpdateWithoutWikiInput>
  }

  export type bucketUpdateManyWithWhereWithoutWikiInput = {
    where: bucketScalarWhereInput
    data: XOR<bucketUpdateManyMutationInput, bucketUncheckedUpdateManyWithoutWikiInput>
  }

  export type bucketScalarWhereInput = {
    AND?: bucketScalarWhereInput | bucketScalarWhereInput[]
    OR?: bucketScalarWhereInput[]
    NOT?: bucketScalarWhereInput | bucketScalarWhereInput[]
    user_id?: StringFilter<"bucket"> | string
    wiki_id?: StringNullableFilter<"bucket"> | string | null
    completed?: BoolNullableFilter<"bucket"> | boolean | null
    ongoing?: BoolNullableFilter<"bucket"> | boolean | null
    dropped?: BoolNullableFilter<"bucket"> | boolean | null
  }

  export type quizzesUpsertWithWhereUniqueWithoutWikiInput = {
    where: quizzesWhereUniqueInput
    update: XOR<quizzesUpdateWithoutWikiInput, quizzesUncheckedUpdateWithoutWikiInput>
    create: XOR<quizzesCreateWithoutWikiInput, quizzesUncheckedCreateWithoutWikiInput>
  }

  export type quizzesUpdateWithWhereUniqueWithoutWikiInput = {
    where: quizzesWhereUniqueInput
    data: XOR<quizzesUpdateWithoutWikiInput, quizzesUncheckedUpdateWithoutWikiInput>
  }

  export type quizzesUpdateManyWithWhereWithoutWikiInput = {
    where: quizzesScalarWhereInput
    data: XOR<quizzesUpdateManyMutationInput, quizzesUncheckedUpdateManyWithoutWikiInput>
  }

  export type seasonUpsertWithWhereUniqueWithoutWikiInput = {
    where: seasonWhereUniqueInput
    update: XOR<seasonUpdateWithoutWikiInput, seasonUncheckedUpdateWithoutWikiInput>
    create: XOR<seasonCreateWithoutWikiInput, seasonUncheckedCreateWithoutWikiInput>
  }

  export type seasonUpdateWithWhereUniqueWithoutWikiInput = {
    where: seasonWhereUniqueInput
    data: XOR<seasonUpdateWithoutWikiInput, seasonUncheckedUpdateWithoutWikiInput>
  }

  export type seasonUpdateManyWithWhereWithoutWikiInput = {
    where: seasonScalarWhereInput
    data: XOR<seasonUpdateManyMutationInput, seasonUncheckedUpdateManyWithoutWikiInput>
  }

  export type seasonScalarWhereInput = {
    AND?: seasonScalarWhereInput | seasonScalarWhereInput[]
    OR?: seasonScalarWhereInput[]
    NOT?: seasonScalarWhereInput | seasonScalarWhereInput[]
    season_number?: IntFilter<"season"> | number
    wiki_id?: StringNullableFilter<"season"> | string | null
    summary?: StringNullableFilter<"season"> | string | null
    poster?: StringNullableFilter<"season"> | string | null
    episode_list?: IntNullableFilter<"season"> | number | null
  }

  export type chronicleCreateManyUsersInput = {
    chronicle_id: string
    texts?: string | null
    likes?: number | null
  }

  export type merchCreateManyUsersInput = {
    merch_id: string
    req_nani?: number | null
    rating?: number | null
    description?: string | null
    merch?: string | null
    image?: string | null
    avalibility_status?: boolean | null
  }

  export type nexusCreateManyUsersInput = {
    nexus_id: string
    reply_to?: string | null
    comment?: string | null
    upvotes?: number | null
    chronicle_id?: string | null
  }

  export type quizzesCreateManyUsersInput = {
    quiz_id: string
    difficulty_lvl?: number | null
    created_date?: Date | string | null
    anime_name?: string | null
  }

  export type chronicleUpdateWithoutUsersInput = {
    chronicle_id?: StringFieldUpdateOperationsInput | string
    texts?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type chronicleUncheckedUpdateWithoutUsersInput = {
    chronicle_id?: StringFieldUpdateOperationsInput | string
    texts?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type chronicleUncheckedUpdateManyWithoutUsersInput = {
    chronicle_id?: StringFieldUpdateOperationsInput | string
    texts?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type merchUpdateWithoutUsersInput = {
    merch_id?: StringFieldUpdateOperationsInput | string
    req_nani?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    merch?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avalibility_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type merchUncheckedUpdateWithoutUsersInput = {
    merch_id?: StringFieldUpdateOperationsInput | string
    req_nani?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    merch?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avalibility_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type merchUncheckedUpdateManyWithoutUsersInput = {
    merch_id?: StringFieldUpdateOperationsInput | string
    req_nani?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    merch?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    avalibility_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type nexusUpdateWithoutUsersInput = {
    nexus_id?: StringFieldUpdateOperationsInput | string
    reply_to?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    chronicle_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type nexusUncheckedUpdateWithoutUsersInput = {
    nexus_id?: StringFieldUpdateOperationsInput | string
    reply_to?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    chronicle_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type nexusUncheckedUpdateManyWithoutUsersInput = {
    nexus_id?: StringFieldUpdateOperationsInput | string
    reply_to?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    chronicle_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type quizzesUpdateWithoutUsersInput = {
    quiz_id?: StringFieldUpdateOperationsInput | string
    difficulty_lvl?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wiki?: wikiUpdateOneWithoutQuizzesNestedInput
  }

  export type quizzesUncheckedUpdateWithoutUsersInput = {
    quiz_id?: StringFieldUpdateOperationsInput | string
    difficulty_lvl?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anime_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type quizzesUncheckedUpdateManyWithoutUsersInput = {
    quiz_id?: StringFieldUpdateOperationsInput | string
    difficulty_lvl?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    anime_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bucketCreateManyWikiInput = {
    user_id: string
    completed?: boolean | null
    ongoing?: boolean | null
    dropped?: boolean | null
  }

  export type quizzesCreateManyWikiInput = {
    quiz_id: string
    mod_id?: string | null
    difficulty_lvl?: number | null
    created_date?: Date | string | null
  }

  export type seasonCreateManyWikiInput = {
    season_number: number
    summary?: string | null
    poster?: string | null
    episode_list?: number | null
  }

  export type bucketUpdateWithoutWikiInput = {
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ongoing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dropped?: NullableBoolFieldUpdateOperationsInput | boolean | null
    users?: usersUpdateOneRequiredWithoutBucketNestedInput
  }

  export type bucketUncheckedUpdateWithoutWikiInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ongoing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dropped?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type bucketUncheckedUpdateManyWithoutWikiInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ongoing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dropped?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type quizzesUpdateWithoutWikiInput = {
    quiz_id?: StringFieldUpdateOperationsInput | string
    difficulty_lvl?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutQuizzesNestedInput
  }

  export type quizzesUncheckedUpdateWithoutWikiInput = {
    quiz_id?: StringFieldUpdateOperationsInput | string
    mod_id?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty_lvl?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type quizzesUncheckedUpdateManyWithoutWikiInput = {
    quiz_id?: StringFieldUpdateOperationsInput | string
    mod_id?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty_lvl?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type seasonUpdateWithoutWikiInput = {
    season_number?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    episode_list?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type seasonUncheckedUpdateWithoutWikiInput = {
    season_number?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    episode_list?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type seasonUncheckedUpdateManyWithoutWikiInput = {
    season_number?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    episode_list?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}