#Импорт стилей в компонент
>**Import styles**

Все стили используемые в компонентах должны быть вынесены 
в файл **styles.js**. При импорте стилей в компонент необходимо использовать 
конструкцию: **import * as styles from './styles';** и не 
импортировать стили по одному.

>All styles used in components must in **styles.js** file. When importing styles into a component, you must use
 construct: **import * as styles from './styles';** and not
 import styles one at a time.

Пример:
>Example:
```js
import * as styles from './styles';
```
