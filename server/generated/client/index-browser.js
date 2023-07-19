
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 5.0.0
 * Query Engine version: 6b0aef69b7cdfc787f822ecd7cdc76d5f1991584
 */
Prisma.prismaVersion = {
  client: "5.0.0",
  engine: "6b0aef69b7cdfc787f822ecd7cdc76d5f1991584"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.BucketScalarFieldEnum = {
  user_id: 'user_id',
  wiki_id: 'wiki_id',
  completed: 'completed',
  ongoing: 'ongoing',
  dropped: 'dropped'
};

exports.Prisma.ChronicleScalarFieldEnum = {
  chronicle_id: 'chronicle_id',
  texts: 'texts',
  likes: 'likes',
  writer_id: 'writer_id'
};

exports.Prisma.MerchScalarFieldEnum = {
  merch_id: 'merch_id',
  req_nani: 'req_nani',
  rating: 'rating',
  description: 'description',
  merch: 'merch',
  seller_id: 'seller_id',
  image: 'image',
  avalibility_status: 'avalibility_status'
};

exports.Prisma.NexusScalarFieldEnum = {
  nexus_id: 'nexus_id',
  user_id: 'user_id',
  reply_to: 'reply_to',
  comment: 'comment',
  upvotes: 'upvotes',
  chronicle_id: 'chronicle_id'
};

exports.Prisma.QuizzesScalarFieldEnum = {
  quiz_id: 'quiz_id',
  mod_id: 'mod_id',
  difficulty_lvl: 'difficulty_lvl',
  created_date: 'created_date',
  anime_name: 'anime_name'
};

exports.Prisma.SeasonScalarFieldEnum = {
  season_number: 'season_number',
  wiki_id: 'wiki_id',
  summary: 'summary',
  poster: 'poster',
  episode_list: 'episode_list'
};

exports.Prisma.UsersScalarFieldEnum = {
  email_id: 'email_id',
  guild: 'guild',
  user_id: 'user_id',
  username: 'username',
  joined_date: 'joined_date',
  nani: 'nani',
  avatar: 'avatar'
};

exports.Prisma.WikiScalarFieldEnum = {
  wiki_id: 'wiki_id',
  anime_name: 'anime_name',
  poster: 'poster',
  summary: 'summary',
  status: 'status',
  rating: 'rating'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  bucket: 'bucket',
  chronicle: 'chronicle',
  merch: 'merch',
  nexus: 'nexus',
  quizzes: 'quizzes',
  season: 'season',
  users: 'users',
  wiki: 'wiki'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
