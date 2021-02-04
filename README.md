# Mentorship Diary Application

Our project brief was to build an app that would enhance the School of Code mentoring experience and the solution that the team of 4 people I was working in, managed to come up with in less than a week was this tool that allows [School of Code](https://www.schoolofcode.co.uk/) bootcampers to track and document their mentor/mentee relantionship.This is basically an online diary of the [School of Code](https://www.schoolofcode.co.uk/) bootcamper mentorship journey.

The application consist of a **Home** page:

![mentorship-diary-home](https://user-images.githubusercontent.com/70764326/106596359-cad7eb00-654c-11eb-934f-35e732037fdf.png)

**Weekly Form** where mentee can go through a predefine set of questions together with their mentor.The questions are set with placeholder text to help guide the discussion. 

![mentorship-diary-weekly-form](https://user-images.githubusercontent.com/70764326/106596972-a9c3ca00-654d-11eb-91ce-7102d9c0c75f.png)

The data is unique to user and can be viewed on the **Achievement History** page by selecting the prefered week to review.

![mentorship-diary-achievement-history](https://user-images.githubusercontent.com/70764326/106597157-edb6cf00-654d-11eb-9ddc-61c80685a7ec.png)

We also added in a **Contact** page with School of Code contacts.

![mentorship-diary-contact](https://user-images.githubusercontent.com/70764326/106598206-5488b800-654f-11eb-8448-6a128e75d20d.png)

The **Authentication** was done using [Firebase](https://firebase.google.com/) .

![mentorship-diary-authentication](https://user-images.githubusercontent.com/70764326/106597795-d0cecb80-654e-11eb-9002-1daae449b413.png)


If you want to see the backend code of this application head to this [repository](https://github.com/vmilitaru/Mentorship-Diary-server).

## Live Project

Here is the [deployed version](https://mentorship-diary.netlify.app/).

## Stack

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Netlify](https://www.netlify.com/)

## Getting started

1. Clone the repo: `https://github.com/vmilitaru/Mentorship-Diary-client.git`

2. Download the required npm modules: `npm i`

## Configuring Firebase 


3. Create a project at the [Firebase console](https://console.firebase.google.com/).

4. Get your authentication credentials from the Firebase console under _Project settings > General> Your apps_ Add a new web app if you don't have one already. 

5. Go to **Build**, click on **Authentication** and in the **Sign-in method** tab enable **Email/Password** authentication method of the app.

### Set up environment variables

To connect the app with Firebase, you'll need to add the settings from your Firebase application as environment variables.

6. Copy the content of `.env.example` into a new file called `.env.local`.

7. Set the appropriate environment variables in the `.env.local` file at the root of this project:

  - `REACT_APP_FIREBASE_API_KEY`,  `REACT_APP_FIREBASE_AUTH_DOMAIN`, `REACT_APP_FIREBASE_PROJECT_ID`, `REACT_APP_FIREBASE_STORAGE_BUCKET`, `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`, `REACT_APP_FIREBASE_APP_ID` - Can be found in the Firebase console under _Your Project>Project settings > General> Your apps>Firebase SDK snippet_ choose _Config_ to get the configuration as JSON .

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Deploy on Netlify

You can deploy this app to the cloud with [Netlify](https://www.netlify.com/) ([Documentation](https://docs.netlify.com/site-deploys/create-deploys/)).

### Deploy Your Local Project 

To deploy your local project to Netlify, push it to GitHub/GitLab/Bitbucket.

  - If you haven't done this already go to [netlify](https://app.netlify.com/signup) and sign up for a free account. 

  - Once you are loged in to your account you will be redirected to your _Dashboard_.

  - Here you have the option to create a new site by clicking _New site from Git_ button.

  - The Git provider that we are going to use for now is GitHub so before selecting this option make sure you've pushed up the latest code that you want to deploy.

  - Select the GitHub account where your repository is and search the repo you want to connect with.

  - Click on the repository returned by search.

  - Choose the branch that you want to deploy.

  - Check that the build commmand matches the one from the package.json file of the project.

**Important**:  Before clicking the _Deploy site_ button we need to connect the app with our server and specify our **Environment Variables** in the deployed application. 

  - Go to _Show advanced_ option and click _New variable_ setting, here you will be able to insert all your **Environment Variables** from your `.env.local` file. 👉 [how to name your environment variables in a React App](https://create-react-app.dev/docs/adding-custom-environment-variables/)

  - Click the _Deploy site_ option.

  - If you go to the _Deploy_ tab and after click _Building_ you will be able to see the deployment progress and when the site goes live.

  - Once the site is live you can _Preview_ your deployed app, but probably by now  you've seen the error message from Firebase with _unauthorized domain_ or _domain not found_ and to fix this issue there is one more step to do.

  - Go to Firebase console and under _Your Project> Authentication> Sign-in-method> Authorised domains_  add the site domain from Netlify.



## Contributors ✨

<table>
  <tr>
    <td align="center"><a href="https://github.com/FreshtaEbrahim"><img src="https://avatars.githubusercontent.com/u/56118343?s=400&u=7db01c710b8ba0ea0f75efbea2f5113a396a839b&v=4" width="100px;" alt=""/><br /><sub><b>Freshta Ebrahim</b></sub></a><br /><a </td>
    <td align="center"><a href="https://github.com/vmilitaru"><img src="https://avatars0.githubusercontent.com/u/70764326?s=120&v=4" width="100px;" alt=""/><br /><sub><b>Valentina Militaru</b></sub></a><br /></td>
   <td align="center"><a href="https://github.com/cod3rcarl"><img src="https://avatars.githubusercontent.com/u/70280561?s=400&u=423202e286eba513af63e4225e44d6fea8b6475a&v=4" width="100px;" alt=""/><br /><sub><b>Carl McIntosh</b></sub></a><br /></td>
   <td align="center"><a href="https://github.com/Jonowens84"><img src="https://ca.slack-edge.com/T6L933W4X-U01A0GAG4LE-7362c19b41f6-512" width="100px;" alt=""/><br /><sub><b>Jon Owens</b></sub></a><br /></td>
  </tr>
</table>
