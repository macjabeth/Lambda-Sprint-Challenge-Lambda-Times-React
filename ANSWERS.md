## Self-Study/Essay Questions

*What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.*

PropTypes are used for type checking and validation so that you can easily verify the type of data you're passing down to child components. It's important for two reasons: it gives a visual representation of the data that's being passed through the component, and it also logs warnings to the console if you provide a prop of the wrong type (or forget to provide a required prop).

*Describe a life-cycle event in React?*

There are three "stages" to a component life-cycle: mounting, updating, and unmounting. One of the life-cycle events, `componentDidMount()`, is fired once upon the component being rendered to the DOM. It is a great place to fetch data for your app or load in data from localStorage.

*Explain the details of a Higher Order Component?*

Higher Order Components (HOCs) are an advanced technique in React for reusing component logic. Concretely, it is a function that takes a component and returns a new component.

*What are three different ways to style components in React? Explain some of the benefits of each.*

- CSS Stylesheets, which provide a separation of concerns.

- Inline Styles, which I suppose are useful in that you can write them right there in JavaScript and have all your styles, structure and interactivity in one component.

- Styled Components, which are like Inline Styles on steroids. You can simply create a component with styles attached and use those components in your jsx markup.
