[![Build Status](https://travis-ci.org/abdennour/babel-camelize.svg?branch=master)](https://travis-ci.org/abdennour/babel-camelize)

# Overview  :

It replaces 2 characters (the first is `.`, `-` or `__` ) to ONE letter which is the second letter but CAPITAL.


*Examples*
```js
   "entity_name" => "entityName"
   "entity.name" => "entityName"
   "entity-name" => "entityName"    
   {first_name:"Abdou", last_name:"TM"} => {firstName: "Abdou", lastName:"TM"}  
```

It is compatible with Babel projects (ES7, React.JS,...)

# Example :

```js
import Camelize, {CamelCase} from 'babel-camelize';
//----then---
CamelCase("first_name") //  "firstName"
Camelize({first_name:"A", last_name:"T"}) // {firstName: "A", lastName:"T"}

```

# Inspiration:

This package has been implemented & inspiring from [@camelize](https://www.npmjs.com/package/camelize) package.

# License :

MIT
