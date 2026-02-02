import path from 'path';
import dotenv from 'dotenv';

const envFile = process.env.ENV_FILE || '.env';
dotenv.config({ path: path.resolve(process.cwd(), envFile) });
