# Overview  :

It replaces 2 characters to ONE letter which is the second letter but CAPITAL.

*Examples*
```js
   "entity_name" => "entityName"
   {first_name:"Abdou", last_name:"TM"} => {firstName: "Abdou", lastName:"TM"}  
```

It is compatible with Babel projects (ES7, React.JS,...)

# Example :

```js
import camelize,{camelCase} from 'babel-camelize';
//----then---
camelCase("first_name") //  "firstName"
camelize({first_name:"A", last_name:"T"}) // {firstName: "A", lastName:"T"}

```

# Inspiration:

This package has been implemented & inspiring from [@camelize](https://www.npmjs.com/package/camelize) package.

# License :

MIT
