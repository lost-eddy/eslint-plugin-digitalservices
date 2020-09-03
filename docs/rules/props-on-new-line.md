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
  "digitalservices/props-on-new-line": ["error", {
        ignoreFiles: [
          'app/api',
          'app/constants',
          'app/resources',
          'app/store',
        ]}],
```
