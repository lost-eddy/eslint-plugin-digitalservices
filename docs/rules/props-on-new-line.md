#Оформление пропсов
>**Props formatting rules**

В компоненте при передаче двух и более **props**, 
необходимо писать каждый с новой строки

>In a component, when passing two or more **props**, write each on a new line

Пример:
>Example:
```js
return (
    <SubdivisionWrapper>
      {
        array.map((dep) => (
          <SubdivisionItem
            key={dep.uuid}
            someProp
            newProp
          />
        ))
      }
    </SubdivisionWrapper>
);
```
