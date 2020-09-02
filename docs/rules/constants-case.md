#Правила оформления констант
>**Constant formatting rules**

Все ключи объектов должны быть в регистре **lowerCamelCase**, а 
конечные ключи в верхнем регистре, с разделтителем в виде нижнего подчеркивания 
**UPPER_CASE**

>All object keys must be in **lowerCamelCase** and ending keys in upper case, with underscore delimiter **UPPER_CASE**

Пример:
>Example:
```js
const common = {
  INTERVAL_REFRESH_TOKEN: 20000000,
  BASE64: "base64",
  header: {
    AUTHORIZATION: "Authorization" 
  }
}
```
