# MovieHunt

This web app was created using React. The purpose of building this is to brush up on my React skills and refresh my fundamentals on some important concepts.

## Learnings

- React is a component based JS library used to build single page web applications.

- There are two types of components in React: Class Components and Functional Components.

- Functional components are now the standard.

### Props

**Props** allow us to pass dynamic data through React components via attributes. 'props' is shorthand for 'properties'.

Example:

```javascript
const Person = (props) => {
    <>
        <h1>Name: {props.name}</h1>
        <h2>Age: {props.age}</h2>
    <>
}

const App = () => {
    return (
        <div>
            <Person name="Samyak" age={22}>
        </div>
    )
}
```

### State

**State** in React is a plain JavaScript object used by React to represent a piece of information about a component's current situation. It is completely managed by the component itself. These states, along with other lifecycle methods and React features are managed by a special function provided by the React library called **hooks**.

Some rules to keep in mind is that we should never modify / mutate the state manually. Special functions that come with the React library should be used instead.

### useState()

- The most commonly used hook for managing state is the `useState` hook. How can we create a state in react?

We need to import the `useState` hook as such:

```javascript
import { useState } from "react";

// Inside App Functional Component
// const [nameOfState, stateSetter] = useState();
const [counter, setCounter] = useState(0);
```

### Callback Functions

A callback function is a function that does not have a name and is waiting for an event to occur after which it executes.

Example:

```javascript
function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
```

### useEffect()

This is the second most used React hook and this is how it is called.

```javascript
import { useState } from "react";
// Inside the App Functional Component
useEffect(() => {
  alert("Reload");
}, []);
```

### API

API stands for Application Programming Interface. In the context of this program, an external API (omdbapi.com) is used for getting access to data for listing movies.

### Asynchronous Function

An `async` function is used when we know it takes time to fetch data (e.g. movies).

### Custom Components

We know that React is a component based library. Custom components are user-defined components created to encapsulate and reuse specific pieces of UI or functionality. Custom components are necessary for reusability, maintainability, abstraction, separation of concerns, composition, hierarchy, and collaboration.

An example of a custom component used in this project is the **MovieCard** component.

### JSX Extension

Some files will have a **.js** extension whereas some will have a **.jsx** extension. Whenever a new component is created in React, the **.jsx** extension is preferable.

### Destructuring

Destructuring is a feature in JavaScript that allows the extraction of individual values from arrays or objects and assign them to variables in a concise and convenient way. Here are examples:

Without destructuring:

```javascript
// Example 1
const stateArray = useState(0);
const counter = stateArray[1];
const setCounter = stateArray[2];

// Example 2
const MovieCard = (props) => {
  <div>
    <h1>{props.movie.title}</h1>
    <p>{props.movie.desc}</p>
  </div>;
};
```

With destructuring:

```javascript
// Example 1
const [counter, setCounter] = useState(0);

// Example 2
const MovieCard = ({ movie }) => {
  <div>
    <h1>{movie.title}</h1>
    <p>{movie.desc}</p>
  </div>;
};
```

TODO:

1. Visit the official documentation for React and go over the main concepts.
