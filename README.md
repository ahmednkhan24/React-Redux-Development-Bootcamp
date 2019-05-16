# React-Development-Bootcamp

Various projects I’ve done for the Udemy React with Redux Development Bootcamp I enrolled in.

[Link to course overview](https://www.udemy.com/react-redux/)

## How to deploy a React.js application to GitHub pages

1. Create GitHub repository on [GitHub](https://github.com/)
2. Initialize the React application, then change into that directory
    * `npx create-react-app <name of application>`
    * copy the contents of the React application into the new folder if already built
4. Initialize the repository for git and push
    * `git init`
    * `git add .`
    * `git commit -m "init commit"`
    * `git remote add origin https://github.com/<name of github repo>.git`
    * `git push -u origin master`
5. Install GitHub pages to the application via npm
    * `npm install --save gh-pages`
6. Go into the package.json file
7. Add a homepage property right after the private property
    * `* "homepage": "https://<GitHub username>.github.io/<repository name>",`
8. Add predeploy and deploy scripts to the script property right before the eject script
    * `"predeploy": "npm run build",`
    * `"deploy": "gh-pages -d build",`
9. Deploy the application
    * `npm run deploy`
10. push the code to the GitHub repository as necessary.
