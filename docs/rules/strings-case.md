#Правила оформления строковых констант
>**Strings formatting rules**

Все ключи должны быть в регистре **camelCase**

>All keys must be in **camelCase**

Пример:
>Example:
```js
const strings = {
  hello: "hello",
  base64: "base64",
  headerBlock: {
    authorizationKey: "Authorization" 
  }
}
```

###Настройка:
>Settings:

Вторым аргументом правило принимает массив путей файлов или папок, где это 
правило будет работать.

>Second argument accept array with paths of file or folder paths, where it is
 the rule will work

Пример:
>Example:

```text
  "digitalservices/strings-case": ["error", ['app/resources/strings.js']],
```
