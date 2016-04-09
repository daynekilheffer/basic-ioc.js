# Basic inversion of control
IoC is all about control, and `basic-ioc` attempts to give _all_ of that control to the user.

## usage
At the lowest level, `basic-ioc` is just a wrapper around `require()`

Here is an example configuration:

`some-app.js`
```javascript
const ioc = require('basic-ioc');
const path = require('path');

let container = ioc.initialize(path.resolve(__dirname, 'config.json'));
let myComponent = container.get('yourComponentId');
// do something magical with your component
```
`config.json`
```json
{
  "components": [
    {
      "id": "yourComponentId",
      "source": "./your-component.js"
    }
  ]
}
```

But this is just a contrived example.  Most likely you want dependency injection.  The following is more than likely what you are looking for.

`config.json`
```json
{
  "components": [
    {
      "id": "yourDependency",
      "source": "./your-dependency.js"
    },
    {
      "id": "yourComponentId",
      "source": "./your-component.js",
      "properties": [
        {
          "name": "myDependency",
          "ref": "your-dependency.js"
        }
      ]
    }
  ]
}
```

In this case, `your-component.js` declares a method on the exported object which is provided with the object exported via `your-dependency.js` during initialization.

### About this project
I needed an IoC container and I felt that many of the ones available on npm were very specific about how you build your code.  I wanted to avoid that.

I also come from the Java community and thus, based the initial design of this module off of Spring.
