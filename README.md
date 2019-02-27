# Adway backend test

## <a name="how-to-start"></a>How to Start

### Prerequisites

1. Obtain `ad_account_id` from facebook business profile
2. Obtain `token` from facebook developer profile
3. Be sure to have mongoDB service up and running.
Get it's connections url `mongodb://<hostname>:<port>`.
_(default: mongodb://localhost:27017)_
4. _(Optional)_ Get some `port` to run your app on _(default: 3000)_

### Actual start

```bash
npm start -- --mongo=<mongo_url> --id=<ad_account_id> --token=<token> --port=<port>
```

## How to Use

### Campaign creation

1. Be sure you have web server up and running following steps in [How to Start section](#how-to-start)
2. Using your favourite method, make a request

Example using CURL:

```bash
curl -XPOST 'localhost:3000/create?objective=APP_INSTALLS&name=Some%20Name%20Here' && echo
```

### Campaign removal based on MongoDB data

1. Be sure you have web server up and running following steps in [How to Start section](#how-to-start)
2. Using your favourite method, make a request

Example using CURL:

```bash
curl -XPOST 'localhost:3000/delete' && echo
```

## LICENSE

MIT
