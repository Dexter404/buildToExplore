import { Sequelize } from 'sequelize-typescript';
import path from 'path';

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'database.json'))[env];

// including only models files except index file using regex: models/**/!(index).@(ts|js)
export const sequelize: Sequelize = new Sequelize({
  ...config,
  // pattern for only all .ts files except index.ts or index.js
  // modelPaths: [__dirname + '/**/+(*.ts|!(index).@(ts|js))'],
  modelPaths: [path.join(__dirname, '**', '!(index).?(ts|js)')],
  timestamps: true,
  define: { "underscored": true } // enable snake_case for table and field names
});


// exporting all models
export * from "./User";
export * from "./Post";
export * from "./Comment";

export * from "./Player";
export * from "./Team";