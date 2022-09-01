import dotenv from 'dotenv';
const path = __dirname + `/../../.env.${process.env.NODE_ENV}`;
dotenv.config({ path });

const config = {
  port: process.env.APPLICATION_PORT as string,
  dbUrl: process.env.SUPABASE_URL as string,
  dbPrivateKey: process.env.SUPABASE_PRIV_KEY as string,
};

export default config;
