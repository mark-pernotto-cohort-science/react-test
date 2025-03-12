# React Refactor

This exercise is to evaluate your understanding of React and some other front end principles. 

Currently, this app has a button that can be clicked and that makes an API call to a public API endpoint that requires no authentication. Refactor this application to meet at least the requirements specified below. There is no one answer to this problem - it's just to evaluate how you view problems and your approach to resolving them. 

## Requirements

1. Make the API call once, at page load.
2. Display both the year and the population during that year from the above API call.
3. Remove the button.
4. Include some kind of page title explaining what the page does

## Stretch Goals

1. Sort the list by the largest population
2. Include a dropdown that would allow you to sort either by population or year and then make sure the data responds accordingly
3. Write a custom React hook that uses more than one React hook

## Things to Think About

- There's no use of React hooks in the App.js file. Do you see opportunities to utilize React hooks anywhere? Which ones? Why?
- There shouldn't be any reason to modify the API call, but you could play with it to see if you get different results.
- What if we had to make many lists to display like this? How would you go about specifying which parts of this application could be reusable?
- Styling, even if a little bit, is very important. Make sure to take this into consideration when designing how your output looks
- There is no wrong way to do this exercise! I'm happy to review it with anyone who would want to take a look at this
- Don't spend more than an hour or so on this - it's supposed to be fun
- If you're going to use git for version control - decide on what you are going to fix, make a branch, do your work and make a tiny commit. Many small commits can make it easier to read than one large commit that fixes everything.

## To Submit

Either:
- Fork this repo and send me a link to your fork/branch on Github
- Zip up this codebase in it's entirety and send it to: mark.pernotto@cohortscience.com


If you are unfamiliar with running a CRA, refer to the below. Please let me know if you have any questions.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
