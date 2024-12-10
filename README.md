# React Native Uninitialized State Variable

This repository demonstrates a common error in React Native applications: attempting to access a state variable before it's been initialized.  This often occurs with asynchronous operations like API calls.

## The Problem

The `bug.js` file shows how accessing `this.state.data` before the `fetch` call completes leads to a runtime error because `this.state.data` is `null`.

## The Solution

The `bugSolution.js` file presents two solutions:

1. **Conditional Rendering:** Only render the component's content after the data has been fetched.
2. **Optional Chaining:** Use the optional chaining operator (`?.`) to safely access properties of potentially null or undefined objects.

## How to Run

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `react-native run-android` or `react-native run-ios`.
