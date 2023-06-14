# forecasting service

A weather forecasting service

```bash
  cd forecast-app
  yarn start
```

I approached this solution with time in mind. I chose to set up the project with a template that has technologies that I am familiar with. With more time I would spend more time styling with the ShadCN components that I imported in the beginning. I would also modularize more of the code into components, but that happens more naturally as you code with more time.

# Regarding testing:

I did not have time to write tests, however I would do something like this:

## Unit testing:

Unit test the helper function `fetchGeoCoding`.
Create a mock fetch API and call the function with different inputs and check if it handles the responses and errors

## Component testing

Test the index page (app/page.tsx) with React Testing Library

### UI testing

Test if the elements are rendered when the component loads.

### Functionality testing

Test the input field, when you type, it should update the `myLocation` state and the link.
