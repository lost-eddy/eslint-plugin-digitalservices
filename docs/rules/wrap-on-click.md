#Обертка для функции onClick
>**Wrap for onClick function**

При передаче функции с аргументами в событие **onClick** или **onPress**
обязательно оборачивать ее в стрелочную функцию. 
Без обертки использовать только для передачи функций без аргументов.

>When passing a function with arguments to the **onClick** or **onPress** event
 be sure to wrap it in an arrow function.
 Use without wrapper only for passing functions without arguments.

Пример:
>Example:
```js
<styles.Item
   onClick={() => { func(item) }}
/>
```

###Настройка:
>Settings:

Вторым аргументом правило принимает объект с ключом **ignoreFiles**, 
который содержит массив путей файлов или папок, где это 
правило будет игнорироваться.

>Second argument accept object with key **ignoreFiles**, which contain 
array with paths of file or folder paths, where it is
 the rule will be ignore

Пример:
>Example:

```text
  "digitalservices/wrap-on-click": ["error", {
        ignoreFiles: [
          'app/api',
          'app/constants',
          'app/resources',
          'app/store',
        ]}],
```
