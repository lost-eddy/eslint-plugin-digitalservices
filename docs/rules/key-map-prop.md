#Обязательный атрибут "key"
>Required attribute "key"

При любом рендере массива через **.map**, обязательно должен быть указан **key**. 
Ключ не может быть сгенерирован внутри рендера или быть взят из индекса 
массива. Ключ должен присваиваться в момент заполнения данных

>Whenever rendering an array through **.map**, the **key** must be specified.
  The key cannot be generated within the render function or taken 
  from the array index. The key must be assigned at the time 
  of filling in the data

Пример:
>Example:
```js
return (
    <SubdivisionWrapper>
      {
        array.map((dep) => (
          <SubdivisionItem key={dep.uuid}/>
        ))
      }
    </SubdivisionWrapper>
);
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
  "digitalservices/key-map-prop": ["error", {
        ignoreFiles: [
          'app/api',
          'app/constants',
          'app/resources',
          'app/store',
        ]}],
```
