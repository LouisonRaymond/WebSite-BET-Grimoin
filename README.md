# WebSite-BET-Grimoin
## Start apps
- [Documentation backend](./src/backend/README.md)
- [Documentation CMS](./src/cms/README.md)

## Documentation packages
- [express](https://expressjs.com/en/4x/api.htm)
- [EJS](https://ejs.co/#docs)
- [showdownjs](https://github.com/showdownjs/showdown)

## Export data from strapi
```
yarn exportdata

```
## Import data from strapi
```
yarn strapi import -f export_20231027080456.tar.gz

```
Do not forget to change the file name `export_20231027080456.tar.gz` with the one you want to import !

# Deploy
Run the CMS in production
```
pm2 start ecosystem.config.js --only cms --env production
```

Run the Web Site in production
```
pm2 start ecosystem.config.js --only web --env production
```