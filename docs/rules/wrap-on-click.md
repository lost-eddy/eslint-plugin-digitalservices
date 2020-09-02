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
