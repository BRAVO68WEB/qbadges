<h1 align="center">Welcome to qbadges 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/BRAVO68WEB/qbadges#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/BRAVO68WEB/qbadges/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/BRAVO68WEB/qbadges/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/BRAVO68WEB/qbadges" />
  </a>
  <a href="https://twitter.com/bravo68web" target="_blank">
    <img alt="Twitter: bravo68web" src="https://img.shields.io/twitter/follow/bravo68web.svg?style=social" />
  </a>
</p>

> Fectch all your Qwikilabs badges

### 🏠 [Homepage](https://github.com/BRAVO68WEB/qbadges#readme)

## Install

```sh
yarn add qbadges
```

## Usage

```js
const { qbadges } = require("qbadges");
const profileId = "<Qwiklabs profile id>";

var badges = async () => {
  var qb = await qbadges(profileId);
  console.log(qb);
};

badges();
```

## Run tests

```sh
yarn test
```

## Author

👤 **BRAVO68WEB**

* Website: https://bravo68web.me
* Twitter: [@bravo68web](https://twitter.com/bravo68web)
* Github: [@BRAVO68WEB](https://github.com/BRAVO68WEB)
* LinkedIn: [@bravo68web](https://linkedin.com/in/bravo68web)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/BRAVO68WEB/qbadges/issues). 

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [BRAVO68WEB](https://github.com/BRAVO68WEB).<br />
This project is [MIT](https://github.com/BRAVO68WEB/qbadges/blob/master/LICENSE) licensed.
