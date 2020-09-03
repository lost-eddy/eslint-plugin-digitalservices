#Правила оформления справочников
>**Master data formatting rules**

####R.nsi.vacationGroup.MyVacationPanel.COLLEAGUES.value
- Группа - **vacationGroup** в регистре **lowerCamelCase**
- Справочник - **MyVacationPanel** в регистре **CamelCase**
- Ключ - **COLLEAGUES_ONE** в регистре **UPPER_CASE**
- Значение - **value** в регистре **lowerCamelCase**

>- Group - **vacationGroup** in **lowerCamelCase**
>- Directory - **MyVacationPanel** in **CamelCase**
>- Key - **COLLEAGUES_ONE** in **UPPER_CASE**
>- Value - **value** in **lowerCamelCase**

Пример:
>Example:
```js
const nsi = {
  vacationGroup: {
   MyVacationPanel: {
     COLLEAGUES: {
       value: "colleagues",
       label: "Коллеги" 
     },
     VACATION_ADDITIONAL: {
       value: "vacationAdditional",
       label: "Дополнительный отпуск" 
     },
     VACATION_TRANSFER: {
       value: "vacationTransfer",
       label: "Перенос отпуска" 
     }
   }
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
  "digitalservices/nsi-case": ["error", ['app/resources/nsi.js']]
```
