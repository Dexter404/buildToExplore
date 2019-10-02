# sequelize-typescript experiments

Project for experimentation with sequelize-typescript library used for model decorator

## Technologies used

- Language: Typescript (v3.5.3)
- Database: MySQL (v2)
- Libraries: sequelize (v5.11.0), sequelize-typescript (v1.0.0-beta.3)

## How to install?

```bash
npm install
```

## How to run?

```bash
npm start
```

## Troubleshoot

- Sometimes if you delete any file from `src` then on compilation previous complied copy of deleted file does not get removed from compiled code source. So to remove that we can clean build directory using

```bash
npm run clean
```

- In some cases, while changing relationships, `sequelize.sync({ force: true })` fail to drop previous schema due to foreign key constraints in that case we need to handle/modify database manually.

## References

- https://sequelize.org/master/
- https://www.npmjs.com/package/sequelize-typescript
