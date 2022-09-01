import Config from './config';
import { createClient } from '@supabase/supabase-js';

export const supabaseAdmin = createClient(Config.dbUrl, Config.dbPrivateKey);
