
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Bitacora
 * 
 */
export type Bitacora = $Result.DefaultSelection<Prisma.$BitacoraPayload>
/**
 * Model BitaEvents
 * 
 */
export type BitaEvents = $Result.DefaultSelection<Prisma.$BitaEventsPayload>
/**
 * Model TipoEvent
 * 
 */
export type TipoEvent = $Result.DefaultSelection<Prisma.$TipoEventPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Animal
 * 
 */
export type Animal = $Result.DefaultSelection<Prisma.$AnimalPayload>
/**
 * Model Clase
 * 
 */
export type Clase = $Result.DefaultSelection<Prisma.$ClasePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bitacora`: Exposes CRUD operations for the **Bitacora** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bitacoras
    * const bitacoras = await prisma.bitacora.findMany()
    * ```
    */
  get bitacora(): Prisma.BitacoraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bitaEvents`: Exposes CRUD operations for the **BitaEvents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BitaEvents
    * const bitaEvents = await prisma.bitaEvents.findMany()
    * ```
    */
  get bitaEvents(): Prisma.BitaEventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoEvent`: Exposes CRUD operations for the **TipoEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoEvents
    * const tipoEvents = await prisma.tipoEvent.findMany()
    * ```
    */
  get tipoEvent(): Prisma.TipoEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.animal`: Exposes CRUD operations for the **Animal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Animals
    * const animals = await prisma.animal.findMany()
    * ```
    */
  get animal(): Prisma.AnimalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clase`: Exposes CRUD operations for the **Clase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clases
    * const clases = await prisma.clase.findMany()
    * ```
    */
  get clase(): Prisma.ClaseDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Post: 'Post',
    User: 'User',
    Bitacora: 'Bitacora',
    BitaEvents: 'BitaEvents',
    TipoEvent: 'TipoEvent',
    Event: 'Event',
    Animal: 'Animal',
    Clase: 'Clase'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post" | "user" | "bitacora" | "bitaEvents" | "tipoEvent" | "event" | "animal" | "clase"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Bitacora: {
        payload: Prisma.$BitacoraPayload<ExtArgs>
        fields: Prisma.BitacoraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BitacoraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BitacoraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>
          }
          findFirst: {
            args: Prisma.BitacoraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BitacoraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>
          }
          findMany: {
            args: Prisma.BitacoraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>[]
          }
          create: {
            args: Prisma.BitacoraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>
          }
          createMany: {
            args: Prisma.BitacoraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BitacoraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>[]
          }
          delete: {
            args: Prisma.BitacoraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>
          }
          update: {
            args: Prisma.BitacoraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>
          }
          deleteMany: {
            args: Prisma.BitacoraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BitacoraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BitacoraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>[]
          }
          upsert: {
            args: Prisma.BitacoraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitacoraPayload>
          }
          aggregate: {
            args: Prisma.BitacoraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBitacora>
          }
          groupBy: {
            args: Prisma.BitacoraGroupByArgs<ExtArgs>
            result: $Utils.Optional<BitacoraGroupByOutputType>[]
          }
          count: {
            args: Prisma.BitacoraCountArgs<ExtArgs>
            result: $Utils.Optional<BitacoraCountAggregateOutputType> | number
          }
        }
      }
      BitaEvents: {
        payload: Prisma.$BitaEventsPayload<ExtArgs>
        fields: Prisma.BitaEventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BitaEventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitaEventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BitaEventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitaEventsPayload>
          }
          findFirst: {
            args: Prisma.BitaEventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitaEventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BitaEventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitaEventsPayload>
          }
          findMany: {
            args: Prisma.BitaEventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitaEventsPayload>[]
          }
          create: {
            args: Prisma.BitaEventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitaEventsPayload>
          }
          createMany: {
            args: Prisma.BitaEventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BitaEventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitaEventsPayload>[]
          }
          delete: {
            args: Prisma.BitaEventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitaEventsPayload>
          }
          update: {
            args: Prisma.BitaEventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitaEventsPayload>
          }
          deleteMany: {
            args: Prisma.BitaEventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BitaEventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BitaEventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitaEventsPayload>[]
          }
          upsert: {
            args: Prisma.BitaEventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BitaEventsPayload>
          }
          aggregate: {
            args: Prisma.BitaEventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBitaEvents>
          }
          groupBy: {
            args: Prisma.BitaEventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BitaEventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BitaEventsCountArgs<ExtArgs>
            result: $Utils.Optional<BitaEventsCountAggregateOutputType> | number
          }
        }
      }
      TipoEvent: {
        payload: Prisma.$TipoEventPayload<ExtArgs>
        fields: Prisma.TipoEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEventPayload>
          }
          findFirst: {
            args: Prisma.TipoEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEventPayload>
          }
          findMany: {
            args: Prisma.TipoEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEventPayload>[]
          }
          create: {
            args: Prisma.TipoEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEventPayload>
          }
          createMany: {
            args: Prisma.TipoEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEventPayload>[]
          }
          delete: {
            args: Prisma.TipoEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEventPayload>
          }
          update: {
            args: Prisma.TipoEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEventPayload>
          }
          deleteMany: {
            args: Prisma.TipoEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEventPayload>[]
          }
          upsert: {
            args: Prisma.TipoEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoEventPayload>
          }
          aggregate: {
            args: Prisma.TipoEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoEvent>
          }
          groupBy: {
            args: Prisma.TipoEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoEventCountArgs<ExtArgs>
            result: $Utils.Optional<TipoEventCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Animal: {
        payload: Prisma.$AnimalPayload<ExtArgs>
        fields: Prisma.AnimalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          findFirst: {
            args: Prisma.AnimalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          findMany: {
            args: Prisma.AnimalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          create: {
            args: Prisma.AnimalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          createMany: {
            args: Prisma.AnimalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          delete: {
            args: Prisma.AnimalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          update: {
            args: Prisma.AnimalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          deleteMany: {
            args: Prisma.AnimalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          upsert: {
            args: Prisma.AnimalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          aggregate: {
            args: Prisma.AnimalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimal>
          }
          groupBy: {
            args: Prisma.AnimalGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimalGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimalCountArgs<ExtArgs>
            result: $Utils.Optional<AnimalCountAggregateOutputType> | number
          }
        }
      }
      Clase: {
        payload: Prisma.$ClasePayload<ExtArgs>
        fields: Prisma.ClaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          findFirst: {
            args: Prisma.ClaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          findMany: {
            args: Prisma.ClaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>[]
          }
          create: {
            args: Prisma.ClaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          createMany: {
            args: Prisma.ClaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>[]
          }
          delete: {
            args: Prisma.ClaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          update: {
            args: Prisma.ClaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          deleteMany: {
            args: Prisma.ClaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>[]
          }
          upsert: {
            args: Prisma.ClaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasePayload>
          }
          aggregate: {
            args: Prisma.ClaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClase>
          }
          groupBy: {
            args: Prisma.ClaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClaseCountArgs<ExtArgs>
            result: $Utils.Optional<ClaseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    post?: PostOmit
    user?: UserOmit
    bitacora?: BitacoraOmit
    bitaEvents?: BitaEventsOmit
    tipoEvent?: TipoEventOmit
    event?: EventOmit
    animal?: AnimalOmit
    clase?: ClaseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    animal: number
    bitacora: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    animal?: boolean | UserCountOutputTypeCountAnimalArgs
    bitacora?: boolean | UserCountOutputTypeCountBitacoraArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnimalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBitacoraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BitacoraWhereInput
  }


  /**
   * Count Type BitacoraCountOutputType
   */

  export type BitacoraCountOutputType = {
    bita_events: number
  }

  export type BitacoraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bita_events?: boolean | BitacoraCountOutputTypeCountBita_eventsArgs
  }

  // Custom InputTypes
  /**
   * BitacoraCountOutputType without action
   */
  export type BitacoraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BitacoraCountOutputType
     */
    select?: BitacoraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BitacoraCountOutputType without action
   */
  export type BitacoraCountOutputTypeCountBita_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BitaEventsWhereInput
  }


  /**
   * Count Type TipoEventCountOutputType
   */

  export type TipoEventCountOutputType = {
    bita_events: number
    events: number
  }

  export type TipoEventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bita_events?: boolean | TipoEventCountOutputTypeCountBita_eventsArgs
    events?: boolean | TipoEventCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * TipoEventCountOutputType without action
   */
  export type TipoEventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEventCountOutputType
     */
    select?: TipoEventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoEventCountOutputType without action
   */
  export type TipoEventCountOutputTypeCountBita_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BitaEventsWhereInput
  }

  /**
   * TipoEventCountOutputType without action
   */
  export type TipoEventCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    bita_events: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bita_events?: boolean | EventCountOutputTypeCountBita_eventsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountBita_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BitaEventsWhereInput
  }


  /**
   * Count Type ClaseCountOutputType
   */

  export type ClaseCountOutputType = {
    animals: number
  }

  export type ClaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animals?: boolean | ClaseCountOutputTypeCountAnimalsArgs
  }

  // Custom InputTypes
  /**
   * ClaseCountOutputType without action
   */
  export type ClaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaseCountOutputType
     */
    select?: ClaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClaseCountOutputType without action
   */
  export type ClaseCountOutputTypeCountAnimalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    published: boolean | null
    authorId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    published: boolean | null
    authorId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    published: number
    authorId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    title: string
    content: string | null
    published: boolean
    authorId: number | null
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    author?: boolean | Post$authorArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    author?: boolean | Post$authorArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    author?: boolean | Post$authorArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "published" | "authorId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Post$authorArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Post$authorArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Post$authorArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string | null
      published: boolean
      authorId: number | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends Post$authorArgs<ExtArgs> = {}>(args?: Subset<T, Post$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly published: FieldRef<"Post", 'Boolean'>
    readonly authorId: FieldRef<"Post", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.author
   */
  export type Post$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    nivel: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    nivel: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    password: string | null
    nivel: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    password: string | null
    nivel: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    createdAt: number
    updatedAt: number
    password: number
    nivel: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    nivel?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    nivel?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    password?: true
    nivel?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    password?: true
    nivel?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    password?: true
    nivel?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string | null
    email: string | null
    createdAt: Date
    updatedAt: Date
    password: string | null
    nivel: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    password?: boolean
    nivel?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    animal?: boolean | User$animalArgs<ExtArgs>
    bitacora?: boolean | User$bitacoraArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    password?: boolean
    nivel?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    password?: boolean
    nivel?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    password?: boolean
    nivel?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "createdAt" | "updatedAt" | "password" | "nivel", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    animal?: boolean | User$animalArgs<ExtArgs>
    bitacora?: boolean | User$bitacoraArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      animal: Prisma.$AnimalPayload<ExtArgs>[]
      bitacora: Prisma.$BitacoraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string | null
      createdAt: Date
      updatedAt: Date
      password: string | null
      nivel: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    animal<T extends User$animalArgs<ExtArgs> = {}>(args?: Subset<T, User$animalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bitacora<T extends User$bitacoraArgs<ExtArgs> = {}>(args?: Subset<T, User$bitacoraArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly nivel: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.animal
   */
  export type User$animalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    where?: AnimalWhereInput
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    cursor?: AnimalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * User.bitacora
   */
  export type User$bitacoraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    where?: BitacoraWhereInput
    orderBy?: BitacoraOrderByWithRelationInput | BitacoraOrderByWithRelationInput[]
    cursor?: BitacoraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BitacoraScalarFieldEnum | BitacoraScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Bitacora
   */

  export type AggregateBitacora = {
    _count: BitacoraCountAggregateOutputType | null
    _avg: BitacoraAvgAggregateOutputType | null
    _sum: BitacoraSumAggregateOutputType | null
    _min: BitacoraMinAggregateOutputType | null
    _max: BitacoraMaxAggregateOutputType | null
  }

  export type BitacoraAvgAggregateOutputType = {
    id: number | null
    author_id: number | null
  }

  export type BitacoraSumAggregateOutputType = {
    id: number | null
    author_id: number | null
  }

  export type BitacoraMinAggregateOutputType = {
    id: number | null
    bitacora_date: string | null
    author_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BitacoraMaxAggregateOutputType = {
    id: number | null
    bitacora_date: string | null
    author_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BitacoraCountAggregateOutputType = {
    id: number
    bitacora_date: number
    author_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BitacoraAvgAggregateInputType = {
    id?: true
    author_id?: true
  }

  export type BitacoraSumAggregateInputType = {
    id?: true
    author_id?: true
  }

  export type BitacoraMinAggregateInputType = {
    id?: true
    bitacora_date?: true
    author_id?: true
    created_at?: true
    updated_at?: true
  }

  export type BitacoraMaxAggregateInputType = {
    id?: true
    bitacora_date?: true
    author_id?: true
    created_at?: true
    updated_at?: true
  }

  export type BitacoraCountAggregateInputType = {
    id?: true
    bitacora_date?: true
    author_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BitacoraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bitacora to aggregate.
     */
    where?: BitacoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bitacoras to fetch.
     */
    orderBy?: BitacoraOrderByWithRelationInput | BitacoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BitacoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bitacoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bitacoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bitacoras
    **/
    _count?: true | BitacoraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BitacoraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BitacoraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BitacoraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BitacoraMaxAggregateInputType
  }

  export type GetBitacoraAggregateType<T extends BitacoraAggregateArgs> = {
        [P in keyof T & keyof AggregateBitacora]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBitacora[P]>
      : GetScalarType<T[P], AggregateBitacora[P]>
  }




  export type BitacoraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BitacoraWhereInput
    orderBy?: BitacoraOrderByWithAggregationInput | BitacoraOrderByWithAggregationInput[]
    by: BitacoraScalarFieldEnum[] | BitacoraScalarFieldEnum
    having?: BitacoraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BitacoraCountAggregateInputType | true
    _avg?: BitacoraAvgAggregateInputType
    _sum?: BitacoraSumAggregateInputType
    _min?: BitacoraMinAggregateInputType
    _max?: BitacoraMaxAggregateInputType
  }

  export type BitacoraGroupByOutputType = {
    id: number
    bitacora_date: string | null
    author_id: number | null
    created_at: Date
    updated_at: Date
    _count: BitacoraCountAggregateOutputType | null
    _avg: BitacoraAvgAggregateOutputType | null
    _sum: BitacoraSumAggregateOutputType | null
    _min: BitacoraMinAggregateOutputType | null
    _max: BitacoraMaxAggregateOutputType | null
  }

  type GetBitacoraGroupByPayload<T extends BitacoraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BitacoraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BitacoraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BitacoraGroupByOutputType[P]>
            : GetScalarType<T[P], BitacoraGroupByOutputType[P]>
        }
      >
    >


  export type BitacoraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bitacora_date?: boolean
    author_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    bita_events?: boolean | Bitacora$bita_eventsArgs<ExtArgs>
    author?: boolean | Bitacora$authorArgs<ExtArgs>
    _count?: boolean | BitacoraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bitacora"]>

  export type BitacoraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bitacora_date?: boolean
    author_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    author?: boolean | Bitacora$authorArgs<ExtArgs>
  }, ExtArgs["result"]["bitacora"]>

  export type BitacoraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bitacora_date?: boolean
    author_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    author?: boolean | Bitacora$authorArgs<ExtArgs>
  }, ExtArgs["result"]["bitacora"]>

  export type BitacoraSelectScalar = {
    id?: boolean
    bitacora_date?: boolean
    author_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type BitacoraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bitacora_date" | "author_id" | "created_at" | "updated_at", ExtArgs["result"]["bitacora"]>
  export type BitacoraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bita_events?: boolean | Bitacora$bita_eventsArgs<ExtArgs>
    author?: boolean | Bitacora$authorArgs<ExtArgs>
    _count?: boolean | BitacoraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BitacoraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Bitacora$authorArgs<ExtArgs>
  }
  export type BitacoraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Bitacora$authorArgs<ExtArgs>
  }

  export type $BitacoraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bitacora"
    objects: {
      bita_events: Prisma.$BitaEventsPayload<ExtArgs>[]
      author: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bitacora_date: string | null
      author_id: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["bitacora"]>
    composites: {}
  }

  type BitacoraGetPayload<S extends boolean | null | undefined | BitacoraDefaultArgs> = $Result.GetResult<Prisma.$BitacoraPayload, S>

  type BitacoraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BitacoraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BitacoraCountAggregateInputType | true
    }

  export interface BitacoraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bitacora'], meta: { name: 'Bitacora' } }
    /**
     * Find zero or one Bitacora that matches the filter.
     * @param {BitacoraFindUniqueArgs} args - Arguments to find a Bitacora
     * @example
     * // Get one Bitacora
     * const bitacora = await prisma.bitacora.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BitacoraFindUniqueArgs>(args: SelectSubset<T, BitacoraFindUniqueArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bitacora that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BitacoraFindUniqueOrThrowArgs} args - Arguments to find a Bitacora
     * @example
     * // Get one Bitacora
     * const bitacora = await prisma.bitacora.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BitacoraFindUniqueOrThrowArgs>(args: SelectSubset<T, BitacoraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bitacora that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraFindFirstArgs} args - Arguments to find a Bitacora
     * @example
     * // Get one Bitacora
     * const bitacora = await prisma.bitacora.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BitacoraFindFirstArgs>(args?: SelectSubset<T, BitacoraFindFirstArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bitacora that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraFindFirstOrThrowArgs} args - Arguments to find a Bitacora
     * @example
     * // Get one Bitacora
     * const bitacora = await prisma.bitacora.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BitacoraFindFirstOrThrowArgs>(args?: SelectSubset<T, BitacoraFindFirstOrThrowArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bitacoras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bitacoras
     * const bitacoras = await prisma.bitacora.findMany()
     * 
     * // Get first 10 Bitacoras
     * const bitacoras = await prisma.bitacora.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bitacoraWithIdOnly = await prisma.bitacora.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BitacoraFindManyArgs>(args?: SelectSubset<T, BitacoraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bitacora.
     * @param {BitacoraCreateArgs} args - Arguments to create a Bitacora.
     * @example
     * // Create one Bitacora
     * const Bitacora = await prisma.bitacora.create({
     *   data: {
     *     // ... data to create a Bitacora
     *   }
     * })
     * 
     */
    create<T extends BitacoraCreateArgs>(args: SelectSubset<T, BitacoraCreateArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bitacoras.
     * @param {BitacoraCreateManyArgs} args - Arguments to create many Bitacoras.
     * @example
     * // Create many Bitacoras
     * const bitacora = await prisma.bitacora.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BitacoraCreateManyArgs>(args?: SelectSubset<T, BitacoraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bitacoras and returns the data saved in the database.
     * @param {BitacoraCreateManyAndReturnArgs} args - Arguments to create many Bitacoras.
     * @example
     * // Create many Bitacoras
     * const bitacora = await prisma.bitacora.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bitacoras and only return the `id`
     * const bitacoraWithIdOnly = await prisma.bitacora.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BitacoraCreateManyAndReturnArgs>(args?: SelectSubset<T, BitacoraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bitacora.
     * @param {BitacoraDeleteArgs} args - Arguments to delete one Bitacora.
     * @example
     * // Delete one Bitacora
     * const Bitacora = await prisma.bitacora.delete({
     *   where: {
     *     // ... filter to delete one Bitacora
     *   }
     * })
     * 
     */
    delete<T extends BitacoraDeleteArgs>(args: SelectSubset<T, BitacoraDeleteArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bitacora.
     * @param {BitacoraUpdateArgs} args - Arguments to update one Bitacora.
     * @example
     * // Update one Bitacora
     * const bitacora = await prisma.bitacora.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BitacoraUpdateArgs>(args: SelectSubset<T, BitacoraUpdateArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bitacoras.
     * @param {BitacoraDeleteManyArgs} args - Arguments to filter Bitacoras to delete.
     * @example
     * // Delete a few Bitacoras
     * const { count } = await prisma.bitacora.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BitacoraDeleteManyArgs>(args?: SelectSubset<T, BitacoraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bitacoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bitacoras
     * const bitacora = await prisma.bitacora.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BitacoraUpdateManyArgs>(args: SelectSubset<T, BitacoraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bitacoras and returns the data updated in the database.
     * @param {BitacoraUpdateManyAndReturnArgs} args - Arguments to update many Bitacoras.
     * @example
     * // Update many Bitacoras
     * const bitacora = await prisma.bitacora.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bitacoras and only return the `id`
     * const bitacoraWithIdOnly = await prisma.bitacora.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BitacoraUpdateManyAndReturnArgs>(args: SelectSubset<T, BitacoraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bitacora.
     * @param {BitacoraUpsertArgs} args - Arguments to update or create a Bitacora.
     * @example
     * // Update or create a Bitacora
     * const bitacora = await prisma.bitacora.upsert({
     *   create: {
     *     // ... data to create a Bitacora
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bitacora we want to update
     *   }
     * })
     */
    upsert<T extends BitacoraUpsertArgs>(args: SelectSubset<T, BitacoraUpsertArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bitacoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraCountArgs} args - Arguments to filter Bitacoras to count.
     * @example
     * // Count the number of Bitacoras
     * const count = await prisma.bitacora.count({
     *   where: {
     *     // ... the filter for the Bitacoras we want to count
     *   }
     * })
    **/
    count<T extends BitacoraCountArgs>(
      args?: Subset<T, BitacoraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BitacoraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bitacora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BitacoraAggregateArgs>(args: Subset<T, BitacoraAggregateArgs>): Prisma.PrismaPromise<GetBitacoraAggregateType<T>>

    /**
     * Group by Bitacora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraGroupByArgs} args - Group by arguments.
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
      T extends BitacoraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BitacoraGroupByArgs['orderBy'] }
        : { orderBy?: BitacoraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BitacoraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBitacoraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bitacora model
   */
  readonly fields: BitacoraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bitacora.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BitacoraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bita_events<T extends Bitacora$bita_eventsArgs<ExtArgs> = {}>(args?: Subset<T, Bitacora$bita_eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BitaEventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    author<T extends Bitacora$authorArgs<ExtArgs> = {}>(args?: Subset<T, Bitacora$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bitacora model
   */
  interface BitacoraFieldRefs {
    readonly id: FieldRef<"Bitacora", 'Int'>
    readonly bitacora_date: FieldRef<"Bitacora", 'String'>
    readonly author_id: FieldRef<"Bitacora", 'Int'>
    readonly created_at: FieldRef<"Bitacora", 'DateTime'>
    readonly updated_at: FieldRef<"Bitacora", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bitacora findUnique
   */
  export type BitacoraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * Filter, which Bitacora to fetch.
     */
    where: BitacoraWhereUniqueInput
  }

  /**
   * Bitacora findUniqueOrThrow
   */
  export type BitacoraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * Filter, which Bitacora to fetch.
     */
    where: BitacoraWhereUniqueInput
  }

  /**
   * Bitacora findFirst
   */
  export type BitacoraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * Filter, which Bitacora to fetch.
     */
    where?: BitacoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bitacoras to fetch.
     */
    orderBy?: BitacoraOrderByWithRelationInput | BitacoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bitacoras.
     */
    cursor?: BitacoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bitacoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bitacoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bitacoras.
     */
    distinct?: BitacoraScalarFieldEnum | BitacoraScalarFieldEnum[]
  }

  /**
   * Bitacora findFirstOrThrow
   */
  export type BitacoraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * Filter, which Bitacora to fetch.
     */
    where?: BitacoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bitacoras to fetch.
     */
    orderBy?: BitacoraOrderByWithRelationInput | BitacoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bitacoras.
     */
    cursor?: BitacoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bitacoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bitacoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bitacoras.
     */
    distinct?: BitacoraScalarFieldEnum | BitacoraScalarFieldEnum[]
  }

  /**
   * Bitacora findMany
   */
  export type BitacoraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * Filter, which Bitacoras to fetch.
     */
    where?: BitacoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bitacoras to fetch.
     */
    orderBy?: BitacoraOrderByWithRelationInput | BitacoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bitacoras.
     */
    cursor?: BitacoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bitacoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bitacoras.
     */
    skip?: number
    distinct?: BitacoraScalarFieldEnum | BitacoraScalarFieldEnum[]
  }

  /**
   * Bitacora create
   */
  export type BitacoraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * The data needed to create a Bitacora.
     */
    data: XOR<BitacoraCreateInput, BitacoraUncheckedCreateInput>
  }

  /**
   * Bitacora createMany
   */
  export type BitacoraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bitacoras.
     */
    data: BitacoraCreateManyInput | BitacoraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bitacora createManyAndReturn
   */
  export type BitacoraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * The data used to create many Bitacoras.
     */
    data: BitacoraCreateManyInput | BitacoraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bitacora update
   */
  export type BitacoraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * The data needed to update a Bitacora.
     */
    data: XOR<BitacoraUpdateInput, BitacoraUncheckedUpdateInput>
    /**
     * Choose, which Bitacora to update.
     */
    where: BitacoraWhereUniqueInput
  }

  /**
   * Bitacora updateMany
   */
  export type BitacoraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bitacoras.
     */
    data: XOR<BitacoraUpdateManyMutationInput, BitacoraUncheckedUpdateManyInput>
    /**
     * Filter which Bitacoras to update
     */
    where?: BitacoraWhereInput
    /**
     * Limit how many Bitacoras to update.
     */
    limit?: number
  }

  /**
   * Bitacora updateManyAndReturn
   */
  export type BitacoraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * The data used to update Bitacoras.
     */
    data: XOR<BitacoraUpdateManyMutationInput, BitacoraUncheckedUpdateManyInput>
    /**
     * Filter which Bitacoras to update
     */
    where?: BitacoraWhereInput
    /**
     * Limit how many Bitacoras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bitacora upsert
   */
  export type BitacoraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * The filter to search for the Bitacora to update in case it exists.
     */
    where: BitacoraWhereUniqueInput
    /**
     * In case the Bitacora found by the `where` argument doesn't exist, create a new Bitacora with this data.
     */
    create: XOR<BitacoraCreateInput, BitacoraUncheckedCreateInput>
    /**
     * In case the Bitacora was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BitacoraUpdateInput, BitacoraUncheckedUpdateInput>
  }

  /**
   * Bitacora delete
   */
  export type BitacoraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    /**
     * Filter which Bitacora to delete.
     */
    where: BitacoraWhereUniqueInput
  }

  /**
   * Bitacora deleteMany
   */
  export type BitacoraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bitacoras to delete
     */
    where?: BitacoraWhereInput
    /**
     * Limit how many Bitacoras to delete.
     */
    limit?: number
  }

  /**
   * Bitacora.bita_events
   */
  export type Bitacora$bita_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BitaEvents
     */
    select?: BitaEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BitaEvents
     */
    omit?: BitaEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitaEventsInclude<ExtArgs> | null
    where?: BitaEventsWhereInput
    orderBy?: BitaEventsOrderByWithRelationInput | BitaEventsOrderByWithRelationInput[]
    cursor?: BitaEventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BitaEventsScalarFieldEnum | BitaEventsScalarFieldEnum[]
  }

  /**
   * Bitacora.author
   */
  export type Bitacora$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Bitacora without action
   */
  export type BitacoraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
  }


  /**
   * Model BitaEvents
   */

  export type AggregateBitaEvents = {
    _count: BitaEventsCountAggregateOutputType | null
    _avg: BitaEventsAvgAggregateOutputType | null
    _sum: BitaEventsSumAggregateOutputType | null
    _min: BitaEventsMinAggregateOutputType | null
    _max: BitaEventsMaxAggregateOutputType | null
  }

  export type BitaEventsAvgAggregateOutputType = {
    id: number | null
    bitacora_id: number | null
    tipo_event_id: number | null
    events_id: number | null
  }

  export type BitaEventsSumAggregateOutputType = {
    id: number | null
    bitacora_id: number | null
    tipo_event_id: number | null
    events_id: number | null
  }

  export type BitaEventsMinAggregateOutputType = {
    id: number | null
    bitacora_id: number | null
    event_date: Date | null
    tipo_event_id: number | null
    events_id: number | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    image: boolean | null
  }

  export type BitaEventsMaxAggregateOutputType = {
    id: number | null
    bitacora_id: number | null
    event_date: Date | null
    tipo_event_id: number | null
    events_id: number | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    image: boolean | null
  }

  export type BitaEventsCountAggregateOutputType = {
    id: number
    bitacora_id: number
    event_date: number
    tipo_event_id: number
    events_id: number
    description: number
    created_at: number
    updated_at: number
    image: number
    _all: number
  }


  export type BitaEventsAvgAggregateInputType = {
    id?: true
    bitacora_id?: true
    tipo_event_id?: true
    events_id?: true
  }

  export type BitaEventsSumAggregateInputType = {
    id?: true
    bitacora_id?: true
    tipo_event_id?: true
    events_id?: true
  }

  export type BitaEventsMinAggregateInputType = {
    id?: true
    bitacora_id?: true
    event_date?: true
    tipo_event_id?: true
    events_id?: true
    description?: true
    created_at?: true
    updated_at?: true
    image?: true
  }

  export type BitaEventsMaxAggregateInputType = {
    id?: true
    bitacora_id?: true
    event_date?: true
    tipo_event_id?: true
    events_id?: true
    description?: true
    created_at?: true
    updated_at?: true
    image?: true
  }

  export type BitaEventsCountAggregateInputType = {
    id?: true
    bitacora_id?: true
    event_date?: true
    tipo_event_id?: true
    events_id?: true
    description?: true
    created_at?: true
    updated_at?: true
    image?: true
    _all?: true
  }

  export type BitaEventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BitaEvents to aggregate.
     */
    where?: BitaEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BitaEvents to fetch.
     */
    orderBy?: BitaEventsOrderByWithRelationInput | BitaEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BitaEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BitaEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BitaEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BitaEvents
    **/
    _count?: true | BitaEventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BitaEventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BitaEventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BitaEventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BitaEventsMaxAggregateInputType
  }

  export type GetBitaEventsAggregateType<T extends BitaEventsAggregateArgs> = {
        [P in keyof T & keyof AggregateBitaEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBitaEvents[P]>
      : GetScalarType<T[P], AggregateBitaEvents[P]>
  }




  export type BitaEventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BitaEventsWhereInput
    orderBy?: BitaEventsOrderByWithAggregationInput | BitaEventsOrderByWithAggregationInput[]
    by: BitaEventsScalarFieldEnum[] | BitaEventsScalarFieldEnum
    having?: BitaEventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BitaEventsCountAggregateInputType | true
    _avg?: BitaEventsAvgAggregateInputType
    _sum?: BitaEventsSumAggregateInputType
    _min?: BitaEventsMinAggregateInputType
    _max?: BitaEventsMaxAggregateInputType
  }

  export type BitaEventsGroupByOutputType = {
    id: number
    bitacora_id: number | null
    event_date: Date | null
    tipo_event_id: number | null
    events_id: number | null
    description: string | null
    created_at: Date
    updated_at: Date
    image: boolean
    _count: BitaEventsCountAggregateOutputType | null
    _avg: BitaEventsAvgAggregateOutputType | null
    _sum: BitaEventsSumAggregateOutputType | null
    _min: BitaEventsMinAggregateOutputType | null
    _max: BitaEventsMaxAggregateOutputType | null
  }

  type GetBitaEventsGroupByPayload<T extends BitaEventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BitaEventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BitaEventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BitaEventsGroupByOutputType[P]>
            : GetScalarType<T[P], BitaEventsGroupByOutputType[P]>
        }
      >
    >


  export type BitaEventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bitacora_id?: boolean
    event_date?: boolean
    tipo_event_id?: boolean
    events_id?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    image?: boolean
    bitacora?: boolean | BitaEvents$bitacoraArgs<ExtArgs>
    event?: boolean | BitaEvents$eventArgs<ExtArgs>
    tipoEvent?: boolean | BitaEvents$tipoEventArgs<ExtArgs>
  }, ExtArgs["result"]["bitaEvents"]>

  export type BitaEventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bitacora_id?: boolean
    event_date?: boolean
    tipo_event_id?: boolean
    events_id?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    image?: boolean
    bitacora?: boolean | BitaEvents$bitacoraArgs<ExtArgs>
    event?: boolean | BitaEvents$eventArgs<ExtArgs>
    tipoEvent?: boolean | BitaEvents$tipoEventArgs<ExtArgs>
  }, ExtArgs["result"]["bitaEvents"]>

  export type BitaEventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bitacora_id?: boolean
    event_date?: boolean
    tipo_event_id?: boolean
    events_id?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    image?: boolean
    bitacora?: boolean | BitaEvents$bitacoraArgs<ExtArgs>
    event?: boolean | BitaEvents$eventArgs<ExtArgs>
    tipoEvent?: boolean | BitaEvents$tipoEventArgs<ExtArgs>
  }, ExtArgs["result"]["bitaEvents"]>

  export type BitaEventsSelectScalar = {
    id?: boolean
    bitacora_id?: boolean
    event_date?: boolean
    tipo_event_id?: boolean
    events_id?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    image?: boolean
  }

  export type BitaEventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bitacora_id" | "event_date" | "tipo_event_id" | "events_id" | "description" | "created_at" | "updated_at" | "image", ExtArgs["result"]["bitaEvents"]>
  export type BitaEventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bitacora?: boolean | BitaEvents$bitacoraArgs<ExtArgs>
    event?: boolean | BitaEvents$eventArgs<ExtArgs>
    tipoEvent?: boolean | BitaEvents$tipoEventArgs<ExtArgs>
  }
  export type BitaEventsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bitacora?: boolean | BitaEvents$bitacoraArgs<ExtArgs>
    event?: boolean | BitaEvents$eventArgs<ExtArgs>
    tipoEvent?: boolean | BitaEvents$tipoEventArgs<ExtArgs>
  }
  export type BitaEventsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bitacora?: boolean | BitaEvents$bitacoraArgs<ExtArgs>
    event?: boolean | BitaEvents$eventArgs<ExtArgs>
    tipoEvent?: boolean | BitaEvents$tipoEventArgs<ExtArgs>
  }

  export type $BitaEventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BitaEvents"
    objects: {
      bitacora: Prisma.$BitacoraPayload<ExtArgs> | null
      event: Prisma.$EventPayload<ExtArgs> | null
      tipoEvent: Prisma.$TipoEventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bitacora_id: number | null
      event_date: Date | null
      tipo_event_id: number | null
      events_id: number | null
      description: string | null
      created_at: Date
      updated_at: Date
      image: boolean
    }, ExtArgs["result"]["bitaEvents"]>
    composites: {}
  }

  type BitaEventsGetPayload<S extends boolean | null | undefined | BitaEventsDefaultArgs> = $Result.GetResult<Prisma.$BitaEventsPayload, S>

  type BitaEventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BitaEventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BitaEventsCountAggregateInputType | true
    }

  export interface BitaEventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BitaEvents'], meta: { name: 'BitaEvents' } }
    /**
     * Find zero or one BitaEvents that matches the filter.
     * @param {BitaEventsFindUniqueArgs} args - Arguments to find a BitaEvents
     * @example
     * // Get one BitaEvents
     * const bitaEvents = await prisma.bitaEvents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BitaEventsFindUniqueArgs>(args: SelectSubset<T, BitaEventsFindUniqueArgs<ExtArgs>>): Prisma__BitaEventsClient<$Result.GetResult<Prisma.$BitaEventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BitaEvents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BitaEventsFindUniqueOrThrowArgs} args - Arguments to find a BitaEvents
     * @example
     * // Get one BitaEvents
     * const bitaEvents = await prisma.bitaEvents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BitaEventsFindUniqueOrThrowArgs>(args: SelectSubset<T, BitaEventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BitaEventsClient<$Result.GetResult<Prisma.$BitaEventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BitaEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitaEventsFindFirstArgs} args - Arguments to find a BitaEvents
     * @example
     * // Get one BitaEvents
     * const bitaEvents = await prisma.bitaEvents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BitaEventsFindFirstArgs>(args?: SelectSubset<T, BitaEventsFindFirstArgs<ExtArgs>>): Prisma__BitaEventsClient<$Result.GetResult<Prisma.$BitaEventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BitaEvents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitaEventsFindFirstOrThrowArgs} args - Arguments to find a BitaEvents
     * @example
     * // Get one BitaEvents
     * const bitaEvents = await prisma.bitaEvents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BitaEventsFindFirstOrThrowArgs>(args?: SelectSubset<T, BitaEventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BitaEventsClient<$Result.GetResult<Prisma.$BitaEventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BitaEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitaEventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BitaEvents
     * const bitaEvents = await prisma.bitaEvents.findMany()
     * 
     * // Get first 10 BitaEvents
     * const bitaEvents = await prisma.bitaEvents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bitaEventsWithIdOnly = await prisma.bitaEvents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BitaEventsFindManyArgs>(args?: SelectSubset<T, BitaEventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BitaEventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BitaEvents.
     * @param {BitaEventsCreateArgs} args - Arguments to create a BitaEvents.
     * @example
     * // Create one BitaEvents
     * const BitaEvents = await prisma.bitaEvents.create({
     *   data: {
     *     // ... data to create a BitaEvents
     *   }
     * })
     * 
     */
    create<T extends BitaEventsCreateArgs>(args: SelectSubset<T, BitaEventsCreateArgs<ExtArgs>>): Prisma__BitaEventsClient<$Result.GetResult<Prisma.$BitaEventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BitaEvents.
     * @param {BitaEventsCreateManyArgs} args - Arguments to create many BitaEvents.
     * @example
     * // Create many BitaEvents
     * const bitaEvents = await prisma.bitaEvents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BitaEventsCreateManyArgs>(args?: SelectSubset<T, BitaEventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BitaEvents and returns the data saved in the database.
     * @param {BitaEventsCreateManyAndReturnArgs} args - Arguments to create many BitaEvents.
     * @example
     * // Create many BitaEvents
     * const bitaEvents = await prisma.bitaEvents.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BitaEvents and only return the `id`
     * const bitaEventsWithIdOnly = await prisma.bitaEvents.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BitaEventsCreateManyAndReturnArgs>(args?: SelectSubset<T, BitaEventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BitaEventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BitaEvents.
     * @param {BitaEventsDeleteArgs} args - Arguments to delete one BitaEvents.
     * @example
     * // Delete one BitaEvents
     * const BitaEvents = await prisma.bitaEvents.delete({
     *   where: {
     *     // ... filter to delete one BitaEvents
     *   }
     * })
     * 
     */
    delete<T extends BitaEventsDeleteArgs>(args: SelectSubset<T, BitaEventsDeleteArgs<ExtArgs>>): Prisma__BitaEventsClient<$Result.GetResult<Prisma.$BitaEventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BitaEvents.
     * @param {BitaEventsUpdateArgs} args - Arguments to update one BitaEvents.
     * @example
     * // Update one BitaEvents
     * const bitaEvents = await prisma.bitaEvents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BitaEventsUpdateArgs>(args: SelectSubset<T, BitaEventsUpdateArgs<ExtArgs>>): Prisma__BitaEventsClient<$Result.GetResult<Prisma.$BitaEventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BitaEvents.
     * @param {BitaEventsDeleteManyArgs} args - Arguments to filter BitaEvents to delete.
     * @example
     * // Delete a few BitaEvents
     * const { count } = await prisma.bitaEvents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BitaEventsDeleteManyArgs>(args?: SelectSubset<T, BitaEventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BitaEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitaEventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BitaEvents
     * const bitaEvents = await prisma.bitaEvents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BitaEventsUpdateManyArgs>(args: SelectSubset<T, BitaEventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BitaEvents and returns the data updated in the database.
     * @param {BitaEventsUpdateManyAndReturnArgs} args - Arguments to update many BitaEvents.
     * @example
     * // Update many BitaEvents
     * const bitaEvents = await prisma.bitaEvents.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BitaEvents and only return the `id`
     * const bitaEventsWithIdOnly = await prisma.bitaEvents.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BitaEventsUpdateManyAndReturnArgs>(args: SelectSubset<T, BitaEventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BitaEventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BitaEvents.
     * @param {BitaEventsUpsertArgs} args - Arguments to update or create a BitaEvents.
     * @example
     * // Update or create a BitaEvents
     * const bitaEvents = await prisma.bitaEvents.upsert({
     *   create: {
     *     // ... data to create a BitaEvents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BitaEvents we want to update
     *   }
     * })
     */
    upsert<T extends BitaEventsUpsertArgs>(args: SelectSubset<T, BitaEventsUpsertArgs<ExtArgs>>): Prisma__BitaEventsClient<$Result.GetResult<Prisma.$BitaEventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BitaEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitaEventsCountArgs} args - Arguments to filter BitaEvents to count.
     * @example
     * // Count the number of BitaEvents
     * const count = await prisma.bitaEvents.count({
     *   where: {
     *     // ... the filter for the BitaEvents we want to count
     *   }
     * })
    **/
    count<T extends BitaEventsCountArgs>(
      args?: Subset<T, BitaEventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BitaEventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BitaEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitaEventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BitaEventsAggregateArgs>(args: Subset<T, BitaEventsAggregateArgs>): Prisma.PrismaPromise<GetBitaEventsAggregateType<T>>

    /**
     * Group by BitaEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitaEventsGroupByArgs} args - Group by arguments.
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
      T extends BitaEventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BitaEventsGroupByArgs['orderBy'] }
        : { orderBy?: BitaEventsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BitaEventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBitaEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BitaEvents model
   */
  readonly fields: BitaEventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BitaEvents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BitaEventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bitacora<T extends BitaEvents$bitacoraArgs<ExtArgs> = {}>(args?: Subset<T, BitaEvents$bitacoraArgs<ExtArgs>>): Prisma__BitacoraClient<$Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    event<T extends BitaEvents$eventArgs<ExtArgs> = {}>(args?: Subset<T, BitaEvents$eventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tipoEvent<T extends BitaEvents$tipoEventArgs<ExtArgs> = {}>(args?: Subset<T, BitaEvents$tipoEventArgs<ExtArgs>>): Prisma__TipoEventClient<$Result.GetResult<Prisma.$TipoEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BitaEvents model
   */
  interface BitaEventsFieldRefs {
    readonly id: FieldRef<"BitaEvents", 'Int'>
    readonly bitacora_id: FieldRef<"BitaEvents", 'Int'>
    readonly event_date: FieldRef<"BitaEvents", 'DateTime'>
    readonly tipo_event_id: FieldRef<"BitaEvents", 'Int'>
    readonly events_id: FieldRef<"BitaEvents", 'Int'>
    readonly description: FieldRef<"BitaEvents", 'String'>
    readonly created_at: FieldRef<"BitaEvents", 'DateTime'>
    readonly updated_at: FieldRef<"BitaEvents", 'DateTime'>
    readonly image: FieldRef<"BitaEvents", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BitaEvents findUnique
   */
  export type BitaEventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BitaEvents
     */
    select?: BitaEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BitaEvents
     */
    omit?: BitaEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitaEventsInclude<ExtArgs> | null
    /**
     * Filter, which BitaEvents to fetch.
     */
    where: BitaEventsWhereUniqueInput
  }

  /**
   * BitaEvents findUniqueOrThrow
   */
  export type BitaEventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BitaEvents
     */
    select?: BitaEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BitaEvents
     */
    omit?: BitaEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitaEventsInclude<ExtArgs> | null
    /**
     * Filter, which BitaEvents to fetch.
     */
    where: BitaEventsWhereUniqueInput
  }

  /**
   * BitaEvents findFirst
   */
  export type BitaEventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BitaEvents
     */
    select?: BitaEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BitaEvents
     */
    omit?: BitaEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitaEventsInclude<ExtArgs> | null
    /**
     * Filter, which BitaEvents to fetch.
     */
    where?: BitaEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BitaEvents to fetch.
     */
    orderBy?: BitaEventsOrderByWithRelationInput | BitaEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BitaEvents.
     */
    cursor?: BitaEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BitaEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BitaEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BitaEvents.
     */
    distinct?: BitaEventsScalarFieldEnum | BitaEventsScalarFieldEnum[]
  }

  /**
   * BitaEvents findFirstOrThrow
   */
  export type BitaEventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BitaEvents
     */
    select?: BitaEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BitaEvents
     */
    omit?: BitaEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitaEventsInclude<ExtArgs> | null
    /**
     * Filter, which BitaEvents to fetch.
     */
    where?: BitaEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BitaEvents to fetch.
     */
    orderBy?: BitaEventsOrderByWithRelationInput | BitaEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BitaEvents.
     */
    cursor?: BitaEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BitaEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BitaEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BitaEvents.
     */
    distinct?: BitaEventsScalarFieldEnum | BitaEventsScalarFieldEnum[]
  }

  /**
   * BitaEvents findMany
   */
  export type BitaEventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BitaEvents
     */
    select?: BitaEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BitaEvents
     */
    omit?: BitaEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitaEventsInclude<ExtArgs> | null
    /**
     * Filter, which BitaEvents to fetch.
     */
    where?: BitaEventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BitaEvents to fetch.
     */
    orderBy?: BitaEventsOrderByWithRelationInput | BitaEventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BitaEvents.
     */
    cursor?: BitaEventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BitaEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BitaEvents.
     */
    skip?: number
    distinct?: BitaEventsScalarFieldEnum | BitaEventsScalarFieldEnum[]
  }

  /**
   * BitaEvents create
   */
  export type BitaEventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BitaEvents
     */
    select?: BitaEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BitaEvents
     */
    omit?: BitaEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitaEventsInclude<ExtArgs> | null
    /**
     * The data needed to create a BitaEvents.
     */
    data: XOR<BitaEventsCreateInput, BitaEventsUncheckedCreateInput>
  }

  /**
   * BitaEvents createMany
   */
  export type BitaEventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BitaEvents.
     */
    data: BitaEventsCreateManyInput | BitaEventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BitaEvents createManyAndReturn
   */
  export type BitaEventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BitaEvents
     */
    select?: BitaEventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BitaEvents
     */
    omit?: BitaEventsOmit<ExtArgs> | null
    /**
     * The data used to create many BitaEvents.
     */
    data: BitaEventsCreateManyInput | BitaEventsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitaEventsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BitaEvents update
   */
  export type BitaEventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BitaEvents
     */
    select?: BitaEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BitaEvents
     */
    omit?: BitaEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitaEventsInclude<ExtArgs> | null
    /**
     * The data needed to update a BitaEvents.
     */
    data: XOR<BitaEventsUpdateInput, BitaEventsUncheckedUpdateInput>
    /**
     * Choose, which BitaEvents to update.
     */
    where: BitaEventsWhereUniqueInput
  }

  /**
   * BitaEvents updateMany
   */
  export type BitaEventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BitaEvents.
     */
    data: XOR<BitaEventsUpdateManyMutationInput, BitaEventsUncheckedUpdateManyInput>
    /**
     * Filter which BitaEvents to update
     */
    where?: BitaEventsWhereInput
    /**
     * Limit how many BitaEvents to update.
     */
    limit?: number
  }

  /**
   * BitaEvents updateManyAndReturn
   */
  export type BitaEventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BitaEvents
     */
    select?: BitaEventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BitaEvents
     */
    omit?: BitaEventsOmit<ExtArgs> | null
    /**
     * The data used to update BitaEvents.
     */
    data: XOR<BitaEventsUpdateManyMutationInput, BitaEventsUncheckedUpdateManyInput>
    /**
     * Filter which BitaEvents to update
     */
    where?: BitaEventsWhereInput
    /**
     * Limit how many BitaEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitaEventsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BitaEvents upsert
   */
  export type BitaEventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BitaEvents
     */
    select?: BitaEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BitaEvents
     */
    omit?: BitaEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitaEventsInclude<ExtArgs> | null
    /**
     * The filter to search for the BitaEvents to update in case it exists.
     */
    where: BitaEventsWhereUniqueInput
    /**
     * In case the BitaEvents found by the `where` argument doesn't exist, create a new BitaEvents with this data.
     */
    create: XOR<BitaEventsCreateInput, BitaEventsUncheckedCreateInput>
    /**
     * In case the BitaEvents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BitaEventsUpdateInput, BitaEventsUncheckedUpdateInput>
  }

  /**
   * BitaEvents delete
   */
  export type BitaEventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BitaEvents
     */
    select?: BitaEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BitaEvents
     */
    omit?: BitaEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitaEventsInclude<ExtArgs> | null
    /**
     * Filter which BitaEvents to delete.
     */
    where: BitaEventsWhereUniqueInput
  }

  /**
   * BitaEvents deleteMany
   */
  export type BitaEventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BitaEvents to delete
     */
    where?: BitaEventsWhereInput
    /**
     * Limit how many BitaEvents to delete.
     */
    limit?: number
  }

  /**
   * BitaEvents.bitacora
   */
  export type BitaEvents$bitacoraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: BitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: BitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitacoraInclude<ExtArgs> | null
    where?: BitacoraWhereInput
  }

  /**
   * BitaEvents.event
   */
  export type BitaEvents$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * BitaEvents.tipoEvent
   */
  export type BitaEvents$tipoEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEvent
     */
    select?: TipoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEvent
     */
    omit?: TipoEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEventInclude<ExtArgs> | null
    where?: TipoEventWhereInput
  }

  /**
   * BitaEvents without action
   */
  export type BitaEventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BitaEvents
     */
    select?: BitaEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BitaEvents
     */
    omit?: BitaEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitaEventsInclude<ExtArgs> | null
  }


  /**
   * Model TipoEvent
   */

  export type AggregateTipoEvent = {
    _count: TipoEventCountAggregateOutputType | null
    _avg: TipoEventAvgAggregateOutputType | null
    _sum: TipoEventSumAggregateOutputType | null
    _min: TipoEventMinAggregateOutputType | null
    _max: TipoEventMaxAggregateOutputType | null
  }

  export type TipoEventAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoEventSumAggregateOutputType = {
    id: number | null
  }

  export type TipoEventMinAggregateOutputType = {
    id: number | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TipoEventMaxAggregateOutputType = {
    id: number | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TipoEventCountAggregateOutputType = {
    id: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TipoEventAvgAggregateInputType = {
    id?: true
  }

  export type TipoEventSumAggregateInputType = {
    id?: true
  }

  export type TipoEventMinAggregateInputType = {
    id?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type TipoEventMaxAggregateInputType = {
    id?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type TipoEventCountAggregateInputType = {
    id?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TipoEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoEvent to aggregate.
     */
    where?: TipoEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoEvents to fetch.
     */
    orderBy?: TipoEventOrderByWithRelationInput | TipoEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoEvents
    **/
    _count?: true | TipoEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoEventMaxAggregateInputType
  }

  export type GetTipoEventAggregateType<T extends TipoEventAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoEvent[P]>
      : GetScalarType<T[P], AggregateTipoEvent[P]>
  }




  export type TipoEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoEventWhereInput
    orderBy?: TipoEventOrderByWithAggregationInput | TipoEventOrderByWithAggregationInput[]
    by: TipoEventScalarFieldEnum[] | TipoEventScalarFieldEnum
    having?: TipoEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoEventCountAggregateInputType | true
    _avg?: TipoEventAvgAggregateInputType
    _sum?: TipoEventSumAggregateInputType
    _min?: TipoEventMinAggregateInputType
    _max?: TipoEventMaxAggregateInputType
  }

  export type TipoEventGroupByOutputType = {
    id: number
    description: string | null
    created_at: Date
    updated_at: Date
    _count: TipoEventCountAggregateOutputType | null
    _avg: TipoEventAvgAggregateOutputType | null
    _sum: TipoEventSumAggregateOutputType | null
    _min: TipoEventMinAggregateOutputType | null
    _max: TipoEventMaxAggregateOutputType | null
  }

  type GetTipoEventGroupByPayload<T extends TipoEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoEventGroupByOutputType[P]>
            : GetScalarType<T[P], TipoEventGroupByOutputType[P]>
        }
      >
    >


  export type TipoEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    bita_events?: boolean | TipoEvent$bita_eventsArgs<ExtArgs>
    events?: boolean | TipoEvent$eventsArgs<ExtArgs>
    _count?: boolean | TipoEventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoEvent"]>

  export type TipoEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["tipoEvent"]>

  export type TipoEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["tipoEvent"]>

  export type TipoEventSelectScalar = {
    id?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TipoEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "created_at" | "updated_at", ExtArgs["result"]["tipoEvent"]>
  export type TipoEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bita_events?: boolean | TipoEvent$bita_eventsArgs<ExtArgs>
    events?: boolean | TipoEvent$eventsArgs<ExtArgs>
    _count?: boolean | TipoEventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoEvent"
    objects: {
      bita_events: Prisma.$BitaEventsPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["tipoEvent"]>
    composites: {}
  }

  type TipoEventGetPayload<S extends boolean | null | undefined | TipoEventDefaultArgs> = $Result.GetResult<Prisma.$TipoEventPayload, S>

  type TipoEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoEventCountAggregateInputType | true
    }

  export interface TipoEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoEvent'], meta: { name: 'TipoEvent' } }
    /**
     * Find zero or one TipoEvent that matches the filter.
     * @param {TipoEventFindUniqueArgs} args - Arguments to find a TipoEvent
     * @example
     * // Get one TipoEvent
     * const tipoEvent = await prisma.tipoEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoEventFindUniqueArgs>(args: SelectSubset<T, TipoEventFindUniqueArgs<ExtArgs>>): Prisma__TipoEventClient<$Result.GetResult<Prisma.$TipoEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoEventFindUniqueOrThrowArgs} args - Arguments to find a TipoEvent
     * @example
     * // Get one TipoEvent
     * const tipoEvent = await prisma.tipoEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoEventFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoEventClient<$Result.GetResult<Prisma.$TipoEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoEventFindFirstArgs} args - Arguments to find a TipoEvent
     * @example
     * // Get one TipoEvent
     * const tipoEvent = await prisma.tipoEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoEventFindFirstArgs>(args?: SelectSubset<T, TipoEventFindFirstArgs<ExtArgs>>): Prisma__TipoEventClient<$Result.GetResult<Prisma.$TipoEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoEventFindFirstOrThrowArgs} args - Arguments to find a TipoEvent
     * @example
     * // Get one TipoEvent
     * const tipoEvent = await prisma.tipoEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoEventFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoEventClient<$Result.GetResult<Prisma.$TipoEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoEvents
     * const tipoEvents = await prisma.tipoEvent.findMany()
     * 
     * // Get first 10 TipoEvents
     * const tipoEvents = await prisma.tipoEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoEventWithIdOnly = await prisma.tipoEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoEventFindManyArgs>(args?: SelectSubset<T, TipoEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoEvent.
     * @param {TipoEventCreateArgs} args - Arguments to create a TipoEvent.
     * @example
     * // Create one TipoEvent
     * const TipoEvent = await prisma.tipoEvent.create({
     *   data: {
     *     // ... data to create a TipoEvent
     *   }
     * })
     * 
     */
    create<T extends TipoEventCreateArgs>(args: SelectSubset<T, TipoEventCreateArgs<ExtArgs>>): Prisma__TipoEventClient<$Result.GetResult<Prisma.$TipoEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoEvents.
     * @param {TipoEventCreateManyArgs} args - Arguments to create many TipoEvents.
     * @example
     * // Create many TipoEvents
     * const tipoEvent = await prisma.tipoEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoEventCreateManyArgs>(args?: SelectSubset<T, TipoEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoEvents and returns the data saved in the database.
     * @param {TipoEventCreateManyAndReturnArgs} args - Arguments to create many TipoEvents.
     * @example
     * // Create many TipoEvents
     * const tipoEvent = await prisma.tipoEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoEvents and only return the `id`
     * const tipoEventWithIdOnly = await prisma.tipoEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoEventCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoEvent.
     * @param {TipoEventDeleteArgs} args - Arguments to delete one TipoEvent.
     * @example
     * // Delete one TipoEvent
     * const TipoEvent = await prisma.tipoEvent.delete({
     *   where: {
     *     // ... filter to delete one TipoEvent
     *   }
     * })
     * 
     */
    delete<T extends TipoEventDeleteArgs>(args: SelectSubset<T, TipoEventDeleteArgs<ExtArgs>>): Prisma__TipoEventClient<$Result.GetResult<Prisma.$TipoEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoEvent.
     * @param {TipoEventUpdateArgs} args - Arguments to update one TipoEvent.
     * @example
     * // Update one TipoEvent
     * const tipoEvent = await prisma.tipoEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoEventUpdateArgs>(args: SelectSubset<T, TipoEventUpdateArgs<ExtArgs>>): Prisma__TipoEventClient<$Result.GetResult<Prisma.$TipoEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoEvents.
     * @param {TipoEventDeleteManyArgs} args - Arguments to filter TipoEvents to delete.
     * @example
     * // Delete a few TipoEvents
     * const { count } = await prisma.tipoEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoEventDeleteManyArgs>(args?: SelectSubset<T, TipoEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoEvents
     * const tipoEvent = await prisma.tipoEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoEventUpdateManyArgs>(args: SelectSubset<T, TipoEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoEvents and returns the data updated in the database.
     * @param {TipoEventUpdateManyAndReturnArgs} args - Arguments to update many TipoEvents.
     * @example
     * // Update many TipoEvents
     * const tipoEvent = await prisma.tipoEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoEvents and only return the `id`
     * const tipoEventWithIdOnly = await prisma.tipoEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TipoEventUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoEvent.
     * @param {TipoEventUpsertArgs} args - Arguments to update or create a TipoEvent.
     * @example
     * // Update or create a TipoEvent
     * const tipoEvent = await prisma.tipoEvent.upsert({
     *   create: {
     *     // ... data to create a TipoEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoEvent we want to update
     *   }
     * })
     */
    upsert<T extends TipoEventUpsertArgs>(args: SelectSubset<T, TipoEventUpsertArgs<ExtArgs>>): Prisma__TipoEventClient<$Result.GetResult<Prisma.$TipoEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoEventCountArgs} args - Arguments to filter TipoEvents to count.
     * @example
     * // Count the number of TipoEvents
     * const count = await prisma.tipoEvent.count({
     *   where: {
     *     // ... the filter for the TipoEvents we want to count
     *   }
     * })
    **/
    count<T extends TipoEventCountArgs>(
      args?: Subset<T, TipoEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoEventAggregateArgs>(args: Subset<T, TipoEventAggregateArgs>): Prisma.PrismaPromise<GetTipoEventAggregateType<T>>

    /**
     * Group by TipoEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoEventGroupByArgs} args - Group by arguments.
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
      T extends TipoEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoEventGroupByArgs['orderBy'] }
        : { orderBy?: TipoEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipoEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoEvent model
   */
  readonly fields: TipoEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bita_events<T extends TipoEvent$bita_eventsArgs<ExtArgs> = {}>(args?: Subset<T, TipoEvent$bita_eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BitaEventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends TipoEvent$eventsArgs<ExtArgs> = {}>(args?: Subset<T, TipoEvent$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoEvent model
   */
  interface TipoEventFieldRefs {
    readonly id: FieldRef<"TipoEvent", 'Int'>
    readonly description: FieldRef<"TipoEvent", 'String'>
    readonly created_at: FieldRef<"TipoEvent", 'DateTime'>
    readonly updated_at: FieldRef<"TipoEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TipoEvent findUnique
   */
  export type TipoEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEvent
     */
    select?: TipoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEvent
     */
    omit?: TipoEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEventInclude<ExtArgs> | null
    /**
     * Filter, which TipoEvent to fetch.
     */
    where: TipoEventWhereUniqueInput
  }

  /**
   * TipoEvent findUniqueOrThrow
   */
  export type TipoEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEvent
     */
    select?: TipoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEvent
     */
    omit?: TipoEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEventInclude<ExtArgs> | null
    /**
     * Filter, which TipoEvent to fetch.
     */
    where: TipoEventWhereUniqueInput
  }

  /**
   * TipoEvent findFirst
   */
  export type TipoEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEvent
     */
    select?: TipoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEvent
     */
    omit?: TipoEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEventInclude<ExtArgs> | null
    /**
     * Filter, which TipoEvent to fetch.
     */
    where?: TipoEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoEvents to fetch.
     */
    orderBy?: TipoEventOrderByWithRelationInput | TipoEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoEvents.
     */
    cursor?: TipoEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoEvents.
     */
    distinct?: TipoEventScalarFieldEnum | TipoEventScalarFieldEnum[]
  }

  /**
   * TipoEvent findFirstOrThrow
   */
  export type TipoEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEvent
     */
    select?: TipoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEvent
     */
    omit?: TipoEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEventInclude<ExtArgs> | null
    /**
     * Filter, which TipoEvent to fetch.
     */
    where?: TipoEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoEvents to fetch.
     */
    orderBy?: TipoEventOrderByWithRelationInput | TipoEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoEvents.
     */
    cursor?: TipoEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoEvents.
     */
    distinct?: TipoEventScalarFieldEnum | TipoEventScalarFieldEnum[]
  }

  /**
   * TipoEvent findMany
   */
  export type TipoEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEvent
     */
    select?: TipoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEvent
     */
    omit?: TipoEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEventInclude<ExtArgs> | null
    /**
     * Filter, which TipoEvents to fetch.
     */
    where?: TipoEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoEvents to fetch.
     */
    orderBy?: TipoEventOrderByWithRelationInput | TipoEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoEvents.
     */
    cursor?: TipoEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoEvents.
     */
    skip?: number
    distinct?: TipoEventScalarFieldEnum | TipoEventScalarFieldEnum[]
  }

  /**
   * TipoEvent create
   */
  export type TipoEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEvent
     */
    select?: TipoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEvent
     */
    omit?: TipoEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEventInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoEvent.
     */
    data: XOR<TipoEventCreateInput, TipoEventUncheckedCreateInput>
  }

  /**
   * TipoEvent createMany
   */
  export type TipoEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoEvents.
     */
    data: TipoEventCreateManyInput | TipoEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoEvent createManyAndReturn
   */
  export type TipoEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEvent
     */
    select?: TipoEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEvent
     */
    omit?: TipoEventOmit<ExtArgs> | null
    /**
     * The data used to create many TipoEvents.
     */
    data: TipoEventCreateManyInput | TipoEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoEvent update
   */
  export type TipoEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEvent
     */
    select?: TipoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEvent
     */
    omit?: TipoEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEventInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoEvent.
     */
    data: XOR<TipoEventUpdateInput, TipoEventUncheckedUpdateInput>
    /**
     * Choose, which TipoEvent to update.
     */
    where: TipoEventWhereUniqueInput
  }

  /**
   * TipoEvent updateMany
   */
  export type TipoEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoEvents.
     */
    data: XOR<TipoEventUpdateManyMutationInput, TipoEventUncheckedUpdateManyInput>
    /**
     * Filter which TipoEvents to update
     */
    where?: TipoEventWhereInput
    /**
     * Limit how many TipoEvents to update.
     */
    limit?: number
  }

  /**
   * TipoEvent updateManyAndReturn
   */
  export type TipoEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEvent
     */
    select?: TipoEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEvent
     */
    omit?: TipoEventOmit<ExtArgs> | null
    /**
     * The data used to update TipoEvents.
     */
    data: XOR<TipoEventUpdateManyMutationInput, TipoEventUncheckedUpdateManyInput>
    /**
     * Filter which TipoEvents to update
     */
    where?: TipoEventWhereInput
    /**
     * Limit how many TipoEvents to update.
     */
    limit?: number
  }

  /**
   * TipoEvent upsert
   */
  export type TipoEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEvent
     */
    select?: TipoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEvent
     */
    omit?: TipoEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEventInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoEvent to update in case it exists.
     */
    where: TipoEventWhereUniqueInput
    /**
     * In case the TipoEvent found by the `where` argument doesn't exist, create a new TipoEvent with this data.
     */
    create: XOR<TipoEventCreateInput, TipoEventUncheckedCreateInput>
    /**
     * In case the TipoEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoEventUpdateInput, TipoEventUncheckedUpdateInput>
  }

  /**
   * TipoEvent delete
   */
  export type TipoEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEvent
     */
    select?: TipoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEvent
     */
    omit?: TipoEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEventInclude<ExtArgs> | null
    /**
     * Filter which TipoEvent to delete.
     */
    where: TipoEventWhereUniqueInput
  }

  /**
   * TipoEvent deleteMany
   */
  export type TipoEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoEvents to delete
     */
    where?: TipoEventWhereInput
    /**
     * Limit how many TipoEvents to delete.
     */
    limit?: number
  }

  /**
   * TipoEvent.bita_events
   */
  export type TipoEvent$bita_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BitaEvents
     */
    select?: BitaEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BitaEvents
     */
    omit?: BitaEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitaEventsInclude<ExtArgs> | null
    where?: BitaEventsWhereInput
    orderBy?: BitaEventsOrderByWithRelationInput | BitaEventsOrderByWithRelationInput[]
    cursor?: BitaEventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BitaEventsScalarFieldEnum | BitaEventsScalarFieldEnum[]
  }

  /**
   * TipoEvent.events
   */
  export type TipoEvent$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * TipoEvent without action
   */
  export type TipoEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEvent
     */
    select?: TipoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEvent
     */
    omit?: TipoEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEventInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    tipo_event_id: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    tipo_event_id: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    description: string | null
    tipo_event_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    description: string | null
    tipo_event_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    description: number
    tipo_event_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    tipo_event_id?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    tipo_event_id?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    description?: true
    tipo_event_id?: true
    created_at?: true
    updated_at?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    description?: true
    tipo_event_id?: true
    created_at?: true
    updated_at?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    description?: true
    tipo_event_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    description: string | null
    tipo_event_id: number | null
    created_at: Date
    updated_at: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    tipo_event_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    bita_events?: boolean | Event$bita_eventsArgs<ExtArgs>
    tipoEvent?: boolean | Event$tipoEventArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    tipo_event_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    tipoEvent?: boolean | Event$tipoEventArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    tipo_event_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    tipoEvent?: boolean | Event$tipoEventArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    description?: boolean
    tipo_event_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "tipo_event_id" | "created_at" | "updated_at", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bita_events?: boolean | Event$bita_eventsArgs<ExtArgs>
    tipoEvent?: boolean | Event$tipoEventArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoEvent?: boolean | Event$tipoEventArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoEvent?: boolean | Event$tipoEventArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      bita_events: Prisma.$BitaEventsPayload<ExtArgs>[]
      tipoEvent: Prisma.$TipoEventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string | null
      tipo_event_id: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bita_events<T extends Event$bita_eventsArgs<ExtArgs> = {}>(args?: Subset<T, Event$bita_eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BitaEventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tipoEvent<T extends Event$tipoEventArgs<ExtArgs> = {}>(args?: Subset<T, Event$tipoEventArgs<ExtArgs>>): Prisma__TipoEventClient<$Result.GetResult<Prisma.$TipoEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly description: FieldRef<"Event", 'String'>
    readonly tipo_event_id: FieldRef<"Event", 'Int'>
    readonly created_at: FieldRef<"Event", 'DateTime'>
    readonly updated_at: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.bita_events
   */
  export type Event$bita_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BitaEvents
     */
    select?: BitaEventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BitaEvents
     */
    omit?: BitaEventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BitaEventsInclude<ExtArgs> | null
    where?: BitaEventsWhereInput
    orderBy?: BitaEventsOrderByWithRelationInput | BitaEventsOrderByWithRelationInput[]
    cursor?: BitaEventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BitaEventsScalarFieldEnum | BitaEventsScalarFieldEnum[]
  }

  /**
   * Event.tipoEvent
   */
  export type Event$tipoEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoEvent
     */
    select?: TipoEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoEvent
     */
    omit?: TipoEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoEventInclude<ExtArgs> | null
    where?: TipoEventWhereInput
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Animal
   */

  export type AggregateAnimal = {
    _count: AnimalCountAggregateOutputType | null
    _avg: AnimalAvgAggregateOutputType | null
    _sum: AnimalSumAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  export type AnimalAvgAggregateOutputType = {
    id: number | null
    owner_id: number | null
    clase_id: number | null
    mother_id: number | null
  }

  export type AnimalSumAggregateOutputType = {
    id: number | null
    owner_id: number | null
    clase_id: number | null
    mother_id: number | null
  }

  export type AnimalMinAggregateOutputType = {
    id: number | null
    birthdate: string | null
    owner_id: number | null
    created_at: Date | null
    updated_at: Date | null
    clase_id: number | null
    name: string | null
    info: string | null
    mother: string | null
    hierro: string | null
    tipopart: string | null
    alive: string | null
    mother_id: number | null
    live: boolean | null
  }

  export type AnimalMaxAggregateOutputType = {
    id: number | null
    birthdate: string | null
    owner_id: number | null
    created_at: Date | null
    updated_at: Date | null
    clase_id: number | null
    name: string | null
    info: string | null
    mother: string | null
    hierro: string | null
    tipopart: string | null
    alive: string | null
    mother_id: number | null
    live: boolean | null
  }

  export type AnimalCountAggregateOutputType = {
    id: number
    birthdate: number
    owner_id: number
    created_at: number
    updated_at: number
    clase_id: number
    name: number
    info: number
    mother: number
    hierro: number
    tipopart: number
    alive: number
    mother_id: number
    live: number
    _all: number
  }


  export type AnimalAvgAggregateInputType = {
    id?: true
    owner_id?: true
    clase_id?: true
    mother_id?: true
  }

  export type AnimalSumAggregateInputType = {
    id?: true
    owner_id?: true
    clase_id?: true
    mother_id?: true
  }

  export type AnimalMinAggregateInputType = {
    id?: true
    birthdate?: true
    owner_id?: true
    created_at?: true
    updated_at?: true
    clase_id?: true
    name?: true
    info?: true
    mother?: true
    hierro?: true
    tipopart?: true
    alive?: true
    mother_id?: true
    live?: true
  }

  export type AnimalMaxAggregateInputType = {
    id?: true
    birthdate?: true
    owner_id?: true
    created_at?: true
    updated_at?: true
    clase_id?: true
    name?: true
    info?: true
    mother?: true
    hierro?: true
    tipopart?: true
    alive?: true
    mother_id?: true
    live?: true
  }

  export type AnimalCountAggregateInputType = {
    id?: true
    birthdate?: true
    owner_id?: true
    created_at?: true
    updated_at?: true
    clase_id?: true
    name?: true
    info?: true
    mother?: true
    hierro?: true
    tipopart?: true
    alive?: true
    mother_id?: true
    live?: true
    _all?: true
  }

  export type AnimalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animal to aggregate.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Animals
    **/
    _count?: true | AnimalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimalMaxAggregateInputType
  }

  export type GetAnimalAggregateType<T extends AnimalAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimal[P]>
      : GetScalarType<T[P], AggregateAnimal[P]>
  }




  export type AnimalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalWhereInput
    orderBy?: AnimalOrderByWithAggregationInput | AnimalOrderByWithAggregationInput[]
    by: AnimalScalarFieldEnum[] | AnimalScalarFieldEnum
    having?: AnimalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimalCountAggregateInputType | true
    _avg?: AnimalAvgAggregateInputType
    _sum?: AnimalSumAggregateInputType
    _min?: AnimalMinAggregateInputType
    _max?: AnimalMaxAggregateInputType
  }

  export type AnimalGroupByOutputType = {
    id: number
    birthdate: string | null
    owner_id: number | null
    created_at: Date
    updated_at: Date
    clase_id: number | null
    name: string | null
    info: string | null
    mother: string | null
    hierro: string | null
    tipopart: string | null
    alive: string | null
    mother_id: number | null
    live: boolean | null
    _count: AnimalCountAggregateOutputType | null
    _avg: AnimalAvgAggregateOutputType | null
    _sum: AnimalSumAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  type GetAnimalGroupByPayload<T extends AnimalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimalGroupByOutputType[P]>
            : GetScalarType<T[P], AnimalGroupByOutputType[P]>
        }
      >
    >


  export type AnimalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    birthdate?: boolean
    owner_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    clase_id?: boolean
    name?: boolean
    info?: boolean
    mother?: boolean
    hierro?: boolean
    tipopart?: boolean
    alive?: boolean
    mother_id?: boolean
    live?: boolean
    clase?: boolean | Animal$claseArgs<ExtArgs>
    owner?: boolean | Animal$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    birthdate?: boolean
    owner_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    clase_id?: boolean
    name?: boolean
    info?: boolean
    mother?: boolean
    hierro?: boolean
    tipopart?: boolean
    alive?: boolean
    mother_id?: boolean
    live?: boolean
    clase?: boolean | Animal$claseArgs<ExtArgs>
    owner?: boolean | Animal$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    birthdate?: boolean
    owner_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    clase_id?: boolean
    name?: boolean
    info?: boolean
    mother?: boolean
    hierro?: boolean
    tipopart?: boolean
    alive?: boolean
    mother_id?: boolean
    live?: boolean
    clase?: boolean | Animal$claseArgs<ExtArgs>
    owner?: boolean | Animal$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectScalar = {
    id?: boolean
    birthdate?: boolean
    owner_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    clase_id?: boolean
    name?: boolean
    info?: boolean
    mother?: boolean
    hierro?: boolean
    tipopart?: boolean
    alive?: boolean
    mother_id?: boolean
    live?: boolean
  }

  export type AnimalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "birthdate" | "owner_id" | "created_at" | "updated_at" | "clase_id" | "name" | "info" | "mother" | "hierro" | "tipopart" | "alive" | "mother_id" | "live", ExtArgs["result"]["animal"]>
  export type AnimalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clase?: boolean | Animal$claseArgs<ExtArgs>
    owner?: boolean | Animal$ownerArgs<ExtArgs>
  }
  export type AnimalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clase?: boolean | Animal$claseArgs<ExtArgs>
    owner?: boolean | Animal$ownerArgs<ExtArgs>
  }
  export type AnimalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clase?: boolean | Animal$claseArgs<ExtArgs>
    owner?: boolean | Animal$ownerArgs<ExtArgs>
  }

  export type $AnimalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Animal"
    objects: {
      clase: Prisma.$ClasePayload<ExtArgs> | null
      owner: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      birthdate: string | null
      owner_id: number | null
      created_at: Date
      updated_at: Date
      clase_id: number | null
      name: string | null
      info: string | null
      mother: string | null
      hierro: string | null
      tipopart: string | null
      alive: string | null
      mother_id: number | null
      live: boolean | null
    }, ExtArgs["result"]["animal"]>
    composites: {}
  }

  type AnimalGetPayload<S extends boolean | null | undefined | AnimalDefaultArgs> = $Result.GetResult<Prisma.$AnimalPayload, S>

  type AnimalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimalCountAggregateInputType | true
    }

  export interface AnimalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Animal'], meta: { name: 'Animal' } }
    /**
     * Find zero or one Animal that matches the filter.
     * @param {AnimalFindUniqueArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimalFindUniqueArgs>(args: SelectSubset<T, AnimalFindUniqueArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Animal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimalFindUniqueOrThrowArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimalFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindFirstArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimalFindFirstArgs>(args?: SelectSubset<T, AnimalFindFirstArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindFirstOrThrowArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimalFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimalFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Animals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Animals
     * const animals = await prisma.animal.findMany()
     * 
     * // Get first 10 Animals
     * const animals = await prisma.animal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animalWithIdOnly = await prisma.animal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnimalFindManyArgs>(args?: SelectSubset<T, AnimalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Animal.
     * @param {AnimalCreateArgs} args - Arguments to create a Animal.
     * @example
     * // Create one Animal
     * const Animal = await prisma.animal.create({
     *   data: {
     *     // ... data to create a Animal
     *   }
     * })
     * 
     */
    create<T extends AnimalCreateArgs>(args: SelectSubset<T, AnimalCreateArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Animals.
     * @param {AnimalCreateManyArgs} args - Arguments to create many Animals.
     * @example
     * // Create many Animals
     * const animal = await prisma.animal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimalCreateManyArgs>(args?: SelectSubset<T, AnimalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Animals and returns the data saved in the database.
     * @param {AnimalCreateManyAndReturnArgs} args - Arguments to create many Animals.
     * @example
     * // Create many Animals
     * const animal = await prisma.animal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Animals and only return the `id`
     * const animalWithIdOnly = await prisma.animal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimalCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Animal.
     * @param {AnimalDeleteArgs} args - Arguments to delete one Animal.
     * @example
     * // Delete one Animal
     * const Animal = await prisma.animal.delete({
     *   where: {
     *     // ... filter to delete one Animal
     *   }
     * })
     * 
     */
    delete<T extends AnimalDeleteArgs>(args: SelectSubset<T, AnimalDeleteArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Animal.
     * @param {AnimalUpdateArgs} args - Arguments to update one Animal.
     * @example
     * // Update one Animal
     * const animal = await prisma.animal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimalUpdateArgs>(args: SelectSubset<T, AnimalUpdateArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Animals.
     * @param {AnimalDeleteManyArgs} args - Arguments to filter Animals to delete.
     * @example
     * // Delete a few Animals
     * const { count } = await prisma.animal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimalDeleteManyArgs>(args?: SelectSubset<T, AnimalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Animals
     * const animal = await prisma.animal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimalUpdateManyArgs>(args: SelectSubset<T, AnimalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animals and returns the data updated in the database.
     * @param {AnimalUpdateManyAndReturnArgs} args - Arguments to update many Animals.
     * @example
     * // Update many Animals
     * const animal = await prisma.animal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Animals and only return the `id`
     * const animalWithIdOnly = await prisma.animal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnimalUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Animal.
     * @param {AnimalUpsertArgs} args - Arguments to update or create a Animal.
     * @example
     * // Update or create a Animal
     * const animal = await prisma.animal.upsert({
     *   create: {
     *     // ... data to create a Animal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Animal we want to update
     *   }
     * })
     */
    upsert<T extends AnimalUpsertArgs>(args: SelectSubset<T, AnimalUpsertArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalCountArgs} args - Arguments to filter Animals to count.
     * @example
     * // Count the number of Animals
     * const count = await prisma.animal.count({
     *   where: {
     *     // ... the filter for the Animals we want to count
     *   }
     * })
    **/
    count<T extends AnimalCountArgs>(
      args?: Subset<T, AnimalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimalAggregateArgs>(args: Subset<T, AnimalAggregateArgs>): Prisma.PrismaPromise<GetAnimalAggregateType<T>>

    /**
     * Group by Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalGroupByArgs} args - Group by arguments.
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
      T extends AnimalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimalGroupByArgs['orderBy'] }
        : { orderBy?: AnimalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Animal model
   */
  readonly fields: AnimalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Animal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clase<T extends Animal$claseArgs<ExtArgs> = {}>(args?: Subset<T, Animal$claseArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    owner<T extends Animal$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Animal$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Animal model
   */
  interface AnimalFieldRefs {
    readonly id: FieldRef<"Animal", 'Int'>
    readonly birthdate: FieldRef<"Animal", 'String'>
    readonly owner_id: FieldRef<"Animal", 'Int'>
    readonly created_at: FieldRef<"Animal", 'DateTime'>
    readonly updated_at: FieldRef<"Animal", 'DateTime'>
    readonly clase_id: FieldRef<"Animal", 'Int'>
    readonly name: FieldRef<"Animal", 'String'>
    readonly info: FieldRef<"Animal", 'String'>
    readonly mother: FieldRef<"Animal", 'String'>
    readonly hierro: FieldRef<"Animal", 'String'>
    readonly tipopart: FieldRef<"Animal", 'String'>
    readonly alive: FieldRef<"Animal", 'String'>
    readonly mother_id: FieldRef<"Animal", 'Int'>
    readonly live: FieldRef<"Animal", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Animal findUnique
   */
  export type AnimalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal findUniqueOrThrow
   */
  export type AnimalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal findFirst
   */
  export type AnimalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animals.
     */
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal findFirstOrThrow
   */
  export type AnimalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animals.
     */
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal findMany
   */
  export type AnimalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animals to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal create
   */
  export type AnimalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The data needed to create a Animal.
     */
    data: XOR<AnimalCreateInput, AnimalUncheckedCreateInput>
  }

  /**
   * Animal createMany
   */
  export type AnimalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Animals.
     */
    data: AnimalCreateManyInput | AnimalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Animal createManyAndReturn
   */
  export type AnimalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * The data used to create many Animals.
     */
    data: AnimalCreateManyInput | AnimalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Animal update
   */
  export type AnimalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The data needed to update a Animal.
     */
    data: XOR<AnimalUpdateInput, AnimalUncheckedUpdateInput>
    /**
     * Choose, which Animal to update.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal updateMany
   */
  export type AnimalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Animals.
     */
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyInput>
    /**
     * Filter which Animals to update
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to update.
     */
    limit?: number
  }

  /**
   * Animal updateManyAndReturn
   */
  export type AnimalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * The data used to update Animals.
     */
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyInput>
    /**
     * Filter which Animals to update
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Animal upsert
   */
  export type AnimalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The filter to search for the Animal to update in case it exists.
     */
    where: AnimalWhereUniqueInput
    /**
     * In case the Animal found by the `where` argument doesn't exist, create a new Animal with this data.
     */
    create: XOR<AnimalCreateInput, AnimalUncheckedCreateInput>
    /**
     * In case the Animal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimalUpdateInput, AnimalUncheckedUpdateInput>
  }

  /**
   * Animal delete
   */
  export type AnimalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter which Animal to delete.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal deleteMany
   */
  export type AnimalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animals to delete
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to delete.
     */
    limit?: number
  }

  /**
   * Animal.clase
   */
  export type Animal$claseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    where?: ClaseWhereInput
  }

  /**
   * Animal.owner
   */
  export type Animal$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Animal without action
   */
  export type AnimalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
  }


  /**
   * Model Clase
   */

  export type AggregateClase = {
    _count: ClaseCountAggregateOutputType | null
    _avg: ClaseAvgAggregateOutputType | null
    _sum: ClaseSumAggregateOutputType | null
    _min: ClaseMinAggregateOutputType | null
    _max: ClaseMaxAggregateOutputType | null
  }

  export type ClaseAvgAggregateOutputType = {
    id: number | null
  }

  export type ClaseSumAggregateOutputType = {
    id: number | null
  }

  export type ClaseMinAggregateOutputType = {
    id: number | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClaseMaxAggregateOutputType = {
    id: number | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClaseCountAggregateOutputType = {
    id: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ClaseAvgAggregateInputType = {
    id?: true
  }

  export type ClaseSumAggregateInputType = {
    id?: true
  }

  export type ClaseMinAggregateInputType = {
    id?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type ClaseMaxAggregateInputType = {
    id?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type ClaseCountAggregateInputType = {
    id?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ClaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clase to aggregate.
     */
    where?: ClaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClaseOrderByWithRelationInput | ClaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clases
    **/
    _count?: true | ClaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaseMaxAggregateInputType
  }

  export type GetClaseAggregateType<T extends ClaseAggregateArgs> = {
        [P in keyof T & keyof AggregateClase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClase[P]>
      : GetScalarType<T[P], AggregateClase[P]>
  }




  export type ClaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaseWhereInput
    orderBy?: ClaseOrderByWithAggregationInput | ClaseOrderByWithAggregationInput[]
    by: ClaseScalarFieldEnum[] | ClaseScalarFieldEnum
    having?: ClaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaseCountAggregateInputType | true
    _avg?: ClaseAvgAggregateInputType
    _sum?: ClaseSumAggregateInputType
    _min?: ClaseMinAggregateInputType
    _max?: ClaseMaxAggregateInputType
  }

  export type ClaseGroupByOutputType = {
    id: number
    description: string | null
    created_at: Date
    updated_at: Date
    _count: ClaseCountAggregateOutputType | null
    _avg: ClaseAvgAggregateOutputType | null
    _sum: ClaseSumAggregateOutputType | null
    _min: ClaseMinAggregateOutputType | null
    _max: ClaseMaxAggregateOutputType | null
  }

  type GetClaseGroupByPayload<T extends ClaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaseGroupByOutputType[P]>
            : GetScalarType<T[P], ClaseGroupByOutputType[P]>
        }
      >
    >


  export type ClaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    animals?: boolean | Clase$animalsArgs<ExtArgs>
    _count?: boolean | ClaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clase"]>

  export type ClaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["clase"]>

  export type ClaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["clase"]>

  export type ClaseSelectScalar = {
    id?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ClaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "created_at" | "updated_at", ExtArgs["result"]["clase"]>
  export type ClaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animals?: boolean | Clase$animalsArgs<ExtArgs>
    _count?: boolean | ClaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clase"
    objects: {
      animals: Prisma.$AnimalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["clase"]>
    composites: {}
  }

  type ClaseGetPayload<S extends boolean | null | undefined | ClaseDefaultArgs> = $Result.GetResult<Prisma.$ClasePayload, S>

  type ClaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClaseCountAggregateInputType | true
    }

  export interface ClaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clase'], meta: { name: 'Clase' } }
    /**
     * Find zero or one Clase that matches the filter.
     * @param {ClaseFindUniqueArgs} args - Arguments to find a Clase
     * @example
     * // Get one Clase
     * const clase = await prisma.clase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClaseFindUniqueArgs>(args: SelectSubset<T, ClaseFindUniqueArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClaseFindUniqueOrThrowArgs} args - Arguments to find a Clase
     * @example
     * // Get one Clase
     * const clase = await prisma.clase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ClaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseFindFirstArgs} args - Arguments to find a Clase
     * @example
     * // Get one Clase
     * const clase = await prisma.clase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClaseFindFirstArgs>(args?: SelectSubset<T, ClaseFindFirstArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseFindFirstOrThrowArgs} args - Arguments to find a Clase
     * @example
     * // Get one Clase
     * const clase = await prisma.clase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ClaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clases
     * const clases = await prisma.clase.findMany()
     * 
     * // Get first 10 Clases
     * const clases = await prisma.clase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claseWithIdOnly = await prisma.clase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClaseFindManyArgs>(args?: SelectSubset<T, ClaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clase.
     * @param {ClaseCreateArgs} args - Arguments to create a Clase.
     * @example
     * // Create one Clase
     * const Clase = await prisma.clase.create({
     *   data: {
     *     // ... data to create a Clase
     *   }
     * })
     * 
     */
    create<T extends ClaseCreateArgs>(args: SelectSubset<T, ClaseCreateArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clases.
     * @param {ClaseCreateManyArgs} args - Arguments to create many Clases.
     * @example
     * // Create many Clases
     * const clase = await prisma.clase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClaseCreateManyArgs>(args?: SelectSubset<T, ClaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clases and returns the data saved in the database.
     * @param {ClaseCreateManyAndReturnArgs} args - Arguments to create many Clases.
     * @example
     * // Create many Clases
     * const clase = await prisma.clase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clases and only return the `id`
     * const claseWithIdOnly = await prisma.clase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClaseCreateManyAndReturnArgs>(args?: SelectSubset<T, ClaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clase.
     * @param {ClaseDeleteArgs} args - Arguments to delete one Clase.
     * @example
     * // Delete one Clase
     * const Clase = await prisma.clase.delete({
     *   where: {
     *     // ... filter to delete one Clase
     *   }
     * })
     * 
     */
    delete<T extends ClaseDeleteArgs>(args: SelectSubset<T, ClaseDeleteArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clase.
     * @param {ClaseUpdateArgs} args - Arguments to update one Clase.
     * @example
     * // Update one Clase
     * const clase = await prisma.clase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClaseUpdateArgs>(args: SelectSubset<T, ClaseUpdateArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clases.
     * @param {ClaseDeleteManyArgs} args - Arguments to filter Clases to delete.
     * @example
     * // Delete a few Clases
     * const { count } = await prisma.clase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClaseDeleteManyArgs>(args?: SelectSubset<T, ClaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clases
     * const clase = await prisma.clase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClaseUpdateManyArgs>(args: SelectSubset<T, ClaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clases and returns the data updated in the database.
     * @param {ClaseUpdateManyAndReturnArgs} args - Arguments to update many Clases.
     * @example
     * // Update many Clases
     * const clase = await prisma.clase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clases and only return the `id`
     * const claseWithIdOnly = await prisma.clase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClaseUpdateManyAndReturnArgs>(args: SelectSubset<T, ClaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clase.
     * @param {ClaseUpsertArgs} args - Arguments to update or create a Clase.
     * @example
     * // Update or create a Clase
     * const clase = await prisma.clase.upsert({
     *   create: {
     *     // ... data to create a Clase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clase we want to update
     *   }
     * })
     */
    upsert<T extends ClaseUpsertArgs>(args: SelectSubset<T, ClaseUpsertArgs<ExtArgs>>): Prisma__ClaseClient<$Result.GetResult<Prisma.$ClasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseCountArgs} args - Arguments to filter Clases to count.
     * @example
     * // Count the number of Clases
     * const count = await prisma.clase.count({
     *   where: {
     *     // ... the filter for the Clases we want to count
     *   }
     * })
    **/
    count<T extends ClaseCountArgs>(
      args?: Subset<T, ClaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClaseAggregateArgs>(args: Subset<T, ClaseAggregateArgs>): Prisma.PrismaPromise<GetClaseAggregateType<T>>

    /**
     * Group by Clase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseGroupByArgs} args - Group by arguments.
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
      T extends ClaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaseGroupByArgs['orderBy'] }
        : { orderBy?: ClaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clase model
   */
  readonly fields: ClaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animals<T extends Clase$animalsArgs<ExtArgs> = {}>(args?: Subset<T, Clase$animalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Clase model
   */
  interface ClaseFieldRefs {
    readonly id: FieldRef<"Clase", 'Int'>
    readonly description: FieldRef<"Clase", 'String'>
    readonly created_at: FieldRef<"Clase", 'DateTime'>
    readonly updated_at: FieldRef<"Clase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Clase findUnique
   */
  export type ClaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter, which Clase to fetch.
     */
    where: ClaseWhereUniqueInput
  }

  /**
   * Clase findUniqueOrThrow
   */
  export type ClaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter, which Clase to fetch.
     */
    where: ClaseWhereUniqueInput
  }

  /**
   * Clase findFirst
   */
  export type ClaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter, which Clase to fetch.
     */
    where?: ClaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClaseOrderByWithRelationInput | ClaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clases.
     */
    cursor?: ClaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clases.
     */
    distinct?: ClaseScalarFieldEnum | ClaseScalarFieldEnum[]
  }

  /**
   * Clase findFirstOrThrow
   */
  export type ClaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter, which Clase to fetch.
     */
    where?: ClaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClaseOrderByWithRelationInput | ClaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clases.
     */
    cursor?: ClaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clases.
     */
    distinct?: ClaseScalarFieldEnum | ClaseScalarFieldEnum[]
  }

  /**
   * Clase findMany
   */
  export type ClaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter, which Clases to fetch.
     */
    where?: ClaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClaseOrderByWithRelationInput | ClaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clases.
     */
    cursor?: ClaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clases.
     */
    skip?: number
    distinct?: ClaseScalarFieldEnum | ClaseScalarFieldEnum[]
  }

  /**
   * Clase create
   */
  export type ClaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Clase.
     */
    data: XOR<ClaseCreateInput, ClaseUncheckedCreateInput>
  }

  /**
   * Clase createMany
   */
  export type ClaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clases.
     */
    data: ClaseCreateManyInput | ClaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clase createManyAndReturn
   */
  export type ClaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * The data used to create many Clases.
     */
    data: ClaseCreateManyInput | ClaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clase update
   */
  export type ClaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Clase.
     */
    data: XOR<ClaseUpdateInput, ClaseUncheckedUpdateInput>
    /**
     * Choose, which Clase to update.
     */
    where: ClaseWhereUniqueInput
  }

  /**
   * Clase updateMany
   */
  export type ClaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clases.
     */
    data: XOR<ClaseUpdateManyMutationInput, ClaseUncheckedUpdateManyInput>
    /**
     * Filter which Clases to update
     */
    where?: ClaseWhereInput
    /**
     * Limit how many Clases to update.
     */
    limit?: number
  }

  /**
   * Clase updateManyAndReturn
   */
  export type ClaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * The data used to update Clases.
     */
    data: XOR<ClaseUpdateManyMutationInput, ClaseUncheckedUpdateManyInput>
    /**
     * Filter which Clases to update
     */
    where?: ClaseWhereInput
    /**
     * Limit how many Clases to update.
     */
    limit?: number
  }

  /**
   * Clase upsert
   */
  export type ClaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Clase to update in case it exists.
     */
    where: ClaseWhereUniqueInput
    /**
     * In case the Clase found by the `where` argument doesn't exist, create a new Clase with this data.
     */
    create: XOR<ClaseCreateInput, ClaseUncheckedCreateInput>
    /**
     * In case the Clase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClaseUpdateInput, ClaseUncheckedUpdateInput>
  }

  /**
   * Clase delete
   */
  export type ClaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
    /**
     * Filter which Clase to delete.
     */
    where: ClaseWhereUniqueInput
  }

  /**
   * Clase deleteMany
   */
  export type ClaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clases to delete
     */
    where?: ClaseWhereInput
    /**
     * Limit how many Clases to delete.
     */
    limit?: number
  }

  /**
   * Clase.animals
   */
  export type Clase$animalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    where?: AnimalWhereInput
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    cursor?: AnimalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Clase without action
   */
  export type ClaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clase
     */
    select?: ClaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clase
     */
    omit?: ClaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaseInclude<ExtArgs> | null
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


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    published: 'published',
    authorId: 'authorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    password: 'password',
    nivel: 'nivel'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BitacoraScalarFieldEnum: {
    id: 'id',
    bitacora_date: 'bitacora_date',
    author_id: 'author_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BitacoraScalarFieldEnum = (typeof BitacoraScalarFieldEnum)[keyof typeof BitacoraScalarFieldEnum]


  export const BitaEventsScalarFieldEnum: {
    id: 'id',
    bitacora_id: 'bitacora_id',
    event_date: 'event_date',
    tipo_event_id: 'tipo_event_id',
    events_id: 'events_id',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at',
    image: 'image'
  };

  export type BitaEventsScalarFieldEnum = (typeof BitaEventsScalarFieldEnum)[keyof typeof BitaEventsScalarFieldEnum]


  export const TipoEventScalarFieldEnum: {
    id: 'id',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TipoEventScalarFieldEnum = (typeof TipoEventScalarFieldEnum)[keyof typeof TipoEventScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    description: 'description',
    tipo_event_id: 'tipo_event_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const AnimalScalarFieldEnum: {
    id: 'id',
    birthdate: 'birthdate',
    owner_id: 'owner_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    clase_id: 'clase_id',
    name: 'name',
    info: 'info',
    mother: 'mother',
    hierro: 'hierro',
    tipopart: 'tipopart',
    alive: 'alive',
    mother_id: 'mother_id',
    live: 'live'
  };

  export type AnimalScalarFieldEnum = (typeof AnimalScalarFieldEnum)[keyof typeof AnimalScalarFieldEnum]


  export const ClaseScalarFieldEnum: {
    id: 'id',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ClaseScalarFieldEnum = (typeof ClaseScalarFieldEnum)[keyof typeof ClaseScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    authorId?: IntNullableFilter<"Post"> | number | null
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    published?: SortOrder
    authorId?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    authorId?: IntNullableFilter<"Post"> | number | null
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    published?: SortOrder
    authorId?: SortOrderInput | SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringNullableWithAggregatesFilter<"Post"> | string | null
    published?: BoolWithAggregatesFilter<"Post"> | boolean
    authorId?: IntNullableWithAggregatesFilter<"Post"> | number | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    password?: StringNullableFilter<"User"> | string | null
    nivel?: IntNullableFilter<"User"> | number | null
    posts?: PostListRelationFilter
    animal?: AnimalListRelationFilter
    bitacora?: BitacoraListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrderInput | SortOrder
    nivel?: SortOrderInput | SortOrder
    posts?: PostOrderByRelationAggregateInput
    animal?: AnimalOrderByRelationAggregateInput
    bitacora?: BitacoraOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    password?: StringNullableFilter<"User"> | string | null
    nivel?: IntNullableFilter<"User"> | number | null
    posts?: PostListRelationFilter
    animal?: AnimalListRelationFilter
    bitacora?: BitacoraListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrderInput | SortOrder
    nivel?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    nivel?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type BitacoraWhereInput = {
    AND?: BitacoraWhereInput | BitacoraWhereInput[]
    OR?: BitacoraWhereInput[]
    NOT?: BitacoraWhereInput | BitacoraWhereInput[]
    id?: IntFilter<"Bitacora"> | number
    bitacora_date?: StringNullableFilter<"Bitacora"> | string | null
    author_id?: IntNullableFilter<"Bitacora"> | number | null
    created_at?: DateTimeFilter<"Bitacora"> | Date | string
    updated_at?: DateTimeFilter<"Bitacora"> | Date | string
    bita_events?: BitaEventsListRelationFilter
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type BitacoraOrderByWithRelationInput = {
    id?: SortOrder
    bitacora_date?: SortOrderInput | SortOrder
    author_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bita_events?: BitaEventsOrderByRelationAggregateInput
    author?: UserOrderByWithRelationInput
  }

  export type BitacoraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BitacoraWhereInput | BitacoraWhereInput[]
    OR?: BitacoraWhereInput[]
    NOT?: BitacoraWhereInput | BitacoraWhereInput[]
    bitacora_date?: StringNullableFilter<"Bitacora"> | string | null
    author_id?: IntNullableFilter<"Bitacora"> | number | null
    created_at?: DateTimeFilter<"Bitacora"> | Date | string
    updated_at?: DateTimeFilter<"Bitacora"> | Date | string
    bita_events?: BitaEventsListRelationFilter
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type BitacoraOrderByWithAggregationInput = {
    id?: SortOrder
    bitacora_date?: SortOrderInput | SortOrder
    author_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: BitacoraCountOrderByAggregateInput
    _avg?: BitacoraAvgOrderByAggregateInput
    _max?: BitacoraMaxOrderByAggregateInput
    _min?: BitacoraMinOrderByAggregateInput
    _sum?: BitacoraSumOrderByAggregateInput
  }

  export type BitacoraScalarWhereWithAggregatesInput = {
    AND?: BitacoraScalarWhereWithAggregatesInput | BitacoraScalarWhereWithAggregatesInput[]
    OR?: BitacoraScalarWhereWithAggregatesInput[]
    NOT?: BitacoraScalarWhereWithAggregatesInput | BitacoraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bitacora"> | number
    bitacora_date?: StringNullableWithAggregatesFilter<"Bitacora"> | string | null
    author_id?: IntNullableWithAggregatesFilter<"Bitacora"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Bitacora"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Bitacora"> | Date | string
  }

  export type BitaEventsWhereInput = {
    AND?: BitaEventsWhereInput | BitaEventsWhereInput[]
    OR?: BitaEventsWhereInput[]
    NOT?: BitaEventsWhereInput | BitaEventsWhereInput[]
    id?: IntFilter<"BitaEvents"> | number
    bitacora_id?: IntNullableFilter<"BitaEvents"> | number | null
    event_date?: DateTimeNullableFilter<"BitaEvents"> | Date | string | null
    tipo_event_id?: IntNullableFilter<"BitaEvents"> | number | null
    events_id?: IntNullableFilter<"BitaEvents"> | number | null
    description?: StringNullableFilter<"BitaEvents"> | string | null
    created_at?: DateTimeFilter<"BitaEvents"> | Date | string
    updated_at?: DateTimeFilter<"BitaEvents"> | Date | string
    image?: BoolFilter<"BitaEvents"> | boolean
    bitacora?: XOR<BitacoraNullableScalarRelationFilter, BitacoraWhereInput> | null
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
    tipoEvent?: XOR<TipoEventNullableScalarRelationFilter, TipoEventWhereInput> | null
  }

  export type BitaEventsOrderByWithRelationInput = {
    id?: SortOrder
    bitacora_id?: SortOrderInput | SortOrder
    event_date?: SortOrderInput | SortOrder
    tipo_event_id?: SortOrderInput | SortOrder
    events_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    image?: SortOrder
    bitacora?: BitacoraOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
    tipoEvent?: TipoEventOrderByWithRelationInput
  }

  export type BitaEventsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BitaEventsWhereInput | BitaEventsWhereInput[]
    OR?: BitaEventsWhereInput[]
    NOT?: BitaEventsWhereInput | BitaEventsWhereInput[]
    bitacora_id?: IntNullableFilter<"BitaEvents"> | number | null
    event_date?: DateTimeNullableFilter<"BitaEvents"> | Date | string | null
    tipo_event_id?: IntNullableFilter<"BitaEvents"> | number | null
    events_id?: IntNullableFilter<"BitaEvents"> | number | null
    description?: StringNullableFilter<"BitaEvents"> | string | null
    created_at?: DateTimeFilter<"BitaEvents"> | Date | string
    updated_at?: DateTimeFilter<"BitaEvents"> | Date | string
    image?: BoolFilter<"BitaEvents"> | boolean
    bitacora?: XOR<BitacoraNullableScalarRelationFilter, BitacoraWhereInput> | null
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
    tipoEvent?: XOR<TipoEventNullableScalarRelationFilter, TipoEventWhereInput> | null
  }, "id">

  export type BitaEventsOrderByWithAggregationInput = {
    id?: SortOrder
    bitacora_id?: SortOrderInput | SortOrder
    event_date?: SortOrderInput | SortOrder
    tipo_event_id?: SortOrderInput | SortOrder
    events_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    image?: SortOrder
    _count?: BitaEventsCountOrderByAggregateInput
    _avg?: BitaEventsAvgOrderByAggregateInput
    _max?: BitaEventsMaxOrderByAggregateInput
    _min?: BitaEventsMinOrderByAggregateInput
    _sum?: BitaEventsSumOrderByAggregateInput
  }

  export type BitaEventsScalarWhereWithAggregatesInput = {
    AND?: BitaEventsScalarWhereWithAggregatesInput | BitaEventsScalarWhereWithAggregatesInput[]
    OR?: BitaEventsScalarWhereWithAggregatesInput[]
    NOT?: BitaEventsScalarWhereWithAggregatesInput | BitaEventsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BitaEvents"> | number
    bitacora_id?: IntNullableWithAggregatesFilter<"BitaEvents"> | number | null
    event_date?: DateTimeNullableWithAggregatesFilter<"BitaEvents"> | Date | string | null
    tipo_event_id?: IntNullableWithAggregatesFilter<"BitaEvents"> | number | null
    events_id?: IntNullableWithAggregatesFilter<"BitaEvents"> | number | null
    description?: StringNullableWithAggregatesFilter<"BitaEvents"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"BitaEvents"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"BitaEvents"> | Date | string
    image?: BoolWithAggregatesFilter<"BitaEvents"> | boolean
  }

  export type TipoEventWhereInput = {
    AND?: TipoEventWhereInput | TipoEventWhereInput[]
    OR?: TipoEventWhereInput[]
    NOT?: TipoEventWhereInput | TipoEventWhereInput[]
    id?: IntFilter<"TipoEvent"> | number
    description?: StringNullableFilter<"TipoEvent"> | string | null
    created_at?: DateTimeFilter<"TipoEvent"> | Date | string
    updated_at?: DateTimeFilter<"TipoEvent"> | Date | string
    bita_events?: BitaEventsListRelationFilter
    events?: EventListRelationFilter
  }

  export type TipoEventOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bita_events?: BitaEventsOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
  }

  export type TipoEventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TipoEventWhereInput | TipoEventWhereInput[]
    OR?: TipoEventWhereInput[]
    NOT?: TipoEventWhereInput | TipoEventWhereInput[]
    description?: StringNullableFilter<"TipoEvent"> | string | null
    created_at?: DateTimeFilter<"TipoEvent"> | Date | string
    updated_at?: DateTimeFilter<"TipoEvent"> | Date | string
    bita_events?: BitaEventsListRelationFilter
    events?: EventListRelationFilter
  }, "id">

  export type TipoEventOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TipoEventCountOrderByAggregateInput
    _avg?: TipoEventAvgOrderByAggregateInput
    _max?: TipoEventMaxOrderByAggregateInput
    _min?: TipoEventMinOrderByAggregateInput
    _sum?: TipoEventSumOrderByAggregateInput
  }

  export type TipoEventScalarWhereWithAggregatesInput = {
    AND?: TipoEventScalarWhereWithAggregatesInput | TipoEventScalarWhereWithAggregatesInput[]
    OR?: TipoEventScalarWhereWithAggregatesInput[]
    NOT?: TipoEventScalarWhereWithAggregatesInput | TipoEventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoEvent"> | number
    description?: StringNullableWithAggregatesFilter<"TipoEvent"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"TipoEvent"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"TipoEvent"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    description?: StringNullableFilter<"Event"> | string | null
    tipo_event_id?: IntNullableFilter<"Event"> | number | null
    created_at?: DateTimeFilter<"Event"> | Date | string
    updated_at?: DateTimeFilter<"Event"> | Date | string
    bita_events?: BitaEventsListRelationFilter
    tipoEvent?: XOR<TipoEventNullableScalarRelationFilter, TipoEventWhereInput> | null
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    tipo_event_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bita_events?: BitaEventsOrderByRelationAggregateInput
    tipoEvent?: TipoEventOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    description?: StringNullableFilter<"Event"> | string | null
    tipo_event_id?: IntNullableFilter<"Event"> | number | null
    created_at?: DateTimeFilter<"Event"> | Date | string
    updated_at?: DateTimeFilter<"Event"> | Date | string
    bita_events?: BitaEventsListRelationFilter
    tipoEvent?: XOR<TipoEventNullableScalarRelationFilter, TipoEventWhereInput> | null
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    tipo_event_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    tipo_event_id?: IntNullableWithAggregatesFilter<"Event"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type AnimalWhereInput = {
    AND?: AnimalWhereInput | AnimalWhereInput[]
    OR?: AnimalWhereInput[]
    NOT?: AnimalWhereInput | AnimalWhereInput[]
    id?: IntFilter<"Animal"> | number
    birthdate?: StringNullableFilter<"Animal"> | string | null
    owner_id?: IntNullableFilter<"Animal"> | number | null
    created_at?: DateTimeFilter<"Animal"> | Date | string
    updated_at?: DateTimeFilter<"Animal"> | Date | string
    clase_id?: IntNullableFilter<"Animal"> | number | null
    name?: StringNullableFilter<"Animal"> | string | null
    info?: StringNullableFilter<"Animal"> | string | null
    mother?: StringNullableFilter<"Animal"> | string | null
    hierro?: StringNullableFilter<"Animal"> | string | null
    tipopart?: StringNullableFilter<"Animal"> | string | null
    alive?: StringNullableFilter<"Animal"> | string | null
    mother_id?: IntNullableFilter<"Animal"> | number | null
    live?: BoolNullableFilter<"Animal"> | boolean | null
    clase?: XOR<ClaseNullableScalarRelationFilter, ClaseWhereInput> | null
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AnimalOrderByWithRelationInput = {
    id?: SortOrder
    birthdate?: SortOrderInput | SortOrder
    owner_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    clase_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    info?: SortOrderInput | SortOrder
    mother?: SortOrderInput | SortOrder
    hierro?: SortOrderInput | SortOrder
    tipopart?: SortOrderInput | SortOrder
    alive?: SortOrderInput | SortOrder
    mother_id?: SortOrderInput | SortOrder
    live?: SortOrderInput | SortOrder
    clase?: ClaseOrderByWithRelationInput
    owner?: UserOrderByWithRelationInput
  }

  export type AnimalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnimalWhereInput | AnimalWhereInput[]
    OR?: AnimalWhereInput[]
    NOT?: AnimalWhereInput | AnimalWhereInput[]
    birthdate?: StringNullableFilter<"Animal"> | string | null
    owner_id?: IntNullableFilter<"Animal"> | number | null
    created_at?: DateTimeFilter<"Animal"> | Date | string
    updated_at?: DateTimeFilter<"Animal"> | Date | string
    clase_id?: IntNullableFilter<"Animal"> | number | null
    name?: StringNullableFilter<"Animal"> | string | null
    info?: StringNullableFilter<"Animal"> | string | null
    mother?: StringNullableFilter<"Animal"> | string | null
    hierro?: StringNullableFilter<"Animal"> | string | null
    tipopart?: StringNullableFilter<"Animal"> | string | null
    alive?: StringNullableFilter<"Animal"> | string | null
    mother_id?: IntNullableFilter<"Animal"> | number | null
    live?: BoolNullableFilter<"Animal"> | boolean | null
    clase?: XOR<ClaseNullableScalarRelationFilter, ClaseWhereInput> | null
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AnimalOrderByWithAggregationInput = {
    id?: SortOrder
    birthdate?: SortOrderInput | SortOrder
    owner_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    clase_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    info?: SortOrderInput | SortOrder
    mother?: SortOrderInput | SortOrder
    hierro?: SortOrderInput | SortOrder
    tipopart?: SortOrderInput | SortOrder
    alive?: SortOrderInput | SortOrder
    mother_id?: SortOrderInput | SortOrder
    live?: SortOrderInput | SortOrder
    _count?: AnimalCountOrderByAggregateInput
    _avg?: AnimalAvgOrderByAggregateInput
    _max?: AnimalMaxOrderByAggregateInput
    _min?: AnimalMinOrderByAggregateInput
    _sum?: AnimalSumOrderByAggregateInput
  }

  export type AnimalScalarWhereWithAggregatesInput = {
    AND?: AnimalScalarWhereWithAggregatesInput | AnimalScalarWhereWithAggregatesInput[]
    OR?: AnimalScalarWhereWithAggregatesInput[]
    NOT?: AnimalScalarWhereWithAggregatesInput | AnimalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Animal"> | number
    birthdate?: StringNullableWithAggregatesFilter<"Animal"> | string | null
    owner_id?: IntNullableWithAggregatesFilter<"Animal"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Animal"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Animal"> | Date | string
    clase_id?: IntNullableWithAggregatesFilter<"Animal"> | number | null
    name?: StringNullableWithAggregatesFilter<"Animal"> | string | null
    info?: StringNullableWithAggregatesFilter<"Animal"> | string | null
    mother?: StringNullableWithAggregatesFilter<"Animal"> | string | null
    hierro?: StringNullableWithAggregatesFilter<"Animal"> | string | null
    tipopart?: StringNullableWithAggregatesFilter<"Animal"> | string | null
    alive?: StringNullableWithAggregatesFilter<"Animal"> | string | null
    mother_id?: IntNullableWithAggregatesFilter<"Animal"> | number | null
    live?: BoolNullableWithAggregatesFilter<"Animal"> | boolean | null
  }

  export type ClaseWhereInput = {
    AND?: ClaseWhereInput | ClaseWhereInput[]
    OR?: ClaseWhereInput[]
    NOT?: ClaseWhereInput | ClaseWhereInput[]
    id?: IntFilter<"Clase"> | number
    description?: StringNullableFilter<"Clase"> | string | null
    created_at?: DateTimeFilter<"Clase"> | Date | string
    updated_at?: DateTimeFilter<"Clase"> | Date | string
    animals?: AnimalListRelationFilter
  }

  export type ClaseOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    animals?: AnimalOrderByRelationAggregateInput
  }

  export type ClaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClaseWhereInput | ClaseWhereInput[]
    OR?: ClaseWhereInput[]
    NOT?: ClaseWhereInput | ClaseWhereInput[]
    description?: StringNullableFilter<"Clase"> | string | null
    created_at?: DateTimeFilter<"Clase"> | Date | string
    updated_at?: DateTimeFilter<"Clase"> | Date | string
    animals?: AnimalListRelationFilter
  }, "id">

  export type ClaseOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ClaseCountOrderByAggregateInput
    _avg?: ClaseAvgOrderByAggregateInput
    _max?: ClaseMaxOrderByAggregateInput
    _min?: ClaseMinOrderByAggregateInput
    _sum?: ClaseSumOrderByAggregateInput
  }

  export type ClaseScalarWhereWithAggregatesInput = {
    AND?: ClaseScalarWhereWithAggregatesInput | ClaseScalarWhereWithAggregatesInput[]
    OR?: ClaseScalarWhereWithAggregatesInput[]
    NOT?: ClaseScalarWhereWithAggregatesInput | ClaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Clase"> | number
    description?: StringNullableWithAggregatesFilter<"Clase"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Clase"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Clase"> | Date | string
  }

  export type PostCreateInput = {
    title: string
    content?: string | null
    published?: boolean
    author?: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    content?: string | null
    published?: boolean
    authorId?: number | null
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    content?: string | null
    published?: boolean
    authorId?: number | null
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateInput = {
    name?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    nivel?: number | null
    posts?: PostCreateNestedManyWithoutAuthorInput
    animal?: AnimalCreateNestedManyWithoutOwnerInput
    bitacora?: BitacoraCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    nivel?: number | null
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    animal?: AnimalUncheckedCreateNestedManyWithoutOwnerInput
    bitacora?: BitacoraUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nivel?: NullableIntFieldUpdateOperationsInput | number | null
    posts?: PostUpdateManyWithoutAuthorNestedInput
    animal?: AnimalUpdateManyWithoutOwnerNestedInput
    bitacora?: BitacoraUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nivel?: NullableIntFieldUpdateOperationsInput | number | null
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    animal?: AnimalUncheckedUpdateManyWithoutOwnerNestedInput
    bitacora?: BitacoraUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    nivel?: number | null
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nivel?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nivel?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BitacoraCreateInput = {
    bitacora_date?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bita_events?: BitaEventsCreateNestedManyWithoutBitacoraInput
    author?: UserCreateNestedOneWithoutBitacoraInput
  }

  export type BitacoraUncheckedCreateInput = {
    id?: number
    bitacora_date?: string | null
    author_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    bita_events?: BitaEventsUncheckedCreateNestedManyWithoutBitacoraInput
  }

  export type BitacoraUpdateInput = {
    bitacora_date?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bita_events?: BitaEventsUpdateManyWithoutBitacoraNestedInput
    author?: UserUpdateOneWithoutBitacoraNestedInput
  }

  export type BitacoraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bitacora_date?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bita_events?: BitaEventsUncheckedUpdateManyWithoutBitacoraNestedInput
  }

  export type BitacoraCreateManyInput = {
    id?: number
    bitacora_date?: string | null
    author_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BitacoraUpdateManyMutationInput = {
    bitacora_date?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BitacoraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bitacora_date?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BitaEventsCreateInput = {
    event_date?: Date | string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image: boolean
    bitacora?: BitacoraCreateNestedOneWithoutBita_eventsInput
    event?: EventCreateNestedOneWithoutBita_eventsInput
    tipoEvent?: TipoEventCreateNestedOneWithoutBita_eventsInput
  }

  export type BitaEventsUncheckedCreateInput = {
    id?: number
    bitacora_id?: number | null
    event_date?: Date | string | null
    tipo_event_id?: number | null
    events_id?: number | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image: boolean
  }

  export type BitaEventsUpdateInput = {
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: BoolFieldUpdateOperationsInput | boolean
    bitacora?: BitacoraUpdateOneWithoutBita_eventsNestedInput
    event?: EventUpdateOneWithoutBita_eventsNestedInput
    tipoEvent?: TipoEventUpdateOneWithoutBita_eventsNestedInput
  }

  export type BitaEventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bitacora_id?: NullableIntFieldUpdateOperationsInput | number | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_event_id?: NullableIntFieldUpdateOperationsInput | number | null
    events_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BitaEventsCreateManyInput = {
    id?: number
    bitacora_id?: number | null
    event_date?: Date | string | null
    tipo_event_id?: number | null
    events_id?: number | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image: boolean
  }

  export type BitaEventsUpdateManyMutationInput = {
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BitaEventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bitacora_id?: NullableIntFieldUpdateOperationsInput | number | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_event_id?: NullableIntFieldUpdateOperationsInput | number | null
    events_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TipoEventCreateInput = {
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bita_events?: BitaEventsCreateNestedManyWithoutTipoEventInput
    events?: EventCreateNestedManyWithoutTipoEventInput
  }

  export type TipoEventUncheckedCreateInput = {
    id?: number
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bita_events?: BitaEventsUncheckedCreateNestedManyWithoutTipoEventInput
    events?: EventUncheckedCreateNestedManyWithoutTipoEventInput
  }

  export type TipoEventUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bita_events?: BitaEventsUpdateManyWithoutTipoEventNestedInput
    events?: EventUpdateManyWithoutTipoEventNestedInput
  }

  export type TipoEventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bita_events?: BitaEventsUncheckedUpdateManyWithoutTipoEventNestedInput
    events?: EventUncheckedUpdateManyWithoutTipoEventNestedInput
  }

  export type TipoEventCreateManyInput = {
    id?: number
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TipoEventUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoEventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bita_events?: BitaEventsCreateNestedManyWithoutEventInput
    tipoEvent?: TipoEventCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    description?: string | null
    tipo_event_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    bita_events?: BitaEventsUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bita_events?: BitaEventsUpdateManyWithoutEventNestedInput
    tipoEvent?: TipoEventUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_event_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bita_events?: BitaEventsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: number
    description?: string | null
    tipo_event_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_event_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimalCreateInput = {
    birthdate?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    name?: string | null
    info?: string | null
    mother?: string | null
    hierro?: string | null
    tipopart?: string | null
    alive?: string | null
    mother_id?: number | null
    live?: boolean | null
    clase?: ClaseCreateNestedOneWithoutAnimalsInput
    owner?: UserCreateNestedOneWithoutAnimalInput
  }

  export type AnimalUncheckedCreateInput = {
    id?: number
    birthdate?: string | null
    owner_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    clase_id?: number | null
    name?: string | null
    info?: string | null
    mother?: string | null
    hierro?: string | null
    tipopart?: string | null
    alive?: string | null
    mother_id?: number | null
    live?: boolean | null
  }

  export type AnimalUpdateInput = {
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    mother?: NullableStringFieldUpdateOperationsInput | string | null
    hierro?: NullableStringFieldUpdateOperationsInput | string | null
    tipopart?: NullableStringFieldUpdateOperationsInput | string | null
    alive?: NullableStringFieldUpdateOperationsInput | string | null
    mother_id?: NullableIntFieldUpdateOperationsInput | number | null
    live?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clase?: ClaseUpdateOneWithoutAnimalsNestedInput
    owner?: UserUpdateOneWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    owner_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clase_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    mother?: NullableStringFieldUpdateOperationsInput | string | null
    hierro?: NullableStringFieldUpdateOperationsInput | string | null
    tipopart?: NullableStringFieldUpdateOperationsInput | string | null
    alive?: NullableStringFieldUpdateOperationsInput | string | null
    mother_id?: NullableIntFieldUpdateOperationsInput | number | null
    live?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AnimalCreateManyInput = {
    id?: number
    birthdate?: string | null
    owner_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    clase_id?: number | null
    name?: string | null
    info?: string | null
    mother?: string | null
    hierro?: string | null
    tipopart?: string | null
    alive?: string | null
    mother_id?: number | null
    live?: boolean | null
  }

  export type AnimalUpdateManyMutationInput = {
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    mother?: NullableStringFieldUpdateOperationsInput | string | null
    hierro?: NullableStringFieldUpdateOperationsInput | string | null
    tipopart?: NullableStringFieldUpdateOperationsInput | string | null
    alive?: NullableStringFieldUpdateOperationsInput | string | null
    mother_id?: NullableIntFieldUpdateOperationsInput | number | null
    live?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AnimalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    owner_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clase_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    mother?: NullableStringFieldUpdateOperationsInput | string | null
    hierro?: NullableStringFieldUpdateOperationsInput | string | null
    tipopart?: NullableStringFieldUpdateOperationsInput | string | null
    alive?: NullableStringFieldUpdateOperationsInput | string | null
    mother_id?: NullableIntFieldUpdateOperationsInput | number | null
    live?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ClaseCreateInput = {
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    animals?: AnimalCreateNestedManyWithoutClaseInput
  }

  export type ClaseUncheckedCreateInput = {
    id?: number
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    animals?: AnimalUncheckedCreateNestedManyWithoutClaseInput
  }

  export type ClaseUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animals?: AnimalUpdateManyWithoutClaseNestedInput
  }

  export type ClaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animals?: AnimalUncheckedUpdateManyWithoutClaseNestedInput
  }

  export type ClaseCreateManyInput = {
    id?: number
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClaseUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type AnimalListRelationFilter = {
    every?: AnimalWhereInput
    some?: AnimalWhereInput
    none?: AnimalWhereInput
  }

  export type BitacoraListRelationFilter = {
    every?: BitacoraWhereInput
    some?: BitacoraWhereInput
    none?: BitacoraWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnimalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BitacoraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrder
    nivel?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    nivel?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrder
    nivel?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrder
    nivel?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    nivel?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BitaEventsListRelationFilter = {
    every?: BitaEventsWhereInput
    some?: BitaEventsWhereInput
    none?: BitaEventsWhereInput
  }

  export type BitaEventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BitacoraCountOrderByAggregateInput = {
    id?: SortOrder
    bitacora_date?: SortOrder
    author_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BitacoraAvgOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
  }

  export type BitacoraMaxOrderByAggregateInput = {
    id?: SortOrder
    bitacora_date?: SortOrder
    author_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BitacoraMinOrderByAggregateInput = {
    id?: SortOrder
    bitacora_date?: SortOrder
    author_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BitacoraSumOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
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

  export type BitacoraNullableScalarRelationFilter = {
    is?: BitacoraWhereInput | null
    isNot?: BitacoraWhereInput | null
  }

  export type EventNullableScalarRelationFilter = {
    is?: EventWhereInput | null
    isNot?: EventWhereInput | null
  }

  export type TipoEventNullableScalarRelationFilter = {
    is?: TipoEventWhereInput | null
    isNot?: TipoEventWhereInput | null
  }

  export type BitaEventsCountOrderByAggregateInput = {
    id?: SortOrder
    bitacora_id?: SortOrder
    event_date?: SortOrder
    tipo_event_id?: SortOrder
    events_id?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    image?: SortOrder
  }

  export type BitaEventsAvgOrderByAggregateInput = {
    id?: SortOrder
    bitacora_id?: SortOrder
    tipo_event_id?: SortOrder
    events_id?: SortOrder
  }

  export type BitaEventsMaxOrderByAggregateInput = {
    id?: SortOrder
    bitacora_id?: SortOrder
    event_date?: SortOrder
    tipo_event_id?: SortOrder
    events_id?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    image?: SortOrder
  }

  export type BitaEventsMinOrderByAggregateInput = {
    id?: SortOrder
    bitacora_id?: SortOrder
    event_date?: SortOrder
    tipo_event_id?: SortOrder
    events_id?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    image?: SortOrder
  }

  export type BitaEventsSumOrderByAggregateInput = {
    id?: SortOrder
    bitacora_id?: SortOrder
    tipo_event_id?: SortOrder
    events_id?: SortOrder
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

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoEventCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TipoEventAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoEventMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TipoEventMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TipoEventSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    tipo_event_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    tipo_event_id?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    tipo_event_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    tipo_event_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    tipo_event_id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ClaseNullableScalarRelationFilter = {
    is?: ClaseWhereInput | null
    isNot?: ClaseWhereInput | null
  }

  export type AnimalCountOrderByAggregateInput = {
    id?: SortOrder
    birthdate?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    clase_id?: SortOrder
    name?: SortOrder
    info?: SortOrder
    mother?: SortOrder
    hierro?: SortOrder
    tipopart?: SortOrder
    alive?: SortOrder
    mother_id?: SortOrder
    live?: SortOrder
  }

  export type AnimalAvgOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    clase_id?: SortOrder
    mother_id?: SortOrder
  }

  export type AnimalMaxOrderByAggregateInput = {
    id?: SortOrder
    birthdate?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    clase_id?: SortOrder
    name?: SortOrder
    info?: SortOrder
    mother?: SortOrder
    hierro?: SortOrder
    tipopart?: SortOrder
    alive?: SortOrder
    mother_id?: SortOrder
    live?: SortOrder
  }

  export type AnimalMinOrderByAggregateInput = {
    id?: SortOrder
    birthdate?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    clase_id?: SortOrder
    name?: SortOrder
    info?: SortOrder
    mother?: SortOrder
    hierro?: SortOrder
    tipopart?: SortOrder
    alive?: SortOrder
    mother_id?: SortOrder
    live?: SortOrder
  }

  export type AnimalSumOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    clase_id?: SortOrder
    mother_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ClaseCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClaseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClaseMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClaseMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClaseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type AnimalCreateNestedManyWithoutOwnerInput = {
    create?: XOR<AnimalCreateWithoutOwnerInput, AnimalUncheckedCreateWithoutOwnerInput> | AnimalCreateWithoutOwnerInput[] | AnimalUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutOwnerInput | AnimalCreateOrConnectWithoutOwnerInput[]
    createMany?: AnimalCreateManyOwnerInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type BitacoraCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BitacoraCreateWithoutAuthorInput, BitacoraUncheckedCreateWithoutAuthorInput> | BitacoraCreateWithoutAuthorInput[] | BitacoraUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutAuthorInput | BitacoraCreateOrConnectWithoutAuthorInput[]
    createMany?: BitacoraCreateManyAuthorInputEnvelope
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type AnimalUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<AnimalCreateWithoutOwnerInput, AnimalUncheckedCreateWithoutOwnerInput> | AnimalCreateWithoutOwnerInput[] | AnimalUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutOwnerInput | AnimalCreateOrConnectWithoutOwnerInput[]
    createMany?: AnimalCreateManyOwnerInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type BitacoraUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BitacoraCreateWithoutAuthorInput, BitacoraUncheckedCreateWithoutAuthorInput> | BitacoraCreateWithoutAuthorInput[] | BitacoraUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutAuthorInput | BitacoraCreateOrConnectWithoutAuthorInput[]
    createMany?: BitacoraCreateManyAuthorInputEnvelope
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type AnimalUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<AnimalCreateWithoutOwnerInput, AnimalUncheckedCreateWithoutOwnerInput> | AnimalCreateWithoutOwnerInput[] | AnimalUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutOwnerInput | AnimalCreateOrConnectWithoutOwnerInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutOwnerInput | AnimalUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: AnimalCreateManyOwnerInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutOwnerInput | AnimalUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutOwnerInput | AnimalUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
  }

  export type BitacoraUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BitacoraCreateWithoutAuthorInput, BitacoraUncheckedCreateWithoutAuthorInput> | BitacoraCreateWithoutAuthorInput[] | BitacoraUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutAuthorInput | BitacoraCreateOrConnectWithoutAuthorInput[]
    upsert?: BitacoraUpsertWithWhereUniqueWithoutAuthorInput | BitacoraUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BitacoraCreateManyAuthorInputEnvelope
    set?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    disconnect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    delete?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    update?: BitacoraUpdateWithWhereUniqueWithoutAuthorInput | BitacoraUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BitacoraUpdateManyWithWhereWithoutAuthorInput | BitacoraUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BitacoraScalarWhereInput | BitacoraScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type AnimalUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<AnimalCreateWithoutOwnerInput, AnimalUncheckedCreateWithoutOwnerInput> | AnimalCreateWithoutOwnerInput[] | AnimalUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutOwnerInput | AnimalCreateOrConnectWithoutOwnerInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutOwnerInput | AnimalUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: AnimalCreateManyOwnerInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutOwnerInput | AnimalUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutOwnerInput | AnimalUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
  }

  export type BitacoraUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BitacoraCreateWithoutAuthorInput, BitacoraUncheckedCreateWithoutAuthorInput> | BitacoraCreateWithoutAuthorInput[] | BitacoraUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BitacoraCreateOrConnectWithoutAuthorInput | BitacoraCreateOrConnectWithoutAuthorInput[]
    upsert?: BitacoraUpsertWithWhereUniqueWithoutAuthorInput | BitacoraUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BitacoraCreateManyAuthorInputEnvelope
    set?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    disconnect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    delete?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    connect?: BitacoraWhereUniqueInput | BitacoraWhereUniqueInput[]
    update?: BitacoraUpdateWithWhereUniqueWithoutAuthorInput | BitacoraUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BitacoraUpdateManyWithWhereWithoutAuthorInput | BitacoraUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BitacoraScalarWhereInput | BitacoraScalarWhereInput[]
  }

  export type BitaEventsCreateNestedManyWithoutBitacoraInput = {
    create?: XOR<BitaEventsCreateWithoutBitacoraInput, BitaEventsUncheckedCreateWithoutBitacoraInput> | BitaEventsCreateWithoutBitacoraInput[] | BitaEventsUncheckedCreateWithoutBitacoraInput[]
    connectOrCreate?: BitaEventsCreateOrConnectWithoutBitacoraInput | BitaEventsCreateOrConnectWithoutBitacoraInput[]
    createMany?: BitaEventsCreateManyBitacoraInputEnvelope
    connect?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutBitacoraInput = {
    create?: XOR<UserCreateWithoutBitacoraInput, UserUncheckedCreateWithoutBitacoraInput>
    connectOrCreate?: UserCreateOrConnectWithoutBitacoraInput
    connect?: UserWhereUniqueInput
  }

  export type BitaEventsUncheckedCreateNestedManyWithoutBitacoraInput = {
    create?: XOR<BitaEventsCreateWithoutBitacoraInput, BitaEventsUncheckedCreateWithoutBitacoraInput> | BitaEventsCreateWithoutBitacoraInput[] | BitaEventsUncheckedCreateWithoutBitacoraInput[]
    connectOrCreate?: BitaEventsCreateOrConnectWithoutBitacoraInput | BitaEventsCreateOrConnectWithoutBitacoraInput[]
    createMany?: BitaEventsCreateManyBitacoraInputEnvelope
    connect?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
  }

  export type BitaEventsUpdateManyWithoutBitacoraNestedInput = {
    create?: XOR<BitaEventsCreateWithoutBitacoraInput, BitaEventsUncheckedCreateWithoutBitacoraInput> | BitaEventsCreateWithoutBitacoraInput[] | BitaEventsUncheckedCreateWithoutBitacoraInput[]
    connectOrCreate?: BitaEventsCreateOrConnectWithoutBitacoraInput | BitaEventsCreateOrConnectWithoutBitacoraInput[]
    upsert?: BitaEventsUpsertWithWhereUniqueWithoutBitacoraInput | BitaEventsUpsertWithWhereUniqueWithoutBitacoraInput[]
    createMany?: BitaEventsCreateManyBitacoraInputEnvelope
    set?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    disconnect?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    delete?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    connect?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    update?: BitaEventsUpdateWithWhereUniqueWithoutBitacoraInput | BitaEventsUpdateWithWhereUniqueWithoutBitacoraInput[]
    updateMany?: BitaEventsUpdateManyWithWhereWithoutBitacoraInput | BitaEventsUpdateManyWithWhereWithoutBitacoraInput[]
    deleteMany?: BitaEventsScalarWhereInput | BitaEventsScalarWhereInput[]
  }

  export type UserUpdateOneWithoutBitacoraNestedInput = {
    create?: XOR<UserCreateWithoutBitacoraInput, UserUncheckedCreateWithoutBitacoraInput>
    connectOrCreate?: UserCreateOrConnectWithoutBitacoraInput
    upsert?: UserUpsertWithoutBitacoraInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBitacoraInput, UserUpdateWithoutBitacoraInput>, UserUncheckedUpdateWithoutBitacoraInput>
  }

  export type BitaEventsUncheckedUpdateManyWithoutBitacoraNestedInput = {
    create?: XOR<BitaEventsCreateWithoutBitacoraInput, BitaEventsUncheckedCreateWithoutBitacoraInput> | BitaEventsCreateWithoutBitacoraInput[] | BitaEventsUncheckedCreateWithoutBitacoraInput[]
    connectOrCreate?: BitaEventsCreateOrConnectWithoutBitacoraInput | BitaEventsCreateOrConnectWithoutBitacoraInput[]
    upsert?: BitaEventsUpsertWithWhereUniqueWithoutBitacoraInput | BitaEventsUpsertWithWhereUniqueWithoutBitacoraInput[]
    createMany?: BitaEventsCreateManyBitacoraInputEnvelope
    set?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    disconnect?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    delete?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    connect?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    update?: BitaEventsUpdateWithWhereUniqueWithoutBitacoraInput | BitaEventsUpdateWithWhereUniqueWithoutBitacoraInput[]
    updateMany?: BitaEventsUpdateManyWithWhereWithoutBitacoraInput | BitaEventsUpdateManyWithWhereWithoutBitacoraInput[]
    deleteMany?: BitaEventsScalarWhereInput | BitaEventsScalarWhereInput[]
  }

  export type BitacoraCreateNestedOneWithoutBita_eventsInput = {
    create?: XOR<BitacoraCreateWithoutBita_eventsInput, BitacoraUncheckedCreateWithoutBita_eventsInput>
    connectOrCreate?: BitacoraCreateOrConnectWithoutBita_eventsInput
    connect?: BitacoraWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutBita_eventsInput = {
    create?: XOR<EventCreateWithoutBita_eventsInput, EventUncheckedCreateWithoutBita_eventsInput>
    connectOrCreate?: EventCreateOrConnectWithoutBita_eventsInput
    connect?: EventWhereUniqueInput
  }

  export type TipoEventCreateNestedOneWithoutBita_eventsInput = {
    create?: XOR<TipoEventCreateWithoutBita_eventsInput, TipoEventUncheckedCreateWithoutBita_eventsInput>
    connectOrCreate?: TipoEventCreateOrConnectWithoutBita_eventsInput
    connect?: TipoEventWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BitacoraUpdateOneWithoutBita_eventsNestedInput = {
    create?: XOR<BitacoraCreateWithoutBita_eventsInput, BitacoraUncheckedCreateWithoutBita_eventsInput>
    connectOrCreate?: BitacoraCreateOrConnectWithoutBita_eventsInput
    upsert?: BitacoraUpsertWithoutBita_eventsInput
    disconnect?: BitacoraWhereInput | boolean
    delete?: BitacoraWhereInput | boolean
    connect?: BitacoraWhereUniqueInput
    update?: XOR<XOR<BitacoraUpdateToOneWithWhereWithoutBita_eventsInput, BitacoraUpdateWithoutBita_eventsInput>, BitacoraUncheckedUpdateWithoutBita_eventsInput>
  }

  export type EventUpdateOneWithoutBita_eventsNestedInput = {
    create?: XOR<EventCreateWithoutBita_eventsInput, EventUncheckedCreateWithoutBita_eventsInput>
    connectOrCreate?: EventCreateOrConnectWithoutBita_eventsInput
    upsert?: EventUpsertWithoutBita_eventsInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutBita_eventsInput, EventUpdateWithoutBita_eventsInput>, EventUncheckedUpdateWithoutBita_eventsInput>
  }

  export type TipoEventUpdateOneWithoutBita_eventsNestedInput = {
    create?: XOR<TipoEventCreateWithoutBita_eventsInput, TipoEventUncheckedCreateWithoutBita_eventsInput>
    connectOrCreate?: TipoEventCreateOrConnectWithoutBita_eventsInput
    upsert?: TipoEventUpsertWithoutBita_eventsInput
    disconnect?: TipoEventWhereInput | boolean
    delete?: TipoEventWhereInput | boolean
    connect?: TipoEventWhereUniqueInput
    update?: XOR<XOR<TipoEventUpdateToOneWithWhereWithoutBita_eventsInput, TipoEventUpdateWithoutBita_eventsInput>, TipoEventUncheckedUpdateWithoutBita_eventsInput>
  }

  export type BitaEventsCreateNestedManyWithoutTipoEventInput = {
    create?: XOR<BitaEventsCreateWithoutTipoEventInput, BitaEventsUncheckedCreateWithoutTipoEventInput> | BitaEventsCreateWithoutTipoEventInput[] | BitaEventsUncheckedCreateWithoutTipoEventInput[]
    connectOrCreate?: BitaEventsCreateOrConnectWithoutTipoEventInput | BitaEventsCreateOrConnectWithoutTipoEventInput[]
    createMany?: BitaEventsCreateManyTipoEventInputEnvelope
    connect?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutTipoEventInput = {
    create?: XOR<EventCreateWithoutTipoEventInput, EventUncheckedCreateWithoutTipoEventInput> | EventCreateWithoutTipoEventInput[] | EventUncheckedCreateWithoutTipoEventInput[]
    connectOrCreate?: EventCreateOrConnectWithoutTipoEventInput | EventCreateOrConnectWithoutTipoEventInput[]
    createMany?: EventCreateManyTipoEventInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type BitaEventsUncheckedCreateNestedManyWithoutTipoEventInput = {
    create?: XOR<BitaEventsCreateWithoutTipoEventInput, BitaEventsUncheckedCreateWithoutTipoEventInput> | BitaEventsCreateWithoutTipoEventInput[] | BitaEventsUncheckedCreateWithoutTipoEventInput[]
    connectOrCreate?: BitaEventsCreateOrConnectWithoutTipoEventInput | BitaEventsCreateOrConnectWithoutTipoEventInput[]
    createMany?: BitaEventsCreateManyTipoEventInputEnvelope
    connect?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutTipoEventInput = {
    create?: XOR<EventCreateWithoutTipoEventInput, EventUncheckedCreateWithoutTipoEventInput> | EventCreateWithoutTipoEventInput[] | EventUncheckedCreateWithoutTipoEventInput[]
    connectOrCreate?: EventCreateOrConnectWithoutTipoEventInput | EventCreateOrConnectWithoutTipoEventInput[]
    createMany?: EventCreateManyTipoEventInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type BitaEventsUpdateManyWithoutTipoEventNestedInput = {
    create?: XOR<BitaEventsCreateWithoutTipoEventInput, BitaEventsUncheckedCreateWithoutTipoEventInput> | BitaEventsCreateWithoutTipoEventInput[] | BitaEventsUncheckedCreateWithoutTipoEventInput[]
    connectOrCreate?: BitaEventsCreateOrConnectWithoutTipoEventInput | BitaEventsCreateOrConnectWithoutTipoEventInput[]
    upsert?: BitaEventsUpsertWithWhereUniqueWithoutTipoEventInput | BitaEventsUpsertWithWhereUniqueWithoutTipoEventInput[]
    createMany?: BitaEventsCreateManyTipoEventInputEnvelope
    set?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    disconnect?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    delete?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    connect?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    update?: BitaEventsUpdateWithWhereUniqueWithoutTipoEventInput | BitaEventsUpdateWithWhereUniqueWithoutTipoEventInput[]
    updateMany?: BitaEventsUpdateManyWithWhereWithoutTipoEventInput | BitaEventsUpdateManyWithWhereWithoutTipoEventInput[]
    deleteMany?: BitaEventsScalarWhereInput | BitaEventsScalarWhereInput[]
  }

  export type EventUpdateManyWithoutTipoEventNestedInput = {
    create?: XOR<EventCreateWithoutTipoEventInput, EventUncheckedCreateWithoutTipoEventInput> | EventCreateWithoutTipoEventInput[] | EventUncheckedCreateWithoutTipoEventInput[]
    connectOrCreate?: EventCreateOrConnectWithoutTipoEventInput | EventCreateOrConnectWithoutTipoEventInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutTipoEventInput | EventUpsertWithWhereUniqueWithoutTipoEventInput[]
    createMany?: EventCreateManyTipoEventInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutTipoEventInput | EventUpdateWithWhereUniqueWithoutTipoEventInput[]
    updateMany?: EventUpdateManyWithWhereWithoutTipoEventInput | EventUpdateManyWithWhereWithoutTipoEventInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type BitaEventsUncheckedUpdateManyWithoutTipoEventNestedInput = {
    create?: XOR<BitaEventsCreateWithoutTipoEventInput, BitaEventsUncheckedCreateWithoutTipoEventInput> | BitaEventsCreateWithoutTipoEventInput[] | BitaEventsUncheckedCreateWithoutTipoEventInput[]
    connectOrCreate?: BitaEventsCreateOrConnectWithoutTipoEventInput | BitaEventsCreateOrConnectWithoutTipoEventInput[]
    upsert?: BitaEventsUpsertWithWhereUniqueWithoutTipoEventInput | BitaEventsUpsertWithWhereUniqueWithoutTipoEventInput[]
    createMany?: BitaEventsCreateManyTipoEventInputEnvelope
    set?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    disconnect?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    delete?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    connect?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    update?: BitaEventsUpdateWithWhereUniqueWithoutTipoEventInput | BitaEventsUpdateWithWhereUniqueWithoutTipoEventInput[]
    updateMany?: BitaEventsUpdateManyWithWhereWithoutTipoEventInput | BitaEventsUpdateManyWithWhereWithoutTipoEventInput[]
    deleteMany?: BitaEventsScalarWhereInput | BitaEventsScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutTipoEventNestedInput = {
    create?: XOR<EventCreateWithoutTipoEventInput, EventUncheckedCreateWithoutTipoEventInput> | EventCreateWithoutTipoEventInput[] | EventUncheckedCreateWithoutTipoEventInput[]
    connectOrCreate?: EventCreateOrConnectWithoutTipoEventInput | EventCreateOrConnectWithoutTipoEventInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutTipoEventInput | EventUpsertWithWhereUniqueWithoutTipoEventInput[]
    createMany?: EventCreateManyTipoEventInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutTipoEventInput | EventUpdateWithWhereUniqueWithoutTipoEventInput[]
    updateMany?: EventUpdateManyWithWhereWithoutTipoEventInput | EventUpdateManyWithWhereWithoutTipoEventInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type BitaEventsCreateNestedManyWithoutEventInput = {
    create?: XOR<BitaEventsCreateWithoutEventInput, BitaEventsUncheckedCreateWithoutEventInput> | BitaEventsCreateWithoutEventInput[] | BitaEventsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: BitaEventsCreateOrConnectWithoutEventInput | BitaEventsCreateOrConnectWithoutEventInput[]
    createMany?: BitaEventsCreateManyEventInputEnvelope
    connect?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
  }

  export type TipoEventCreateNestedOneWithoutEventsInput = {
    create?: XOR<TipoEventCreateWithoutEventsInput, TipoEventUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TipoEventCreateOrConnectWithoutEventsInput
    connect?: TipoEventWhereUniqueInput
  }

  export type BitaEventsUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<BitaEventsCreateWithoutEventInput, BitaEventsUncheckedCreateWithoutEventInput> | BitaEventsCreateWithoutEventInput[] | BitaEventsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: BitaEventsCreateOrConnectWithoutEventInput | BitaEventsCreateOrConnectWithoutEventInput[]
    createMany?: BitaEventsCreateManyEventInputEnvelope
    connect?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
  }

  export type BitaEventsUpdateManyWithoutEventNestedInput = {
    create?: XOR<BitaEventsCreateWithoutEventInput, BitaEventsUncheckedCreateWithoutEventInput> | BitaEventsCreateWithoutEventInput[] | BitaEventsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: BitaEventsCreateOrConnectWithoutEventInput | BitaEventsCreateOrConnectWithoutEventInput[]
    upsert?: BitaEventsUpsertWithWhereUniqueWithoutEventInput | BitaEventsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: BitaEventsCreateManyEventInputEnvelope
    set?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    disconnect?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    delete?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    connect?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    update?: BitaEventsUpdateWithWhereUniqueWithoutEventInput | BitaEventsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: BitaEventsUpdateManyWithWhereWithoutEventInput | BitaEventsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: BitaEventsScalarWhereInput | BitaEventsScalarWhereInput[]
  }

  export type TipoEventUpdateOneWithoutEventsNestedInput = {
    create?: XOR<TipoEventCreateWithoutEventsInput, TipoEventUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TipoEventCreateOrConnectWithoutEventsInput
    upsert?: TipoEventUpsertWithoutEventsInput
    disconnect?: TipoEventWhereInput | boolean
    delete?: TipoEventWhereInput | boolean
    connect?: TipoEventWhereUniqueInput
    update?: XOR<XOR<TipoEventUpdateToOneWithWhereWithoutEventsInput, TipoEventUpdateWithoutEventsInput>, TipoEventUncheckedUpdateWithoutEventsInput>
  }

  export type BitaEventsUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<BitaEventsCreateWithoutEventInput, BitaEventsUncheckedCreateWithoutEventInput> | BitaEventsCreateWithoutEventInput[] | BitaEventsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: BitaEventsCreateOrConnectWithoutEventInput | BitaEventsCreateOrConnectWithoutEventInput[]
    upsert?: BitaEventsUpsertWithWhereUniqueWithoutEventInput | BitaEventsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: BitaEventsCreateManyEventInputEnvelope
    set?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    disconnect?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    delete?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    connect?: BitaEventsWhereUniqueInput | BitaEventsWhereUniqueInput[]
    update?: BitaEventsUpdateWithWhereUniqueWithoutEventInput | BitaEventsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: BitaEventsUpdateManyWithWhereWithoutEventInput | BitaEventsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: BitaEventsScalarWhereInput | BitaEventsScalarWhereInput[]
  }

  export type ClaseCreateNestedOneWithoutAnimalsInput = {
    create?: XOR<ClaseCreateWithoutAnimalsInput, ClaseUncheckedCreateWithoutAnimalsInput>
    connectOrCreate?: ClaseCreateOrConnectWithoutAnimalsInput
    connect?: ClaseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnimalInput = {
    create?: XOR<UserCreateWithoutAnimalInput, UserUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnimalInput
    connect?: UserWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ClaseUpdateOneWithoutAnimalsNestedInput = {
    create?: XOR<ClaseCreateWithoutAnimalsInput, ClaseUncheckedCreateWithoutAnimalsInput>
    connectOrCreate?: ClaseCreateOrConnectWithoutAnimalsInput
    upsert?: ClaseUpsertWithoutAnimalsInput
    disconnect?: ClaseWhereInput | boolean
    delete?: ClaseWhereInput | boolean
    connect?: ClaseWhereUniqueInput
    update?: XOR<XOR<ClaseUpdateToOneWithWhereWithoutAnimalsInput, ClaseUpdateWithoutAnimalsInput>, ClaseUncheckedUpdateWithoutAnimalsInput>
  }

  export type UserUpdateOneWithoutAnimalNestedInput = {
    create?: XOR<UserCreateWithoutAnimalInput, UserUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnimalInput
    upsert?: UserUpsertWithoutAnimalInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnimalInput, UserUpdateWithoutAnimalInput>, UserUncheckedUpdateWithoutAnimalInput>
  }

  export type AnimalCreateNestedManyWithoutClaseInput = {
    create?: XOR<AnimalCreateWithoutClaseInput, AnimalUncheckedCreateWithoutClaseInput> | AnimalCreateWithoutClaseInput[] | AnimalUncheckedCreateWithoutClaseInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutClaseInput | AnimalCreateOrConnectWithoutClaseInput[]
    createMany?: AnimalCreateManyClaseInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type AnimalUncheckedCreateNestedManyWithoutClaseInput = {
    create?: XOR<AnimalCreateWithoutClaseInput, AnimalUncheckedCreateWithoutClaseInput> | AnimalCreateWithoutClaseInput[] | AnimalUncheckedCreateWithoutClaseInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutClaseInput | AnimalCreateOrConnectWithoutClaseInput[]
    createMany?: AnimalCreateManyClaseInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type AnimalUpdateManyWithoutClaseNestedInput = {
    create?: XOR<AnimalCreateWithoutClaseInput, AnimalUncheckedCreateWithoutClaseInput> | AnimalCreateWithoutClaseInput[] | AnimalUncheckedCreateWithoutClaseInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutClaseInput | AnimalCreateOrConnectWithoutClaseInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutClaseInput | AnimalUpsertWithWhereUniqueWithoutClaseInput[]
    createMany?: AnimalCreateManyClaseInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutClaseInput | AnimalUpdateWithWhereUniqueWithoutClaseInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutClaseInput | AnimalUpdateManyWithWhereWithoutClaseInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
  }

  export type AnimalUncheckedUpdateManyWithoutClaseNestedInput = {
    create?: XOR<AnimalCreateWithoutClaseInput, AnimalUncheckedCreateWithoutClaseInput> | AnimalCreateWithoutClaseInput[] | AnimalUncheckedCreateWithoutClaseInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutClaseInput | AnimalCreateOrConnectWithoutClaseInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutClaseInput | AnimalUpsertWithWhereUniqueWithoutClaseInput[]
    createMany?: AnimalCreateManyClaseInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutClaseInput | AnimalUpdateWithWhereUniqueWithoutClaseInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutClaseInput | AnimalUpdateManyWithWhereWithoutClaseInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutPostsInput = {
    name?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    nivel?: number | null
    animal?: AnimalCreateNestedManyWithoutOwnerInput
    bitacora?: BitacoraCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    name?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    nivel?: number | null
    animal?: AnimalUncheckedCreateNestedManyWithoutOwnerInput
    bitacora?: BitacoraUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nivel?: NullableIntFieldUpdateOperationsInput | number | null
    animal?: AnimalUpdateManyWithoutOwnerNestedInput
    bitacora?: BitacoraUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nivel?: NullableIntFieldUpdateOperationsInput | number | null
    animal?: AnimalUncheckedUpdateManyWithoutOwnerNestedInput
    bitacora?: BitacoraUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type PostCreateWithoutAuthorInput = {
    title: string
    content?: string | null
    published?: boolean
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    content?: string | null
    published?: boolean
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type AnimalCreateWithoutOwnerInput = {
    birthdate?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    name?: string | null
    info?: string | null
    mother?: string | null
    hierro?: string | null
    tipopart?: string | null
    alive?: string | null
    mother_id?: number | null
    live?: boolean | null
    clase?: ClaseCreateNestedOneWithoutAnimalsInput
  }

  export type AnimalUncheckedCreateWithoutOwnerInput = {
    id?: number
    birthdate?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    clase_id?: number | null
    name?: string | null
    info?: string | null
    mother?: string | null
    hierro?: string | null
    tipopart?: string | null
    alive?: string | null
    mother_id?: number | null
    live?: boolean | null
  }

  export type AnimalCreateOrConnectWithoutOwnerInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutOwnerInput, AnimalUncheckedCreateWithoutOwnerInput>
  }

  export type AnimalCreateManyOwnerInputEnvelope = {
    data: AnimalCreateManyOwnerInput | AnimalCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type BitacoraCreateWithoutAuthorInput = {
    bitacora_date?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bita_events?: BitaEventsCreateNestedManyWithoutBitacoraInput
  }

  export type BitacoraUncheckedCreateWithoutAuthorInput = {
    id?: number
    bitacora_date?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bita_events?: BitaEventsUncheckedCreateNestedManyWithoutBitacoraInput
  }

  export type BitacoraCreateOrConnectWithoutAuthorInput = {
    where: BitacoraWhereUniqueInput
    create: XOR<BitacoraCreateWithoutAuthorInput, BitacoraUncheckedCreateWithoutAuthorInput>
  }

  export type BitacoraCreateManyAuthorInputEnvelope = {
    data: BitacoraCreateManyAuthorInput | BitacoraCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    authorId?: IntNullableFilter<"Post"> | number | null
  }

  export type AnimalUpsertWithWhereUniqueWithoutOwnerInput = {
    where: AnimalWhereUniqueInput
    update: XOR<AnimalUpdateWithoutOwnerInput, AnimalUncheckedUpdateWithoutOwnerInput>
    create: XOR<AnimalCreateWithoutOwnerInput, AnimalUncheckedCreateWithoutOwnerInput>
  }

  export type AnimalUpdateWithWhereUniqueWithoutOwnerInput = {
    where: AnimalWhereUniqueInput
    data: XOR<AnimalUpdateWithoutOwnerInput, AnimalUncheckedUpdateWithoutOwnerInput>
  }

  export type AnimalUpdateManyWithWhereWithoutOwnerInput = {
    where: AnimalScalarWhereInput
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyWithoutOwnerInput>
  }

  export type AnimalScalarWhereInput = {
    AND?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
    OR?: AnimalScalarWhereInput[]
    NOT?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
    id?: IntFilter<"Animal"> | number
    birthdate?: StringNullableFilter<"Animal"> | string | null
    owner_id?: IntNullableFilter<"Animal"> | number | null
    created_at?: DateTimeFilter<"Animal"> | Date | string
    updated_at?: DateTimeFilter<"Animal"> | Date | string
    clase_id?: IntNullableFilter<"Animal"> | number | null
    name?: StringNullableFilter<"Animal"> | string | null
    info?: StringNullableFilter<"Animal"> | string | null
    mother?: StringNullableFilter<"Animal"> | string | null
    hierro?: StringNullableFilter<"Animal"> | string | null
    tipopart?: StringNullableFilter<"Animal"> | string | null
    alive?: StringNullableFilter<"Animal"> | string | null
    mother_id?: IntNullableFilter<"Animal"> | number | null
    live?: BoolNullableFilter<"Animal"> | boolean | null
  }

  export type BitacoraUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BitacoraWhereUniqueInput
    update: XOR<BitacoraUpdateWithoutAuthorInput, BitacoraUncheckedUpdateWithoutAuthorInput>
    create: XOR<BitacoraCreateWithoutAuthorInput, BitacoraUncheckedCreateWithoutAuthorInput>
  }

  export type BitacoraUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BitacoraWhereUniqueInput
    data: XOR<BitacoraUpdateWithoutAuthorInput, BitacoraUncheckedUpdateWithoutAuthorInput>
  }

  export type BitacoraUpdateManyWithWhereWithoutAuthorInput = {
    where: BitacoraScalarWhereInput
    data: XOR<BitacoraUpdateManyMutationInput, BitacoraUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BitacoraScalarWhereInput = {
    AND?: BitacoraScalarWhereInput | BitacoraScalarWhereInput[]
    OR?: BitacoraScalarWhereInput[]
    NOT?: BitacoraScalarWhereInput | BitacoraScalarWhereInput[]
    id?: IntFilter<"Bitacora"> | number
    bitacora_date?: StringNullableFilter<"Bitacora"> | string | null
    author_id?: IntNullableFilter<"Bitacora"> | number | null
    created_at?: DateTimeFilter<"Bitacora"> | Date | string
    updated_at?: DateTimeFilter<"Bitacora"> | Date | string
  }

  export type BitaEventsCreateWithoutBitacoraInput = {
    event_date?: Date | string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image: boolean
    event?: EventCreateNestedOneWithoutBita_eventsInput
    tipoEvent?: TipoEventCreateNestedOneWithoutBita_eventsInput
  }

  export type BitaEventsUncheckedCreateWithoutBitacoraInput = {
    id?: number
    event_date?: Date | string | null
    tipo_event_id?: number | null
    events_id?: number | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image: boolean
  }

  export type BitaEventsCreateOrConnectWithoutBitacoraInput = {
    where: BitaEventsWhereUniqueInput
    create: XOR<BitaEventsCreateWithoutBitacoraInput, BitaEventsUncheckedCreateWithoutBitacoraInput>
  }

  export type BitaEventsCreateManyBitacoraInputEnvelope = {
    data: BitaEventsCreateManyBitacoraInput | BitaEventsCreateManyBitacoraInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutBitacoraInput = {
    name?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    nivel?: number | null
    posts?: PostCreateNestedManyWithoutAuthorInput
    animal?: AnimalCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutBitacoraInput = {
    id?: number
    name?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    nivel?: number | null
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    animal?: AnimalUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutBitacoraInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBitacoraInput, UserUncheckedCreateWithoutBitacoraInput>
  }

  export type BitaEventsUpsertWithWhereUniqueWithoutBitacoraInput = {
    where: BitaEventsWhereUniqueInput
    update: XOR<BitaEventsUpdateWithoutBitacoraInput, BitaEventsUncheckedUpdateWithoutBitacoraInput>
    create: XOR<BitaEventsCreateWithoutBitacoraInput, BitaEventsUncheckedCreateWithoutBitacoraInput>
  }

  export type BitaEventsUpdateWithWhereUniqueWithoutBitacoraInput = {
    where: BitaEventsWhereUniqueInput
    data: XOR<BitaEventsUpdateWithoutBitacoraInput, BitaEventsUncheckedUpdateWithoutBitacoraInput>
  }

  export type BitaEventsUpdateManyWithWhereWithoutBitacoraInput = {
    where: BitaEventsScalarWhereInput
    data: XOR<BitaEventsUpdateManyMutationInput, BitaEventsUncheckedUpdateManyWithoutBitacoraInput>
  }

  export type BitaEventsScalarWhereInput = {
    AND?: BitaEventsScalarWhereInput | BitaEventsScalarWhereInput[]
    OR?: BitaEventsScalarWhereInput[]
    NOT?: BitaEventsScalarWhereInput | BitaEventsScalarWhereInput[]
    id?: IntFilter<"BitaEvents"> | number
    bitacora_id?: IntNullableFilter<"BitaEvents"> | number | null
    event_date?: DateTimeNullableFilter<"BitaEvents"> | Date | string | null
    tipo_event_id?: IntNullableFilter<"BitaEvents"> | number | null
    events_id?: IntNullableFilter<"BitaEvents"> | number | null
    description?: StringNullableFilter<"BitaEvents"> | string | null
    created_at?: DateTimeFilter<"BitaEvents"> | Date | string
    updated_at?: DateTimeFilter<"BitaEvents"> | Date | string
    image?: BoolFilter<"BitaEvents"> | boolean
  }

  export type UserUpsertWithoutBitacoraInput = {
    update: XOR<UserUpdateWithoutBitacoraInput, UserUncheckedUpdateWithoutBitacoraInput>
    create: XOR<UserCreateWithoutBitacoraInput, UserUncheckedCreateWithoutBitacoraInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBitacoraInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBitacoraInput, UserUncheckedUpdateWithoutBitacoraInput>
  }

  export type UserUpdateWithoutBitacoraInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nivel?: NullableIntFieldUpdateOperationsInput | number | null
    posts?: PostUpdateManyWithoutAuthorNestedInput
    animal?: AnimalUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutBitacoraInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nivel?: NullableIntFieldUpdateOperationsInput | number | null
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    animal?: AnimalUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type BitacoraCreateWithoutBita_eventsInput = {
    bitacora_date?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    author?: UserCreateNestedOneWithoutBitacoraInput
  }

  export type BitacoraUncheckedCreateWithoutBita_eventsInput = {
    id?: number
    bitacora_date?: string | null
    author_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BitacoraCreateOrConnectWithoutBita_eventsInput = {
    where: BitacoraWhereUniqueInput
    create: XOR<BitacoraCreateWithoutBita_eventsInput, BitacoraUncheckedCreateWithoutBita_eventsInput>
  }

  export type EventCreateWithoutBita_eventsInput = {
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    tipoEvent?: TipoEventCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutBita_eventsInput = {
    id?: number
    description?: string | null
    tipo_event_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EventCreateOrConnectWithoutBita_eventsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutBita_eventsInput, EventUncheckedCreateWithoutBita_eventsInput>
  }

  export type TipoEventCreateWithoutBita_eventsInput = {
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    events?: EventCreateNestedManyWithoutTipoEventInput
  }

  export type TipoEventUncheckedCreateWithoutBita_eventsInput = {
    id?: number
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutTipoEventInput
  }

  export type TipoEventCreateOrConnectWithoutBita_eventsInput = {
    where: TipoEventWhereUniqueInput
    create: XOR<TipoEventCreateWithoutBita_eventsInput, TipoEventUncheckedCreateWithoutBita_eventsInput>
  }

  export type BitacoraUpsertWithoutBita_eventsInput = {
    update: XOR<BitacoraUpdateWithoutBita_eventsInput, BitacoraUncheckedUpdateWithoutBita_eventsInput>
    create: XOR<BitacoraCreateWithoutBita_eventsInput, BitacoraUncheckedCreateWithoutBita_eventsInput>
    where?: BitacoraWhereInput
  }

  export type BitacoraUpdateToOneWithWhereWithoutBita_eventsInput = {
    where?: BitacoraWhereInput
    data: XOR<BitacoraUpdateWithoutBita_eventsInput, BitacoraUncheckedUpdateWithoutBita_eventsInput>
  }

  export type BitacoraUpdateWithoutBita_eventsInput = {
    bitacora_date?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutBitacoraNestedInput
  }

  export type BitacoraUncheckedUpdateWithoutBita_eventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    bitacora_date?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpsertWithoutBita_eventsInput = {
    update: XOR<EventUpdateWithoutBita_eventsInput, EventUncheckedUpdateWithoutBita_eventsInput>
    create: XOR<EventCreateWithoutBita_eventsInput, EventUncheckedCreateWithoutBita_eventsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutBita_eventsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutBita_eventsInput, EventUncheckedUpdateWithoutBita_eventsInput>
  }

  export type EventUpdateWithoutBita_eventsInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoEvent?: TipoEventUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutBita_eventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_event_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoEventUpsertWithoutBita_eventsInput = {
    update: XOR<TipoEventUpdateWithoutBita_eventsInput, TipoEventUncheckedUpdateWithoutBita_eventsInput>
    create: XOR<TipoEventCreateWithoutBita_eventsInput, TipoEventUncheckedCreateWithoutBita_eventsInput>
    where?: TipoEventWhereInput
  }

  export type TipoEventUpdateToOneWithWhereWithoutBita_eventsInput = {
    where?: TipoEventWhereInput
    data: XOR<TipoEventUpdateWithoutBita_eventsInput, TipoEventUncheckedUpdateWithoutBita_eventsInput>
  }

  export type TipoEventUpdateWithoutBita_eventsInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutTipoEventNestedInput
  }

  export type TipoEventUncheckedUpdateWithoutBita_eventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutTipoEventNestedInput
  }

  export type BitaEventsCreateWithoutTipoEventInput = {
    event_date?: Date | string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image: boolean
    bitacora?: BitacoraCreateNestedOneWithoutBita_eventsInput
    event?: EventCreateNestedOneWithoutBita_eventsInput
  }

  export type BitaEventsUncheckedCreateWithoutTipoEventInput = {
    id?: number
    bitacora_id?: number | null
    event_date?: Date | string | null
    events_id?: number | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image: boolean
  }

  export type BitaEventsCreateOrConnectWithoutTipoEventInput = {
    where: BitaEventsWhereUniqueInput
    create: XOR<BitaEventsCreateWithoutTipoEventInput, BitaEventsUncheckedCreateWithoutTipoEventInput>
  }

  export type BitaEventsCreateManyTipoEventInputEnvelope = {
    data: BitaEventsCreateManyTipoEventInput | BitaEventsCreateManyTipoEventInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutTipoEventInput = {
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bita_events?: BitaEventsCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTipoEventInput = {
    id?: number
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bita_events?: BitaEventsUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTipoEventInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTipoEventInput, EventUncheckedCreateWithoutTipoEventInput>
  }

  export type EventCreateManyTipoEventInputEnvelope = {
    data: EventCreateManyTipoEventInput | EventCreateManyTipoEventInput[]
    skipDuplicates?: boolean
  }

  export type BitaEventsUpsertWithWhereUniqueWithoutTipoEventInput = {
    where: BitaEventsWhereUniqueInput
    update: XOR<BitaEventsUpdateWithoutTipoEventInput, BitaEventsUncheckedUpdateWithoutTipoEventInput>
    create: XOR<BitaEventsCreateWithoutTipoEventInput, BitaEventsUncheckedCreateWithoutTipoEventInput>
  }

  export type BitaEventsUpdateWithWhereUniqueWithoutTipoEventInput = {
    where: BitaEventsWhereUniqueInput
    data: XOR<BitaEventsUpdateWithoutTipoEventInput, BitaEventsUncheckedUpdateWithoutTipoEventInput>
  }

  export type BitaEventsUpdateManyWithWhereWithoutTipoEventInput = {
    where: BitaEventsScalarWhereInput
    data: XOR<BitaEventsUpdateManyMutationInput, BitaEventsUncheckedUpdateManyWithoutTipoEventInput>
  }

  export type EventUpsertWithWhereUniqueWithoutTipoEventInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutTipoEventInput, EventUncheckedUpdateWithoutTipoEventInput>
    create: XOR<EventCreateWithoutTipoEventInput, EventUncheckedCreateWithoutTipoEventInput>
  }

  export type EventUpdateWithWhereUniqueWithoutTipoEventInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutTipoEventInput, EventUncheckedUpdateWithoutTipoEventInput>
  }

  export type EventUpdateManyWithWhereWithoutTipoEventInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutTipoEventInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: IntFilter<"Event"> | number
    description?: StringNullableFilter<"Event"> | string | null
    tipo_event_id?: IntNullableFilter<"Event"> | number | null
    created_at?: DateTimeFilter<"Event"> | Date | string
    updated_at?: DateTimeFilter<"Event"> | Date | string
  }

  export type BitaEventsCreateWithoutEventInput = {
    event_date?: Date | string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image: boolean
    bitacora?: BitacoraCreateNestedOneWithoutBita_eventsInput
    tipoEvent?: TipoEventCreateNestedOneWithoutBita_eventsInput
  }

  export type BitaEventsUncheckedCreateWithoutEventInput = {
    id?: number
    bitacora_id?: number | null
    event_date?: Date | string | null
    tipo_event_id?: number | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image: boolean
  }

  export type BitaEventsCreateOrConnectWithoutEventInput = {
    where: BitaEventsWhereUniqueInput
    create: XOR<BitaEventsCreateWithoutEventInput, BitaEventsUncheckedCreateWithoutEventInput>
  }

  export type BitaEventsCreateManyEventInputEnvelope = {
    data: BitaEventsCreateManyEventInput | BitaEventsCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type TipoEventCreateWithoutEventsInput = {
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bita_events?: BitaEventsCreateNestedManyWithoutTipoEventInput
  }

  export type TipoEventUncheckedCreateWithoutEventsInput = {
    id?: number
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    bita_events?: BitaEventsUncheckedCreateNestedManyWithoutTipoEventInput
  }

  export type TipoEventCreateOrConnectWithoutEventsInput = {
    where: TipoEventWhereUniqueInput
    create: XOR<TipoEventCreateWithoutEventsInput, TipoEventUncheckedCreateWithoutEventsInput>
  }

  export type BitaEventsUpsertWithWhereUniqueWithoutEventInput = {
    where: BitaEventsWhereUniqueInput
    update: XOR<BitaEventsUpdateWithoutEventInput, BitaEventsUncheckedUpdateWithoutEventInput>
    create: XOR<BitaEventsCreateWithoutEventInput, BitaEventsUncheckedCreateWithoutEventInput>
  }

  export type BitaEventsUpdateWithWhereUniqueWithoutEventInput = {
    where: BitaEventsWhereUniqueInput
    data: XOR<BitaEventsUpdateWithoutEventInput, BitaEventsUncheckedUpdateWithoutEventInput>
  }

  export type BitaEventsUpdateManyWithWhereWithoutEventInput = {
    where: BitaEventsScalarWhereInput
    data: XOR<BitaEventsUpdateManyMutationInput, BitaEventsUncheckedUpdateManyWithoutEventInput>
  }

  export type TipoEventUpsertWithoutEventsInput = {
    update: XOR<TipoEventUpdateWithoutEventsInput, TipoEventUncheckedUpdateWithoutEventsInput>
    create: XOR<TipoEventCreateWithoutEventsInput, TipoEventUncheckedCreateWithoutEventsInput>
    where?: TipoEventWhereInput
  }

  export type TipoEventUpdateToOneWithWhereWithoutEventsInput = {
    where?: TipoEventWhereInput
    data: XOR<TipoEventUpdateWithoutEventsInput, TipoEventUncheckedUpdateWithoutEventsInput>
  }

  export type TipoEventUpdateWithoutEventsInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bita_events?: BitaEventsUpdateManyWithoutTipoEventNestedInput
  }

  export type TipoEventUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bita_events?: BitaEventsUncheckedUpdateManyWithoutTipoEventNestedInput
  }

  export type ClaseCreateWithoutAnimalsInput = {
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClaseUncheckedCreateWithoutAnimalsInput = {
    id?: number
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClaseCreateOrConnectWithoutAnimalsInput = {
    where: ClaseWhereUniqueInput
    create: XOR<ClaseCreateWithoutAnimalsInput, ClaseUncheckedCreateWithoutAnimalsInput>
  }

  export type UserCreateWithoutAnimalInput = {
    name?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    nivel?: number | null
    posts?: PostCreateNestedManyWithoutAuthorInput
    bitacora?: BitacoraCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutAnimalInput = {
    id?: number
    name?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    nivel?: number | null
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    bitacora?: BitacoraUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutAnimalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnimalInput, UserUncheckedCreateWithoutAnimalInput>
  }

  export type ClaseUpsertWithoutAnimalsInput = {
    update: XOR<ClaseUpdateWithoutAnimalsInput, ClaseUncheckedUpdateWithoutAnimalsInput>
    create: XOR<ClaseCreateWithoutAnimalsInput, ClaseUncheckedCreateWithoutAnimalsInput>
    where?: ClaseWhereInput
  }

  export type ClaseUpdateToOneWithWhereWithoutAnimalsInput = {
    where?: ClaseWhereInput
    data: XOR<ClaseUpdateWithoutAnimalsInput, ClaseUncheckedUpdateWithoutAnimalsInput>
  }

  export type ClaseUpdateWithoutAnimalsInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaseUncheckedUpdateWithoutAnimalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutAnimalInput = {
    update: XOR<UserUpdateWithoutAnimalInput, UserUncheckedUpdateWithoutAnimalInput>
    create: XOR<UserCreateWithoutAnimalInput, UserUncheckedCreateWithoutAnimalInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnimalInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnimalInput, UserUncheckedUpdateWithoutAnimalInput>
  }

  export type UserUpdateWithoutAnimalInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nivel?: NullableIntFieldUpdateOperationsInput | number | null
    posts?: PostUpdateManyWithoutAuthorNestedInput
    bitacora?: BitacoraUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nivel?: NullableIntFieldUpdateOperationsInput | number | null
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    bitacora?: BitacoraUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AnimalCreateWithoutClaseInput = {
    birthdate?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    name?: string | null
    info?: string | null
    mother?: string | null
    hierro?: string | null
    tipopart?: string | null
    alive?: string | null
    mother_id?: number | null
    live?: boolean | null
    owner?: UserCreateNestedOneWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutClaseInput = {
    id?: number
    birthdate?: string | null
    owner_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    name?: string | null
    info?: string | null
    mother?: string | null
    hierro?: string | null
    tipopart?: string | null
    alive?: string | null
    mother_id?: number | null
    live?: boolean | null
  }

  export type AnimalCreateOrConnectWithoutClaseInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutClaseInput, AnimalUncheckedCreateWithoutClaseInput>
  }

  export type AnimalCreateManyClaseInputEnvelope = {
    data: AnimalCreateManyClaseInput | AnimalCreateManyClaseInput[]
    skipDuplicates?: boolean
  }

  export type AnimalUpsertWithWhereUniqueWithoutClaseInput = {
    where: AnimalWhereUniqueInput
    update: XOR<AnimalUpdateWithoutClaseInput, AnimalUncheckedUpdateWithoutClaseInput>
    create: XOR<AnimalCreateWithoutClaseInput, AnimalUncheckedCreateWithoutClaseInput>
  }

  export type AnimalUpdateWithWhereUniqueWithoutClaseInput = {
    where: AnimalWhereUniqueInput
    data: XOR<AnimalUpdateWithoutClaseInput, AnimalUncheckedUpdateWithoutClaseInput>
  }

  export type AnimalUpdateManyWithWhereWithoutClaseInput = {
    where: AnimalScalarWhereInput
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyWithoutClaseInput>
  }

  export type PostCreateManyAuthorInput = {
    id?: number
    title: string
    content?: string | null
    published?: boolean
  }

  export type AnimalCreateManyOwnerInput = {
    id?: number
    birthdate?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    clase_id?: number | null
    name?: string | null
    info?: string | null
    mother?: string | null
    hierro?: string | null
    tipopart?: string | null
    alive?: string | null
    mother_id?: number | null
    live?: boolean | null
  }

  export type BitacoraCreateManyAuthorInput = {
    id?: number
    bitacora_date?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PostUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnimalUpdateWithoutOwnerInput = {
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    mother?: NullableStringFieldUpdateOperationsInput | string | null
    hierro?: NullableStringFieldUpdateOperationsInput | string | null
    tipopart?: NullableStringFieldUpdateOperationsInput | string | null
    alive?: NullableStringFieldUpdateOperationsInput | string | null
    mother_id?: NullableIntFieldUpdateOperationsInput | number | null
    live?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clase?: ClaseUpdateOneWithoutAnimalsNestedInput
  }

  export type AnimalUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clase_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    mother?: NullableStringFieldUpdateOperationsInput | string | null
    hierro?: NullableStringFieldUpdateOperationsInput | string | null
    tipopart?: NullableStringFieldUpdateOperationsInput | string | null
    alive?: NullableStringFieldUpdateOperationsInput | string | null
    mother_id?: NullableIntFieldUpdateOperationsInput | number | null
    live?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AnimalUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clase_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    mother?: NullableStringFieldUpdateOperationsInput | string | null
    hierro?: NullableStringFieldUpdateOperationsInput | string | null
    tipopart?: NullableStringFieldUpdateOperationsInput | string | null
    alive?: NullableStringFieldUpdateOperationsInput | string | null
    mother_id?: NullableIntFieldUpdateOperationsInput | number | null
    live?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BitacoraUpdateWithoutAuthorInput = {
    bitacora_date?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bita_events?: BitaEventsUpdateManyWithoutBitacoraNestedInput
  }

  export type BitacoraUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    bitacora_date?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bita_events?: BitaEventsUncheckedUpdateManyWithoutBitacoraNestedInput
  }

  export type BitacoraUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    bitacora_date?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BitaEventsCreateManyBitacoraInput = {
    id?: number
    event_date?: Date | string | null
    tipo_event_id?: number | null
    events_id?: number | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image: boolean
  }

  export type BitaEventsUpdateWithoutBitacoraInput = {
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneWithoutBita_eventsNestedInput
    tipoEvent?: TipoEventUpdateOneWithoutBita_eventsNestedInput
  }

  export type BitaEventsUncheckedUpdateWithoutBitacoraInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_event_id?: NullableIntFieldUpdateOperationsInput | number | null
    events_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BitaEventsUncheckedUpdateManyWithoutBitacoraInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_event_id?: NullableIntFieldUpdateOperationsInput | number | null
    events_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BitaEventsCreateManyTipoEventInput = {
    id?: number
    bitacora_id?: number | null
    event_date?: Date | string | null
    events_id?: number | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image: boolean
  }

  export type EventCreateManyTipoEventInput = {
    id?: number
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BitaEventsUpdateWithoutTipoEventInput = {
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: BoolFieldUpdateOperationsInput | boolean
    bitacora?: BitacoraUpdateOneWithoutBita_eventsNestedInput
    event?: EventUpdateOneWithoutBita_eventsNestedInput
  }

  export type BitaEventsUncheckedUpdateWithoutTipoEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    bitacora_id?: NullableIntFieldUpdateOperationsInput | number | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BitaEventsUncheckedUpdateManyWithoutTipoEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    bitacora_id?: NullableIntFieldUpdateOperationsInput | number | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventUpdateWithoutTipoEventInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bita_events?: BitaEventsUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTipoEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bita_events?: BitaEventsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutTipoEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BitaEventsCreateManyEventInput = {
    id?: number
    bitacora_id?: number | null
    event_date?: Date | string | null
    tipo_event_id?: number | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image: boolean
  }

  export type BitaEventsUpdateWithoutEventInput = {
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: BoolFieldUpdateOperationsInput | boolean
    bitacora?: BitacoraUpdateOneWithoutBita_eventsNestedInput
    tipoEvent?: TipoEventUpdateOneWithoutBita_eventsNestedInput
  }

  export type BitaEventsUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    bitacora_id?: NullableIntFieldUpdateOperationsInput | number | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_event_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BitaEventsUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    bitacora_id?: NullableIntFieldUpdateOperationsInput | number | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_event_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnimalCreateManyClaseInput = {
    id?: number
    birthdate?: string | null
    owner_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    name?: string | null
    info?: string | null
    mother?: string | null
    hierro?: string | null
    tipopart?: string | null
    alive?: string | null
    mother_id?: number | null
    live?: boolean | null
  }

  export type AnimalUpdateWithoutClaseInput = {
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    mother?: NullableStringFieldUpdateOperationsInput | string | null
    hierro?: NullableStringFieldUpdateOperationsInput | string | null
    tipopart?: NullableStringFieldUpdateOperationsInput | string | null
    alive?: NullableStringFieldUpdateOperationsInput | string | null
    mother_id?: NullableIntFieldUpdateOperationsInput | number | null
    live?: NullableBoolFieldUpdateOperationsInput | boolean | null
    owner?: UserUpdateOneWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutClaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    owner_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    mother?: NullableStringFieldUpdateOperationsInput | string | null
    hierro?: NullableStringFieldUpdateOperationsInput | string | null
    tipopart?: NullableStringFieldUpdateOperationsInput | string | null
    alive?: NullableStringFieldUpdateOperationsInput | string | null
    mother_id?: NullableIntFieldUpdateOperationsInput | number | null
    live?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AnimalUncheckedUpdateManyWithoutClaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    birthdate?: NullableStringFieldUpdateOperationsInput | string | null
    owner_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    info?: NullableStringFieldUpdateOperationsInput | string | null
    mother?: NullableStringFieldUpdateOperationsInput | string | null
    hierro?: NullableStringFieldUpdateOperationsInput | string | null
    tipopart?: NullableStringFieldUpdateOperationsInput | string | null
    alive?: NullableStringFieldUpdateOperationsInput | string | null
    mother_id?: NullableIntFieldUpdateOperationsInput | number | null
    live?: NullableBoolFieldUpdateOperationsInput | boolean | null
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