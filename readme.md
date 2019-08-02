# Bookings

This project uses [create-react-app][cra] for the client framework and
[Now][now] for development and deployment.

# Getting started

## Prepare database

To setup a fresh database use the following command, with your actual host
address, username and database name. You will then be prompted to enter your
password. Once that's complete you will have an empty `booking` table ready to
use!

```
mysql -h [host address] -u [username] -D [database name] -p < ./api/booking.sql
```

After that's complete, you'll need to need to setup the environment variables
for the projec.t

## Environment variables

Create a `.env` file at the root of the project and enter your database
information.

```
MYSQL_HOST=
MYSQL_USER=
MYSQL_PASS=
MYSQL_NAME=
BROWSER=none
```

## Clone, install and run

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

This will run `now dev` using the locally installed devDependency `now`.

# Deployment

To deploy this using [Now][now], you will need an account and authenticate
using the CLI. If you don't have the `now` CLI installed globally you can use
`./node_modules/.bin/now login`.

Once you're logged in, simply run `yarn deploy`.

[cra]: https://facebook.github.io/create-react-app/
[now]: https://now.sh
