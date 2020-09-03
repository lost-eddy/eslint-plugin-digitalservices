#Запрет использования литералов в коде
>**No literals in code**

Все строки по которым производится сравнение, а также все 
передаваемые в запросы строки должны быть вынесены в константы проекта.
Все строки которые выводятся на ui необходимо вынести в файл 
текстовых ресурсов проекта. Все справочники вынести в файл справочников проекта.

>All lines by which the comparison is made, as well as all
 strings passed to requests must be moved to project constants.
 All lines that are displayed on ui must be transferred to a file
 text resources of the project. Move all directories to the project directories file.

Пример:
>Example:
```js
const constant = C.common.INTERVAL_REFRESH_TOKEN;
const string = R.strings.developmentYears;
const nsi = R.nsi.vacationGroup.MyVacationPanel.COLLEAGUES.value;
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
  "digitalservices/no-literal-expression": ["error", {
        ignoreFiles: [
          'app/api',
          'app/constants',
          'app/resources',
          'app/store',
        ]}],
```
