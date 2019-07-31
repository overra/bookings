# Bookings

This project uses [create-react-app][cra] for the client framework and
[Now][now] for development and deployment.

## Setup

Complete the following steps in your terminal to get this project running in
development mode.

```
# clone this repository and install the dependencies
git clone git@github.com:overra/bookings.git
cd bookings
yarn install

# once the dependencies have install, run:
yarn start
```

This will run `now dev` using the locally installed devDependency of `now`.

# Deploy

To deploy this using [Now][now], you'll need to have an account and login using the CLI. If you don't have the `now` CLI installed globally you can use `./node_modules/.bin/now login`.

Once you're logged in, simply run `yarn deploy`.

[cra]: https://facebook.github.io/create-react-app/
[now]: https://now.sh
