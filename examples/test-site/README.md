# Bodiless-JS Test Site

Example site for testing bodiless.

## Installation

Create a .env.development config file, see .env.development-example for example of contents to include in this file.
By default GTM is enabled on Bodiless example site, and defaults to generic GTM-XXXXXX id.  Until the proper id is set in env files, it won't function correctly.

## Usage

Start the development server (`gatsby develop`)
```
npm run build:watch
```

Build the static site
```
npm run build
```

Serve the static site
```
npm run serve
```

## Platform.sh integration

### Update platform.sh configuration

there is a script responsible for updating platform.sh configuration for test-site based on the changes in bodiless/psh

> Note: the script supports only edit environment now

please trigger the following command from monorepo root:

`npm run lerna -- run psh-update --scope=@bodiless/test-site`
