import { config } from "dotenv";

config()

// Add default values and logging
console.log('Loading environment variables...');

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb';
export const DB_PORT = process.env.DB_PORT || 3306;
 
pool.getConnection()
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch((err) => console.error('Error de conexión a la base de datos:', err));
// Log configuration (excluding sensitive data)
console.log('Configuration loaded:', {
    PORT,
    DB_HOST,
    DB_DATABASE,
    DB_PORT
});
