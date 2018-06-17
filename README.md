# react-lib-starter

React library starter with monorepo structure, using Lerna as package manager.

## What's inside
The starter packages:
- example-lib (the lib source code)
- example-app (plain CRA, linked to example-lib)

The library tooling:
- [react-lib-scripts](https://github.com/antonybudianto/react-lib-scripts)

## How to use
1. Clone this repo
2. Install dependencies
   ```sh
   # yarn is fine too
   npm i
   ```
3. Run bootstrap
   ```sh
   npm run bootstrap
   ```

   This will bootstrap and link between app and lib
4. Now, it's ready!

## Dev flow
1. Change dir to `packages/example-lib`
2. Run start
   ```sh
   npm start
   ```
3. Change dir to `packages/example-app`
   ```sh
   npm start
   ```
4. Try changing the lib, it should reflect the changes directly
5. Now, you can start developing your React library!

## Prod flow
1. Make sure you've commited all the changes
2. Change dir to root of this repo
3. Run release (it will run `npm run build` first via `prerelease` hook)
   ```sh
   npm run release
   ```

## License
MIT
