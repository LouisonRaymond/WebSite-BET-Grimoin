# WebSite-BET-Grimoin
## Start apps
- [Documentation backend](./src/backend/README.md)
- [Documentation CMS](./src/cms/README.md)

## Packages documentation
- [express](https://expressjs.com/en/4x/api.htm)
- [EJS](https://ejs.co/#docs)
- [showdownjs](https://github.com/showdownjs/showdown)

## Export data from strapi
```
yarn export:data

```
## Import data from strapi
```
yarn strapi import -f export_20231027080456.tar.gz

```
Do not forget to change the file name `export_20231027080456.tar.gz` with the one you want to import !

# Deploy
## Continuous deplyment
You can deploy easily when you create a tag and push it to Github.
Create a tag
```
git tag v1.0.1 -m "<message>"
```

```
git push --tags
```

We use semantic versioning is quite easy to understand : you want to name tags as versions of your software in the form of

`v<major>.<minor>.<patch>`

Where
- **major** : is a version number where you introduced breaking modifications (modifications of your new version are NOT compatible with previous versions);
- **minor** : is a version number that is compatible with previous versions;
- **patch** : is an increment for a bug fix or a patch fix done on your software.

## Manualy
1. Connect with ssh to the server
2. Go to the folder ~/app/WebSite-BET-Grimoin
3. Remove all changes
    ```
    git reset --hard HEAD
    ```
4. Checkout the tag (change the tag name with the right one !)
    ```
    git checkout v1.0.1
    ```
5. install dependencies
    ```
    yarn install
    cd src/cms
    yarn install
    ```
6. rebuild the cms
    ```
    yarn build
    ```
7. restart apps
    ```
    pm2 restart --update-env cms
    pm2 restart --update-env site
    ```

## Start pm2 for the first time
```
cd WebSite-BET-Grimoin
pm2 start --name site yarn -- start:prod
cd src/cms
pm2 start --name cms yarn -- start:prod
```
