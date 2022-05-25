## Last update 11 May 2022

## If you use Webstorm or PhpStorm => open setting window or ctrl + alt + s, => Editor => Code style => and search field "Hard wrap at" => change value on 90
## Open setting window, top left in the search field add 'eslint' => (you will see 'Fix Eslint Problems' => add hot key and use it)

### If we have a problem with version when install one of this packages, search info in google or install packages yarn add -D package-name@0.0.0.,
### @0.0.0 it's version for package, version you can see in my package.json

## Commands:
    - yarn add -D prettier => formatter 
    - yarn add -D eslint-plugin-prettier 
    - yarn add -D eslint => linter, code style analyzer 
    - yarn add -D eslint-plugin-react => exclude writing anti-patterns 
    - yarn add -D eslint-plugin-import => check all imports for correct work 
    - yarn add -D eslint-plugin-react-hooks => check valid hooks in react code 
    - yarn add -D eslint-plugin-jsx-a11y => check code, for people with disabilities

## Full command: yarn add -D eslint prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import eslint-plugin-prettier eslint-plugin-jsx-a11y

## Commands:
    - yarn add -D eslint-config-airbnb => airbnb config 
    - yarn add -D eslint-config-prettier => prettier config, no conflict with airbnb 
    - yarn add -D eslint-import-resolver-typescript => for correct work eslint-plugin-import package with typescript

## Full command: yarn add -D eslint-config-airbnb eslint-config-prettier eslint-import-resolver-typescript

## Commands:
    - yarn add -D @typescript-eslint/eslint-plugin
    - yarn add -D @typescript-eslint/parser => eslint parser code for typescript 

## Full command => yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin

## Files
    - Create .env in your project folder => add code from .env into your .env file.
    - Create .prettierrc file in your project folder => add code from .pretierrc into your .pretierrc file.
    - Create .eslintignore in your project folder => add code from .eslintignore into your .eslintignore file.
    - Create .eslintrc.json in your project folder => add code from .eslintrc.json into your .eslintrc.json file.

## Into .gitignore file copy lines 25-29 and add code into your .gitignore file

## Base url => tsconfig.json ('.' or 'src') => absolute paths for app,
## If '.' => path in import 'src/components/...'
## If 'src' => path in import 'components/...' or './components/...'

## If you have set up absolute paths and are running in webStorm go to:
    - Open setting window or ctrl + alt + s => Editor => Code Style => TypeScript || JavaScript => tab 'Imports' => turn checkbox 'Use paths relative to tsconfig.json' and 'Use paths relative to the project, resource or sources roots'
    - https://blog.jetbrains.com/webstorm/2020/07/configuring-the-style-of-imports-in-javascript-and-typescript/

POSSIBLE ERROR POSSIBLE ERROR POSSIBLE ERROR
POSSIBLE ERROR POSSIBLE ERROR POSSIBLE ERROR
POSSIBLE ERROR POSSIBLE ERROR POSSIBLE ERROR

## If error message: "this.cliEngineCtor is not a function" update your WS to min version 2021.2.2, if don't help update NodeJs
## If error message: "context.getPhysicalFilename is not a function" <, use this link https://issueexplorer.com/issue/prettier/eslint-plugin-prettier/434
## If other error message, remove object in package.json:

"eslintConfig": {
    "extends": [
        "react-app",
        "react-app/jest"
    ]
},

POSSIBLE ERROR POSSIBLE ERROR POSSIBLE ERROR
POSSIBLE ERROR POSSIBLE ERROR POSSIBLE ERROR
POSSIBLE ERROR POSSIBLE ERROR POSSIBLE ERROR

## After installing all the packages and checking, go to the README_HELPER.md file there is a lot of useful information for you (:

## IF YOU FOUND AN INTERESTING BUG OR HAVE PROBLEM WITH START APP, WRITE ME IN TELEGRAM
## @gleb_pilipenka
## Good Luck (:
