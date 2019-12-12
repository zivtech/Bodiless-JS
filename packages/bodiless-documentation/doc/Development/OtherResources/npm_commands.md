# `NPM commands reference`

NPM commands, that are described in the root `package.json` file and their purpose.

There a 2 types of builds, regulated by `NODE_ENV` variable value:
- `production` - setting value to this will cause packages (that support this variable) to build in production state, with more 
runtime optimizations for performance, but less debug information
- `development` - setting value to this will cause packages to build in mode with more debug information, but less runtime 
performance  

| Command          | Purpose      |
|------------------|------------|
| `build:dev`      | Build development version of all packages (but not Tailwind CSS) |
| `build`          | Build production version of all packages and Tailwind CSS (usually precedes running [editorial environment](../GettingStarted.md?id=run-editor-locally) or [static site](../Deployment/build.md?id=building-and-serving-a-static-site))
| `build:css`      | Build development version of Tailwind CSS only |
| `build:packages` | Build production version of all sub-packages |
| `start`          | Starts `dev`-grade editorial environment at `http://localhost:8005`. Re-builds development version of all packages and keeps watching for changes |
| `start-prod`     | Starts `prod`-grade editorial environment at `http://localhost:8005`. Re-builds production version of all packages and keeps watching for changes |
| `start-docker`   | Start command for running inside Docker container (see "Run editor in docker" in [Getting Started](../GettingStarted.md)) |
| `clean`          | Clearing all kinds of caches everywhere and generated files in example site(s).
| `bootstrap`      | (Required by `setup`) Bootstrap the packages in the current Lerna repo with [hoist option](https://github.com/lerna/lerna/blob/master/commands/bootstrap/README.md#--hoist-glob). Create additional symlinks. Run `scripts/postinstall` |
| `setup`          | Install NPM packages, run `bootstrap`, build all sub-packages and Tailwind CSS. |
| `fresh`          | Clean everything and then install NPM packages, run `bootstrap`, build all sub-packages and Tailwind CSS. | 
| `format`         | Part of pre-commit actions. Formats the code. | 
| `serve`          | Serve a [static site](../Deployment/build.md?id=building-and-serving-a-static-site) locally at `http://localhost:9000`
| `lint`           | Part of pre-commit actions. Lints the code. | 
| `lint-target`    | Print linting report on a target (can be used for putting in Jira tickets) |
| `lint-change`    | Run linter on changes. Used in pre-push hook (see package.json) |
| `fix`            | Runs `format` to auto-fix linting errors 
| `fix-target`     | Fix linting errors in target | 
| `test`           | Part of [pre-commit actions](../Team/Scrum.md?id=code-management-and-pull-requests). Report jest coverage in the output. | 
| `test-watch`     | Run tests in watch mode. Re-runs tests automatically when they change. Useful when developing tests. |
| `docs`           | Serve docs from using Docsify on `http://localhost:3000`
| `lerna:version`  | Run locally when developer wants to create, commit and push to git repo new version of packages. Should be followed by running Jenkins job that will publish packages to NPM repo   
| `publish:all`    | (For automation purposes, JNJ network only) Creates new packages versions and immediately publishes all of them to NPM repo.  
| `publish:from-package` | Does not create new packages version. Should be run by Jenkins job to publish updated packages to the NPM repo 
