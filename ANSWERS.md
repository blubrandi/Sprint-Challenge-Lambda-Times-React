1. PropTypes are used to ensure that the type of data we're wanting to pass from the data provided to components is the data type we want it to be.  This helps debug our data passed.

2.  The React Component Lifecycle phases are important for rendering API data received.  There are (3) phases to the React Component Lifecycle:
    - The Mounting Phase, componentDidMount().  This is when your render() method is invoked.
    - Updating Phase, is where state is set with setState()
    - Un-mounting Phases, the component is no longer rendered

3.  A Higher Order Component is a React Component that takes in another component as an argument.  This allows us to share functionality between components.  We also use HOC's to act as a container component to the passed in component and conditionally render the passed in component.

4.  The (3) ways to style components in React are:
    - 'Vanilla-type' CSS
        This is the most straight forward way to add CSS, and for somene working within a React app who doesn't want to (or know how) use an external library for styling, they can jump in and style the app, as they would any other app or website.
    - react-strap
        react-strap allows one to quickly get going with Bootstrap styles within their app, with an abundance of pre-styled components and elements.
    - styled-components
        Allows us to build reusable components by writing the styles as JavaScript styled components