# t-profile-gen-v2

This project is used for generating T-profiles

## Package Manager

This project uses `yarn` as package manager

First install all dependencies uses the `yarn` command.

When this is done you can run the following commands:
* `yarn dev`: launches a dev server with hot reloading
* `yarn test`: launches the jest test runner
* `yarn lint`: runs Eslint to check linting and typescript errors/warnings

## Git

When trying to push to a branch husky will run a pre-push hook which runs all the tests and check for linting/typescript errors.

## CI/CD

There are 2 main branches and pushing to each of these branches will start our CircleCi pipeline:
* `develop` branch: used for developing. When pushing to this branch the CircleCi pipeline is triggered and if everything is ok will deploy to `dev` environment.
* `main` branch: this branch is not meant for developing. When a big piece of functionalities are done we can merge develop into the main branch and the CircleCi piple is triggered and deploys to `staging` environment.

Both environments are deployed on Heroku.
