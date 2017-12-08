# graphcool-json-schema
JSON schema of graphcool.yml files

## Usage

### JSON Schema

#### As hosted URL

You can use the following URL for the current JSON schema file:

```
https://raw.githubusercontent.com/graphcool/graphcool-json-schema/master/src/schema.json
```

#### Import as file in Node

```js
const schema = require('graphcool-json-schema/dist/schema.json')
```

#### Usage with VSCode

Add the following to your settings:

```json
{
  "yaml.schemas": {
    "https://raw.githubusercontent.com/graphcool/graphcool-json-schema/master/src/schema.json": "graphcool.yml"
  }
}
```


### Typescript Definitions

```sh
yarn add graphcool-json-schema
```

```ts
import { GraphcoolDefinition } from 'graphcool-json-schema'
```

