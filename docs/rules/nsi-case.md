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
