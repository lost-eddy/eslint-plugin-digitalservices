# eslint-plugin-digitalservices

EsLint config of Digital Services

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-digitalservices`:

```
$ npm install eslint-plugin-digitalservices --save-dev
```


## Usage

Add `digitalservices` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "digitalservices"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "digitalservices/rule": "error"
    }
}
```

## Supported Rules

```
constants-case,
strings-case,
nsi-case,
no-literal-expression,
styles-import,
key-map-prop,
props-on-new-line,
wrap-on-click,
```

Documentation on rules in **docs/rules**





