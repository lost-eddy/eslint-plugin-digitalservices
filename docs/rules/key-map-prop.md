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
