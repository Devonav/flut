import { z } from 'zod';  

const envSchema = z.object({  
  MONGO_URI: z.string(),  
  JWT_SECRET: z.string(),  
  PORT: z.coerce.number().default(3000),  
});  

export const env = envSchema.parse(process.env);  