# JSBOARD

### This is an interactive coding environment. You can write JavaScript, see it executed, and write comprehensive documentation using markdown.
![jsboard](https://user-images.githubusercontent.com/36708180/135358689-6f4e6c8b-cefe-481b-9117-6d4243b81f7a.png)

---
### How To Run JsBoard
- `npx jsboard serve` 
- The program will run on port 4005.
- While running on port 4005, the file *notebook.js* is created on path folder.
- If port 4005 is in use run `npx jsboard serve --port XXXX`.
- Your work will be saved on *notebook.js*.
- To edit a file run `npx jsboard serve notebook.js --port XXXX`.



### How to use JsBoard App
- Click text or code cell to edit it.
- The code in eact code editor is all joined together into one file. If you define a variable in cell #1, you can refer to it in any cell.
- You can show any React component, **string**, **number**, or anything else by calling the `show()` function. This is a function build into this environment.
- Call `show()` multiple time to show multiple values.
- Re-order or delete cells using the buttons on the to right.
- Add new cells by hovering on the divider between each cell.

### Examples
Here are several examples: Algorithms
  *Given a String, return a new string with a reversed order of characters*
```js
  function reversed(str) {
    return str.split('').reverse().join('');
  }

  show(reversed('Hello'));
```

---


  *Given a String, return a character that is most commonly used in the string*
  ```js
    function maxChar(str) {
      const charMap = {};
      let max = 0;
      let maxChar = '';

      for(let char of str) {
        if(charMap[char]) {
          charMap[char]++;
        } else {
          charMap[char] = 1;
        }
      };

      for(let char in charMap) {
        if(charMap[char] > max) {
          max = charMap[char];
          maxChar = char;
        }
      }
      return maxChar;
  }

  show(maxChar('apple 123111'));
```
Another simple algorithm to find the most commonly used characters in a string.

---

### React Js
- This application can render react js on the screen(right side). The react js syntax is Traspiled and bundled through [ESBuld](https://esbuild.github.io/).
- The newest syntax of JavaScript(ES6 +) is transpiled and bundled through [ESBuld](https://esbuild.github.io/).

Examples: 

Cell 1

```js
  import { useState } from 'react';

  const Counter = () => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <button onClick{() => setCount(count + 1)}>Click</button>
        <h3>Count: {count}</h3>
      </div>
    );
  };

  show(<Counter />);
```

Cell 2

```js
  const App = () => {
    return (
      <div>
        <h3>App Says hi!</h3>
        <i>Counter component will be rendered below...</i>
        <hr />
        <!-- Counter was declared in an earlier cell, we can reference it here -->
        <Counter />
      </div>
    );
  }

  show(<Counter>)
```




---

All of your changes get saved to the file you opened jsboard with called notebook.js.

---

### Contribute
- You are welcome to contribute, checkout the [github repo](https://github.com/Nutty4616/portfoliowork/)

### Requirements
- Node js
- Code Editor
- terminal 
