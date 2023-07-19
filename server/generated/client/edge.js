
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/kausthub_kannan/Desktop/otaku-central/server/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.0.0",
  "engineVersion": "6b0aef69b7cdfc787f822ecd7cdc76d5f1991584",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": true,
  "postinstall": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"bucket\":{\"dbName\":null,\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wiki_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"completed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ongoing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dropped\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"bucketTousers\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wiki\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"wiki\",\"relationName\":\"bucketTowiki\",\"relationFromFields\":[\"wiki_id\"],\"relationToFields\":[\"wiki_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"chronicle\":{\"dbName\":null,\"fields\":[{\"name\":\"chronicle_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"texts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"writer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"chronicleTousers\",\"relationFromFields\":[\"writer_id\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"merch\":{\"dbName\":null,\"fields\":[{\"name\":\"merch_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"req_nani\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"merch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seller_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avalibility_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"merchTousers\",\"relationFromFields\":[\"seller_id\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"nexus\":{\"dbName\":null,\"fields\":[{\"name\":\"nexus_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reply_to\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upvotes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chronicle_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"nexusTousers\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"quizzes\":{\"dbName\":null,\"fields\":[{\"name\":\"quiz_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mod_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"difficulty_lvl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anime_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wiki\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"wiki\",\"relationName\":\"quizzesTowiki\",\"relationFromFields\":[\"anime_name\"],\"relationToFields\":[\"anime_name\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"quizzesTousers\",\"relationFromFields\":[\"mod_id\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"season\":{\"dbName\":null,\"fields\":[{\"name\":\"season_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wiki_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"summary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"poster\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"episode_list\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wiki\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"wiki\",\"relationName\":\"seasonTowiki\",\"relationFromFields\":[\"wiki_id\"],\"relationToFields\":[\"wiki_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"users\":{\"dbName\":null,\"fields\":[{\"name\":\"email_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"guild\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"joined_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nani\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bucket\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bucket\",\"relationName\":\"bucketTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chronicle\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"chronicle\",\"relationName\":\"chronicleTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"merch\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"merch\",\"relationName\":\"merchTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nexus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"nexus\",\"relationName\":\"nexusTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quizzes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"quizzes\",\"relationName\":\"quizzesTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wiki\":{\"dbName\":null,\"fields\":[{\"name\":\"wiki_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anime_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"poster\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"summary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bucket\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bucket\",\"relationName\":\"bucketTowiki\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quizzes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"quizzes\",\"relationName\":\"quizzesTowiki\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"season\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"season\",\"relationName\":\"seasonTowiki\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.inlineSchema = 'Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgICAgICAgID0gIi4uL2dlbmVyYXRlZC9jbGllbnQiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgYnVja2V0IHsKICB1c2VyX2lkICAgU3RyaW5nICAgQGlkKG1hcDogImJ1Y2tldF9wayIpIEBkYi5WYXJDaGFyCiAgd2lraV9pZCAgIFN0cmluZz8gIEBkYi5WYXJDaGFyCiAgY29tcGxldGVkIEJvb2xlYW4/CiAgb25nb2luZyAgIEJvb2xlYW4/CiAgZHJvcHBlZCAgIEJvb2xlYW4/CiAgdXNlcnMgICAgIHVzZXJzICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VyX2lkXSwgcmVmZXJlbmNlczogW3VzZXJfaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiYnVja2V0X2lkX2Zyb21fdXNlcl9pZCIpCiAgd2lraSAgICAgIHdpa2k/ICAgIEByZWxhdGlvbihmaWVsZHM6IFt3aWtpX2lkXSwgcmVmZXJlbmNlczogW3dpa2lfaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAid2lraV9pZF9mcm9tX3dpa2lfaWRfZmsiKQp9Cgptb2RlbCBjaHJvbmljbGUgewogIGNocm9uaWNsZV9pZCBTdHJpbmcgIEBpZChtYXA6ICJjaHJvbmljbGVfaWQiKSBAZGIuVmFyQ2hhcgogIHRleHRzICAgICAgICBTdHJpbmc/CiAgbGlrZXMgICAgICAgIEludD8KICB3cml0ZXJfaWQgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcgogIHVzZXJzICAgICAgICB1c2Vycz8gIEByZWxhdGlvbihmaWVsZHM6IFt3cml0ZXJfaWRdLCByZWZlcmVuY2VzOiBbdXNlcl9pZF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uLCBtYXA6ICJ3cml0ZXJfaWRfZnJvbV91c2VyX2lkX2ZrIikKfQoKbW9kZWwgbWVyY2ggewogIG1lcmNoX2lkICAgICAgICAgICBTdHJpbmcgICBAaWQobWFwOiAibWVyY2hfaWRfcGsiKSBAZGIuVmFyQ2hhcgogIHJlcV9uYW5pICAgICAgICAgICBJbnQ/CiAgcmF0aW5nICAgICAgICAgICAgIEludD8KICBkZXNjcmlwdGlvbiAgICAgICAgU3RyaW5nPwogIG1lcmNoICAgICAgICAgICAgICBTdHJpbmc/ICBAZGIuVmFyQ2hhcgogIHNlbGxlcl9pZCAgICAgICAgICBTdHJpbmc/ICBAZGIuVmFyQ2hhcgogIGltYWdlICAgICAgICAgICAgICBTdHJpbmc/ICBAZGIuVmFyQ2hhcgogIGF2YWxpYmlsaXR5X3N0YXR1cyBCb29sZWFuPwogIHVzZXJzICAgICAgICAgICAgICB1c2Vycz8gICBAcmVsYXRpb24oZmllbGRzOiBbc2VsbGVyX2lkXSwgcmVmZXJlbmNlczogW3VzZXJfaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAic2VsbGVyX2lkX2Zyb21fdXNlcl9pZF9mayIpCn0KCm1vZGVsIG5leHVzIHsKICBuZXh1c19pZCAgICAgU3RyaW5nICBAaWQobWFwOiAibmV4dXNfaWRfcGsiKSBAZGIuVmFyQ2hhcgogIHVzZXJfaWQgICAgICBTdHJpbmc/IEBkYi5WYXJDaGFyCiAgcmVwbHlfdG8gICAgIFN0cmluZz8gQGRiLlZhckNoYXIKICBjb21tZW50ICAgICAgU3RyaW5nPwogIHVwdm90ZXMgICAgICBJbnQ/CiAgY2hyb25pY2xlX2lkIFN0cmluZz8gQGRiLlZhckNoYXIKICB1c2VycyAgICAgICAgdXNlcnM/ICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcl9pZF0sIHJlZmVyZW5jZXM6IFt1c2VyX2lkXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogIm5leHVzX3VzZXJfaWRfZnJvbV91c2VyX2lkX2ZrIikKfQoKbW9kZWwgcXVpenplcyB7CiAgcXVpel9pZCAgICAgICAgU3RyaW5nICAgIEBpZChtYXA6ICJxdWl6X2lkX3BrIikgQGRiLlZhckNoYXIKICBtb2RfaWQgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIKICBkaWZmaWN1bHR5X2x2bCBJbnQ/CiAgY3JlYXRlZF9kYXRlICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgYW5pbWVfbmFtZSAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyCiAgd2lraSAgICAgICAgICAgd2lraT8gICAgIEByZWxhdGlvbihmaWVsZHM6IFthbmltZV9uYW1lXSwgcmVmZXJlbmNlczogW2FuaW1lX25hbWVdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiYW5pbWVfbmFtZV9mcm9tX2FuaW1lX25hbWVfX2ZrIikKICB1c2VycyAgICAgICAgICB1c2Vycz8gICAgQHJlbGF0aW9uKGZpZWxkczogW21vZF9pZF0sIHJlZmVyZW5jZXM6IFt1c2VyX2lkXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogIm1vZF9pZF9mcm9tX3VzZXJfaWRfZmsiKQp9Cgptb2RlbCBzZWFzb24gewogIHNlYXNvbl9udW1iZXIgSW50ICAgICBAaWQobWFwOiAiX3BrIikKICB3aWtpX2lkICAgICAgIFN0cmluZz8gQGRiLlZhckNoYXIKICBzdW1tYXJ5ICAgICAgIFN0cmluZz8KICBwb3N0ZXIgICAgICAgIFN0cmluZz8gQGRiLlZhckNoYXIKICBlcGlzb2RlX2xpc3QgIEludD8KICB3aWtpICAgICAgICAgIHdpa2k/ICAgQHJlbGF0aW9uKGZpZWxkczogW3dpa2lfaWRdLCByZWZlcmVuY2VzOiBbd2lraV9pZF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uLCBtYXA6ICJ3aWtpX2lkX2Zyb21fd2lraV9pZF9mayIpCn0KCm1vZGVsIHVzZXJzIHsKICBlbWFpbF9pZCAgICBTdHJpbmcgICAgICBAZGIuVmFyQ2hhcgogIGd1aWxkICAgICAgIFN0cmluZyAgICAgIEBkYi5WYXJDaGFyCiAgdXNlcl9pZCAgICAgU3RyaW5nICAgICAgQGlkKG1hcDogInVzZXJfaWQiKSBAZGIuVmFyQ2hhcgogIHVzZXJuYW1lICAgIFN0cmluZz8gICAgIEBkYi5WYXJDaGFyCiAgam9pbmVkX2RhdGUgRGF0ZVRpbWU/ICAgQGRiLkRhdGUKICBuYW5pICAgICAgICBJbnQ/CiAgYXZhdGFyICAgICAgSW50PwogIGJ1Y2tldCAgICAgIGJ1Y2tldD8KICBjaHJvbmljbGUgICBjaHJvbmljbGVbXQogIG1lcmNoICAgICAgIG1lcmNoW10KICBuZXh1cyAgICAgICBuZXh1c1tdCiAgcXVpenplcyAgICAgcXVpenplc1tdCn0KCm1vZGVsIHdpa2kgewogIHdpa2lfaWQgICAgU3RyaW5nICAgIEBpZChtYXA6ICJ3aWtpX2lkX3BrIikgQGRiLlZhckNoYXIKICBhbmltZV9uYW1lIFN0cmluZz8gICBAdW5pcXVlKG1hcDogImFuaW1lX25hbWVfdWsiKSBAZGIuVmFyQ2hhcgogIHBvc3RlciAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyCiAgc3VtbWFyeSAgICBTdHJpbmc/CiAgc3RhdHVzICAgICBCb29sZWFuPwogIHJhdGluZyAgICAgSW50PwogIGJ1Y2tldCAgICAgYnVja2V0W10KICBxdWl6emVzICAgIHF1aXp6ZXNbXQogIHNlYXNvbiAgICAgc2Vhc29uW10KfQo='
config.inlineSchemaHash = '6f7275cbd2696316808f754b0c921e362ed053a4e8b4efa498ea71b88491f9a0'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
}

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

