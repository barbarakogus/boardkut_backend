// const { Pool } = require('pg');
// const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres'; 
// {
//   host: 'localhost',
//   database: 'postgres',
//   port: 5432,
//   max: 10,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
//   user: 'postgres',
//   password: 'postgres',
// };

// const poolConnection = process.env.DATABASE_URL ? {
//   connectionString,
//   ssl: {
//     rejectUnauthorized: false
//   }
// } : {
//   connectionString
// };

// const pool = new Pool(poolConnection);

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://gtbrmsmztghbpiuvpogo.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = {
  SUPABASE: supabase,
  // query: async (text, params) => await supabase.query(text, params),
  // GET_BOARDGAMES: 'SELECT title, type, players, play_time AS "playTime", language, age, purchase_date AS "purchaseDate", id FROM "boardgames"',
  // GET_BOARDGAME_BY_ID: 'SELECT title, type, players, play_time AS "playTime", language, age, purchase_date AS "purchaseDate", id FROM "boardgames" WHERE id = $1',
  // POST_BOARDGAME: 'INSERT INTO "boardgames" ("title", "type", "players", "play_time", "language", "age", "purchase_date") VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id',
  // UPDATE_BOARDGAME: 'UPDATE "boardgames" SET "title" = $1, "type" = $2, "players" = $3, "play_time" = $4, "language" = $5, "age" = $6, "purchase_date" = $7 WHERE id = $8',
  // DELETE_BOARDGAME: 'DELETE FROM  "boardgames" WHERE id = $1'
};
