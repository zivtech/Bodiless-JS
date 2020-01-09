# `@bodiless/backend`

The backend erver which manages writing data to the filesystem and executing git
operations.

## Install

Create a .env config file with the following variables:
```bash
# Location of a folder within the git repository.
APP_GIT_PATH='../../examples/test-site'
# Where to write the content json files
BODILESS_BACKEND_DATA_FILE_PATH='../../examples/test-site/src/data'
# Where to write uploaded static assets
BODILESS_BACKEND_STATIC_PATH='../../examples/test-site/static'
# Whether or not commits are enabled.
BODILESS_BACKEND_COMMIT_ENABLED='0'
```


## Usage

Start the server:
```bash
npm run build:watch
```
